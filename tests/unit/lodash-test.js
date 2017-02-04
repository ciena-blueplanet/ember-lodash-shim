import {expect} from 'chai'
import {describe, it} from 'mocha'
import _, {
  add,
  after,
  ary,
  assign,
  assignIn,
  assignInWith,
  assignWith,
  at,
  attempt,
  before,
  bind,
  bindAll,
  bindKey,
  camelCase,
  capitalize,
  castArray,
  ceil,
  chain,
  chunk,
  clamp,
  clone,
  cloneDeep,
  cloneDeepWith,
  cloneWith,
  commit,
  compact,
  concat,
  cond,
  conforms,
  conformsTo,
  constant,
  countBy,
  create,
  curry,
  curryRight,
  debounce,
  deburr,
  defaultTo,
  defaults,
  defaultsDeep,
  defer,
  delay,
  difference,
  differenceBy,
  differenceWith,
  divide,
  drop,
  dropRight,
  dropRightWhile,
  dropWhile,
  each,
  eachRight,
  endsWith,
  entries,
  entriesIn,
  eq,
  escape,
  escapeRegExp,
  every,
  extend,
  extendWith,
  fill,
  filter,
  find,
  findIndex,
  findKey,
  findLast,
  findLastIndex,
  findLastKey,
  first,
  flatMap,
  flatMapDeep,
  flatMapDepth,
  flatten,
  flattenDeep,
  flattenDepth,
  flip,
  floor,
  flow,
  flowRight,
  forEach,
  forEachRight,
  forIn,
  forInRight,
  forOwn,
  forOwnRight,
  fromPairs,
  functions,
  functionsIn,
  get,
  groupBy,
  gt,
  gte,
  has,
  hasIn,
  head,
  identity,
  inRange,
  includes,
  indexOf,
  initial,
  intersection,
  intersectionBy,
  intersectionWith,
  invert,
  invertBy,
  invoke,
  invokeMap,
  isArguments,
  isArray,
  isArrayBuffer,
  isArrayLike,
  isArrayLikeObject,
  isBoolean,
  isBuffer,
  isDate,
  isElement,
  isEmpty,
  isEqual,
  isEqualWith,
  isError,
  isFinite,
  isFunction,
  isInteger,
  isLength,
  isMap,
  isMatch,
  isMatchWith,
  isNaN,
  isNative,
  isNil,
  isNull,
  isNumber,
  isObject,
  isObjectLike,
  isPlainObject,
  isRegExp,
  isSafeInteger,
  isSet,
  isString,
  isSymbol,
  isTypedArray,
  isUndefined,
  isWeakMap,
  isWeakSet,

  iteratee,
  join,
  kebabCase,
  keyBy,
  keys,
  keysIn,
  last,
  lastIndexOf,
  lodash,
  lowerCase,
  lowerFirst,
  lt,
  lte,
  map,
  mapKeys,
  mapValues,
  matches,
  matchesProperty,
  max,
  maxBy,
  mean,
  meanBy,
  memoize,
  merge,
  mergeWith,
  method,
  methodOf,
  min,
  minBy,
  mixin,
  multiply,
  negate,
  next,
  noop,
  now,
  nth,
  nthArg,
  omit,
  omitBy,
  once,
  orderBy,
  over,
  overArgs,
  overEvery,
  overSome,
  pad,
  padEnd,
  padStart,
  parseInt,
  partial,
  partialRight,
  partition,
  pick,
  pickBy,
  plant,
  property,
  propertyOf,
  pull,
  pullAll,
  pullAllBy,
  pullAllWith,
  pullAt,
  random,
  range,
  rangeRight,
  rearg,
  reduce,
  reduceRight,
  reject,
  remove,
  repeat,
  replace,
  rest,
  result,
  reverse,
  round,
  sample,
  sampleSize,
  set,
  setWith,
  shuffle,
  size,
  slice,
  snakeCase,
  some,
  sortBy,
  sortedIndex,
  sortedIndexBy,
  sortedIndexOf,
  sortedLastIndex,
  sortedLastIndexBy,
  sortedLastIndexOf,
  sortedUniq,
  sortedUniqBy,
  split,
  spread,
  startCase,
  startsWith,
  stubArray,
  stubFalse,
  stubObject,
  stubString,
  stubTrue,
  subtract,
  sum,
  sumBy,
  tail,
  take,
  takeRight,
  takeRightWhile,
  takeWhile,
  tap,
  template,
  templateSettings,
  throttle,
  thru,
  times,
  toArray,
  toFinite,
  toInteger,
  toIterator,
  toJSON,
  toLength,
  toLower,
  toNumber,
  toPairs,
  toPairsIn,
  toPath,
  toPlainObject,
  toSafeInteger,
  toString,
  toUpper,
  transform,
  trim,
  trimEnd,
  trimStart,
  truncate,
  unary,
  unescape,
  union,
  unionBy,
  unionWith,
  uniq,
  uniqBy,
  uniqWith,
  uniqueId,
  unset,
  unzip,
  unzipWith,
  update,
  updateWith,
  upperCase,
  upperFirst,
  value,
  valueOf,
  values,
  valuesIn,
  without,
  words,
  wrap,
  wrapperAt,
  wrapperChain,
  wrapperCommit,
  wrapperLodash,
  wrapperNext,
  wrapperPlant,
  wrapperReverse,
  wrapperToIterator,
  wrapperValue,
  xor,
  xorBy,
  xorWith,
  zip,
  zipObject,
  zipObjectDeep,
  zipWith
} from 'lodash'

