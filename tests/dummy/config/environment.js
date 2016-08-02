module.exports = function (environment) {
  var ENV = {
    APP: {},
    baseURL: '/',
    EmberENV: {
      FEATURES: {}
    },
    environment: environment,
    locationType: 'hash',
    modulePrefix: 'dummy'
  }

  switch (environment) {
    case 'test':
      // Testem prefers this...
      ENV.baseURL = '/'
      ENV.locationType = 'none'

      // keep test console output quieter
      ENV.APP.LOG_ACTIVE_GENERATION = false
      ENV.APP.LOG_VIEW_LOOKUPS = false

      ENV.APP.rootElement = '#ember-testing'
      break
  }

  return ENV
}
