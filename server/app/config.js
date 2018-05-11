const convict = require('convict');

const config = getConfig();
config.validate({strict: true});

module.exports = config;
module.exports.logCurrentConfig = logCurrentConfig;

function getConfig() {
  return convict({
    port: {
      doc: 'Port for starting the app on.',
      format: 'port',
      env: 'PORT',
      default: 3000
    },
    elasticsearch: {
      baseurl: {
        doc: 'ElasticSearch base url',
        format: String,
        env: 'ELASTICSEARCH_BASEURL',
        default: 'http://elastic:changeme@localhost:9200'
      },
      index: {
        doc: 'ElasticSearch index',
        format: String,
        env: 'ELASTICSEARCH_INTELLIGENCE_INDEX',
        default: 'lineup'
      },
      type: {
        doc: 'ElasticSearch type',
        format: String,
        env: 'ELASTICSEARCH_TYPE',
        default: 'roster'
      },
      refreshInterval: {
        doc: 'Elastich search refresh Interval',
        format: String,
        env: 'ELASTICSEARCH_REFRESH_INTERVAL',
        default: '10'
      }
    }
  });
}

function logCurrentConfig(log = console) {
  const configToLog = JSON.parse(config.toString());

  configToLog.elasticsearch.baseurl = sanitizeUrl(configToLog.elasticsearch.baseurl);
  configToLog.rabbitmq.uri = sanitizeUrl(configToLog.rabbitmq.uri);

  log.info('Current config: %s', JSON.stringify(configToLog));
}
