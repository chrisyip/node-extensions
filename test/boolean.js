var assert = require('assert')

require('../lib/boolean')

describe('Boolean', function () {
  describe('#isBoolean()', function () {
    it('should return true if target is boolean', function () {
      assert.equal(true, Boolean.isBoolean(true))
      assert.equal(true, Boolean.isBoolean(false))
      assert.equal(true, Boolean.isBoolean(new Boolean(true)))
    })
  })
})
