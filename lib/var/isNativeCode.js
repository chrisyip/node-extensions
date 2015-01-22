var isFunction = require('./isFunction')

module.exports = function isNativeCode (input) {
  return isFunction(input) && input.toString().indexOf('{ [native code] }') > -1
}
