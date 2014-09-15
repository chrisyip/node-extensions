if (!global.__NODE_EXTENSIONS_LOADED__) {
  require('./lib/object')
  require('./lib/array')
  require('./lib/string')
  require('./lib/function')

  Object.defineProperty(global, '__NODE_EXTENSIONS_LOADED__', {
    configurable: false,
    enumerable: false,
    writable: false,
    value: true
  })
}
