'use strict';

var express = require('express');
var path = require('path');

var app = module.exports = express();

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/views'});
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log("App running on: " + port);
