docker-compose rm -f
docker-compose stop
docker-compose build
docker-compose run --rm --service-ports web
