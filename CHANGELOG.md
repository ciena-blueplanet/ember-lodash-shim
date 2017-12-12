# 2.0.6 (2017-12-12)
* **Updated** super call inside of `included` hook of `index.js` to bind the context to `this`

# 2.0.5 (2017-06-30)
* **Updated** to Ember CLI 2.12.3 and Ember 2.12.x
* **Updated** ember-try config matrix with Ember LTS 2.4 and LTS 2.8
* **Updated** travis.yml build matrix to run Ember LTS 2.4, LTS 2.8 and default (Ember LTS 2.12)
* **Updated** linting to use `ember-test-utils` lint-all-the-things
* **Updated** pr-bumper to allow the option of `#NONE#`
* **Updated** Pull request template with new `#NONE#` option

# 2.0.4 (2017-05-14)

Removed shouldCompileJS workaround

# 2.0.3 (2017-05-11)

* **Updated** the secure auth tokens in `.travis.yml`


# 2.0.2 (2017-03-21)

Add shouldCompileJS workaround


# 2.0.1 (2017-03-20)

* **Removed** the blueprint, as it shouldn't be needed now, since we are using lodash from vendor now.


# 2.0.0

* **Replaced** `lodash-es` with pre-built lodash. This gets rid of the ES6 modules in favor of lodash's official pre-built UMD files, which are pulled in via this addons vendor directory. This makes for much smaller builds at the cost of removing named imports. When testing `ember-redux-shim` with this change ~150 KB was removed off of the production built. Now `_` is available in the global scope and the following two imports still work:

  ```js
  import _ from 'lodash'
  ```

   ```js
   import _ from 'lodash/lodash'
   ```

  You can no longer perform named imports such as:

   ```js
   import {cloneDeep} from 'lodash'
   ```

   You can also no longer import methods as modules such as:

   ```js
   import cloneDeep from 'lodash/cloneDeep'
   ```

  > A future enhancement that could bring back the additional configuration for yet even smaller builds is to use [lodash-cli](https://lodash.com/custom-builds), however including all of lodash via vendor is still much smaller than including a subset via `lodash-es`.

# 1.2.0

* **Added** support for making optimized builds.

# 1.1.1

* **Upgraded** to test against Ember 2.11.


# 1.1.0

* **Added** additional builds to CI to make sure addon works with latest versions of Ember.
* **Removed** files from npm package that aren't necessary (all of the various config files).
* **Updated** dependencies to latest versions.


# 1.0.1

* **Updated** Travis configuration to test addon against older versions of Ember.



# 1.0.0

* **Updated** blueprint to install `lodash` version `4.15.0`.


# 0.1.18
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.17
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.16
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.15
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.14
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.13
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.12
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.11
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.10

* **Added** file to make `import isFunction from 'lodash/lang/isFunction'` work from legacy lodash 3 code.



# 0.1.9
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.8
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.7
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.6
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.5
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.4

* Maintaining import paths from `lodash` version 3.x which is used by `ember-lodash` to prevent build issues with addons using those import paths.



# 0.1.3
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.2

* **Addedd** missing dependencies.



# 0.1.1
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.0

* Initial implementation and release.


# 0.2.1

* **Fixed** usage in README.


# 0.2.0

* Implement shim and wire up to CI.



