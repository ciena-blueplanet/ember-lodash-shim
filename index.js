'use strict'

module.exports = {
  name: 'lodash',
  included (parent) {
    this._super.included(parent)

    this.import({
      development: 'vendor/lodash/lodash.js',
      production: 'vendor/lodash/lodash.min.js'
    })
  }
}
