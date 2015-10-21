'use strict'

var isFunction = require('./var/isFunction')
var isArrayLike = require('./var/isArrayLike')
var isUndefined = require('./var/isUndefined')
var flattenArrayLike = require('./var/flattenArrayLike')
var isNativeCode = require('./var/isNativeCode')
var arrayFilter = require('./var/arrayFilter')
var defineGetter = require('./var/defineGetter')
var slicer = require('./var/slice')
var proto = Array.prototype
var assign = require('./var/assign')
var bind = require('./var/defineFn')(proto)

/* ========== Properties ========== */

/**
 * Return the first element of array
 * @type {Any}
 */
if (isUndefined(proto.first)) {
  defineGetter(proto, 'first', function () { return this[0] })
}

/**
 * Return the last element of array
 * @type {Any}
 */
if (isUndefined(proto.last)) {
  defineGetter(proto, 'last', function () { return this.length > 0 ? this[this.length - 1] : undefined })
}

/**
 * Check if array is empty.
 * Additional it checks if all elements are undefined, e.g. [ , , ]
 * @type {[type]}
 */
if (isUndefined(proto.isEmpty)) {
  defineGetter(proto, 'isEmpty', function () {
    if (this.length) {
      for (var i = 0, len = this.length; i < len; i++) {
        if (!isUndefined(this[i])) {
          return false
        }
      }
    }

    return true
  })
}

/* ========== Methods ========== */

if (isUndefined(Array.isArrayLike)) {
  bind('isArrayLike', isArrayLike, Array)
}

if (isUndefined(Array.isEmpty)) {
  bind('isEmpty', function isEmpty (target) {
    if (target.length) {
      for (var i = 0, len = target.length; i < len; i++) {
        if (!isUndefined(target[i])) {
          return false
        }
      }
    }

    return true
  }, Array)
}

/**
 * Alias of Array.indexOf(element) > -1
 * @type {Boolean}
 */

function includes (element, position) {
  return this.indexOf(element, isNaN(position) ? 0 : position) > -1
}

if (!isNativeCode(proto.contains)) {
  bind('contains', includes)
}

if (!isNativeCode(proto.includes)) {
  bind('includes', includes)
}

/**
 * Alias of Array.splice(position, 0, element)
 * @type {Array} self
 */
if (isUndefined(proto.insert)) {
  bind('insert', function insert (element, position) {
    var startPos = Math.floor(position)
    this.splice(isNaN(startPos) ? this.length : startPos, 0, element)
    return this
  })
}

/**
 * Alias of Array.splice(position, 1)
 * @type {Any} element that removed
 */
if (isUndefined(proto.remove)) {
  bind('remove', function remove (element, startPosition) {
    var startPos = Math.floor(startPosition),
        index = this.indexOf(element, isNaN(startPos) ? 0 : startPos)

    if (index === -1) {
      return
    }

    return this.splice(index, 1)[0]
  })
}

/**
 * Flatten multidimensional array to single dimensional array.
 * This method will modify original array
 * @type {Array} flattened array
 */
if (isUndefined(proto.flatten)) {
  bind('flatten', function flatten () {
    return flattenArrayLike(this)
  })
}

/**
 * element two arrays
 * @type {Boolean}
 */
if (isUndefined(proto.equalTo)) {
  bind('equalTo', function equalTo (target, mapfn, thisArg) {
    if (this.length !== target.length) {
      return false
    }

    var mapping = isFunction(mapfn),
        iterator = thisArg == undefined ? mapfn : function (a, b) { return mapfn.call(thisArg, a, b) }

    for (var i = 0, len = this.length; i < len; i++) {
      if ((mapping ? iterator(this[i], target[i]) : this[i] === target[i]) !== true) {
        return false
      }
    }

    return true
  })
}

/**
 * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
 */
if (isUndefined(Array.from)) {
  bind('from', function from (target, mapfn, thisArg) {
    var result = [],
        mapping = isFunction(mapfn),
        iterator = thisArg == undefined ? mapfn : function (elem) {
          return mapfn.call(thisArg, elem)
        }

    for (var i = 0, len = target.length; i < len; i++) {
      result[i] = mapping ? iterator(target[i]) : target[i]
    }

    return result
  }, Array)
}

/**
 * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.of
 */
if (isUndefined(Array.of)) {
  bind('of', function of () {
    var result = []

    for (var i = 0, len = arguments.length; i < len; i++) {
      result[i] = arguments[i]
    }

    return result
  }, Array)
}

