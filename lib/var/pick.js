/* eslint-disable block-scoped-var */

var isFunction = require('./isFunction')
var flatten = require('./flattenArrayLike')
var isString = require('./isString')
var slice = require('./slice')

module.exports = function pick (input, condition, thisArg) {
  if (input == null) {
    return {}
  }

  var result = {}
  var i

  if (isFunction(condition)) {
    var keys = Object.keys(input)
    var cb = thisArg == null ? condition : function (value, key, input) {
      return condition.call(thisArg, value, key, input)
    }

    for (i = 0; i < keys.length; i++) {
      var key = keys[i]
      if (cb(input[key], key, input)) {
        result[key] = input[key]
      }
    }

    return result
  }

  var conditions = flatten(slice(arguments, 1))

  for (i = 0; i < conditions.length; i++) {
    var key = conditions[i]

    if (!isString(key)) {
      key = String(key)
    }

    if (key in input) {
      result[key] = input[key]
    }
  }

  return result
}
