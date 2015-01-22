/* jshint -W041 */

var proto = String.prototype,
    isObject = require('./var/isObject'),
    isUndefined = require('./var/isUndefined'),
    isString = require('./var/isString'),
    smallWords = 'a an and as at but by en for if in of on or the to v v. via vs vs.'.split(' '),
    rWord = /([a-zA-Z])(.*)/,
    rInter = /#\{([a-z0-9][\w]*)\}/g,
    rCamel = /[-_\s]+(.)/g

function toCapitalCase (str) {
  var match = str.match(rWord)
  return match ? match[1].toUpperCase() + match[2] : str
}

// http://stackoverflow.com/a/10425344
function toCamelCase (str) {
  return str.toLowerCase().replace(rCamel, function(match, group1) {
    return group1.toUpperCase()
  })
}

/* ========== Properties ========== */

/**
 * Check if string is empty.
 * Additional it checks if it only contains empty characters (\s).
 */
if (isUndefined(proto.isEmpty)) {
  Object.defineProperty(
    proto,
    'isEmpty',
    {
      configurable: true,
      get: function () {
        return !this.trim().length
      }
    }
  )
}

/* ========== Methods ========== */

if (isUndefined(String.isEmpty)) {
  String.isEmpty = function isEmpty (substr) {
    return typeof substr == 'string' && !substr.trim().length
  }
}

/**
 * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.contains
 * @type {Boolean}
 */
if (isUndefined(proto.contains)) {
  proto.contains = function contains (substr, position) {
    return this.indexOf(substr, isNaN(position) ? 0 : position) > -1
  }
}

if (isUndefined(proto.toCamelCase)) {
  proto.toCamelCase = function () {
    return toCamelCase(this)
  }
}

if (isUndefined(proto.toCapitalCase)) {
  proto.toCapitalCase = function () {
    if (this.length === 0) {
      return ''
    }

    if (!/\s+/.test(this)) {
      return toCapitalCase(this)
    }

    var words = this.split(/\s+/),
        spaces = this.match(/(\s)+/g),
        result = ''

    for (var i = 0, len = words.length; i < len; i++) {
      if (smallWords.indexOf(words[i]) > -1) {
        result += words[i] + spaces[i]
        continue
      }

      result += toCapitalCase(words[i]) + (spaces[i] || '')
    }

    return result
  }
}

if (isUndefined(proto.slugify)) {
  proto.slugify = function (separactor) {
    return this.replace(/[^0-9a-z]/ig, separactor || '-').replace(/^[-]+|[-]+$/, '')
  }
}

if (isUndefined(proto.interpolate)) {
  proto.interpolate = function interpolate (args) {
    var substr = this.match(rInter),
        result = this,
        vars

    if (substr == undefined || (!Array.isArray(args) && !isObject(args))) {
      return this
    }

    vars = substr.map(function (str) {
      return str.replace(/(^#\{)|(\}$)/g, '')
    })

    if (isObject(args) || Array.isArray(args)) {
      for (var i = 0, len = substr.length; i < len; i++) {
        result = result.replace(substr[i], args[vars[i]])
      }
    }

    return result
  }
}

/**
 * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.startswith
 */
if (isUndefined(proto.startsWith)) {
  proto.startsWith = function (substr, position) {
    if (substr instanceof RegExp) {
      throw new TypeError('Invalid type: first can\'t be a Regular Expression')
    }

    if (typeof substr != 'string') {
      substr = String(substr)
    }

    var pos = position >> 0

    return this.indexOf(substr, pos) === pos
  }
}

/**
 * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.endswith
 */
if (isUndefined(proto.endsWith)) {
  proto.endsWith = function endsWith (substr, position) {
    if (substr instanceof RegExp) {
      throw new TypeError('Invalid type: first can\'t be a Regular Expression')
    }

    if (typeof substr !== 'string') {
      substr = String(substr)
    }

    var pos = position == undefined ? this.length : parseInt(position, 10)

    return pos > 0 && this.substr(pos - substr.length, substr.length) == substr
  }
}

/**
 * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.repeat
 */
if (isUndefined(proto.repeat)) {
  proto.repeat = function (count) {
    var times = parseInt(count, 10)

    if (Number.isNaN(times)) {
      return this
    }

    var result = ''

    for (; times-- > 0; ) {
      result += this
    }

    return result
  }
}

if (isUndefined(String.isString)) {
  String.isString = isString
}
