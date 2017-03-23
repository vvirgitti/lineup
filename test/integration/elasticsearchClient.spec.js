'use strict';

const sinon = require('sinon');
const expect = require('chai').expect;

const elasticsearchClient = require('./../../server/elasticsearchClient')

describe.only('Elasticsearch client', () => {

    it('can create check if an index exists', () => {
        return elasticsearchClient.indexExists().then((res) => {
            console.log('the res is ', res);
            expect(res).to.be.false;
        })
    });

});
