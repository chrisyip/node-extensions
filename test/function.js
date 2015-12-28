var assert = require('assert')

require('../lib/function')

describe('Function', function () {
  describe('#bind()', function () {
    it('should bind thisArg correctly', function () {
      var thisArg = {
        name: 'node.js'
      }
      var fn = function () {
        assert.equal(thisArg, this)
      }
      fn.bind(thisArg)()

      thisArg = global
      fn.bind(thisArg)()
    })

    it('should prepend arguments', function () {
      var thisArg = 'foo'
      var fn = function () {
        assert.equal('fooabcdef', [this].concat([].slice.call(arguments)).join(''))
      }
      fn.bind(thisArg, 'a', 'b', 'c')('d', 'e', 'f')
    })

    it('should throw error when binding non-function', function () {
      try {
        var obj = {}
        Function.prototype.bind.call(obj)
      } catch (e) {
        assert.equal(e.message.indexOf('Bind must be called on a function') > -1, true)
        assert.equal(true, e instanceof TypeError)
      }
    })
  })

  describe('#isCallable()', function () {
    it('should return true if target is callable', function () {
      assert.equal(true, Function.isCallable(function () {}))
      assert.equal(true, Function.isCallable({
        call: function () {}
      }))
      assert.equal(true, Function.isCallable(Date))
      assert.equal(false, Function.isCallable(new Date()))
      assert.equal(false, Function.isCallable(1))
    })
  })

  describe('#isFunction()', function () {
    it('should return true if target is funciton', function () {
      assert.equal(true, Function.isFunction(function () {}))
      assert.equal(false, Function.isFunction(new Date()))
      assert.equal(false, Function.isFunction(1))
    })
  })
})
