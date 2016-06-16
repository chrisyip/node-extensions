var proto = String.prototype
var bind = require('../var/defineFn')(proto)
var repeat = require('./repeat')
var isString = require('../var/isString')
var isUndefined = require('../var/isUndefined')

function getPadString (padString) {
  if (isUndefined(padString)) {
    return ' '
  }

  if (!isString(padString)) {
    return String(padString)
  }

  return padString
}

function repeatPadString (str, padString, targetlength) {
  var len = targetlength - str.length

  if (len <= 0) {
    return ''
  }

  if (len === padString.length) {
    return padString
  }

  if (len > padString.length) {
    padString = repeat(padString, Math.ceil(len / padString.length)).slice(0, len)
  }

  return padString.slice(0, len)
}

module.exports = {
  padStart: function padStart (targetlength, padString) {
    var ps = getPadString(padString)

    var str = this

    return ps ? repeatPadString(str, ps, targetlength) + str : str
  },

  padEnd: function padEnd (targetlength, padString) {
    var ps = getPadString(padString)

    var str = this

    return ps ? str + repeatPadString(str, ps, targetlength) : str
  }
}
