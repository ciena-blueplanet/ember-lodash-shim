'use strict'

module.exports = {
  name: 'lodash',
  
  /**
   * Workaround needed for 2.12+
   * see: https://github.com/ember-redux/ember-redux/issues/105#issuecomment-288001558
   * @returns {boolean} Set to true to force JS compile
   * @private
   */
  _shouldCompileJS: function () {
    return true
  },

  included (parent) {
    this._super.included(parent)

    this.import({
      development: 'vendor/lodash/lodash.js',
      production: 'vendor/lodash/lodash.min.js'
    })
  }
}
