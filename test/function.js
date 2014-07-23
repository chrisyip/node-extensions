var assert = require('assert')

require('../lib/function')

describe('Function', function(){
  describe('#isCallable()', function(){
    it('should return true if target is callable', function(){
      assert.equal(true, Function.isCallable(function () {}))
      assert.equal(true, Function.isCallable({ call: function () {} }))
      assert.equal(true, Function.isCallable(Date))
      assert.equal(false, Function.isCallable(new Date))
      assert.equal(false, Function.isCallable(1))
    })
  })

  describe('#isFunction()', function(){
    it('should return true if target is funciton', function(){
      assert.equal(true, Function.isFunction(function () {}))
      assert.equal(false, Function.isFunction(new Date))
      assert.equal(false, Function.isFunction(1))
    })
  })
})
