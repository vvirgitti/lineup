'use strict';

const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: 'localhost:9300',
  log: 'trace'
});

client.ping({
  requestTimeout: 1000
}), function (err) {
  if (err) {
    console.trace('Elasticsearch cluster is down!');
  } else {
    console.log('Elasticsearch is healthy')
  }
});
