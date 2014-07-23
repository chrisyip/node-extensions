var isObject = require('./var/isObject'),
    assign = require('./var/assign'),
    merge = require('./var/merge'),
    isUndefined = require('./var/isUndefined'),
    isNull = require('./var/isNull')

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
