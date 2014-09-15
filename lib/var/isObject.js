var toString = require('./toString')

module.exports = function (target) {
  return target != null && toString.call(target) == '[object Object]'
}
