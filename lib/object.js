var isObject = require('./var/isObject'),
    assign = require('./var/assign'),
    merge = require('./var/merge'),
    isUndefined = require('./var/isUndefined'),
    isNull = require('./var/isNull')

var slice = require('./var/slice')
var pick = require('./var/pick')
var proto = Object.prototype

/* ========== Methods ========== */

if (isUndefined(Object.isUndefined)) {
  Object.isUndefined = isUndefined
}

if (isUndefined(Object.isObject)) {
  Object.isObject = isObject
}

if (isUndefined(Object.isNull)) {
  Object.isNull = isNull
}

/*
 * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
 */
if (isUndefined(Object.assign)) {
  Object.assign = assign
}

/**
 * Deep verion of Object.assign
 */
if (isUndefined(Object.merge)) {
  Object.merge = merge
}

if (isUndefined(Object.pick)) {
  Object.pick = pick
}

if (isUndefined(Object.filter)) {
  Object.filter = pick
}

function picker () {
  return pick.apply(null, [].concat(this, slice(arguments)))
}

if (isUndefined(proto.pick)) {
  proto.pick = picker
}

if (isUndefined(proto.filter)) {
  proto.filter = picker
}
