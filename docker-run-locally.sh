docker-compose down
docker-compose up --build -d elasticsearch
docker-compose run wait
docker-compose run -p "3000:3000" web npm run start
docker-compose down
