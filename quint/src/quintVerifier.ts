/* ----------------------------------------------------------------------------------
 * Copyright (c) Informal Systems 2023. All rights reserved.
 * Licensed under the Apache 2.0.
 * See License.txt in the project root for license information.
 * --------------------------------------------------------------------------------- */

/**
 * Interface to Apalache's model checking functionality
 *
 * This functionality is exposed thru the Apalache server.
 *
 * @author Shon Feder
 *
 * @module
 */

import { Either, left, right } from '@sweet-monads/either'
import { ErrorMessage } from './parsing/quintParserFrontend'
import { spawnSync } from 'child_process'
import path from 'path'
import fs from 'fs'
import os from 'os'
import * as grpc from '@grpc/grpc-js'
import * as proto from '@grpc/proto-loader'
import { setTimeout } from 'timers/promises'
import { promisify } from 'util'
import { ItfTrace } from './itf'

const APALACHE_SERVER_URI = 'localhost:8822'
// These will be addressed as we work out the packaging for apalche
// See https://github.com/informalsystems/quint/issues/701
// TODO const APALACHE_VERSION = "0.30.8"
// TODO const DEFAULT_HOME = path.join(__dirname, 'apalache')

// The structure used to report errors
type VerifyError = {
  explanation: string
  errors: ErrorMessage[]
  traces?: ItfTrace[]
}

export type VerifyResult<T> = Either<VerifyError, T>

// Paths to the apalache distribution
type ApalacheDist = { jar: string; exe: string }

// An object representing the Apalache configuration
// See https://github.com/informalsystems/apalache/blob/main/mod-infra/src/main/scala/at/forsyte/apalache/infra/passes/options.scala#L255
type ApalacheConfig = any

// Interface to the apalache server
// This is likely to be expanded in the future
type Apalache = {
  // Run the check command with the given configuration
  check: (c: ApalacheConfig) => Promise<VerifyResult<void>>
}

function handleVerificationFailure(failure: { pass_name: string; error_data: any }): VerifyError {
  switch (failure.pass_name) {
    case 'BoundedChecker':
      switch (failure.error_data.checking_result) {
        case 'Error':
          return { explanation: 'found a counterexample', traces: failure.error_data.counterexamples, errors: [] }
        case 'Deadlock':
          return { explanation: 'reached a deadlock', traces: failure.error_data.counterexamples, errors: [] }
        default:
          throw new Error(`internal error: unhandled verification error ${failure.error_data.checking_result}`)
      }
    default:
      throw new Error(`internal error: unhandled verification error at pass ${failure.pass_name}`)
  }
}

// Construct the Apalache interface around the cmdExecutor
function apalache(cmdExecutor: AsyncCmdExecutor): Apalache {
  const check = async (c: ApalacheConfig): Promise<VerifyResult<void>> => {
    const response = await cmdExecutor.run({ cmd: 'CHECK', config: JSON.stringify(c) })
    if (response.result == 'success') {
      return right(void 0)
    } else {
      switch (response.failure.errorType) {
        case 'UNEXPECTED': {
          const errData = JSON.parse(response.failure.data)
          return err(errData.msg)
        }
        case 'PASS_FAILURE':
          return left(handleVerificationFailure(JSON.parse(response.failure.data)))
        default:
          // TODO handle other error cases
          return err(`${response.failure.errorType}: ${response.failure.data}`)
      }
    }
  }

  return { check }
}

// Alias for an async callback for values of type T used to annotate
// callback-based methods so we can convert them into promise-based methods via
// promiseify.
type AsyncCallBack<T> = (err: any, result: T) => void

// The core grpc tooling doesn't support generation of typing info,
// we therefore record the structer we require from the grpc generation
// in the 6 following types.
//
// The types reflect https://github.com/informalsystems/apalache/blob/main/shai/src/main/protobuf/cmdExecutor.proto

type RunRequest = { cmd: string; config: string }

type RunResponse =
  | { result: 'failure'; failure: { errorType: string; data: string } }
  // The success data also includes the parsed module, but we don't need it
  | { result: 'success' }

// The interface for the CmdExecutor service generated by the gRPC library
type CmdExecutor = {
  // Constructs a new client service
  new (url: string, creds: any): CmdExecutor
  run: (req: RunRequest, cb: AsyncCallBack<any>) => void
  ping: (o: {}, cb: AsyncCallBack<void>) => void
}

// The refined interface to the CmdExecutor we produce from the generated interface
type AsyncCmdExecutor = {
  // Reference to the distribution lets us start the server if needed
  dist: ApalacheDist
  run: (req: RunRequest) => Promise<RunResponse>
  ping: () => Promise<void>
}

// The interface for the Shai package
type ShaiPkg = {
  cmdExecutor: {
    CmdExecutor: CmdExecutor
  }
}

