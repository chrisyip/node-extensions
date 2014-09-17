var semver = require('semver'),
    key = '__NODE_EXTENSIONS_VERSION__',
    previousVersion = global[key] || '0.0.0',
    pkg = require('./package.json'),
    fs = require('fs')

if (semver.gt(pkg.version, previousVersion)) {

  var files = fs.readdirSync('./lib')

  files.forEach(function (file) {
    var path = './lib/' + file,
        stats = fs.statSync(path)
    if (stats.isFile()) {
      require(path)
    }
  })

  Object.defineProperty(global, key, {
    configurable: false,
    enumerable: false,
    writable: false,
    value: pkg.version
  })
}
