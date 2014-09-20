var assert = require('assert')

require('../lib/array')

describe('Array', function(){
  describe('#first', function() {
    it('should return first element for non-empty array', function() {
      assert.equal('str', ['str', 'sub'].first)
      assert.equal(1, [1].first)
      assert.equal(null, [null].first)
    })

    it('should return undefined for empty array', function() {
      assert.equal(undefined, [].first)
    })
  })

  describe('#last', function() {
    it('should return last element for non-empty array', function() {
      assert.equal('str', ['sub', 'str'].last)
      assert.equal(2, [1, 2].last)
      assert.equal(null, [true, null].last)
    })

    it('should return undefined for empty array', function() {
      assert.equal(undefined, [].last)
    })
  })

  describe('#isEmpty', function() {
    it('should return false for non-empty array', function() {
      assert.equal(false, ['sub', 'str'].isEmpty)
      assert.equal(false, [, null].isEmpty)
    })

    it('should return true for empty array', function() {
      assert.equal(true, [ , , ].isEmpty)
      assert.equal(true, [].isEmpty)
    })
  })

  describe('#isEmpty()', function() {
    it('should return false for non-empty array', function() {
      assert.equal(false, Array.isEmpty(['sub', 'str']))
      assert.equal(false, Array.isEmpty([, null]))
    })

    it('should return true for empty array', function() {
      assert.equal(true, Array.isEmpty([ , , ]))
      assert.equal(true, Array.isEmpty([]))
    })
  })

  describe('#isArrayLike()', function() {
    it('should return true for array-like object', function() {
      assert.equal(true, Array.isArrayLike({ 0: 1, length: 0 }))
      assert.equal(true, Array.isArrayLike('substr'))
    })
  })

  describe('#equalTo()', function(){
    it('should return true for arrays that contains same elements', function(){
      var arr1 = [1, 'abc', true],
          arr2 = [1, 'abc', true],
          arr3 = [{ prop: true }],
          arr4 = [{ prop: true }]

      assert.equal(true, arr1.equalTo(arr2))
      assert.equal(true, arr3.equalTo(arr4, function (a, b) {
        var keys1 = Object.keys(a),
            keys2 = Object.keys(b)

        if (!keys1.equalTo(keys2)) {
          return false
        }

        for (var i = 0, len = keys1.length; i < len; i++) {
          if (a[keys1[i]] !== b[keys2[i]]) {
            return false
          }
        }

        return true
      }))
    })
  })

  describe('#find()', function(){
    it('should return expected element', function(){
      var arr = [1, 'abc', true],
          thisArg = { expected: 'abc' }

      assert.equal('abc', arr.find(function (elem) {
        return elem === 'abc'
      }))

      assert.equal('abc', arr.find(function (elem, i) {
        return i === 1
      }))

      assert.equal('abc', arr.find(function (elem) {
        return this.expected === elem
      }, thisArg))
    })
  })

  describe('#findIndex()', function(){
    it('should return expected element', function(){
      var arr = [1, 'abc', true],
          thisArg = { expected: 'abc' }

      assert.equal(1, arr.findIndex(function (elem) {
        return elem === 'abc'
      }))

      assert.equal(1, arr.findIndex(function (elem, i) {
        return i === 1
      }))

      assert.equal(1, arr.findIndex(function (elem) {
        return this.expected === elem
      }, thisArg))
    })
  })

  describe('#from()', function(){
    it('should return new array', function(){
      var arr = [1, 'abc', true],
          obj = { 0: 1, 1: 'abc', 2: true, length: 3 },
          obj2 = { 0: 1, 1: 'abc', length: 3 }

      assert.equal(true, Array.from(arr).equalTo(arr))
      assert.equal(true, Array.from(obj).equalTo(arr))
      assert.equal(false, Array.from(obj2).equalTo(arr))
    })
  })

  describe('#of()', function(){
    it('should return new array', function(){
      var arr = [1, 'abc', true]

      assert.equal(true, Array.of(1, 'abc', true).equalTo(arr))
    })
  })

  describe('#insert()', function(){
    it('should insert element to specified position', function(){
      var arr = [1, 'abc', true],
          insertion = [1, 'abc', true]

      insertion.insert('element', 1)

      assert.equal(4, insertion.length)
      assert.equal(false, arr[1] === insertion[1])
      assert.equal(true, arr[1] === insertion[2])
      assert.equal(true, arr[2] === insertion[3])

      insertion = ['foo']
      insertion.insert('foo')
      assert.equal(1, insertion.lastIndexOf('foo'))
    })

    it('should return itself after insertion', function(){
      var insertion = [1, 'abc', true]

      assert.equal(true, insertion === insertion.insert('element', 1))
    })
  })
})
