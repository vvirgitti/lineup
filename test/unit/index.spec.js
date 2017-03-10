'use strict';

const request = require('supertest');

function configureAppWithFakes(){
  const createAndConfigureApp = require ('./../../server/app/index');
  return createAndConfigureApp({}).app;
}

let app;
app = configureAppWithFakes();

describe('GET /', function() {
  it('should respond with 200', function () {
    return request(app)
    .get('/index.html')
    .expect(200)
  });

});
