module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'lodash-es', target: '4.17.4'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
