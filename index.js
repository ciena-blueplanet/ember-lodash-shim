'use strict'

const Funnel = require('broccoli-funnel')
const mergeTrees = require('broccoli-merge-trees')
const path = require('path')
const replace = require('broccoli-replace')

module.exports = {
  name: 'lodash',

  treeForAddon (tree) {
    const lodashPath = path.dirname(require.resolve('lodash-es/lodash.js'))
    let lodashTree = this.treeGenerator(lodashPath)

    // Remove non-Javascript files such as LICENSE
    lodashTree = new Funnel(lodashTree, {
      include: [
        '**/*.js'
      ]
    })

    // Fix import paths to not include ".js" extension in name
    lodashTree = replace(lodashTree, {
      files: '**/*.js',
      patterns: [
        {
          match: /from '([^']+)\.js'/g,
          replacement: "from '$1'"
        }
      ]
    })

    if (!tree) {
      return this._super.treeForAddon.call(this, lodashTree)
    }

    const trees = mergeTrees([lodashTree, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
}
