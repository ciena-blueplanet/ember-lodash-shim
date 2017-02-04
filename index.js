'use strict'

const Funnel = require('broccoli-funnel')
const mergeTrees = require('broccoli-merge-trees')
const path = require('path')
const replace = require('broccoli-replace')

function getOptimizedInclude () {
  const addons = this.project.addonPackages
  const config = Object.keys(addons).reduce(
    (mergedConfig, key) => {
      const addonConfig = addons[key].pkg['ember-lodash-shim']

      if (
        typeof addonConfig !== 'object' ||
        !Array.isArray(addonConfig.includes)
      ) {
        return mergedConfig
      }

      mergedConfig.includes = mergedConfig.includes.concat(addonConfig.includes)

      return mergedConfig
    },
    {
      includes: []
    }
  )

  return config.includes
    .map((include) => `${include}.js`)
    .concat([
      '_*.js',
      'lodash.js'
    ])
}

module.exports = {
  name: 'lodash',

  treeForAddon (tree) {
    const endConsumerConfig = this.project.pkg['ember-lodash-shim'] || {}
    const include = endConsumerConfig.whitelist ? getOptimizedInclude.call(this) : ['**/*.js']

    const lodashPath = path.dirname(require.resolve('lodash-es/lodash.js'))
    let lodashTree = this.treeGenerator(lodashPath)

    // Remove non-Javascript files such as LICENSE
    lodashTree = new Funnel(lodashTree, {
      include: include
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
