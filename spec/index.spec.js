'use strict';

var app = require ('../index.js');
var request = require('supertest').agent(app.listen());
var chai = require('chai');
var expect = chai.expect;

describe('GET /', function() {
  it('/index.html should respond with 200', function (done) {
    request.get('/index.html')
    .expect(200)
    .end(done);
  });

describe('Add players to the roster page', function(){
  it('can add 2 players to the page', function(){
    player.addPlayer
  });
});

});
