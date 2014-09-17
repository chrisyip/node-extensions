require('../')

var assert = require('assert'),
    pkg = require('../package.json'),
    semver = require('semver')

describe('Node-extensions', function(){
  it('should initialize successfully', function () {
    assert.equal(true, semver.eq(pkg.version, global.__NODE_EXTENSIONS_VERSION__))
  })
})
