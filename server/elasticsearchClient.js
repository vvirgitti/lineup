'use strict';

const elasticsearch = require('elasticsearch');
const indexName = 'lineup';

const elasticClient = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'info'
});

function deleteIndex() {
    return elasticClient.indices.delete({
        index: indexName
    });
}

     function initIndex() {
        return elasticClient.indices.create({
        index: indexName
    });
}

    function indexExists () {
        return elasticClient.indices.exists({
        index: indexName
    })
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

module.exports = {indexExists};
