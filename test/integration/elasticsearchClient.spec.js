'use strict';

const sinon = require('sinon');
const expect = require('chai').expect;

const elasticsearchClient = require('./../../server/elasticsearchClient');

describe.only('Elasticsearch client', () => {

  const elasticClient = new elasticsearch.Client({
    host: config.get('elasticsearch.baseurl'),
    log: 'trace'
  });

    it('can create an index', () => {
      expect(elasticsearchClient.initIndex)
    });

});
