var Benchmark = require('benchmark')
var fast = require('fast.js')
var _ = require('lodash')
var suites = []
var benchmark

var comparableMethods = [ 'bind' ]

comparableMethods.forEach(function (prop) {
  Function.prototype['_' + prop] = Function.prototype[prop]
})

require('../lib/function')

var thisArg = { name: 'node.js' }

function fn () {
  return this
}

comparableMethods.forEach(function (prop) {
  var suite = new Benchmark.Suite()

  suite
    .on('start', function () {
      console.log(prop)
    })
    .add('native         ', function () {
      fn['_' + prop](thisArg)()
    })
    .add('node-extensions', function () {
      fn[prop](thisArg)()
    })
    .add('fast.js        ', function () {
      fast[prop](fn, thisArg)()
    })
    .add('lodash         ', function () {
      _[prop](fn, thisArg)()
    })

  suites.push(suite)
})

benchmark = {
  suites: suites,
  run: function (options) {
    require('./run')(suites, options)
  }
}

module.exports = benchmark

if (process.argv.indexOf('--run') > -1) {
  benchmark.run()
}