if (!isNativeCode(proto.compact)) {
  bind('compact', function compact (callback, thisArg) {
    return arrayFilter(this, isFunction(callback) ? callback : function (item) {
      return item != null
    }, thisArg)
  })
}

/**
 * Oeveride built-in methods to improve performances.
 * These methods are not replacing fast.js or lodash,
 * just make packages that use built-in methods faster.
 */

bind('slice', function slice (starPos, endPos) {
  return slicer(this, starPos, endPos)
})

bind('forEach', function forEach (callback, thisArg) {
  var iterator = thisArg == undefined ? callback : function (elem, i, arr) { return callback.call(thisArg, elem, i, arr) }

  for (var i = 0, len = this.length; i < len; i++) {
    iterator(this[i], i, this)
  }

  return this
})

bind('forEachRight', function forEachRight (callback, thisArg) {
  var iterator = thisArg == undefined ? callback : function (elem, i, arr) { return callback.call(thisArg, elem, i, arr) }

  for (var i = this.length - 1; i >= 0; i--) {
    iterator(this[i], i, this)
  }

  return this
})

bind('some', function some (callback, thisArg) {
  var iterator = thisArg == undefined ? callback : function (elem, i, arr) { return callback.call(thisArg, elem, i, arr) }

  for (var i = 0, len = this.length; i < len; i++) {
    if (iterator(this[i], i, this)) {
      return true
    }
  }

  return false
})

bind('every', function every (callback, thisArg) {
  var iterator = thisArg == undefined ? callback : function (elem, i, arr) { return callback.call(thisArg, elem, i, arr) }

  for (var i = 0, len = this.length; i < len; i++) {
    if (!iterator(this[i], i, this)) {
      return false
    }
  }

  return true
})

bind('filter', function filter (callback, thisArg) {
  return arrayFilter(this, callback, thisArg)
})

bind('map', function map (callback, thisArg) {
  var iterator = thisArg == undefined ? callback : function (elem, i, arr) { return callback.call(thisArg, elem, i, arr) },
      result = []

  for (var i = 0, len = this.length; i < len; i++) {
    result[i] = iterator(this[i], i, this)
  }

  return result
})

bind('reduce', function reduce (callback, initialValue) {
  var i = 0,
      iv = arguments.length < 2 ? this[i++] : initialValue

  for (var len = this.length; i < len; i++) {
    iv = callback(iv, this[i], i, this)
  }

  return iv
})

bind('reduceRight', function reduceRight (callback, initialValue) {
  var i = this.length
  var iv = arguments.length < 2 ? this[--i] : initialValue

  while (i--) {
    iv = callback(iv, this[i], i, this)
  }

  return iv
})

bind('indexOf', function indexOf (subject, fromIndex) {
  var i = fromIndex >> 0,
      length = this.length

  if (i >= length) {
    return -1
  }

  if (i < 0) {
    i += length

    if (i < 0) {
      i = 0
    }
  }

  for (; i < length; i++) {
    if (this[i] === subject) {
      return i
    }
  }

  return -1
})

bind('lastIndexOf', function lastIndexOf (subject, fromIndex) {
  var length = this.length,
      index = -1,
      i = 0

  if (arguments.length > 1) {
    if (typeof fromIndex == 'number') {
      length = fromIndex
    } else {
      length = Math.floor(fromIndex)
    }

    if (length < 0) {
      length = length + this.length

      if (length < 0) {
        return -1
      }
    } else if (length > this.length) {
      length = this.length
    }

    length = length + 1
  }

  for (; i < length; i++) {
    if (this[i] === subject) {
      index = i
    }
  }

  return index
})

bind('find', function find (callback, thisArg) {
  var iterator = thisArg == undefined ? callback : function (elem, i, arr) { return callback.call(thisArg, elem, i, arr) }

  for (var i = 0, len = this.length; i < len; i++) {
    if (iterator(this[i], i, this)) {
      return this[i]
    }
  }
})

bind('findIndex', function findIndex (callback, thisArg) {
  var iterator = thisArg == undefined ? callback : function (elem, i, arr) { return callback.call(thisArg, elem, i, arr) }

  for (var i = 0, len = this.length; i < len; i++) {
    if (iterator(this[i], i, this)) {
      return i
    }
  }

  return -1
})

if (isUndefined(proto.pluck)) {
  bind('pluck', function (path) {
    var result = []
    var p = String(path)

    for (var i = 0; i < this.length; i++) {
      result.push(this[i][p])
    }

    return result
  })
}
