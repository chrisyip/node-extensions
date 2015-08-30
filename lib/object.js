var isObject = require('./var/isObject'),
    assign = require('./var/assign'),
    merge = require('./var/merge'),
    isUndefined = require('./var/isUndefined'),
    isNull = require('./var/isNull')

var isString = require('./var/isString')
var slice = require('./var/slice')
var pick = require('./var/pick')
var proto = Object.prototype
var bind = require('./var/defineFn')(proto)

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

function picker () {
  return pick.apply(null, [].concat(this, slice(arguments)))
}

if (isUndefined(proto.pick)) {
  bind('pick', picker)
}

if (isUndefined(Object.props)) {
  Object.props = function (target, properties) {
    var props = isString(properties) ? properties : String(properties)
    props = props.split('.')

    var prop = target

    for (var i = 0; i < props.length; i++) {
      if (props[i] in prop) {
        prop = prop[props[i]]
      } else {
        return
      }
    }

    return prop
  }
}

if (isUndefined(Object.hasProps)) {
  Object.hasProps = function (target, properties) {
    var props = isString(properties) ? properties : String(properties)
    props = props.split('.')

    var prop = target

    for (var i = 0; i < props.length; i++) {
      if (props[i] in prop) {
        prop = prop[props[i]]
      } else {
        return false
      }
    }

    return true
  }
}
