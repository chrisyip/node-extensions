var isArrayLike = require('./isArrayLike')

function flatten (input, ref) {
  var result = Array.isArray(ref) ? ref : []

  for (var i = 0, len = input.length; i < len; i++) {
    var item = input[i]

    if (isArrayLike(item)) {
      flatten(item, result)
    } else {
      result[result.length] = item
    }
  }

  return result
}

module.exports = flatten
