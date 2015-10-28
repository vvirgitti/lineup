'use strict';

var express = require('express');
var path = require('path');
var hbx = require('express-handlebars');

var app = module.exports = express();

var hbs = hbx.create({
  defaultLayout: 'layout',
  extname: '.hbs',
  layoutsDir: __dirname + '/views'
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');

app.use('/layout/src', express.static([__dirname, '/src'].join('')));
app.use(express.static(__dirname + '/views'));

app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.render('layout.hbs', {root: __dirname + '/views'});
});

// app.post('/roster', function(req, res){
  // var playerName  = req.body.playerName;
  // var position = req.body.position;
  // console.log('Player: ' + playerName + ' & position: ' + position);
  // res.redirect('http://localhost:3000/roster.html');
// });

// app.get('/roster', function(req, res){
//   res.send(playerName, position)
// });

var port = process.env.PORT || 3000;

app.listen(port);
console.log('App running on: ' + port);
