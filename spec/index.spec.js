var app = require('../server/index.js');
var request = require('supertest');

describe('GET /', function(){
  it('/ should respond with 200 and "Lineup"', function(done){
    request.get('/')
    .expect(200)
    .expect("Lineup")
    .end(done);
  });
});
