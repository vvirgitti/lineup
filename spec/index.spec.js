'use strict';

var app = require ('../index.js');
var request = require('supertest').agent(app.listen());

describe('GET /', function() {
  it('/index.html should respond with 200', function (done) {
    request.get('/index.html')
    .expect(200)
    .end(done);
  });

});
