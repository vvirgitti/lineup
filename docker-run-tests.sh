set -e

docker-compose down
docker-compose build
docker-compose up -d elasticsearch
docker-compose run wait
docker-compose run --rm web npm run test
docker-compose down
