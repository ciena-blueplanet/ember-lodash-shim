'use strict'

const writeFile = require('broccoli-file-creator')
const Funnel = require('broccoli-funnel')
const mergeTrees = require('broccoli-merge-trees')
const replace = require('broccoli-replace')
const fs = require('fs')
const path = require('path')

const methods = require('./methods')

const fromMapping = {
  toString: 'toString',
  valueOf: 'valueOf',
  wrapperCommit: 'commit',
  wrapperNext: 'next',
  wrapperPlant: 'plant',
  wrapperToIterator: 'toIterator'
}

const importRegex = /(import|export)\s+.*\s+from\s+('|")([^'"]+)('|")/g

function addDependencies (fileName, processed) {
  if (processed.indexOf(fileName) !== -1) {
    return
  }

  processed.push(fileName)

  const contents = fs.readFileSync(`node_modules/lodash-es/${fileName}.js`)
  const matches = contents.toString().match(importRegex)

  if (!matches) {
    return
  }

  matches
    .map((match) => match.replace(/^.*('|").\/(.*)\.js('|")$/, '$2'))
    .forEach((dependencyFileName) => {
      addDependencies(dependencyFileName, processed)
    })
}

function getIndexContents (include) {
  return include
    .map((method) => {
      const importFrom = fromMapping[method] || method
      return `export {default as ${method}} from './${importFrom}'\n`
    })
    .join('') + "export {default} from './lodash.default'\n"
}

function getLodash3Tree () {
  const lodashPath = path.dirname(require.resolve('./lodash-3-exports/index.js'))
  return this.treeGenerator(lodashPath)
}

function getLodash4Tree (config) {
  const include = config.whitelist ? getOptimizedLodash4Include.call(this, config) : ['**/*.js']
  const lodashPath = path.dirname(require.resolve('lodash-es/lodash.js'))
  let lodashTree = this.treeGenerator(lodashPath)

  // Remove non-Javascript files such as LICENSE
  lodashTree = new Funnel(lodashTree, {
    include: include
  })

  // Fix import paths to not include ".js" extension in name
  return replace(lodashTree, {
    files: '**/*.js',
    patterns: [
      {
        match: /from '([^']+)\.js'/g,
        replacement: "from '$1'"
      }
    ]
  })
}

function getMergedConfig () {
  const addons = this.project.addonPackages
  const consumerConfig = this.project.pkg['ember-lodash-shim'] || {}

  return Object.keys(addons).reduce(
    (mergedConfig, key) => {
      const addonConfig = addons[key].pkg['ember-lodash-shim'] || {}

      if (addonConfig.includeLodash3Exports) {
        mergedConfig.includeLodash3Exports = true
      }

      if (Array.isArray(addonConfig.includes)) {
        mergedConfig.includes = mergedConfig.includes.concat(addonConfig.includes)
      }

      return mergedConfig
    },
    {
      includes: [],
      includeLodash3Exports: !(consumerConfig.includeLodash3Exports === false),
      whitelist: Boolean(consumerConfig.whitelist)
    }
  )
}

function getOptimizedLodash4Include (config) {
  const processed = []

  config.includes
    .filter((include, index, includes) => includes.indexOf(include) === index)
    .concat('lodash.default')
    .map((fileName) => {
      addDependencies(fileName, processed)
    })

  return processed
    .map((include) => `${include}.js`)
}

module.exports = {
  name: 'lodash',

  treeForAddon (tree) {
    const config = getMergedConfig.call(this)
    const includes = config.whitelist ? config.includes : methods
    const indexContents = getIndexContents(includes)

    let lodashTree = mergeTrees(
      [
        getLodash4Tree.call(this, config),
        writeFile('index.js', indexContents),
        writeFile('lodash.js', indexContents)
      ],
      {
        overwrite: true
      }
    )

    if (config.includeLodash3Exports) {
      lodashTree = mergeTrees(
        [
          getLodash3Tree.call(this),
          lodashTree
        ],
        {
          overwrite: true
        }
      )
    }

    if (tree) {
      lodashTree = mergeTrees([lodashTree, tree], {
        overwrite: true
      })
    }

    return this._super.treeForAddon.call(this, lodashTree)
  }
}
