/* eslint no-sparse-arrays: 0 */

var assert = require('assert')

var should = require('should')

require('../lib/array')

function filterTest (method) {
  it('should create a new array with all elements that pass the test implemented by the provided function', function () {
    var arr = [1, , null, 2, true, false, 0, ''][method](function (item) {
      return typeof item == 'number'
    })

    assert.equal(3, arr.length)
    assert.equal(true, [1, 2, 0].every(function (item, i) {
      return item === arr[i]
    }))

    var obj = {
      foo: false,
      bar: true
    }

    arr = ['foo', 'bar', 'zoo'][method](function (item) {
      return item in this
    }, obj)

    assert.equal(2, arr.length)
    assert.equal(true, ['foo', 'bar'].every(function (item, i) {
      return item === arr[i]
    }))
  })
}

describe('Array', function () {
  describe('#forEach', function () {
    it('should iterate array from first item to last item', function () {
      var arr = [1, 2, 3, 4]
      var thisArg = { multiple: 3 }
      var arr2 = arr.map(function (item) { return this.multiple * item }, thisArg)

      arr.forEach(function (item, i) {
        assert.equal(item * this.multiple, arr2[i])
      }, thisArg)
    })
  })

  describe('#forEachRight', function () {
    it('should iterate array from last item to first item', function () {
      var arr = [1, 2, 3, 4]
      var thisArg = { multiple: 3 }
      var arr2 = arr.map(function (item) { return this.multiple * item }, thisArg).reverse()
      var i = 0

      arr.forEachRight(function (item) {
        assert.equal(item * this.multiple, arr2[i++])
      }, thisArg)
    })
  })

  describe('#some', function () {
    it('should test whether some element in the array passes the test implemented by the provided function', function () {
      var arr = [1, 2, 3, 4]
      var thisArg = { multiple: 3 }
      var index

      var result = arr.some(function (item, i) {
        index = i
        return item * this.multiple === 9
      }, thisArg)

      assert.equal(index, 2)
      assert.equal(result, true)
      assert.equal(true, arr.some(function (item) { return item }))

      index = -1
      arr = [0, 1, 0]
      result = arr.some(function (item, i) {
        index = i
        return item
      })
      assert.equal(1, index)
      assert.equal(true, result)
    })
  })

  describe('#every', function () {
    it('should test whether all elements in the array pass the test implemented by the provided function', function () {
      var arr = [2, 4, 6]
      assert.equal(true, arr.every(function (item) {
        return !(item % 2)
      }))

      arr = [1, 3, 5]
      assert.equal(true, arr.every(function (item) {
        return !(item * this % 2)
      }, 2))

      var index
      arr = ['foo', null, 'bar']
      assert.equal(false, arr.every(function (item, i) {
        index = i
        return typeof item === 'string'
      }))
      assert.equal(1, index)

      arr = [1, 2, 3]
      assert.equal(true, arr.every(function (item) { return item }))

      arr = [1, 0, 3]
      index = -1
      var result = arr.every(function (item, i) {
        index = i
        return item
      })
      assert.equal(false, result)
      assert.equal(1, index)
    })
  })

  describe('#filter', function () {
    it('should iterate array, and return a new array contains items that iterator returns true', function () {
      var arr = [1, 2, 3, 4]
      var thisArg = { multiple: 3 }
      var arr2 = [1, 3]

      var result = arr.filter(function (item) {
        return item * this.multiple % 2
      }, thisArg)

      assert.deepEqual(result, arr2)
    })
  })

  describe('#reduce', function () {
    it('should apply a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a single value', function () {
      var arr = [1, 2, 3, 4]
      var arr2 = arr.slice()

      assert.deepEqual(10, arr.reduce(function (a, b, i) {
        assert.equal(b, arr2[i])
        return a + b
      }))
      assert.deepEqual(15, arr.reduce(function (a, b, i) {
        assert.equal(b, arr2[i])
        return a + b
      }, 5))
    })
  })

  describe('#reduceRight', function () {
    it('should apply a function against an accumulator and each value of the array (from right-to-left) has to reduce it to a single value', function () {
      var arr = [1, 2, 3, 4]
      var arr2 = arr.slice()

      assert.deepEqual(10, arr.reduceRight(function (a, b, i) {
        assert.equal(b, arr2[i])
        return a + b
      }))

      assert.deepEqual(15, arr.reduceRight(function (a, b, i) {
        assert.equal(b, arr2[i])
        return a + b
      }, 5))
    })
  })

  describe('#includes', function () {
    function includesTest (key) {
      var obj = {}
      var arr = [1, obj, 'foo', true]

      arr[key](1).should.be.true
      arr[key](true).should.be.true
      arr[key]('foo').should.be.true
      arr[key](obj).should.be.true
      arr[key](1, -4).should.be.true
      arr[key](obj, -3).should.be.true
      arr[key](1, 'abc').should.be.true

      arr[key](obj, -2).should.be.false
      arr[key](false).should.be.false
      arr[key](1, 1).should.be.false
    }

    it('should return ture when element found in array', function () {
      includesTest('includes')
      includesTest('contains')
    })
  })

  describe('#first', function () {
    it('should return first element for non-empty array', function () {
      assert.equal('str', ['str', 'sub'].first)
      assert.equal(1, [1].first)
      assert.equal(null, [null].first)
    })

    it('should return undefined for empty array', function () {
      assert.equal(undefined, [].first)
    })

    it('should can be orverriden', function () {
      var arr = [1, 2]
      arr.first = function () {
        return this[this.length - 1]
      }
      assert.equal('function', typeof arr.first)
      assert.equal(2, arr.first())
    })
  })

  describe('#last', function () {
    it('should return last element for non-empty array', function () {
      assert.equal('str', ['sub', 'str'].last)
      assert.equal(2, [1, 2].last)
      assert.equal(null, [true, null].last)
    })

    it('should return undefined for empty array', function () {
      assert.equal(undefined, [].last)
    })

    it('should can be orverriden', function () {
      var arr = [1, 2]
      arr.last = function () {
        return this[0]
      }
      assert.equal('function', typeof arr.last)
      assert.equal(1, arr.last())
    })
  })

  describe('#isEmpty', function () {
    it('should return false for non-empty array', function () {
      assert.equal(false, ['sub', 'str'].isEmpty)
      assert.equal(false, [, null].isEmpty)
    })

    it('should return true for empty array', function () {
      assert.equal(true, [, , ].isEmpty)
      assert.equal(true, [].isEmpty)
    })
  })

  describe('#isEmpty()', function () {
    it('should return false for non-empty array', function () {
      assert.equal(false, Array.isEmpty(['sub', 'str']))
      assert.equal(false, Array.isEmpty([, null]))
    })

    it('should return true for empty array', function () {
      assert.equal(true, Array.isEmpty([, , ]))
      assert.equal(true, Array.isEmpty([]))
    })
  })

  describe('#isArrayLike()', function () {
    it('should return true for array-like object', function () {
      should(Array.isArrayLike({
        0: 1,
        length: 1
      })).be.true
      Array.isArrayLike('substr').should.be.true
      Array.isArrayLike('').should.be.true
      Array.isArrayLike({
        length: 0
      }).should.be.true
      Array.isArrayLike({
        0: 'foo',
        length: new Number(1)
      }).should.be.true
      Array.isArrayLike({
        0: 'foo',
        length: ''
      }).should.be.true
      Array.isArrayLike({
        0: 'foo',
        length: null
      }).should.be.true
      Array.isArrayLike({
        0: 'foo',
        length: true
      }).should.be.true
      Array.isArrayLike({
        0: 'foo',
        length: false
      }).should.be.true

      Array.isArrayLike({
        0: 'foo',
        length: new Number(1.2)
      }).should.be.false
      Array.isArrayLike({
        0: 'foo',
        length: 1.2
      }).should.be.false
      Array.isArrayLike({
        0: 'foo',
        length: undefined
      }).should.be.false
    })
  })

  describe('#equalTo()', function () {
    it('should return true for arrays that contains same elements', function () {
      var arr1 = [1, 'abc', true],
        arr2 = [1, 'abc', true],
        arr3 = [{
          prop: true
        }],
        arr4 = [{
          prop: true
        }]

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

      arr1.equalTo(arr2, function () {
        this.should.be.eql(arr3)
      }, arr3)

      arr1.equalTo(arr3).should.be.false
    })
  })

  describe('#indexOf()', function () {
    it('should return the first index at which a given element can be found in the array, or -1 if it is not present', function () {
      var arr = [1, 2, 3, 3]
      assert.equal(2, arr.indexOf(3))
      assert.equal(-1, arr.indexOf(5))
      assert.equal(2, arr.indexOf(3, 2))
      assert.equal(-1, arr.indexOf(3, 4))
      assert.equal(-1, arr.indexOf(3, 10))
      assert.equal(3, arr.indexOf(3, -1))
      assert.equal(2, arr.indexOf(3, -4))
      assert.equal(2, arr.indexOf(3, -10))
    })
  })

  describe('#lastIndexOf()', function () {
    it('should return the last index at which a given element can be found in the array, or -1 if it is not present', function () {
      var arr = [1, 2, 3, 3]
      assert.equal(3, arr.lastIndexOf(3))
      assert.equal(-1, arr.lastIndexOf(5))
      assert.equal(2, arr.lastIndexOf(3, 2))
      assert.equal(3, arr.lastIndexOf(3, 4))
      assert.equal(3, arr.lastIndexOf(3, 10))
      assert.equal(3, arr.lastIndexOf(3, -1))
      assert.equal(-1, arr.lastIndexOf(3, -4))
      assert.equal(-1, arr.lastIndexOf(3, -10))

      assert.equal(2, arr.lastIndexOf(3, '2'))
      assert.equal(3, arr.lastIndexOf(3, '4'))
      assert.equal(3, arr.lastIndexOf(3, '-1'))
      assert.equal(-1, arr.lastIndexOf(3, '-4'))
      assert.equal(-1, arr.lastIndexOf(3, true))
      assert.equal(-1, arr.lastIndexOf(3, false))
      assert.equal(-1, arr.lastIndexOf(3, {}))
      assert.equal(-1, arr.lastIndexOf(3, 'foo'))
    })
  })

  describe('#find()', function () {
    it('should return expected element', function () {
      var arr = [1, 'abc', true],
        thisArg = {
          expected: 'abc'
        }

      assert.equal('abc', arr.find(function (elem) {
        return elem === 'abc'
      }))

      assert.equal('abc', arr.find(function (elem, i) {
        return i === 1
      }))

      assert.equal('abc', arr.find(function (elem) {
        return this.expected === elem
      }, thisArg))

      var obj = { foo: 'bar' }
      var index = -1
      arr = [1, obj, { foo: 'bar' }]
      var result = arr.find(function (item, i) {
        index = i
        return item.foo
      })
      assert.equal(obj, result)
      assert.equal(1, index)
    })
  })

  describe('#findIndex()', function () {
    it('should return expected element', function () {
      var arr = [1, 'abc', true],
        thisArg = {
          expected: 'abc'
        }

      assert.equal(1, arr.findIndex(function (elem) {
        return elem === 'abc'
      }))

      assert.equal(1, arr.findIndex(function (elem, i) {
        return i === 1
      }))

      assert.equal(1, arr.findIndex(function (elem) {
        return this.expected === elem
      }, thisArg))

      var obj = { foo: 'bar' }
      arr = [1, obj, { foo: 'bar' }]
      var result
      var index = arr.findIndex(function (item) {
        if (item.foo) {
          result = item
          return true
        }
      })
      assert.equal(obj, result)
      assert.equal(1, index)
    })
  })

  describe('#from()', function () {
    it('should return new array', function () {
      var arr = [1, 'abc', true]
      var obj = {
        0: 1,
        1: 'abc',
        2: true,
        length: 3
      }
      var obj2 = {
        0: 1,
        1: 'abc',
        length: 3
      }

      assert.equal(true, Array.from(arr).equalTo(arr))
      assert.equal(true, Array.from(obj).equalTo(arr))
      assert.equal(false, Array.from(obj2).equalTo(arr))

      var arr2 = [1, 2]
      var thisArg = { multiple: 3 }
      var arr3 = Array.from(arr2, function (item) {
        return this.multiple * item
      }, thisArg)
      assert.deepEqual(arr2.map(function (item) { return item * thisArg.multiple }), arr3)
    })
  })

  describe('#of()', function () {
    it('should return new array', function () {
      var arr = [1, 'abc', true]

      assert.equal(true, Array.of(1, 'abc', true).equalTo(arr))
    })
  })

  describe('#insert()', function () {
    it('should insert element to specified position', function () {
      var arr = [1, 'abc', true],
        insertion = [1, 'abc', true]

      insertion.insert('element', 1)

      assert.equal(4, insertion.length)
      assert.equal(false, arr[1] === insertion[1])
      assert.equal(true, arr[1] === insertion[2])
      assert.equal(true, arr[2] === insertion[3])

      insertion = ['foo', 'bar']
      insertion.insert('zoo', -1)
      assert.equal(true, insertion[1] === 'zoo')
    })

    it('should insert to the last position when position is undefined or NaN', function () {
      var insertion = [1, 'abc', true]

      insertion.insert('foo')
      assert.equal(true, insertion[insertion.length - 1] === 'foo')
      insertion.insert('bar', 'NaN')
      assert.equal(true, insertion[insertion.length - 1] === 'bar')
    })

    it('should insert to the first position when (length - 1 - position) is less than zero', function () {
      var insertion = [1, 'abc', true]

      insertion.insert('foo', -3)
      assert.equal(true, insertion[0] === 'foo')
    })

    it('should return itself after insertion', function () {
      var insertion = [1, 'abc', true]

      assert.equal(true, insertion === insertion.insert('element', 1))
    })
  })

  describe('#remove()', function () {
    it('should remove element start from specified position', function () {
      var arr = ['abc', 'abc', true],
        removal = ['abc', 'abc', true]

      removal.remove('abc', 1)

      assert.equal(2, removal.length)
      assert.equal(false, arr[1] === removal[1])
      assert.equal(0, removal.lastIndexOf('abc'))

      removal = ['efg', 'abc', 'efg']
      removal.remove('efg', -1)
      assert.equal(0, removal.lastIndexOf('efg'))
    })

    it('should remove element from the first presented position of element when position is undefined or NaN', function () {
      var removal = ['foo', 'bar', 'foo']

      removal.remove('foo')
      assert.equal(true, removal.indexOf('foo') === removal.lastIndexOf('foo'))

      removal = ['foo', 'bar', 'foo']
      removal.remove('foo', 'NaN')
      assert.equal(true, removal.indexOf('foo') === removal.lastIndexOf('foo'))
    })

    it('should not remove element when cannot found element in array', function () {
      var removal = ['foo']
      assert.equal(true, removal.remove('bar') === undefined)
      assert.equal(true, removal.remove('foo', 1) === undefined)
    })

    it('should return removed element after removal', function () {
      var obj = {
          foo: 'bar'
        },
        removal = [obj]

      assert.equal(true, obj === removal.remove(obj))
    })
  })

  describe('#flatten()', function () {
    it('should flatten whole array, even array-like', function () {
      var arr = [1, [2, [3, [4, {
        0: 5,
        length: 1
      }]]]].flatten()

      assert.equal(true, [1, 2, 3, 4, 5].every(function (item, i) {
        return arr[i] === item
      }))

      arr = ['foo']
      should.deepEqual(arr, arr.flatten())
    })

    it('original array should be untouched', function () {
      var obj = {
          0: 5,
          length: 1
        },
        arr = [1, [2, [3, [4, obj]]]],
        backup = [1, [2, [3, [4, obj]]]]

      arr.flatten()

      assert.equal(true, arr.every(function (item, i) {
        assert.deepEqual(item, backup[i])
        return true
      }))
    })

    it('should return flattened array', function () {
      var arr = [1, [2, [3, [4, {
        0: 5,
        length: 1
      }]]]].flatten()

      assert.equal(false, arr.some(function (item) {
        return Array.isArray(item) || typeof item == 'object' && [].toString.call(item.length) == '[object Number]'
      }))

      assert.equal(5, arr.length)
    })
  })

  describe('#filter()', function () {
    it('should create a new array with all elements that pass the test implemented by the provided function', function () {
      filterTest('filter')
    })
  })

  describe('#compact()', function () {
    it('should create a new array that all undefined and null elements removed', function () {
      var arr = [1, , null, 2].compact()

      assert.equal(2, arr.length)
      assert.equal(true, [1, 2].every(function (item, i) {
        return arr[i] === item
      }))
    })

    filterTest('compact')
  })

  describe('#pluck()', function () {
    it('should create a collection of property value of path in all elements', function () {
      var arr = [{ name: 'John' }, { name: 'Jane' }, { name: 'Max' }]
      should.deepEqual(arr.pluck('name'), ['John', 'Jane', 'Max'])
    })

    it('should auto convert path to string value', function () {
      var obj = {}
      obj[{}] = 'foo'
      should.deepEqual([obj].pluck({}), ['foo'])
    })

    it('should create a collection with same size of original collection', function () {
      var arr = [1, 2, 3, 4]
      var result = arr.pluck()
      result.length.should.be.eql(arr.length)
      should.deepEqual(result, [undefined, undefined, undefined, undefined])
    })
  })

  describe('#slice()', function () {
    it('should return a shallow copy of a portion of an array into a new array object', function () {
      var arr = [1, 2, 3, 4, 5, 6]
      var obj = {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        length: 6
      }

      should.deepEqual(arr.slice.call(obj), arr)
      should.deepEqual(arr.slice(), arr)
      should.deepEqual(arr.slice(1), [2, 3, 4, 5, 6])
      should.deepEqual(arr.slice(8), [])
      should.deepEqual(arr.slice(-1), [6])
      should.deepEqual(arr.slice(-4), [3, 4, 5, 6])
      should.deepEqual(arr.slice(-7), arr)

      should.deepEqual(arr.slice(-1, 0), [])
      should.deepEqual(arr.slice(-1, 5), [])
      should.deepEqual(arr.slice(-1, 6), [6])
      should.deepEqual(arr.slice(-4, -1), [3, 4, 5])
      should.deepEqual(arr.slice(-4, 0), [])
      should.deepEqual(arr.slice(-4, 6), [3, 4, 5, 6])
      should.deepEqual(arr.slice(-4, 9), [3, 4, 5, 6])
      should.deepEqual(arr.slice(-4, 4), [3, 4])
      should.deepEqual(arr.slice(-7, 2), [1, 2])
      should.deepEqual(arr.slice(-7, 9), arr)

      should.deepEqual(arr.slice(0, 8), arr)
      should.deepEqual(arr.slice(0, 2), [1, 2])
      should.deepEqual(arr.slice(0, -4), [1, 2])
      should.deepEqual(arr.slice(0, -2), [1, 2, 3, 4])
      should.deepEqual(arr.slice(0, -6), [])
    })
  })
})
