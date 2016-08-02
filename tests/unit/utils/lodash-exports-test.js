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
    expect(add).to.be.defined
  })

  it('exports after', function () {
    expect(after).to.be.defined
  })

  it('exports ary', function () {
    expect(ary).to.be.defined
  })

  it('exports assign', function () {
    expect(assign).to.be.defined
  })

  it('exports assignIn', function () {
    expect(assignIn).to.be.defined
  })

  it('exports assignInWith', function () {
    expect(assignInWith).to.be.defined
  })

  it('exports assignWith', function () {
    expect(assignWith).to.be.defined
  })

  it('exports at', function () {
    expect(at).to.be.defined
  })

  it('exports attempt', function () {
    expect(attempt).to.be.defined
  })

  it('exports before', function () {
    expect(before).to.be.defined
  })

  it('exports bind', function () {
    expect(bind).to.be.defined
  })

  it('exports bindAll', function () {
    expect(bindAll).to.be.defined
  })

  it('exports bindKey', function () {
    expect(bindKey).to.be.defined
  })

  it('exports camelCase', function () {
    expect(camelCase).to.be.defined
  })

  it('exports capitalize', function () {
    expect(capitalize).to.be.defined
  })

  it('exports castArray', function () {
    expect(castArray).to.be.defined
  })

  it('exports ceil', function () {
    expect(ceil).to.be.defined
  })

  it('exports chain', function () {
    expect(chain).to.be.defined
  })

  it('exports chunk', function () {
    expect(chunk).to.be.defined
  })

  it('exports clamp', function () {
    expect(clamp).to.be.defined
  })

  it('exports clone', function () {
    expect(clone).to.be.defined
  })

  it('exports cloneDeep', function () {
    expect(cloneDeep).to.be.defined
  })

  it('exports cloneDeepWith', function () {
    expect(cloneDeepWith).to.be.defined
  })

  it('exports cloneWith', function () {
    expect(cloneWith).to.be.defined
  })

  it('exports commit', function () {
    expect(commit).to.be.defined
  })

  it('exports compact', function () {
    expect(compact).to.be.defined
  })

  it('exports concat', function () {
    expect(concat).to.be.defined
  })

  it('exports cond', function () {
    expect(cond).to.be.defined
  })

  it('exports conforms', function () {
    expect(conforms).to.be.defined
  })

  it('exports conformsTo', function () {
    expect(conformsTo).to.be.defined
  })

  it('exports constant', function () {
    expect(constant).to.be.defined
  })

  it('exports countBy', function () {
    expect(countBy).to.be.defined
  })

  it('exports create', function () {
    expect(create).to.be.defined
  })

  it('exports curry', function () {
    expect(curry).to.be.defined
  })

  it('exports curryRight', function () {
    expect(curryRight).to.be.defined
  })

  it('exports debounce', function () {
    expect(debounce).to.be.defined
  })

  it('exports deburr', function () {
    expect(deburr).to.be.defined
  })

  it('exports defaultTo', function () {
    expect(defaultTo).to.be.defined
  })

  it('exports defaults', function () {
    expect(defaults).to.be.defined
  })

  it('exports defaultsDeep', function () {
    expect(defaultsDeep).to.be.defined
  })

  it('exports defer', function () {
    expect(defer).to.be.defined
  })

  it('exports delay', function () {
    expect(delay).to.be.defined
  })

  it('exports difference', function () {
    expect(difference).to.be.defined
  })

  it('exports differenceBy', function () {
    expect(differenceBy).to.be.defined
  })

  it('exports differenceWith', function () {
    expect(differenceWith).to.be.defined
  })

  it('exports divide', function () {
    expect(divide).to.be.defined
  })

  it('exports drop', function () {
    expect(drop).to.be.defined
  })

  it('exports dropRight', function () {
    expect(dropRight).to.be.defined
  })

  it('exports dropRightWhile', function () {
    expect(dropRightWhile).to.be.defined
  })

  it('exports dropWhile', function () {
    expect(dropWhile).to.be.defined
  })

  it('exports each', function () {
    expect(each).to.be.defined
  })

  it('exports eachRight', function () {
    expect(eachRight).to.be.defined
  })

  it('exports endsWith', function () {
    expect(endsWith).to.be.defined
  })

  it('exports entries', function () {
    expect(entries).to.be.defined
  })

  it('exports entriesIn', function () {
    expect(entriesIn).to.be.defined
  })

  it('exports eq', function () {
    expect(eq).to.be.defined
  })

  it('exports escape', function () {
    expect(escape).to.be.defined
  })

  it('exports escapeRegExp', function () {
    expect(escapeRegExp).to.be.defined
  })

  it('exports every', function () {
    expect(every).to.be.defined
  })

  it('exports extend', function () {
    expect(extend).to.be.defined
  })

  it('exports extendWith', function () {
    expect(extendWith).to.be.defined
  })

  it('exports fill', function () {
    expect(fill).to.be.defined
  })

  it('exports filter', function () {
    expect(filter).to.be.defined
  })

  it('exports find', function () {
    expect(find).to.be.defined
  })

  it('exports findIndex', function () {
    expect(findIndex).to.be.defined
  })

  it('exports findKey', function () {
    expect(findKey).to.be.defined
  })

  it('exports findLast', function () {
    expect(findLast).to.be.defined
  })

  it('exports findLastIndex', function () {
    expect(findLastIndex).to.be.defined
  })

  it('exports findLastKey', function () {
    expect(findLastKey).to.be.defined
  })

  it('exports first', function () {
    expect(first).to.be.defined
  })

  it('exports flatMap', function () {
    expect(flatMap).to.be.defined
  })

  it('exports flatMapDeep', function () {
    expect(flatMapDeep).to.be.defined
  })

  it('exports flatMapDepth', function () {
    expect(flatMapDepth).to.be.defined
  })

  it('exports flatten', function () {
    expect(flatten).to.be.defined
  })

  it('exports flattenDeep', function () {
    expect(flattenDeep).to.be.defined
  })

  it('exports flattenDepth', function () {
    expect(flattenDepth).to.be.defined
  })

  it('exports flip', function () {
    expect(flip).to.be.defined
  })

  it('exports floor', function () {
    expect(floor).to.be.defined
  })

  it('exports flow', function () {
    expect(flow).to.be.defined
  })

  it('exports flowRight', function () {
    expect(flowRight).to.be.defined
  })

  it('exports forEach', function () {
    expect(forEach).to.be.defined
  })

  it('exports forEachRight', function () {
    expect(forEachRight).to.be.defined
  })

  it('exports forIn', function () {
    expect(forIn).to.be.defined
  })

  it('exports forInRight', function () {
    expect(forInRight).to.be.defined
  })

  it('exports forOwn', function () {
    expect(forOwn).to.be.defined
  })

  it('exports forOwnRight', function () {
    expect(forOwnRight).to.be.defined
  })

  it('exports fromPairs', function () {
    expect(fromPairs).to.be.defined
  })

  it('exports functions', function () {
    expect(functions).to.be.defined
  })

  it('exports functionsIn', function () {
    expect(functionsIn).to.be.defined
  })

  it('exports get', function () {
    expect(get).to.be.defined
  })

  it('exports groupBy', function () {
    expect(groupBy).to.be.defined
  })

  it('exports gt', function () {
    expect(gt).to.be.defined
  })

  it('exports gte', function () {
    expect(gte).to.be.defined
  })

  it('exports has', function () {
    expect(has).to.be.defined
  })

  it('exports hasIn', function () {
    expect(hasIn).to.be.defined
  })

  it('exports head', function () {
    expect(head).to.be.defined
  })

  it('exports identity', function () {
    expect(identity).to.be.defined
  })

  it('exports inRange', function () {
    expect(inRange).to.be.defined
  })

  it('exports includes', function () {
    expect(includes).to.be.defined
  })

  it('exports indexOf', function () {
    expect(indexOf).to.be.defined
  })

  it('exports initial', function () {
    expect(initial).to.be.defined
  })

  it('exports intersection', function () {
    expect(intersection).to.be.defined
  })

  it('exports intersectionBy', function () {
    expect(intersectionBy).to.be.defined
  })

  it('exports intersectionWith', function () {
    expect(intersectionWith).to.be.defined
  })

  it('exports invert', function () {
    expect(invert).to.be.defined
  })

  it('exports invertBy', function () {
    expect(invertBy).to.be.defined
  })

  it('exports invoke', function () {
    expect(invoke).to.be.defined
  })

  it('exports invokeMap', function () {
    expect(invokeMap).to.be.defined
  })

  it('exports isArguments', function () {
    expect(isArguments).to.be.defined
  })

  it('exports isArray', function () {
    expect(isArray).to.be.defined
  })

  it('exports isArrayBuffer', function () {
    expect(isArrayBuffer).to.be.defined
  })

  it('exports isArrayLike', function () {
    expect(isArrayLike).to.be.defined
  })

  it('exports isArrayLikeObject', function () {
    expect(isArrayLikeObject).to.be.defined
  })

  it('exports isBoolean', function () {
    expect(isBoolean).to.be.defined
  })

  it('exports isBuffer', function () {
    expect(isBuffer).to.be.defined
  })

  it('exports isDate', function () {
    expect(isDate).to.be.defined
  })

  it('exports isElement', function () {
    expect(isElement).to.be.defined
  })

  it('exports isEmpty', function () {
    expect(isEmpty).to.be.defined
  })

  it('exports isEqual', function () {
    expect(isEqual).to.be.defined
  })

  it('exports isEqualWith', function () {
    expect(isEqualWith).to.be.defined
  })

  it('exports isError', function () {
    expect(isError).to.be.defined
  })

  it('exports isFinite', function () {
    expect(isFinite).to.be.defined
  })

  it('exports isFunction', function () {
    expect(isFunction).to.be.defined
  })

  it('exports isInteger', function () {
    expect(isInteger).to.be.defined
  })

  it('exports isLength', function () {
    expect(isLength).to.be.defined
  })

  it('exports isMap', function () {
    expect(isMap).to.be.defined
  })

  it('exports isMatch', function () {
    expect(isMatch).to.be.defined
  })

  it('exports isMatchWith', function () {
    expect(isMatchWith).to.be.defined
  })

  it('exports isNaN', function () {
    expect(isNaN).to.be.defined
  })

  it('exports isNative', function () {
    expect(isNative).to.be.defined
  })

  it('exports isNil', function () {
    expect(isNil).to.be.defined
  })

  it('exports isNull', function () {
    expect(isNull).to.be.defined
  })

  it('exports isNumber', function () {
    expect(isNumber).to.be.defined
  })

  it('exports isObject', function () {
    expect(isObject).to.be.defined
  })

  it('exports isObjectLike', function () {
    expect(isObjectLike).to.be.defined
  })

  it('exports isPlainObject', function () {
    expect(isPlainObject).to.be.defined
  })

  it('exports isRegExp', function () {
    expect(isRegExp).to.be.defined
  })

  it('exports isSafeInteger', function () {
    expect(isSafeInteger).to.be.defined
  })

  it('exports isSet', function () {
    expect(isSet).to.be.defined
  })

  it('exports isString', function () {
    expect(isString).to.be.defined
  })

  it('exports isSymbol', function () {
    expect(isSymbol).to.be.defined
  })

  it('exports isTypedArray', function () {
    expect(isTypedArray).to.be.defined
  })

  it('exports isUndefined', function () {
    expect(isUndefined).to.be.defined
  })

  it('exports isWeakMap', function () {
    expect(isWeakMap).to.be.defined
  })

  it('exports isWeakSet', function () {
    expect(isWeakSet).to.be.defined
  })

  it('exports iteratee', function () {
    expect(iteratee).to.be.defined
  })

  it('exports join', function () {
    expect(join).to.be.defined
  })

  it('exports kebabCase', function () {
    expect(kebabCase).to.be.defined
  })

  it('exports keyBy', function () {
    expect(keyBy).to.be.defined
  })

  it('exports keys', function () {
    expect(keys).to.be.defined
  })

  it('exports keysIn', function () {
    expect(keysIn).to.be.defined
  })

  it('exports last', function () {
    expect(last).to.be.defined
  })

  it('exports lastIndexOf', function () {
    expect(lastIndexOf).to.be.defined
  })

  it('exports lodash', function () {
    expect(lodash).to.be.defined
  })

  it('exports lowerCase', function () {
    expect(lowerCase).to.be.defined
  })

  it('exports lowerFirst', function () {
    expect(lowerFirst).to.be.defined
  })

  it('exports lt', function () {
    expect(lt).to.be.defined
  })

  it('exports lte', function () {
    expect(lte).to.be.defined
  })

  it('exports map', function () {
    expect(map).to.be.defined
  })

  it('exports mapKeys', function () {
    expect(mapKeys).to.be.defined
  })

  it('exports mapValues', function () {
    expect(mapValues).to.be.defined
  })

  it('exports matches', function () {
    expect(matches).to.be.defined
  })

  it('exports matchesProperty', function () {
    expect(matchesProperty).to.be.defined
  })

  it('exports max', function () {
    expect(max).to.be.defined
  })

  it('exports maxBy', function () {
    expect(maxBy).to.be.defined
  })

  it('exports mean', function () {
    expect(mean).to.be.defined
  })

  it('exports meanBy', function () {
    expect(meanBy).to.be.defined
  })

  it('exports memoize', function () {
    expect(memoize).to.be.defined
  })

  it('exports merge', function () {
    expect(merge).to.be.defined
  })

  it('exports mergeWith', function () {
    expect(mergeWith).to.be.defined
  })

  it('exports method', function () {
    expect(method).to.be.defined
  })

  it('exports methodOf', function () {
    expect(methodOf).to.be.defined
  })

  it('exports min', function () {
    expect(min).to.be.defined
  })

  it('exports minBy', function () {
    expect(minBy).to.be.defined
  })

  it('exports mixin', function () {
    expect(mixin).to.be.defined
  })

  it('exports multiply', function () {
    expect(multiply).to.be.defined
  })

  it('exports negate', function () {
    expect(negate).to.be.defined
  })

  it('exports next', function () {
    expect(next).to.be.defined
  })

  it('exports noop', function () {
    expect(noop).to.be.defined
  })

  it('exports now', function () {
    expect(now).to.be.defined
  })

  it('exports nth', function () {
    expect(nth).to.be.defined
  })

  it('exports nthArg', function () {
    expect(nthArg).to.be.defined
  })

  it('exports omit', function () {
    expect(omit).to.be.defined
  })

  it('exports omitBy', function () {
    expect(omitBy).to.be.defined
  })

  it('exports once', function () {
    expect(once).to.be.defined
  })

  it('exports orderBy', function () {
    expect(orderBy).to.be.defined
  })

  it('exports over', function () {
    expect(over).to.be.defined
  })

  it('exports overArgs', function () {
    expect(overArgs).to.be.defined
  })

  it('exports overEvery', function () {
    expect(overEvery).to.be.defined
  })

  it('exports overSome', function () {
    expect(overSome).to.be.defined
  })

  it('exports pad', function () {
    expect(pad).to.be.defined
  })

  it('exports padEnd', function () {
    expect(padEnd).to.be.defined
  })

  it('exports padStart', function () {
    expect(padStart).to.be.defined
  })

  it('exports parseInt', function () {
    expect(parseInt).to.be.defined
  })

  it('exports partial', function () {
    expect(partial).to.be.defined
  })

  it('exports partialRight', function () {
    expect(partialRight).to.be.defined
  })

  it('exports partition', function () {
    expect(partition).to.be.defined
  })

  it('exports pick', function () {
    expect(pick).to.be.defined
  })

  it('exports pickBy', function () {
    expect(pickBy).to.be.defined
  })

  it('exports plant', function () {
    expect(plant).to.be.defined
  })

  it('exports property', function () {
    expect(property).to.be.defined
  })

  it('exports propertyOf', function () {
    expect(propertyOf).to.be.defined
  })

  it('exports pull', function () {
    expect(pull).to.be.defined
  })

  it('exports pullAll', function () {
    expect(pullAll).to.be.defined
  })

  it('exports pullAllBy', function () {
    expect(pullAllBy).to.be.defined
  })

  it('exports pullAllWith', function () {
    expect(pullAllWith).to.be.defined
  })

  it('exports pullAt', function () {
    expect(pullAt).to.be.defined
  })

  it('exports random', function () {
    expect(random).to.be.defined
  })

  it('exports range', function () {
    expect(range).to.be.defined
  })

  it('exports rangeRight', function () {
    expect(rangeRight).to.be.defined
  })

  it('exports rearg', function () {
    expect(rearg).to.be.defined
  })

  it('exports reduce', function () {
    expect(reduce).to.be.defined
  })

  it('exports reduceRight', function () {
    expect(reduceRight).to.be.defined
  })

  it('exports reject', function () {
    expect(reject).to.be.defined
  })

  it('exports remove', function () {
    expect(remove).to.be.defined
  })

  it('exports repeat', function () {
    expect(repeat).to.be.defined
  })

  it('exports replace', function () {
    expect(replace).to.be.defined
  })

  it('exports rest', function () {
    expect(rest).to.be.defined
  })

  it('exports result', function () {
    expect(result).to.be.defined
  })

  it('exports reverse', function () {
    expect(reverse).to.be.defined
  })

  it('exports round', function () {
    expect(round).to.be.defined
  })

  it('exports sample', function () {
    expect(sample).to.be.defined
  })

  it('exports sampleSize', function () {
    expect(sampleSize).to.be.defined
  })

  it('exports set', function () {
    expect(set).to.be.defined
  })

  it('exports setWith', function () {
    expect(setWith).to.be.defined
  })

  it('exports shuffle', function () {
    expect(shuffle).to.be.defined
  })

  it('exports size', function () {
    expect(size).to.be.defined
  })

  it('exports slice', function () {
    expect(slice).to.be.defined
  })

  it('exports snakeCase', function () {
    expect(snakeCase).to.be.defined
  })

  it('exports some', function () {
    expect(some).to.be.defined
  })

  it('exports sortBy', function () {
    expect(sortBy).to.be.defined
  })

  it('exports sortedIndex', function () {
    expect(sortedIndex).to.be.defined
  })

  it('exports sortedIndexBy', function () {
    expect(sortedIndexBy).to.be.defined
  })

  it('exports sortedIndexOf', function () {
    expect(sortedIndexOf).to.be.defined
  })

  it('exports sortedLastIndex', function () {
    expect(sortedLastIndex).to.be.defined
  })

  it('exports sortedLastIndexBy', function () {
    expect(sortedLastIndexBy).to.be.defined
  })

  it('exports sortedLastIndexOf', function () {
    expect(sortedLastIndexOf).to.be.defined
  })

  it('exports sortedUniq', function () {
    expect(sortedUniq).to.be.defined
  })

  it('exports sortedUniqBy', function () {
    expect(sortedUniqBy).to.be.defined
  })

  it('exports split', function () {
    expect(split).to.be.defined
  })

  it('exports spread', function () {
    expect(spread).to.be.defined
  })

  it('exports startCase', function () {
    expect(startCase).to.be.defined
  })

  it('exports startsWith', function () {
    expect(startsWith).to.be.defined
  })

  it('exports stubArray', function () {
    expect(stubArray).to.be.defined
  })

  it('exports stubFalse', function () {
    expect(stubFalse).to.be.defined
  })

  it('exports stubObject', function () {
    expect(stubObject).to.be.defined
  })

  it('exports stubString', function () {
    expect(stubString).to.be.defined
  })

  it('exports stubTrue', function () {
    expect(stubTrue).to.be.defined
  })

  it('exports subtract', function () {
    expect(subtract).to.be.defined
  })

  it('exports sum', function () {
    expect(sum).to.be.defined
  })

  it('exports sumBy', function () {
    expect(sumBy).to.be.defined
  })

  it('exports tail', function () {
    expect(tail).to.be.defined
  })

  it('exports take', function () {
    expect(take).to.be.defined
  })

  it('exports takeRight', function () {
    expect(takeRight).to.be.defined
  })

  it('exports takeRightWhile', function () {
    expect(takeRightWhile).to.be.defined
  })

  it('exports takeWhile', function () {
    expect(takeWhile).to.be.defined
  })

  it('exports tap', function () {
    expect(tap).to.be.defined
  })

  it('exports template', function () {
    expect(template).to.be.defined
  })

  it('exports templateSettings', function () {
    expect(templateSettings).to.be.defined
  })

  it('exports throttle', function () {
    expect(throttle).to.be.defined
  })

  it('exports thru', function () {
    expect(thru).to.be.defined
  })

  it('exports times', function () {
    expect(times).to.be.defined
  })

  it('exports toArray', function () {
    expect(toArray).to.be.defined
  })

  it('exports toFinite', function () {
    expect(toFinite).to.be.defined
  })

  it('exports toInteger', function () {
    expect(toInteger).to.be.defined
  })

  it('exports toIterator', function () {
    expect(toIterator).to.be.defined
  })

  it('exports toJSON', function () {
    expect(toJSON).to.be.defined
  })

  it('exports toLength', function () {
    expect(toLength).to.be.defined
  })

  it('exports toLower', function () {
    expect(toLower).to.be.defined
  })

  it('exports toNumber', function () {
    expect(toNumber).to.be.defined
  })

  it('exports toPairs', function () {
    expect(toPairs).to.be.defined
  })

  it('exports toPairsIn', function () {
    expect(toPairsIn).to.be.defined
  })

  it('exports toPath', function () {
    expect(toPath).to.be.defined
  })

  it('exports toPlainObject', function () {
    expect(toPlainObject).to.be.defined
  })

  it('exports toSafeInteger', function () {
    expect(toSafeInteger).to.be.defined
  })

  it('exports toString', function () {
    expect(toString).to.be.defined
  })

  it('exports toUpper', function () {
    expect(toUpper).to.be.defined
  })

  it('exports transform', function () {
    expect(transform).to.be.defined
  })

  it('exports trim', function () {
    expect(trim).to.be.defined
  })

  it('exports trimEnd', function () {
    expect(trimEnd).to.be.defined
  })

  it('exports trimStart', function () {
    expect(trimStart).to.be.defined
  })

  it('exports truncate', function () {
    expect(truncate).to.be.defined
  })

  it('exports unary', function () {
    expect(unary).to.be.defined
  })

  it('exports unescape', function () {
    expect(unescape).to.be.defined
  })

  it('exports union', function () {
    expect(union).to.be.defined
  })

  it('exports unionBy', function () {
    expect(unionBy).to.be.defined
  })

  it('exports unionWith', function () {
    expect(unionWith).to.be.defined
  })

  it('exports uniq', function () {
    expect(uniq).to.be.defined
  })

  it('exports uniqBy', function () {
    expect(uniqBy).to.be.defined
  })

  it('exports uniqWith', function () {
    expect(uniqWith).to.be.defined
  })

  it('exports uniqueId', function () {
    expect(uniqueId).to.be.defined
  })

  it('exports unset', function () {
    expect(unset).to.be.defined
  })

  it('exports unzip', function () {
    expect(unzip).to.be.defined
  })

  it('exports unzipWith', function () {
    expect(unzipWith).to.be.defined
  })

  it('exports update', function () {
    expect(update).to.be.defined
  })

  it('exports updateWith', function () {
    expect(updateWith).to.be.defined
  })

  it('exports upperCase', function () {
    expect(upperCase).to.be.defined
  })

  it('exports upperFirst', function () {
    expect(upperFirst).to.be.defined
  })

  it('exports value', function () {
    expect(value).to.be.defined
  })

  it('exports valueOf', function () {
    expect(valueOf).to.be.defined
  })

  it('exports values', function () {
    expect(values).to.be.defined
  })

  it('exports valuesIn', function () {
    expect(valuesIn).to.be.defined
  })

  it('exports without', function () {
    expect(without).to.be.defined
  })

  it('exports words', function () {
    expect(words).to.be.defined
  })

  it('exports wrap', function () {
    expect(wrap).to.be.defined
  })

  it('exports wrapperAt', function () {
    expect(wrapperAt).to.be.defined
  })

  it('exports wrapperChain', function () {
    expect(wrapperChain).to.be.defined
  })

  it('exports wrapperCommit', function () {
    expect(wrapperCommit).to.be.defined
  })

  it('exports wrapperLodash', function () {
    expect(wrapperLodash).to.be.defined
  })

  it('exports wrapperNext', function () {
    expect(wrapperNext).to.be.defined
  })

  it('exports wrapperPlant', function () {
    expect(wrapperPlant).to.be.defined
  })

  it('exports wrapperReverse', function () {
    expect(wrapperReverse).to.be.defined
  })

  it('exports wrapperToIterator', function () {
    expect(wrapperToIterator).to.be.defined
  })

  it('exports wrapperValue', function () {
    expect(wrapperValue).to.be.defined
  })

  it('exports xor', function () {
    expect(xor).to.be.defined
  })

  it('exports xorBy', function () {
    expect(xorBy).to.be.defined
  })

  it('exports xorWith', function () {
    expect(xorWith).to.be.defined
  })

  it('exports zip', function () {
    expect(zip).to.be.defined
  })

  it('exports zipObject', function () {
    expect(zipObject).to.be.defined
  })

  it('exports zipObjectDeep', function () {
    expect(zipObjectDeep).to.be.defined
  })

  it('exports zipWith', function () {
    expect(zipWith).to.be.defined
  })
})
