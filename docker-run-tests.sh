#!/bin/bash

set -e

docker-compose kill
docker-compose rm -f
docker-compose build

docker-compose up -d elasticsearch

docker-compose -p lineup run --rm web npm run test
docker-compose stop
