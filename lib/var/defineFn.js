/**
 * By using enumerable: false, can resolve for..in issue
 */
module.exports = function (proto) {
  return function defineFn (name, fn, target) {
    Object.defineProperty(target || proto, name, {
      enumerable: false,
      writable: true,
      configurable: true,
      value: fn
    })
  }
}
