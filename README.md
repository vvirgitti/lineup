## Lineup app
Apps that will create softball lineups automatically!
Add your players and the app will sort out the perfect lineup for you!

### How to run the app
Start the app ```npm start```

Start the test ```npm test```


### Road map
#### MVP (skateboard):
- Fully working backend where a team can be created (and players added) and it creates a lineup

#### MVP 2 (scooter):
- Add a database (Mongo, Redis?) or a search system like Elasticsearch => will allow storing the players and getting them back based on criteria (i.e best player for a position)
- Make it a CRUD system (i.e creating new player, editing the info for each player, deleting a player)
- Handle errors

#### MVP 3 (bike):
- Add responsive UI
- Deploy to Heroku

#### MVP 4 (car):
- Allow different types of softball (by default it's slowpitch but should allow fastpitch)
- Add stats from the season and update the ratings

#### Technologies used:
- Javascript ES6
- NodeJS
- Express
- Grunt

#### Testing:
- Mocha and Chai
- Supertest
