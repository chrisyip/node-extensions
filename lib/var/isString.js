var toString = require('./toString')

module.exports = function (str) {
  return typeof str == 'string' || toString.call(str) == '[object String]'
}
