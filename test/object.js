var assert = require('assert')

require('should')

require('../lib/object')

describe('Object', function () {
  describe('#assign()', function () {
    it('should contains keys of both objects', function () {
      var target = {
          name: 'node'
        },
        source = {
          title: 'ninja'
        }

      Object.assign(target, source)

      assert.equal('node', target.name)
      assert.equal('ninja', target.title)
    })

    it('should return the first argument when passing one argument', function () {
      var obj = {}
      Object.assign(obj).should.eql(obj)
    })
  })

  describe('#merge()', function () {
    it('should contains keys of both objects', function () {
      var target = {
          person: {
            name: 'node'
          }
        },
        source = {
          person: {
            title: 'ninja'
          }
        }

      Object.merge(target, source)

      assert.equal('node', target.person.name)
      assert.equal('ninja', target.person.title)
    })

    it('should return the first argument when passing one argument', function () {
      var obj = {}
      Object.merge(obj).should.eql(obj)
    })
  })

  describe('#isObject()', function () {
    it('should return true if element is object', function () {
      assert.equal(true, Object.isObject({}))
      assert.equal(false, Object.isObject(function () {}))
      assert.equal(false, Object.isObject(new Date()))
      assert.equal(false, Object.isObject(new String('object')))
    })
  })

  describe('#isNull()', function () {
    it('should return true if element is object', function () {
      assert.equal(true, Object.isNull(null))
      assert.equal(false, Object.isNull(undefined))
      assert.equal(false, Object.isNull(false))
      assert.equal(false, Object.isNull({}))
      assert.equal(false, Object.isNull(0))
    })
  })

  describe('#isUndefined()', function () {
    it('should return true if element is object', function () {
      assert.equal(true, Object.isUndefined(undefined))
      assert.equal(false, Object.isUndefined(null))
      assert.equal(false, Object.isUndefined(false))
      assert.equal(false, Object.isUndefined({}))
      assert.equal(false, Object.isUndefined(0))
    })
  })

  describe('#pick()', function () {
    it('should return true if element is object', function () {
      var input = {
        foo: 'foo',
        bar: 'bar',
        foobar: 'foobar',
        baz: 'baz'
      }

      input[{}] = 'object'

      var result, keys
      var keys1 = ['foo', 'bar']

      result = input.pick('foo')
      keys = Object.keys(result)
      keys.length.should.be.eql(1)
      result[keys[0]].should.be.eql(input[keys[0]])

      result = input.filter(function (value, key) {
        return key.indexOf('bar') === 0
      })
      keys = Object.keys(result)
      keys.length.should.be.eql(1)
      result[keys[0]].should.be.eql(input[keys[0]])

      result = input.pick(function (value, key) {
        return this.prefix + key === 'foobar'
      }, { prefix: 'foo' })
      keys = Object.keys(result)
      keys.length.should.be.eql(1)
      result[keys[0]].should.be.eql(input[keys[0]])

      result = Object.pick(input, function (value, key) {
        return this.prefix + key === 'foobar'
      }, { prefix: 'foo' })
      keys = Object.keys(result)
      keys.length.should.be.eql(1)
      result[keys[0]].should.be.eql(input[keys[0]])

      result = Object.filter(input, 'foo', 'bar')
      keys = Object.keys(result)
      keys.length.should.be.eql(2)
      keys.every(function (key) {
        return result[key] === input[key]
      }).should.be.true()

      result = input.pick(['foo', 'bar'])
      keys = Object.keys(result)
      keys.length.should.be.eql(2)
      keys.every(function (key) {
        return result[key] === input[key]
      }).should.be.true()
    })
  })
})
