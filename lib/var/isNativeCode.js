var isFunction = require('./isFunction')

module.exports = function isNativeCode (input) {
  return isFunction(input) && input.indexOf('{ [native code] }') > -1
}
