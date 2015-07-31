'use strict';

var express = require('express');
var path = require('path');

var app = module.exports = express();

var bodyParser = require('body-parser');
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
  var playerName  = req.body.playerName;
  console.log('Player: ' + playerName);
  res.redirect('http://localhost:3000/roster.html');
});

app.get('/roster', function(req, res){
  res.send(playerName)
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log("App running on: " + port);
