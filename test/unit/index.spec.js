'use strict';

const app = require ('./../../app.js');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('GET /', function() {
  it('/index.html should respond with 200', function (done) {
    request(app)
    .get('/index.html')
    .expect(200)
    .end(done);
  });

});
