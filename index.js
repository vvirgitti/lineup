'use strict';

require('babel-register');

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = module.exports = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/views'));
app.use('/lineup/src', express.static(__dirname + '/src'));

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
