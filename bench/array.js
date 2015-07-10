var Benchmark = require('benchmark')
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var fast = require('fast.js')
var _ = require('lodash')
var suites = []
var callback = function () {}
var benchmark

var comparableMethods = [
  'forEach',
  'map',
  'some',
  'every',
  'filter',
  'reduce',
  'reduceRight',
  'indexOf',
  'lastIndexOf',
  'find',
  'findIndex'
]

comparableMethods.forEach(function (prop) {
  Array.prototype['_' + prop] = Array.prototype[prop]
})

require('../lib/array')

;
['forEach', 'map', 'some', 'every', 'filter', 'find', 'findIndex'].forEach(function (prop) {
  var suite = new Benchmark.Suite()

  suite
    .on('start', function () {
      console.log(prop, 'without context')
    })
    .add('native         ', function () {
      arr['_' + prop](callback)
    })
    .add('node-extensions', function () {
      arr[prop](callback)
    })
    .add('fast.js        ', function () {
      fast[prop](arr, callback)
    })
    .add('lodash         ', function () {
      _[prop](arr, callback)
    })

  suites.push(suite)
})

var thisArg = {}

;
['forEach', 'map', 'some', 'every', 'filter', 'find', 'findIndex'].forEach(function (prop) {
  var suite = new Benchmark.Suite()

  suite
    .on('start', function () {
      console.log(prop, 'with context')
    })
    .add('native         ', function () {
      arr['_' + prop](callback, thisArg)
    })
    .add('node-extensions', function () {
      arr[prop](callback, thisArg)
    })
    .add('fast.js        ', function () {
      fast[prop](arr, callback, thisArg)
    })
    .add('lodash         ', function () {
      _[prop](arr, callback, thisArg)
    })

  suites.push(suite)
})

;
['indexOf', 'lastIndexOf'].forEach(function (prop) {
  var suite = new Benchmark.Suite()

  suite
    .on('start', function () {
      console.log(prop, 'without context')
    })
    .add('native         ', function () {
      arr['_' + prop](5)
    })
    .add('node-extensions', function () {
      arr[prop](5)
    })
    .add('fast.js        ', function () {
      fast[prop](arr, 5)
    })
    .add('lodash         ', function () {
      _[prop](arr, 5)
    })

  suites.push(suite)
})

;
['indexOf', 'lastIndexOf'].forEach(function (prop) {
  var suite = new Benchmark.Suite()

  suite
    .on('start', function () {
      console.log(prop, 'with context')
    })
    .add('native         ', function () {
      arr['_' + prop](5, 3)
    })
    .add('node-extensions', function () {
      arr[prop](5, 3)
    })
    .add('fast.js        ', function () {
      fast[prop](arr, 5, 3)
    })
    .add('lodash         ', function () {
      _[prop](arr, 5, 3)
    })

  suites.push(suite)
})

;
['reduce', 'reduceRight'].forEach(function (prop) {
  var suite = new Benchmark.Suite()

  suite
    .on('start', function () {
      console.log(prop, 'without context')
    })
    .add('native         ', function () {
      arr['_' + prop](callback)
    })
    .add('node-extensions', function () {
      arr[prop](callback)
    })
    .add('fast.js        ', function () {
      fast[prop](arr, callback)
    })
    .add('lodash         ', function () {
      _[prop](arr, callback)
    })

  suites.push(suite)
})

;
['reduce', 'reduceRight'].forEach(function (prop) {
  var suite = new Benchmark.Suite()

  suite
    .on('start', function () {
      console.log(prop, 'with context')
    })
    .add('native         ', function () {
      arr['_' + prop](callback, 3)
    })
    .add('node-extensions', function () {
      arr[prop](callback, 3)
    })
    .add('fast.js        ', function () {
      fast[prop](arr, callback, 3)
    })
    .add('lodash         ', function () {
      _[prop](arr, callback, 3)
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
