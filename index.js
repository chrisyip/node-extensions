var semver = require('semver'),
    key = '__NODE_EXTENSIONS_VERSION__',
    previousVersion = global[key] || '0.0.0',
    pkg = require('./package.json')

if (semver.gt(pkg.version, previousVersion)) {
  require('./lib/array')
  require('./lib/boolean')
  require('./lib/function')
  require('./lib/object')
  require('./lib/string')

  Object.defineProperty(global, key, {
    configurable: false,
    enumerable: false,
    writable: false,
    value: pkg.version
  })
}
