var isCallable = require('./var/isCallable'),
    isFunction = require('./var/isFunction'),
    isUndefined = require('./var/isUndefined')

/* ========== Methods ========== */

/**
 * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable
 */
if (isUndefined(Function.isCallable)) {
  Function.isCallable = isCallable
}

if (isUndefined(Function.isFunction)) {
  Function.isFunction = isFunction
}
