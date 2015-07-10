require('../')

var assert = require('assert')
var pkg = require('../package.json')
var semver = require('semver')

describe('Node-extensions', function () {
  it('should initialize successfully', function () {
    assert.equal(true, semver.eq(pkg.version, global.__NODE_EXTENSIONS_VERSION__))
  })
})
