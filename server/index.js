'use strict';

const createAndConfigureApp = require('./app/index.js');

const {app, startApp} = createAndConfigureApp({});

startApp().then(() => {
  console.log('App is up')
})
.catch(err => {
  console.log('Error while starting the app', err);
  exitProcessWithError('Error while starting the app')
})

setupProcessHooks();

function setupProcessHooks() {
  process.on('uncaughtException', (err) => {
    console.log('Uncaught exception', err);
    exitProcessWithError('Uncaught exception');
  });

  process.on('SIGINT', () => {
    exitProcessWithError('SIGINT received, shutting down app');
  });
}

function exitProcessWithError(errorMsg) {
  console.log('Shutting down app: ', errorMsg);
  process.exit(1);
}
