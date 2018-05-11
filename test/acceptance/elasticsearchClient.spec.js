'use strict';

const expect = require('chai').expect;
const elasticsearch = require('elasticsearch');
const config = require('./../../server/app/config')

const elasticsearchClient = new elasticsearch.Client({host: config.get('elasticsearch.baseurl')});

describe.only('Elasticsearch client', () => {

    it('can return data', () => {
      const player = {
        'name': 'Sue',
        'positions': [{
          position: 'Pitch',
          rating: 4
        }]
      };

      return elasticsearchClient.create({
        index: config.get('elasticsearch.index'),
        type: config.get('elasticsearch.type'),
        id: 1,
        body: JSON.stringify(player)
      });

    });
});
