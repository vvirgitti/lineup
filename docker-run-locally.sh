docker-compose down
docker-compose up --build
docker-compose run wait
docker-compose run -p "3000:3000" web
docker-compose down
