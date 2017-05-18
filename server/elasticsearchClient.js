'use strict';

const elasticsearch = require('elasticsearch');

const config = require('./app/config')

const indexName = config.get('elasticsearch.index');

const elasticClient = new elasticsearch.Client({
  host: config.get('elasticsearch.baseurl'),
  log: 'trace'
});

function initIndex(indexName) {
  return elasticClient.indices.create({
    index: indexName
  });
}

function indexExists () {
  elasticClient.indices.exists({
    index: indexName
  });
}

function initMapping() {
  return elasticClient.indices.putMapping({
    index: indexName,
    type: "document",
    body: {
      "mappings": {
        "roster": {
          "properties": {
            "name": {
              "type": "nested"

            },
            "positions": {
              "type": "nested"
            }
          }
        }
      }
    }
  });
}

function initializeElasticsearch(){
   if(!indexExists()) {
    return initIndex().then(initMapping())
    .catch(err => {
      console.log('Unable to initialize Elasticsearch ', err);
    })
  }
}

function deleteIndex() {
  return elasticClient.indices.delete({
    index: indexName
  });
}


module.exports = {initializeElasticsearch, initIndex};
