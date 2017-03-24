#!/bin/bash

set -e

function waitForContainerToStart() {

  container=${1}
  port=${2}

  attempts=0
  connected="false"
  while [ "$attempts" -lt 10 ] && [ "$connected" == "false" ]; do
    set +e
    result=`docker-compose run --rm web nc -zv $container $port`
    exitStatus="$?"
    set -e
    if [ "$exitStatus" == "0" ]; then
      connected="true"
      echo "Connected to $container!"
    else
      if [ "$attempts" -lt 10 ]; then
        echo "Can't connect to $container yet. Will try again..."
        sleep 1
      else
        echo "Can't connect to $container. Giving up."
        exit 1
      fi
    fi
  done
}

docker-compose kill
docker-compose rm -f
docker-compose build

docker-compose up -d elasticsearch
waitForContainerToStart "elasticsearch" "9300"

docker-compose -p lineup run --rm web npm run test
docker-compose stop
