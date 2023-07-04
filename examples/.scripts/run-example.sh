#!/usr/bin/env bash
# shellcheck disable=SC3043,SC3020

# Run a single example spec thru parsing, typechecking, tests, and verification
# and print a single markdown table row reporting the results.
#
# Usage:
#
#    ./run-example path/to/my/spec.qnt

result () {
    local cmd="$1"
    if ($cmd &> /dev/null)
    then
        printf ":white_check_mark:"
    else
        printf ":x:"
    fi
}

get_main () {
  local file="$1"
  local main=""
  if [[ "$file" == "classic/distributed/LamportMutex/LamportMutex.qnt" ]] ; then
    main="--main=LamportMutex_3_10"
  fi
  echo "${main}"
}

file="$1"
syntax="$(result "quint parse ${file}")"
types="$(result "quint typecheck ${file}")"
main="$(get_main "${file}")"
tests="$(result "quint test ${main} ${file}")"
verify="$(result "quint verify --max-steps=5 ${main} ${file}")"

echo "| [${file}](./${file}) | ${syntax} | ${types} | ${tests} | ${verify} |"
