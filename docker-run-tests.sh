#!/bin/bash

set -e

docker-compose kill
docker-compose rm -f
docker-compose build
docker-compose stop

docker-compose -p lineup run --rm --no-deps web npm run test
docker-compose stop
