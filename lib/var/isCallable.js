var isFunction = require('./isFunction')

module.exports = function (target) {
  // symbol is not supported
  if (isFunction(target) || target != null && typeof target == 'object' && isFunction(target.call)) {
    return true
  }

  return false
}
