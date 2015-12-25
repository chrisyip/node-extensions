var proto = String.prototype
var bind = require('./var/defineFn')(proto)
var isObject = require('./var/isObject')
var isUndefined = require('./var/isUndefined')
var isString = require('./var/isString')
var isNativeCode = require('./var/isNativeCode.js')
var defineGetter = require('./var/defineGetter.js')
var smallWords = 'a an and as at but by en for if in of on or the to v v. via vs vs.'.split(' ')
var rWord = /([a-zA-Z])(.*)/
var rtplVars = /[$#]\{([a-z0-9][\w]*)\}/g
var rCamel = /[-_\s]+(.)/g

/* ========== Properties ========== */

/**
 * Check if string is empty.
 * Additional it checks if it only contains empty characters (\s).
 */
if (isUndefined(proto.isEmpty)) {
  defineGetter(proto, 'isEmpty', function () {return !this.trim().length})
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
function includes (substr, position) {
  return this.indexOf(substr, isNaN(position) ? 0 : position) > -1
}

if (!isNativeCode(proto.includes)) {
  bind('includes', includes)
}

if (!isNativeCode(proto.contains)) {
  bind('contains', includes)
}

// http://stackoverflow.com/a/10425344
function stringToCamelCase (str) {
  return str.toLowerCase().replace(rCamel, function (match, group1) {
    return group1.toUpperCase()
  })
}

if (isUndefined(proto.toCamelCase)) {
  bind('toCamelCase', function toCamelCase (convertFirstLetter) {
    var str = stringToCamelCase(this)

    if (convertFirstLetter) {
      str = str[0].toUpperCase() + str.slice(1)
    }

    return str
  })
}

if (isUndefined(proto.caseCmp)) {
  bind('caseCmp', function caseCpm (str, caseSensitive) {
    if (isString(str)) {
      return caseSensitive ? this.toString() === str.toString() : this.toLowerCase() === str.toLowerCase()
    }

    return false
  })
}

function stringToCapitalCase (str) {
  var match = str.match(rWord)
  return match ? match[1].toUpperCase() + match[2] : str
}

if (isUndefined(proto.toCapitalCase)) {
  bind('toCapitalCase', function toCapitalCase () {
    if (this.length === 0) {
      return this
    }

    if (!/\s+/.test(this)) {
      return stringToCapitalCase(this)
    }

    var words = this.split(/\s+/),
        spaces = this.match(/(\s)+/g),
        result = ''

    for (var i = 0, len = words.length; i < len; i++) {
      if (smallWords.indexOf(words[i]) > -1) {
        result += words[i] + spaces[i]
        continue
      }

      result += stringToCapitalCase(words[i]) + (spaces[i] || '')
    }

    return result
  })
}

if (isUndefined(proto.slugify)) {
  bind('slugify', function slugify (separactor) {
    return this.replace(/[^0-9a-z]/ig, separactor || '-').replace(/^[-]+|[-]+$/, '')
  })
}

/**
 * Works like template string
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 */

function interpolate (args) {
  var substr = this.match(rtplVars)
  var result = this
  var vars
  var argv

  if (isObject(args)) {
   argv = args
 } else if (Array.isArray(args)) {
   argv = argv = args
  } else if (arguments.length) {
   argv = [].slice.call(arguments)
  }

  if (substr == undefined || !Array.isArray(argv) && !isObject(argv)) {
   return this.toString()
  }

  vars = substr.map(function (str) {
   return str.replace(/(^[$#]\{)|(\}$)/g, '')
  })

  if (isObject(argv) || Array.isArray(argv)) {
   for (var i = 0, len = substr.length; i < len; i++) {
     result = result.replace(substr[i], argv[vars[i]])
   }
  }

  return result
}

if (isUndefined(proto.interpolate)) {
  bind('interpolate', interpolate)
}

/**
 * Aliases of String#interpolate()
 */

if (isUndefined(proto.tpl)) {
  bind('tpl', interpolate)
}

if (isUndefined(proto.template)) {
  bind('template', interpolate)
}

/**
 * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.startswith
 */
if (!isNativeCode(proto.startsWith)) {
  bind('startsWith', function startsWith (substr, position) {
    if (substr instanceof RegExp) {
      throw new TypeError('Invalid type: first can\'t be a Regular Expression')
    }

    if (typeof substr != 'string') {
      substr = String(substr)
    }

    var pos = position >> 0

    return this.indexOf(substr, pos) === pos
  })
}

/**
 * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.endswith
 */
if (!isNativeCode(proto.endsWith)) {
  bind('endsWith', function endsWith (substr, position) {
    if (substr instanceof RegExp) {
      throw new TypeError('Invalid type: first can\'t be a Regular Expression')
    }

    if (typeof substr !== 'string') {
      substr = String(substr)
    }

    var pos = position == undefined ? this.length : parseInt(position, 10)

    return pos > 0 && this.substr(pos - substr.length, substr.length) == substr
  })
}

/**
 * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.repeat
 */
if (isUndefined(proto.repeat)) {
  bind('repeat', function repeat (count) {
    var times = parseInt(count, 10)

    if (isNaN(times)) {
      return this
    }

    var result = ''

    for (; times-- > 0; ) {
      result += this
    }

    return result
  })
}

if (isUndefined(String.isString)) {
  String.isString = isString
}