// Helper to construct errors results
function err<A>(explanation: string, errors: ErrorMessage[] = [], traces?: ItfTrace[]): VerifyResult<A> {
  return left({ explanation, errors, traces })
}

function findApalacheDistribution(): VerifyResult<ApalacheDist> {
  const configuredDist =
    process.env.APALACHE_DIST && path.isAbsolute(process.env.APALACHE_DIST)
      ? process.env.APALACHE_DIST
      : path.join(process.cwd(), process.env.APALACHE_DIST!)

  // TODO: fetch release if APALACHE_DIST is not configured
  // See https://github.com/informalsystems/quint/issues/701
  let distResult: VerifyResult<string> = err(
    'Unable to find the apalache distribution. Ensure the APALACHE_DIST enviroment variable is set.'
  )

  if (configuredDist && !fs.existsSync(configuredDist)) {
    distResult = err(`Specified APALACHE_DIST ${configuredDist} does not exist`)
  } else if (configuredDist) {
    distResult = right(configuredDist)
  }

  return distResult.chain(dist => {
    const jar = path.join(dist, 'lib', 'apalache.jar')
    const exe = path.join(dist, 'bin', 'apalache-mc')
    return fs.existsSync(jar) && fs.existsSync(exe)
      ? right({ jar, exe })
      : err(`Apalache distribution is corrupted. Cannot find ${jar} or ${exe}.`)
  })
}

// See https://grpc.io/docs/languages/node/basics/#example-code-and-setup
const grpcStubOptions = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
}

function loadGrpcClient(dist: ApalacheDist): VerifyResult<AsyncCmdExecutor> {
  const jarUtilitiyIsInstalled = spawnSync('jar', ['--version']).status === 0
  if (!jarUtilitiyIsInstalled) {
    return err('The `jar` utility must be installed')
  }

  // The proto file we extract from the apalache jar
  const protoFileName = 'cmdExecutor.proto'
  // Used as the target for the extracted proto file
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'apalache-proto-'))
  const protoFile = path.join(tmpDir, protoFileName)

  const protoIsFileExtracted = spawnSync('jar', ['xf', dist.jar, protoFileName], { cwd: tmpDir }).status === 0
  if (!protoIsFileExtracted) {
    return err(`Apalache distribution is corrupted. Could not extract proto file from apalache.jar.`)
  }

  const protoDef = proto.loadSync(protoFile, grpcStubOptions)
  // We have the proto file loaded, so we can delete the tmp dir
  fs.rmSync(tmpDir, { recursive: true, force: true })

  const protoDescriptor = grpc.loadPackageDefinition(protoDef)
  // The cast thru `unkown` lets us convince the type system of anything
  // See https://basarat.gitbook.io/typescript/type-system/type-assertion#double-assertion
  const pkg = protoDescriptor.shai as unknown as ShaiPkg
  const stub = new pkg.cmdExecutor.CmdExecutor(APALACHE_SERVER_URI, grpc.credentials.createInsecure())
  const impl: AsyncCmdExecutor = {
    dist,
    run: promisify((data: RunRequest, cb: AsyncCallBack<any>) => stub.run(data, cb)),
    ping: promisify((cb: AsyncCallBack<void>) => stub.ping({}, cb)),
  }
  return right(impl)
}

// Try to connect to the server repeatedly, in .5 second intervals
async function tryToConnect(grpcApi: AsyncCmdExecutor): Promise<VerifyResult<void>> {
  try {
    return await grpcApi.ping().then(right)
  } catch {
    // Wait .5 secs before retry
    await setTimeout(500)
    return tryToConnect(grpcApi)
  }
}

// Try to establish a connection to the Apalache server
//
// A successful connection procudes an `Apalache` object.
async function connect(cmdExecutor: AsyncCmdExecutor): Promise<VerifyResult<Apalache>> {
  // TODO Start server of it's not already running
  // See https://github.com/informalsystems/quint/issues/823
  const delayMS = 5000
  const response = await Promise.race([
    tryToConnect(cmdExecutor),
    setTimeout(delayMS, err(`Failed to obtain a connection to Apalache after ${delayMS / 1000} seconds.`)),
  ])
  // We received a response in time, so we have a valid connection to the server
  return response.map(_pong => {
    return apalache(cmdExecutor)
  })
}

/**
 * Verifies the configuration `config` by model checking it with the Apalache server
 *
 * @param config
 *   an apalache configuration. See https://github.com/informalsystems/apalache/blob/main/mod-infra/src/main/scala/at/forsyte/apalache/infra/passes/options.scala#L255
 *
 * @returns right(void) if verification succeeds, or left(err) explaining the failure
 */
export async function verify(config: any): Promise<VerifyResult<void>> {
  const connectionResult = await findApalacheDistribution().chain(loadGrpcClient).asyncChain(connect)
  return connectionResult.asyncChain(conn => conn.check(config))
}
