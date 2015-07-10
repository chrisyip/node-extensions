var assert = require('assert')

require('../lib/string')

describe('String', function () {
  describe('#toCamelCase()', function () {
    it('should return camelized string', function () {
      assert.equal(true, 'hello   world'.toCamelCase() === 'helloWorld')
      assert.equal(true, 'hello----world'.toCamelCase() === 'helloWorld')
      assert.equal(true, 'hello___world'.toCamelCase() === 'helloWorld')
      assert.equal(true, 'hello_world'.toCamelCase() === 'helloWorld')
      assert.equal(true, 'hello.world'.toCamelCase() === 'hello.world')
      assert.equal(true, 'hello.nodejs   world'.toCamelCase() === 'hello.nodejsWorld')
    })
  })

  describe('#toCapitalCase()', function () {
    it('should return capitalized string', function () {
      'The quick brown fox jumps over the lazy dog'
      .toCapitalCase()
        .should.be.eql('The Quick Brown Fox Jumps Over the Lazy Dog')
    })

    it('should return original string if it is empty string', function () {
      ''.toCapitalCase().should.be.eql('')
    })

    it('should return original string if nothing to capitalize', function () {
      var str = '123456'

      '123456'.toCapitalCase().should.be.eql(str)
    })
  })

  describe('#slugify()', function () {
    it('should return slugified string', function () {
      assert.equal(true, 'hello world'.slugify() === 'hello-world')
      assert.equal(true, 'hello_world'.slugify() === 'hello-world')
      assert.equal(true, '你好'.slugify() === '')
      assert.equal(true, 'hello world_'.slugify() === 'hello-world')
      assert.equal(true, 'hello world'.slugify('_') === 'hello_world')
      assert.equal(true, 'hello world'.slugify('***') === 'hello***world')
    })
  })

  describe('#interpolate()', function () {
    it('should return new string with specicied variables', function () {
      var result = 'Hello, Node Ninja'

      assert.equal(true, 'Hello, #{name} #{title}'.interpolate({
        name: 'Node',
        title: 'Ninja'
      }) === result)

      assert.equal(true, 'Hello, #{0} #{1}'.interpolate(['Node', 'Ninja']) === result)
    })

    it('should return itself if no var name found', function () {
      'foo'.interpolate({
        foo: 'bar'
      }).should.be.eql('foo')
    })
  })

  describe('#contains()', function () {
    function includesTest (key) {
      assert.equal(true, 'node ninja'[key]('node'))
      assert.equal(false, 'node ninja'[key]('samurai'))
      assert.equal(true, '123'[key](1))
    }

    it('should return true if contains substr', function () {
      includesTest('contains')
    })
  })

  describe('#isEmpty', function () {
    it('should return true for empty string', function () {
      assert.equal(true, ''.isEmpty)
      assert.equal(true, ' '.isEmpty)
      assert.equal(false, 'node ninja'.isEmpty)
    })
  })

  describe('#isEmpty()', function () {
    it('should return true for empty string', function () {
      assert.equal(true, String.isEmpty(''))
      assert.equal(true, String.isEmpty(' '))
      assert.equal(false, String.isEmpty('node ninja'))
    })
  })

  describe('#isString()', function () {
    it('should return true for string', function () {
      assert.equal(true, String.isString('node ninja'))
      assert.equal(true, String.isString(new String('node ninja')))
      assert.equal(false, String.isString(true))
    })
  })

  describe('#endsWith()', function () {
    it('should return true if string ends with subtre', function () {
      assert.equal(true, 'node ninja'.endsWith('ja'))
      assert.equal(false, 'node ninja'.endsWith('ja', 9))
      assert.equal(true, 'node ninja'.endsWith('nj', 9))
      assert.equal(false, 'node ninja'.endsWith('ja', 'a'))
    })
  })

  describe('#startsWith()', function () {
    it('should return true if string starts with subtre', function () {
      assert.equal(true, 'node ninja'.startsWith('no'))
      assert.equal(false, 'node ninja'.startsWith('od'))
      assert.equal(true, 'node ninja'.startsWith('od', 1))
      assert.equal(true, 'node ninja'.startsWith('no', 'a'))
    })
  })

  describe('#repeat()', function () {
    it('should return new string that repeated x times of string', function () {
      assert.equal('*****', '*'.repeat(5))
    })
  })
})
