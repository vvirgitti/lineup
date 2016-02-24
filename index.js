'use strict';

const express = require('express');
const path = require('path');

const app = module.exports = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/views'});
});

app.post('/roster', function(req, res){
  const playerName  = req.body.playerName;
  const position = req.body.position;
  console.log('Player: ' + playerName + ' & position: ' + position);
  res.redirect('http://localhost:3000/roster.html');
});

app.get('/roster', function(req, res){
  res.send(playerName, position)
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log('App running on: ' + port);
