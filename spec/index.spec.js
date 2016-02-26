'use strict';

require('babel-register');

var app = require ('../app.js');
var request = require('supertest');
var chai = require('chai');
var expect = chai.expect;

describe('GET /', function() {
  it('/index.html should respond with 200', function (done) {
    request(app)
    .get('/index.html')
    .expect(200)
    .end(done);
  });

});
