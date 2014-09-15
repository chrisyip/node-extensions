var toString = require('./toString')

module.exports = function (target) {
  return toString.call(target) == '[object Null]'
}
