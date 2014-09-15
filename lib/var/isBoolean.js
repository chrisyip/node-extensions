var toString = require('./toString')

module.exports = function (target) {
  return target === true || target === false || toString.call(target) == '[object Boolean]'
}
