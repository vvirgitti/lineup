'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


function createAndConfigureApp() {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.set('view engine', 'html');
  app.engine('html', require('ejs').renderFile);
  app.use(express.static(path.resolve(__dirname + '/../views')));
  app.use('/js', express.static(path.resolve(__dirname + '/../js')));

  app.get('/', function(req, res){
    res.sendFile('index.html', {root: __dirname + '/views'});
  });

  app.post('/roster', function(req, res){
    const playerName  = req.body.playerName;
    const position = req.body.position;
    const rating = req.body.rating;
    console.log('Player: ' + playerName + ' & position: ' + position + ' & rating ' + rating);
    res.redirect('http://localhost:3000/roster.html');
  });

  app.get('/roster', function(req, res){
    res.send(playerName, position, rating)
  });

  return {app, startApp};

  function startApp() {
    return new Promise((fulfill, reject) => {
      try {
        const port = process.env.PORT || 3000;

        const server = app.listen(port, () => {
          console.log(`Started on port ${server.address().port}`);
          return fulfill();
        });
        server.once('error', err => {
          return reject(err);
        });
      }
      catch (err) {
        reject(err);
      }
    });
  }

  function stopApp() {
  }
}

module.exports = createAndConfigureApp;
