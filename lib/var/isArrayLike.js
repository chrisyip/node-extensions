var isObject = require('./isObject'),
    toString = require('./toString')

module.exports = function isArrayLike (target) {
  return Array.isArray(target) || (isObject(target) && toString.call(target.length) == '[object Number]') || toString.call(target) === '[object String]'
}
