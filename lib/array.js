var isFunction = require('./var/isFunction'),
    isArrayLike = require('./var/isArrayLike'),
    isUndefined = require('./var/isUndefined'),
    proto = Array.prototype

/* ========== Properties ========== */

/**
 * Return the first element of array
 * @type {Any}
 */
if (isUndefined(proto.first)) {
  Object.defineProperty(
    proto,
    'first',
    {
      configurable: true,
      get: function () {
        return this[0]
      }
    }
  )
}

/**
 * Return the last element of array
 * @type {Any}
 */
if (isUndefined(proto.last)) {
  Object.defineProperty(
    proto,
    'last',
    {
      configurable: true,
      get: function () {
        return this.length > 0 ? this[this.length - 1] : undefined
      }
    }
  )
}

/**
 * Check if array is empty.
 * Additional it checks if all elements are undefined, e.g. [ , , ]
 * @type {[type]}
 */
if (isUndefined(proto.isEmpty)) {
  Object.defineProperty(
    proto,
    'isEmpty',
    {
      configurable: true,
      get: function () {
        if (!!this.length) {
          for (var i = 0, len = this.length; i < len; i++) {
            if (!isUndefined(this[i])) {
              return false
            }
          }
        }

        return true
      }
    }
  )
}

/* ========== Methods ========== */

if (isUndefined(Array.isArrayLike)) {
  Array.isArrayLike = isArrayLike
}

if (isUndefined(Array.isEmpty)) {
  Array.isEmpty = function isEmpty (target) {
    if (!!target.length) {
      for (var i = 0, len = target.length; i < len; i++) {
        if (!isUndefined(target[i])) {
          return false
        }
      }
    }

    return true
  }
}

/**
 * Alias of Array.indexOf(element) > -1
 * @type {Boolean}
 */
if (isUndefined(proto.contains)) {
  proto.contains = function contains (element) {
    return this.indexOf(element) > -1
  }
}

/**
 * element two arrays
 * @type {Boolean}
 */
if (isUndefined(proto.equalTo)) {
  proto.equalTo = function equalTo (target, mapfn, thisArg) {
    if (this.length !== target.length) {
      return false
    }

    var mapping = isFunction(mapfn),
        iterator = thisArg == undefined ? mapfn : function (a, b) { return mapfn.call(a, b) }

    for (var i = 0, len = this.length; i < len; i++) {
      if ((mapping ? iterator(this[i], target[i]) : this[i] === target[i]) !== true) {
        return false
      }
    }

    return true
  }
}

/**
 * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
 */
if (isUndefined(Array.from)) {
  Array.from = function from (target, mapfn, thisArg) {
    var result = [],
        mapping = isFunction(mapfn),
        iterator = thisArg == undefined ? mapfn : function (elem) {
          return mapfn.call(thisArg, elem)
        }

    for (var i = 0, len = target.length; i < len; i++) {
      if (!mapping || iterator(target[i]) === true) {
        result[i] = target[i]
      }
    }

    return result
  }
}

/**
 * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.of
 */
if (isUndefined(Array.of)) {
  Array.of = function of () {
    var result = []

    for (var i = 0, len = arguments.length; i < len; i++) {
      result[i] = arguments[i]
    }

    return result
  }
}

/**
 * Oeveride built-in methods to improve performances.
 * These methods are not replacing fast.js or lodash,
 * just make packages that use built-in methods faster.
 */

Array.prototype.forEach = function forEach (callback, thisArg) {
  var iterator = thisArg == undefined ? callback : function (elem, i, arr) { return callback.call(thisArg, elem, i, arr) }

  for (var i = 0, len = this.length; i < len; i++) {
    iterator(this[i], i, this)
  }

  return this
}

Array.prototype.forEachRight = function forEachRight (callback, thisArg) {
  var iterator = thisArg == undefined ? callback : function (elem, i, arr) { return callback.call(thisArg, elem, i, arr) }

  for (var i = this.length - 1; i >= 0; i--) {
    iterator(this[i], i, this)
  }

  return this
}

Array.prototype.some = function (callback, thisArg) {
  var iterator = thisArg == undefined ? callback : function (elem, i, arr) { return callback.call(thisArg, elem, i, arr) }

  for (var i = 0, len = this.length; i < len; i++) {
    if (iterator(this[i], i, this) === true) {
      return true
    }
  }

  return false
}

Array.prototype.every = function every (callback, thisArg) {
  var iterator = thisArg == undefined ? callback : function (elem, i, arr) { return callback.call(thisArg, elem, i, arr) }

  for (var i = 0, len = this.length; i < len; i++) {
    if (iterator(this[i], i, this) === false) {
      return false
    }
  }

  return true
}

Array.prototype.filter = function (callback, thisArg) {
  var iterator = thisArg == undefined ? callback : function (elem, i, arr) { return callback.call(thisArg, elem, i, arr) },
      result = []

  for (var i = 0, len = this.length; i < len; i++) {
    if (iterator(this[i], i, this)) {
      result[i] = this[i]
    }
  }

  return result
}


Array.prototype.map = function (callback, thisArg) {
  var iterator = thisArg == undefined ? callback : function (elem, i, arr) { return callback.call(thisArg, elem, i, arr) },
      result = []

  this.forEach(function (elem, i, arr) {
    result.push(iterator(elem, i, arr))
  })

  return result
}

Array.prototype.reduce = function reduce (callback, initialValue) {
  var i = 0,
      iv = arguments.length < 2 ? this[i++] : initialValue

  for (var len = this.length; i < len; i++) {
    iv = callback(iv, this[i], i, this)
  }

  return iv
}

Array.prototype.reduceRight = function reduceRight (callback, initialValue) {
  var i = this.length,
      iv = arguments.length < 2 ? this[i--] : initialValue

  while (i--) {
    iv = callback(iv, this[i], i, this)
  }

  return iv
}

Array.prototype.indexOf = function indexOf (subject, fromIndex) {
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
}

Array.prototype.lastIndexOf = function lastIndexOf (subject, fromIndex) {
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

  for (; i < length ; i++) {
    if (this[i] === subject) {
      index = i
    }
  }

  return index
}

Array.prototype.find = function (callback, thisArg) {
  var iterator = thisArg == undefined ? callback : function (elem, i, arr) { return callback.call(thisArg, elem, i, arr) }

  for (var i = 0, len = this.length; i < len; i++) {
    if (iterator(this[i], i, this) === true) {
      return this[i]
    }
  }
}

Array.prototype.findIndex = function (callback, thisArg) {
  var iterator = thisArg == undefined ? callback : function (elem, i, arr) { return callback.call(thisArg, elem, i, arr) }

  for (var i = 0, len = this.length; i < len; i++) {
    if (iterator(this[i], i, this) === true) {
      return i
    }
  }
}
