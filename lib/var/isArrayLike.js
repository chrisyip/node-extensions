var isObject = require('./isObject')

module.exports = function isArrayLike (target) {
  return Array.isArray(target) || (isObject(target) && typeof target.length == 'number') || Object.prototype.toString.call(target) === '[object String]'
}
