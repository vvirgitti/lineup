'use strict';

const elasticClient = require('./elasticsearchConnection');

const indexName = "randomindex";

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

function indexExists() {
    return elasticClient.indices.exists({
        index: indexName
    });
}

function initMapping() {
    return elasticClient.indices.putMapping({
        index: indexName,
        type: "document",
        body: {
            properties: {
                title: { type: "string" },
                content: { type: "string" },
                suggest: {
                    type: "completion",
                    analyzer: "simple",
                    search_analyzer: "simple",
                    payloads: true
                }
            }
        }
    });
}

module.exports = {deleteIndex, initIndex, indexExists, initMapping};
