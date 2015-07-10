var assert = require('assert')

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
})
