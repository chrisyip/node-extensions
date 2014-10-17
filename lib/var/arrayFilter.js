var isUndefined = require('./isUndefined')

module.exports = function filter (input, callback, thisArg) {
  var iterator = isUndefined(thisArg) ? callback : function (elem, i, arr) { return callback.call(thisArg, elem, i, arr) },
      result = []

  for (var i = 0, len = input.length; i < len; i++) {
    if (iterator(input[i], i, input)) {
      result[result.length] = input[i]
    }
  }

  return result
}
