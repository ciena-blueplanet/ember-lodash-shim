/*
  The localPrefix listed below with "lodash" is in place because this module is exported with a
  different name than the addon and our default rule would add the addon name which we do not want in this case.
 */
module.exports = {
  extends: 'frost-standard',
  rules: {
    'ocd/sort-import-declarations': [
      2,
      {
        'localPrefixes': [
          '../',
          './',
          'dummy/',
          'lodash'
        ]
      }
    ]
  }
}