describe('lodash', function () {
  it('is a single module that has been exported', function () {
    expect(typeof _).to.equal('function')
  })

  ;[
    'add',
    'after',
    'ary',
    'assign',
    'assignIn',
    'assignInWith',
    'assignWith',
    'at',
    'attempt',
    'before',
    'bind',
    'bindAll',
    'bindKey',
    'camelCase',
    'capitalize',
    'castArray',
    'ceil',
    'chain',
    'chunk',
    'clamp',
    'clone',
    'cloneDeep',
    'cloneDeepWith',
    'cloneWith',
    'compact',
    'concat',
    'cond',
    'conforms',
    'conformsTo',
    'constant',
    'countBy',
    'create',
    'curry',
    'curryRight',
    'debounce',
    'deburr',
    'defaultTo',
    'defaults',
    'defaultsDeep',
    'defer',
    'delay',
    'difference',
    'differenceBy',
    'differenceWith',
    'divide',
    'drop',
    'dropRight',
    'dropRightWhile',
    'dropWhile',
    'each',
    'eachRight',
    'endsWith',
    'entries',
    'entriesIn',
    'eq',
    'escape',
    'escapeRegExp',
    'every',
    'extend',
    'extendWith',
    'fill',
    'filter',
    'find',
    'findIndex',
    'findKey',
    'findLast',
    'findLastIndex',
    'findLastKey',
    'first',
    'flatMap',
    'flatMapDeep',
    'flatMapDepth',
    'flatten',
    'flattenDeep',
    'flattenDepth',
    'flip',
    'floor',
    'flow',
    'flowRight',
    'forEach',
    'forEachRight',
    'forIn',
    'forInRight',
    'forOwn',
    'forOwnRight',
    'fromPairs',
    'functions',
    'functionsIn',
    'get',
    'groupBy',
    'gt',
    'gte',
    'has',
    'hasIn',
    'head',
    'identity',
    'inRange',
    'includes',
    'indexOf',
    'initial',
    'intersection',
    'intersectionBy',
    'intersectionWith',
    'invert',
    'invertBy',
    'invoke',
    'invokeMap',
    'isArguments',
    'isArray',
    'isArrayBuffer',
    'isArrayLike',
    'isArrayLikeObject',
    'isBoolean',
    'isBuffer',
    'isDate',
    'isElement',
    'isEmpty',
    'isEqual',
    'isEqualWith',
    'isError',
    'isFinite',
    'isFunction',
    'isInteger',
    'isLength',
    'isMap',
    'isMatch',
    'isMatchWith',
    'isNaN',
    'isNative',
    'isNil',
    'isNull',
    'isNumber',
    'isObject',
    'isObjectLike',
    'isPlainObject',
    'isRegExp',
    'isSafeInteger',
    'isSet',
    'isString',
    'isSymbol',
    'isTypedArray',
    'isUndefined',
    'isWeakMap',
    'isWeakSet',
    'iteratee',
    'join',
    'kebabCase',
    'keyBy',
    'keys',
    'keysIn',
    'last',
    'lastIndexOf',
    'lowerCase',
    'lowerFirst',
    'lt',
    'lte',
    'map',
    'mapKeys',
    'mapValues',
    'matches',
    'matchesProperty',
    'max',
    'maxBy',
    'mean',
    'meanBy',
    'memoize',
    'merge',
    'mergeWith',
    'method',
    'methodOf',
    'min',
    'minBy',
    'mixin',
    'multiply',
    'negate',
    'noop',
    'now',
    'nth',
    'nthArg',
    'omit',
    'omitBy',
    'once',
    'orderBy',
    'over',
    'overArgs',
    'overEvery',
    'overSome',
    'pad',
    'padEnd',
    'padStart',
    'parseInt',
    'partial',
    'partialRight',
    'partition',
    'pick',
    'pickBy',
    'property',
    'propertyOf',
    'pull',
    'pullAll',
    'pullAllBy',
    'pullAllWith',
    'pullAt',
    'random',
    'range',
    'rangeRight',
    'rearg',
    'reduce',
    'reduceRight',
    'reject',
    'remove',
    'repeat',
    'replace',
    'rest',
    'result',
    'reverse',
    'round',
    'sample',
    'sampleSize',
    'set',
    'setWith',
    'shuffle',
    'size',
    'slice',
    'snakeCase',
    'some',
    'sortBy',
    'sortedIndex',
    'sortedIndexBy',
    'sortedIndexOf',
    'sortedLastIndex',
    'sortedLastIndexBy',
    'sortedLastIndexOf',
    'sortedUniq',
    'sortedUniqBy',
    'split',
    'spread',
    'startCase',
    'startsWith',
    'stubArray',
    'stubFalse',
    'stubObject',
    'stubString',
    'stubTrue',
    'subtract',
    'sum',
    'sumBy',
    'tail',
    'take',
    'takeRight',
    'takeRightWhile',
    'takeWhile',
    'tap',
    'template',
    'throttle',
    'thru',
    'times',
    'toArray',
    'toFinite',
    'toInteger',
    'toLength',
    'toLower',
    'toNumber',
    'toPairs',
    'toPairsIn',
    'toPath',
    'toPlainObject',
    'toSafeInteger',
    'toString',
    'toUpper',
    'transform',
    'trim',
    'trimEnd',
    'trimStart',
    'truncate',
    'unary',
    'unescape',
    'union',
    'unionBy',
    'unionWith',
    'uniq',
    'uniqBy',
    'uniqWith',
    'uniqueId',
    'unset',
    'unzip',
    'unzipWith',
    'update',
    'updateWith',
    'upperCase',
    'upperFirst',
    'valueOf',
    'values',
    'valuesIn',
    'without',
    'words',
    'wrap',
    'xor',
    'xorBy',
    'xorWith',
    'zip',
    'zipObject',
    'zipObjectDeep',
    'zipWith'
  ]
    .forEach((key) => {
      it(`has ${key} method`, function () {
        expect(typeof _[key]).to.equal('function')
      })
    })

  it('exports add', function () {
    expect(add).not.to.equal(undefined)
  })

  it('exports after', function () {
    expect(after).not.to.equal(undefined)
  })

  it('exports ary', function () {
    expect(ary).not.to.equal(undefined)
  })

  it('exports assign', function () {
    expect(assign).not.to.equal(undefined)
  })

  it('exports assignIn', function () {
    expect(assignIn).not.to.equal(undefined)
  })

  it('exports assignInWith', function () {
    expect(assignInWith).not.to.equal(undefined)
  })

  it('exports assignWith', function () {
    expect(assignWith).not.to.equal(undefined)
  })

  it('exports at', function () {
    expect(at).not.to.equal(undefined)
  })

  it('exports attempt', function () {
    expect(attempt).not.to.equal(undefined)
  })

  it('exports before', function () {
    expect(before).not.to.equal(undefined)
  })

  it('exports bind', function () {
    expect(bind).not.to.equal(undefined)
  })

  it('exports bindAll', function () {
    expect(bindAll).not.to.equal(undefined)
  })

  it('exports bindKey', function () {
    expect(bindKey).not.to.equal(undefined)
  })

  it('exports camelCase', function () {
    expect(camelCase).not.to.equal(undefined)
  })

  it('exports capitalize', function () {
    expect(capitalize).not.to.equal(undefined)
  })

  it('exports castArray', function () {
    expect(castArray).not.to.equal(undefined)
  })

  it('exports ceil', function () {
    expect(ceil).not.to.equal(undefined)
  })

  it('exports chain', function () {
    expect(chain).not.to.equal(undefined)
  })

  it('exports chunk', function () {
    expect(chunk).not.to.equal(undefined)
  })

  it('exports clamp', function () {
    expect(clamp).not.to.equal(undefined)
  })

  it('exports clone', function () {
    expect(clone).not.to.equal(undefined)
  })

  it('exports cloneDeep', function () {
    expect(cloneDeep).not.to.equal(undefined)
  })

  it('exports cloneDeepWith', function () {
    expect(cloneDeepWith).not.to.equal(undefined)
  })

  it('exports cloneWith', function () {
    expect(cloneWith).not.to.equal(undefined)
  })

  it('exports commit', function () {
    expect(commit).not.to.equal(undefined)
  })

  it('exports compact', function () {
    expect(compact).not.to.equal(undefined)
  })

  it('exports concat', function () {
    expect(concat).not.to.equal(undefined)
  })

  it('exports cond', function () {
    expect(cond).not.to.equal(undefined)
  })

  it('exports conforms', function () {
    expect(conforms).not.to.equal(undefined)
  })

  it('exports conformsTo', function () {
    expect(conformsTo).not.to.equal(undefined)
  })

  it('exports constant', function () {
    expect(constant).not.to.equal(undefined)
  })

  it('exports countBy', function () {
    expect(countBy).not.to.equal(undefined)
  })

  it('exports create', function () {
    expect(create).not.to.equal(undefined)
  })

  it('exports curry', function () {
    expect(curry).not.to.equal(undefined)
  })

  it('exports curryRight', function () {
    expect(curryRight).not.to.equal(undefined)
  })

  it('exports debounce', function () {
    expect(debounce).not.to.equal(undefined)
  })

  it('exports deburr', function () {
    expect(deburr).not.to.equal(undefined)
  })

  it('exports defaultTo', function () {
    expect(defaultTo).not.to.equal(undefined)
  })

  it('exports defaults', function () {
    expect(defaults).not.to.equal(undefined)
  })

  it('exports defaultsDeep', function () {
    expect(defaultsDeep).not.to.equal(undefined)
  })

  it('exports defer', function () {
    expect(defer).not.to.equal(undefined)
  })

  it('exports delay', function () {
    expect(delay).not.to.equal(undefined)
  })

  it('exports difference', function () {
    expect(difference).not.to.equal(undefined)
  })

  it('exports differenceBy', function () {
    expect(differenceBy).not.to.equal(undefined)
  })

  it('exports differenceWith', function () {
    expect(differenceWith).not.to.equal(undefined)
  })

  it('exports divide', function () {
    expect(divide).not.to.equal(undefined)
  })

  it('exports drop', function () {
    expect(drop).not.to.equal(undefined)
  })

  it('exports dropRight', function () {
    expect(dropRight).not.to.equal(undefined)
  })

  it('exports dropRightWhile', function () {
    expect(dropRightWhile).not.to.equal(undefined)
  })

  it('exports dropWhile', function () {
    expect(dropWhile).not.to.equal(undefined)
  })

  it('exports each', function () {
    expect(each).not.to.equal(undefined)
  })

  it('exports eachRight', function () {
    expect(eachRight).not.to.equal(undefined)
  })

  it('exports endsWith', function () {
    expect(endsWith).not.to.equal(undefined)
  })

  it('exports entries', function () {
    expect(entries).not.to.equal(undefined)
  })

  it('exports entriesIn', function () {
    expect(entriesIn).not.to.equal(undefined)
  })

  it('exports eq', function () {
    expect(eq).not.to.equal(undefined)
  })

  it('exports escape', function () {
    expect(escape).not.to.equal(undefined)
  })

  it('exports escapeRegExp', function () {
    expect(escapeRegExp).not.to.equal(undefined)
  })

  it('exports every', function () {
    expect(every).not.to.equal(undefined)
  })

  it('exports extend', function () {
    expect(extend).not.to.equal(undefined)
  })

  it('exports extendWith', function () {
    expect(extendWith).not.to.equal(undefined)
  })

  it('exports fill', function () {
    expect(fill).not.to.equal(undefined)
  })

  it('exports filter', function () {
    expect(filter).not.to.equal(undefined)
  })

  it('exports find', function () {
    expect(find).not.to.equal(undefined)
  })

  it('exports findIndex', function () {
    expect(findIndex).not.to.equal(undefined)
  })

  it('exports findKey', function () {
    expect(findKey).not.to.equal(undefined)
  })

  it('exports findLast', function () {
    expect(findLast).not.to.equal(undefined)
  })

  it('exports findLastIndex', function () {
    expect(findLastIndex).not.to.equal(undefined)
  })

  it('exports findLastKey', function () {
    expect(findLastKey).not.to.equal(undefined)
  })

  it('exports first', function () {
    expect(first).not.to.equal(undefined)
  })

  it('exports flatMap', function () {
    expect(flatMap).not.to.equal(undefined)
  })

  it('exports flatMapDeep', function () {
    expect(flatMapDeep).not.to.equal(undefined)
  })

  it('exports flatMapDepth', function () {
    expect(flatMapDepth).not.to.equal(undefined)
  })

  it('exports flatten', function () {
    expect(flatten).not.to.equal(undefined)
  })

  it('exports flattenDeep', function () {
    expect(flattenDeep).not.to.equal(undefined)
  })

  it('exports flattenDepth', function () {
    expect(flattenDepth).not.to.equal(undefined)
  })

  it('exports flip', function () {
    expect(flip).not.to.equal(undefined)
  })

  it('exports floor', function () {
    expect(floor).not.to.equal(undefined)
  })

  it('exports flow', function () {
    expect(flow).not.to.equal(undefined)
  })

  it('exports flowRight', function () {
    expect(flowRight).not.to.equal(undefined)
  })

  it('exports forEach', function () {
    expect(forEach).not.to.equal(undefined)
  })

  it('exports forEachRight', function () {
    expect(forEachRight).not.to.equal(undefined)
  })

  it('exports forIn', function () {
    expect(forIn).not.to.equal(undefined)
  })

  it('exports forInRight', function () {
    expect(forInRight).not.to.equal(undefined)
  })

  it('exports forOwn', function () {
    expect(forOwn).not.to.equal(undefined)
  })

  it('exports forOwnRight', function () {
    expect(forOwnRight).not.to.equal(undefined)
  })

  it('exports fromPairs', function () {
    expect(fromPairs).not.to.equal(undefined)
  })

  it('exports functions', function () {
    expect(functions).not.to.equal(undefined)
  })

  it('exports functionsIn', function () {
    expect(functionsIn).not.to.equal(undefined)
  })

  it('exports get', function () {
    expect(get).not.to.equal(undefined)
  })

  it('exports groupBy', function () {
    expect(groupBy).not.to.equal(undefined)
  })

  it('exports gt', function () {
    expect(gt).not.to.equal(undefined)
  })

  it('exports gte', function () {
    expect(gte).not.to.equal(undefined)
  })

  it('exports has', function () {
    expect(has).not.to.equal(undefined)
  })

  it('exports hasIn', function () {
    expect(hasIn).not.to.equal(undefined)
  })

  it('exports head', function () {
    expect(head).not.to.equal(undefined)
  })

  it('exports identity', function () {
    expect(identity).not.to.equal(undefined)
  })

  it('exports inRange', function () {
    expect(inRange).not.to.equal(undefined)
  })

  it('exports includes', function () {
    expect(includes).not.to.equal(undefined)
  })

  it('exports indexOf', function () {
    expect(indexOf).not.to.equal(undefined)
  })

  it('exports initial', function () {
    expect(initial).not.to.equal(undefined)
  })

  it('exports intersection', function () {
    expect(intersection).not.to.equal(undefined)
  })

  it('exports intersectionBy', function () {
    expect(intersectionBy).not.to.equal(undefined)
  })

  it('exports intersectionWith', function () {
    expect(intersectionWith).not.to.equal(undefined)
  })

  it('exports invert', function () {
    expect(invert).not.to.equal(undefined)
  })

  it('exports invertBy', function () {
    expect(invertBy).not.to.equal(undefined)
  })

  it('exports invoke', function () {
    expect(invoke).not.to.equal(undefined)
  })

  it('exports invokeMap', function () {
    expect(invokeMap).not.to.equal(undefined)
  })

  it('exports isArguments', function () {
    expect(isArguments).not.to.equal(undefined)
  })

  it('exports isArray', function () {
    expect(isArray).not.to.equal(undefined)
  })

  it('exports isArrayBuffer', function () {
    expect(isArrayBuffer).not.to.equal(undefined)
  })

  it('exports isArrayLike', function () {
    expect(isArrayLike).not.to.equal(undefined)
  })

  it('exports isArrayLikeObject', function () {
    expect(isArrayLikeObject).not.to.equal(undefined)
  })

  it('exports isBoolean', function () {
    expect(isBoolean).not.to.equal(undefined)
  })

  it('exports isBuffer', function () {
    expect(isBuffer).not.to.equal(undefined)
  })

  it('exports isDate', function () {
    expect(isDate).not.to.equal(undefined)
  })

  it('exports isElement', function () {
    expect(isElement).not.to.equal(undefined)
  })

  it('exports isEmpty', function () {
    expect(isEmpty).not.to.equal(undefined)
  })

  it('exports isEqual', function () {
    expect(isEqual).not.to.equal(undefined)
  })

  it('exports isEqualWith', function () {
    expect(isEqualWith).not.to.equal(undefined)
  })

  it('exports isError', function () {
    expect(isError).not.to.equal(undefined)
  })

  it('exports isFinite', function () {
    expect(isFinite).not.to.equal(undefined)
  })

  it('exports isFunction', function () {
    expect(isFunction).not.to.equal(undefined)
  })

  it('exports isInteger', function () {
    expect(isInteger).not.to.equal(undefined)
  })

  it('exports isLength', function () {
    expect(isLength).not.to.equal(undefined)
  })

  it('exports isMap', function () {
    expect(isMap).not.to.equal(undefined)
  })

  it('exports isMatch', function () {
    expect(isMatch).not.to.equal(undefined)
  })

  it('exports isMatchWith', function () {
    expect(isMatchWith).not.to.equal(undefined)
  })

  it('exports isNaN', function () {
    expect(isNaN).not.to.equal(undefined)
  })

  it('exports isNative', function () {
    expect(isNative).not.to.equal(undefined)
  })

  it('exports isNil', function () {
    expect(isNil).not.to.equal(undefined)
  })

  it('exports isNull', function () {
    expect(isNull).not.to.equal(undefined)
  })

  it('exports isNumber', function () {
    expect(isNumber).not.to.equal(undefined)
  })

  it('exports isObject', function () {
    expect(isObject).not.to.equal(undefined)
  })

  it('exports isObjectLike', function () {
    expect(isObjectLike).not.to.equal(undefined)
  })

  it('exports isPlainObject', function () {
    expect(isPlainObject).not.to.equal(undefined)
  })

  it('exports isRegExp', function () {
    expect(isRegExp).not.to.equal(undefined)
  })

  it('exports isSafeInteger', function () {
    expect(isSafeInteger).not.to.equal(undefined)
  })

  it('exports isSet', function () {
    expect(isSet).not.to.equal(undefined)
  })

  it('exports isString', function () {
    expect(isString).not.to.equal(undefined)
  })

  it('exports isSymbol', function () {
    expect(isSymbol).not.to.equal(undefined)
  })

  it('exports isTypedArray', function () {
    expect(isTypedArray).not.to.equal(undefined)
  })

  it('exports isUndefined', function () {
    expect(isUndefined).not.to.equal(undefined)
  })

  it('exports isWeakMap', function () {
    expect(isWeakMap).not.to.equal(undefined)
  })

  it('exports isWeakSet', function () {
    expect(isWeakSet).not.to.equal(undefined)
  })

  it('exports iteratee', function () {
    expect(iteratee).not.to.equal(undefined)
  })

  it('exports join', function () {
    expect(join).not.to.equal(undefined)
  })

  it('exports kebabCase', function () {
    expect(kebabCase).not.to.equal(undefined)
  })

  it('exports keyBy', function () {
    expect(keyBy).not.to.equal(undefined)
  })

  it('exports keys', function () {
    expect(keys).not.to.equal(undefined)
  })

  it('exports keysIn', function () {
    expect(keysIn).not.to.equal(undefined)
  })

  it('exports last', function () {
    expect(last).not.to.equal(undefined)
  })

  it('exports lastIndexOf', function () {
    expect(lastIndexOf).not.to.equal(undefined)
  })

  it('exports lodash', function () {
    expect(lodash).not.to.equal(undefined)
  })

  it('exports lowerCase', function () {
    expect(lowerCase).not.to.equal(undefined)
  })

  it('exports lowerFirst', function () {
    expect(lowerFirst).not.to.equal(undefined)
  })

  it('exports lt', function () {
    expect(lt).not.to.equal(undefined)
  })

  it('exports lte', function () {
    expect(lte).not.to.equal(undefined)
  })

  it('exports map', function () {
    expect(map).not.to.equal(undefined)
  })

  it('exports mapKeys', function () {
    expect(mapKeys).not.to.equal(undefined)
  })

  it('exports mapValues', function () {
    expect(mapValues).not.to.equal(undefined)
  })

  it('exports matches', function () {
    expect(matches).not.to.equal(undefined)
  })

  it('exports matchesProperty', function () {
    expect(matchesProperty).not.to.equal(undefined)
  })

  it('exports max', function () {
    expect(max).not.to.equal(undefined)
  })

  it('exports maxBy', function () {
    expect(maxBy).not.to.equal(undefined)
  })

  it('exports mean', function () {
    expect(mean).not.to.equal(undefined)
  })

  it('exports meanBy', function () {
    expect(meanBy).not.to.equal(undefined)
  })

  it('exports memoize', function () {
    expect(memoize).not.to.equal(undefined)
  })

  it('exports merge', function () {
    expect(merge).not.to.equal(undefined)
  })

  it('exports mergeWith', function () {
    expect(mergeWith).not.to.equal(undefined)
  })

  it('exports method', function () {
    expect(method).not.to.equal(undefined)
  })

  it('exports methodOf', function () {
    expect(methodOf).not.to.equal(undefined)
  })

  it('exports min', function () {
    expect(min).not.to.equal(undefined)
  })

  it('exports minBy', function () {
    expect(minBy).not.to.equal(undefined)
  })

  it('exports mixin', function () {
    expect(mixin).not.to.equal(undefined)
  })

  it('exports multiply', function () {
    expect(multiply).not.to.equal(undefined)
  })

  it('exports negate', function () {
    expect(negate).not.to.equal(undefined)
  })

  it('exports next', function () {
    expect(next).not.to.equal(undefined)
  })

  it('exports noop', function () {
    expect(noop).not.to.equal(undefined)
  })

  it('exports now', function () {
    expect(now).not.to.equal(undefined)
  })

  it('exports nth', function () {
    expect(nth).not.to.equal(undefined)
  })

  it('exports nthArg', function () {
    expect(nthArg).not.to.equal(undefined)
  })

  it('exports omit', function () {
    expect(omit).not.to.equal(undefined)
  })

  it('exports omitBy', function () {
    expect(omitBy).not.to.equal(undefined)
  })

  it('exports once', function () {
    expect(once).not.to.equal(undefined)
  })

  it('exports orderBy', function () {
    expect(orderBy).not.to.equal(undefined)
  })

  it('exports over', function () {
    expect(over).not.to.equal(undefined)
  })

  it('exports overArgs', function () {
    expect(overArgs).not.to.equal(undefined)
  })

  it('exports overEvery', function () {
    expect(overEvery).not.to.equal(undefined)
  })

  it('exports overSome', function () {
    expect(overSome).not.to.equal(undefined)
  })

  it('exports pad', function () {
    expect(pad).not.to.equal(undefined)
  })

  it('exports padEnd', function () {
    expect(padEnd).not.to.equal(undefined)
  })

  it('exports padStart', function () {
    expect(padStart).not.to.equal(undefined)
  })

  it('exports parseInt', function () {
    expect(parseInt).not.to.equal(undefined)
  })

  it('exports partial', function () {
    expect(partial).not.to.equal(undefined)
  })

  it('exports partialRight', function () {
    expect(partialRight).not.to.equal(undefined)
  })

  it('exports partition', function () {
    expect(partition).not.to.equal(undefined)
  })

  it('exports pick', function () {
    expect(pick).not.to.equal(undefined)
  })

  it('exports pickBy', function () {
    expect(pickBy).not.to.equal(undefined)
  })

  it('exports plant', function () {
    expect(plant).not.to.equal(undefined)
  })

  it('exports property', function () {
    expect(property).not.to.equal(undefined)
  })

  it('exports propertyOf', function () {
    expect(propertyOf).not.to.equal(undefined)
  })

  it('exports pull', function () {
    expect(pull).not.to.equal(undefined)
  })

  it('exports pullAll', function () {
    expect(pullAll).not.to.equal(undefined)
  })

  it('exports pullAllBy', function () {
    expect(pullAllBy).not.to.equal(undefined)
  })

  it('exports pullAllWith', function () {
    expect(pullAllWith).not.to.equal(undefined)
  })

  it('exports pullAt', function () {
    expect(pullAt).not.to.equal(undefined)
  })

  it('exports random', function () {
    expect(random).not.to.equal(undefined)
  })

  it('exports range', function () {
    expect(range).not.to.equal(undefined)
  })

  it('exports rangeRight', function () {
    expect(rangeRight).not.to.equal(undefined)
  })

  it('exports rearg', function () {
    expect(rearg).not.to.equal(undefined)
  })

  it('exports reduce', function () {
    expect(reduce).not.to.equal(undefined)
  })

  it('exports reduceRight', function () {
    expect(reduceRight).not.to.equal(undefined)
  })

  it('exports reject', function () {
    expect(reject).not.to.equal(undefined)
  })

  it('exports remove', function () {
    expect(remove).not.to.equal(undefined)
  })

  it('exports repeat', function () {
    expect(repeat).not.to.equal(undefined)
  })

  it('exports replace', function () {
    expect(replace).not.to.equal(undefined)
  })

  it('exports rest', function () {
    expect(rest).not.to.equal(undefined)
  })

  it('exports result', function () {
    expect(result).not.to.equal(undefined)
  })

  it('exports reverse', function () {
    expect(reverse).not.to.equal(undefined)
  })

  it('exports round', function () {
    expect(round).not.to.equal(undefined)
  })

  it('exports sample', function () {
    expect(sample).not.to.equal(undefined)
  })

  it('exports sampleSize', function () {
    expect(sampleSize).not.to.equal(undefined)
  })

  it('exports set', function () {
    expect(set).not.to.equal(undefined)
  })

  it('exports setWith', function () {
    expect(setWith).not.to.equal(undefined)
  })

  it('exports shuffle', function () {
    expect(shuffle).not.to.equal(undefined)
  })

  it('exports size', function () {
    expect(size).not.to.equal(undefined)
  })

  it('exports slice', function () {
    expect(slice).not.to.equal(undefined)
  })

  it('exports snakeCase', function () {
    expect(snakeCase).not.to.equal(undefined)
  })

  it('exports some', function () {
    expect(some).not.to.equal(undefined)
  })

  it('exports sortBy', function () {
    expect(sortBy).not.to.equal(undefined)
  })

  it('exports sortedIndex', function () {
    expect(sortedIndex).not.to.equal(undefined)
  })

  it('exports sortedIndexBy', function () {
    expect(sortedIndexBy).not.to.equal(undefined)
  })

  it('exports sortedIndexOf', function () {
    expect(sortedIndexOf).not.to.equal(undefined)
  })

  it('exports sortedLastIndex', function () {
    expect(sortedLastIndex).not.to.equal(undefined)
  })

  it('exports sortedLastIndexBy', function () {
    expect(sortedLastIndexBy).not.to.equal(undefined)
  })

  it('exports sortedLastIndexOf', function () {
    expect(sortedLastIndexOf).not.to.equal(undefined)
  })

  it('exports sortedUniq', function () {
    expect(sortedUniq).not.to.equal(undefined)
  })

  it('exports sortedUniqBy', function () {
    expect(sortedUniqBy).not.to.equal(undefined)
  })

  it('exports split', function () {
    expect(split).not.to.equal(undefined)
  })

  it('exports spread', function () {
    expect(spread).not.to.equal(undefined)
  })

  it('exports startCase', function () {
    expect(startCase).not.to.equal(undefined)
  })

  it('exports startsWith', function () {
    expect(startsWith).not.to.equal(undefined)
  })

  it('exports stubArray', function () {
    expect(stubArray).not.to.equal(undefined)
  })

  it('exports stubFalse', function () {
    expect(stubFalse).not.to.equal(undefined)
  })

  it('exports stubObject', function () {
    expect(stubObject).not.to.equal(undefined)
  })

  it('exports stubString', function () {
    expect(stubString).not.to.equal(undefined)
  })

  it('exports stubTrue', function () {
    expect(stubTrue).not.to.equal(undefined)
  })

  it('exports subtract', function () {
    expect(subtract).not.to.equal(undefined)
  })

  it('exports sum', function () {
    expect(sum).not.to.equal(undefined)
  })

  it('exports sumBy', function () {
    expect(sumBy).not.to.equal(undefined)
  })

  it('exports tail', function () {
    expect(tail).not.to.equal(undefined)
  })

  it('exports take', function () {
    expect(take).not.to.equal(undefined)
  })

  it('exports takeRight', function () {
    expect(takeRight).not.to.equal(undefined)
  })

  it('exports takeRightWhile', function () {
    expect(takeRightWhile).not.to.equal(undefined)
  })

  it('exports takeWhile', function () {
    expect(takeWhile).not.to.equal(undefined)
  })

  it('exports tap', function () {
    expect(tap).not.to.equal(undefined)
  })

  it('exports template', function () {
    expect(template).not.to.equal(undefined)
  })

  it('exports templateSettings', function () {
    expect(templateSettings).not.to.equal(undefined)
  })

  it('exports throttle', function () {
    expect(throttle).not.to.equal(undefined)
  })

  it('exports thru', function () {
    expect(thru).not.to.equal(undefined)
  })

  it('exports times', function () {
    expect(times).not.to.equal(undefined)
  })

  it('exports toArray', function () {
    expect(toArray).not.to.equal(undefined)
  })

  it('exports toFinite', function () {
    expect(toFinite).not.to.equal(undefined)
  })

  it('exports toInteger', function () {
    expect(toInteger).not.to.equal(undefined)
  })

  it('exports toIterator', function () {
    expect(toIterator).not.to.equal(undefined)
  })

  it('exports toJSON', function () {
    expect(toJSON).not.to.equal(undefined)
  })

  it('exports toLength', function () {
    expect(toLength).not.to.equal(undefined)
  })

  it('exports toLower', function () {
    expect(toLower).not.to.equal(undefined)
  })

  it('exports toNumber', function () {
    expect(toNumber).not.to.equal(undefined)
  })

  it('exports toPairs', function () {
    expect(toPairs).not.to.equal(undefined)
  })

  it('exports toPairsIn', function () {
    expect(toPairsIn).not.to.equal(undefined)
  })

  it('exports toPath', function () {
    expect(toPath).not.to.equal(undefined)
  })

  it('exports toPlainObject', function () {
    expect(toPlainObject).not.to.equal(undefined)
  })

  it('exports toSafeInteger', function () {
    expect(toSafeInteger).not.to.equal(undefined)
  })

  it('exports toString', function () {
    expect(toString).not.to.equal(undefined)
  })

  it('exports toUpper', function () {
    expect(toUpper).not.to.equal(undefined)
  })

  it('exports transform', function () {
    expect(transform).not.to.equal(undefined)
  })

  it('exports trim', function () {
    expect(trim).not.to.equal(undefined)
  })

  it('exports trimEnd', function () {
    expect(trimEnd).not.to.equal(undefined)
  })

  it('exports trimStart', function () {
    expect(trimStart).not.to.equal(undefined)
  })

  it('exports truncate', function () {
    expect(truncate).not.to.equal(undefined)
  })

  it('exports unary', function () {
    expect(unary).not.to.equal(undefined)
  })

  it('exports unescape', function () {
    expect(unescape).not.to.equal(undefined)
  })

  it('exports union', function () {
    expect(union).not.to.equal(undefined)
  })

  it('exports unionBy', function () {
    expect(unionBy).not.to.equal(undefined)
  })

  it('exports unionWith', function () {
    expect(unionWith).not.to.equal(undefined)
  })

  it('exports uniq', function () {
    expect(uniq).not.to.equal(undefined)
  })

  it('exports uniqBy', function () {
    expect(uniqBy).not.to.equal(undefined)
  })

  it('exports uniqWith', function () {
    expect(uniqWith).not.to.equal(undefined)
  })

  it('exports uniqueId', function () {
    expect(uniqueId).not.to.equal(undefined)
  })

  it('exports unset', function () {
    expect(unset).not.to.equal(undefined)
  })

  it('exports unzip', function () {
    expect(unzip).not.to.equal(undefined)
  })

  it('exports unzipWith', function () {
    expect(unzipWith).not.to.equal(undefined)
  })

  it('exports update', function () {
    expect(update).not.to.equal(undefined)
  })

  it('exports updateWith', function () {
    expect(updateWith).not.to.equal(undefined)
  })

  it('exports upperCase', function () {
    expect(upperCase).not.to.equal(undefined)
  })

  it('exports upperFirst', function () {
    expect(upperFirst).not.to.equal(undefined)
  })

  it('exports value', function () {
    expect(value).not.to.equal(undefined)
  })

  it('exports valueOf', function () {
    expect(valueOf).not.to.equal(undefined)
  })

  it('exports values', function () {
    expect(values).not.to.equal(undefined)
  })

  it('exports valuesIn', function () {
    expect(valuesIn).not.to.equal(undefined)
  })

  it('exports without', function () {
    expect(without).not.to.equal(undefined)
  })

  it('exports words', function () {
    expect(words).not.to.equal(undefined)
  })

  it('exports wrap', function () {
    expect(wrap).not.to.equal(undefined)
  })

  it('exports wrapperAt', function () {
    expect(wrapperAt).not.to.equal(undefined)
  })

  it('exports wrapperChain', function () {
    expect(wrapperChain).not.to.equal(undefined)
  })

  it('exports wrapperCommit', function () {
    expect(wrapperCommit).not.to.equal(undefined)
  })

  it('exports wrapperLodash', function () {
    expect(wrapperLodash).not.to.equal(undefined)
  })

  it('exports wrapperNext', function () {
    expect(wrapperNext).not.to.equal(undefined)
  })

  it('exports wrapperPlant', function () {
    expect(wrapperPlant).not.to.equal(undefined)
  })

  it('exports wrapperReverse', function () {
    expect(wrapperReverse).not.to.equal(undefined)
  })

  it('exports wrapperToIterator', function () {
    expect(wrapperToIterator).not.to.equal(undefined)
  })

  it('exports wrapperValue', function () {
    expect(wrapperValue).not.to.equal(undefined)
  })

  it('exports xor', function () {
    expect(xor).not.to.equal(undefined)
  })

  it('exports xorBy', function () {
    expect(xorBy).not.to.equal(undefined)
  })

  it('exports xorWith', function () {
    expect(xorWith).not.to.equal(undefined)
  })

  it('exports zip', function () {
    expect(zip).not.to.equal(undefined)
  })

  it('exports zipObject', function () {
    expect(zipObject).not.to.equal(undefined)
  })

  it('exports zipObjectDeep', function () {
    expect(zipObjectDeep).not.to.equal(undefined)
  })

  it('exports zipWith', function () {
    expect(zipWith).not.to.equal(undefined)
  })
})
