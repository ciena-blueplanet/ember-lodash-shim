# ember-lodash-shim

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url] ![Ember][ember-img]

## Installation

```bash
ember install ember-lodash-shim
```

## Configuration

Out-of-box *ember-lodash-shim* will include the entire *lodash* 4 library which includes imports of methods from the root *lodash* directory. Previously in *lodash* 3 imports were in categorized directories such as `lodash/string/capitalize` and this shim does it's best to continue supporting those directories to make upgrading from *lodash* 3 to 4 easier. However including the entire *lodash* codebase including these *lodash* import paths comes at a cost, roughly 300 KB added to a production Ember build. In order to provide you the greatness of *lodash* without being a lead brick you can have your addons/apps specify which *lodash* methods they need via a configuration in their `package.json`. The consuming app in the end can then set a `whitelist` configuration option to tell the shim to only include methods addons and the consuming app have requested. Below is an example configuration which goes into your `package.json`:

```json
{
  "ember-lodash-shim": {
    "include": ["cloneDeep", "isEqual", "get", "set"],
    "includeLodash3Exports": true,
    "whitelist": true
  }
}
```

In the above example you'll notice the `include` option which is an array of what methods need to be included. The *includeLodash3Exports* option tells the shim to also allow exporting methods under the old *lodash* 3 paths. And lastly the *whitelist* option is what tells the shim to make an optimized build rather than including everything.

> NOTE: The `whitelist` option MUST be set in the application if you want an optimized build. Setting this flag in an addon will do nothing but optimize that addons dummy app build.

## Usage

```js
import _ from 'lodash'
```

To learn more about *lodash* and how to use it visit the [lodash](https://github.com/lodash/lodash) Github page.

[ci-img]: https://img.shields.io/travis/ciena-blueplanet/ember-lodash-shim.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-blueplanet/ember-lodash-shim
[cov-img]: https://img.shields.io/coveralls/cciena-blueplanet/ember-lodash-shim.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-blueplanet/ember-lodash-shim
[ember-img]: https://img.shields.io/badge/ember-1.12.2+-green.svg "Ember 1.12.2+"
[npm-img]: https://img.shields.io/npm/v/ember-lodash-shim.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-lodash-shim
