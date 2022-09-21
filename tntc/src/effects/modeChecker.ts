import { Either, left, right } from '@sweet-monads/either'
import { ErrorTree } from '../errorTree'
import { definitionToString } from '../IRprinting'
import { IRVisitor, walkModule } from '../IRVisitor'
import { OpQualifier, TntModule, TntOpDef } from '../tntIr'
import { ArrowEffect, ConcreteEffect, Effect, isAction, isState, isTemporal, Variables } from './base'
import { EffectVisitor, walkEffect } from './effectVisitor'

export function checkModes (tntModule: TntModule, effects: Map<BigInt, Effect>): Either<Map<BigInt, ErrorTree>, Map<BigInt, OpQualifier>> {
  const visitor = new ModeCheckerVisitor(effects)
  walkModule(visitor, tntModule)
  if (visitor.errors.size > 0) {
    return left(visitor.errors)
  } else {
    return right(visitor.suggestions)
  }
}

class ModeCheckerVisitor implements IRVisitor {
  public errors: Map<BigInt, ErrorTree> = new Map<BigInt, ErrorTree>()
  public suggestions: Map<BigInt, OpQualifier> = new Map<BigInt, OpQualifier>()
  effects: Map<BigInt, Effect>
  modeFinderVisitor: ModeFinderVisitor = new ModeFinderVisitor()

  constructor (effects: Map<BigInt, Effect>) {
    this.effects = effects
  }

  exitOpDef (def: TntOpDef) {
    const effect = this.effects.get(def.id)
    if (!effect) {
      throw new Error(`effect not found for definition ${def.name}`)
    }

    walkEffect(this.modeFinderVisitor, effect)
    const mode = this.modeFinderVisitor.currentMode
    this.modeFinderVisitor.currentMode = 'staticval'

    if (mode === def.qualifier) {
      return
    }

    const generalMode = moreGeneralMode(mode, def.qualifier)

    if (generalMode === mode) {
      this.errors.set(def.id, {
        location: `Checking modes for ${definitionToString(def)}`,
        message: `Expected ${mode} mode, found: ${def.qualifier}`,
        children: [],
      })
    } else if (generalMode === def.qualifier) {
      this.suggestions.set(def.id, mode)
    }
  }
}

class ModeFinderVisitor implements EffectVisitor {
  public currentMode: OpQualifier = 'staticval'

  exitConcrete (effect: ConcreteEffect) {
    let mode: OpQualifier
    if (isAction(effect)) {
      mode = 'action'
    } else if (isTemporal(effect)) {
      mode = 'temporal'
    } else if (isState(effect)) {
      mode = 'val'
    } else {
      mode = 'staticval'
    }

    this.currentMode = moreGeneralMode(this.currentMode, mode)
  }

  exitArrow (effect: ArrowEffect) {
    if (this.currentMode !== 'staticdef' && this.currentMode !== 'def') {
      return
    }

    const paramReads: Set<Variables> = new Set<Variables>()
    effect.params.forEach(p => {
      if (p.kind === 'concrete') {
        if (p.read.kind === 'union') {
          p.read.variables.forEach(paramReads.add)
        } else {
          paramReads.add(p.read)
        }
      }
    })

    this.currentMode = 'staticdef'
    // TODO: refactor nested conditions
    if (effect.result.kind === 'concrete') {
      if (effect.result.read.kind === 'union' && !effect.result.read.variables.every(v => paramReads.has(v))) {
        this.currentMode = 'def'
      } else if (!paramReads.has(effect.result.read)) {
        this.currentMode = 'def'
      }
    }
  }
}

const modeOrder = ['staticval', 'staticdef', 'val', 'def', 'action', 'temporal']

function moreGeneralMode (m1: OpQualifier, m2: OpQualifier): OpQualifier {
  const p1 = modeOrder.findIndex(elem => elem === m1)
  const p2 = modeOrder.findIndex(elem => elem === m2)

  return p1 > p2 ? m1 : m2
}
