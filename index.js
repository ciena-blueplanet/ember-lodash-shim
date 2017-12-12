/* eslint-env node */
'use strict'

module.exports = {
  name: 'lodash',
  included () {
    this._super.included.apply(this, arguments)

    this.import({
      development: 'vendor/lodash/lodash.js',
      production: 'vendor/lodash/lodash.min.js'
    })
  }
}
