var assert = require('assert')

require('../lib/number')

describe('Number', function () {
  describe('#isFloat()', function () {
    it('should return true if number is float', function () {
      assert.equal(true, Number.isFloat(1.1))
      assert.equal(true, Number.isFloat(-1.2))

      assert.equal(false, Number.isFloat(1))
      assert.equal(false, Number.isFloat(-1))
      assert.equal(false, Number.isFloat(0))
      assert.equal(false, Number.isFloat(1.0))
      assert.equal(false, Number.isFloat(0.0))
      assert.equal(false, Number.isFloat('0'))
      assert.equal(false, Number.isFloat(''))
      assert.equal(false, Number.isFloat(true))
      assert.equal(false, Number.isFloat({}))
      assert.equal(false, Number.isFloat(NaN))
      assert.equal(false, Number.isFloat(function () {}))
    })
  })

  describe('#isInteger()', function () {
    it('should return true if number is float', function () {
      assert.equal(true, Number.isInteger(1))
      assert.equal(true, Number.isInteger(-1))
      assert.equal(true, Number.isInteger(0))
      assert.equal(true, Number.isInteger(1.0))
      assert.equal(true, Number.isInteger(0.0))

      assert.equal(false, Number.isInteger(1.1))
      assert.equal(false, Number.isInteger(-1.2))
      assert.equal(false, Number.isInteger('0'))
      assert.equal(false, Number.isInteger(''))
      assert.equal(false, Number.isInteger(true))
      assert.equal(false, Number.isInteger({}))
      assert.equal(false, Number.isInteger(NaN))
      assert.equal(false, Number.isInteger(function () {}))
    })
  })
})
