var isObject = require('./isObject')

function merge (target) {
  if (arguments.length < 2) {
    return target
  }

  target = Object(target)

  var s, i, props, source, key

  for (s = 1; s < arguments.length; ++s) {
    source = Object(arguments[s])

    props = Object.keys(source)

    for (i = 0; i < props.length; ++i) {
      key = props[i]

      if (isObject(target[key]) && isObject(source[key])) {
        merge(target[key], source[key])
      } else {
        target[key] = source[key]
      }
    }
  }

  return target
}

module.exports = merge
