'use strict';
require('babel-register');

const app = require ('../index.js');
const request = require('supertest').agent(app.listen());
const chai = require('chai');
const expect = chai.expect;

describe('GET /', () => {
  it('/index.html should respond with 200', (done) => {
    request.get('/index.html')
    .expect(200)
    .end(done);
  });

});
