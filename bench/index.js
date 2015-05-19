console.log('Using node %s', process.versions.node)

var pkg = require('../package.json')

console.log('Using node-extensions %s, fast.js %s, lodash %s\n', pkg.version, pkg.devDependencies['fast.js'], pkg.devDependencies.lodash)

console.log('Running Array benchmarks...\n')

var array = require('./array')

array.run()
