var app = require('../server/index.js');
var should = require('should');
var request = require('supertest');

describe('GET /', function(){
  it('/ should respond with 200 and "Lineup"', function(done){
    request(app)
    .get('/')
    .expect(200, done);
  });
});
