module.exports = function defineGetter (thisArg, name, getter) {
  Object.defineProperty(thisArg, name, {
    configurable: true,
    get: getter,
    set: function (value) {
      Object.defineProperty(this, name, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: value
      })
    }
  })
}
