var proto = String.prototype
var bind = require('../var/defineFn')(proto)

module.exports = function repeat (str, count) {
  var times = Math.floor(count)

  if (isNaN(times)) {
    return ''
  }

  if (times < 0) {
    throw new RangeError('repeat count must be non-negative')
  }

  var result = ''

  for (; times-- > 0; ) {
    result += str
  }

  return result
}
