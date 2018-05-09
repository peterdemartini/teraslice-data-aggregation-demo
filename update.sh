#!/bin/bash

set -e

main() {
  tjm stop counter-job.json
  tjm stop data-generator-job.json
  tjm asset update
  tjm start counter-job.json
  tjm start data-generator-jon.json
}

main "$@"
