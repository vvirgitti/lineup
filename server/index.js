var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
  res.sendFile('index');
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log("App running on: " + port);
