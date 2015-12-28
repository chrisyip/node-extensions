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

Function.prototype.bind = function (thisArg) {
  if (!isFunction(this)) {
    throw new TypeError('Bind must be called on a function')
  }

  var self = this
  var argsLen = arguments.length - 1

  if (argsLen < 0) {
    argsLen = 0
  }

  var args = new Array(argsLen)

  for (var i = 0; i < argsLen ; i++) {
    args[i] = arguments[i + 1]
  }

  return function () {
    var _args = new Array(argsLen + arguments.length)
    var i = 0

    for (; i < argsLen; i++) {
      _args[i] = args[i]
    }

    for (var len = _args.length; i < len; i++) {
      _args[i] = arguments[i - argsLen]
    }

    return self.apply(thisArg, _args)
  }
}
