'use strict';

var express = require('express');
var path = require('path');
var hbx = require('express-handlebars');

var app = module.exports = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.engine('handlebars', hbx({defaultLayout: 'layout'}));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
  res.sendFile('layout.hbs', {root: __dirname + '/views'});
});

app.post('/roster', function(req, res){
  // var playerName  = req.body.playerName;
  // var position = req.body.position;
  // console.log('Player: ' + playerName + ' & position: ' + position);
  // res.redirect('http://localhost:3000/roster.html');
});

// app.get('/roster', function(req, res){
//   res.send(playerName, position)
// });

var port = process.env.PORT || 3000;

app.listen(port);
console.log('App running on: ' + port);
