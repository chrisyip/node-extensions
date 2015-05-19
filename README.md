# Node Extensions

[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Travis CI][travis-image]][travis-url] [![Coveralls][coveralls-image]][coveralls-url]

Extend Node's `global` object. No dependencies except [semver](https://www.npmjs.org/package/semver).

# Usage

```
npm install --save node-extensions
```

This package attachs APIs to `global` object (like es5-shim), so what you need to do is just require it once in your project's main file, e.g. `index.js` or `app.js`. That's all.

Recommend to require node extensions on the very top of file.

```js
require('node-extensions')

var obj = { 0: 'Hello', 1: 'Node', length: 2 }

console.log(Array.from(obj).reduce(function (prev, cur) {
  return prev + ' ' + cur
}))
// 'Hello Node'

var fruits = ['Apple', 'Orange']

if (fruits.isEmpty === false) {
  // do somethinge
}

'the great gatsby'.toCapitalCase() // 'the Great Gatsby'
```

# APIs

## Object

### Methods

#### assign

[http://people.mozilla.org/\~jorendorff/es6-draft.html#sec-object.assign](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign)

```js
Object.assign(
    { type: 'node' },
    { name: 'node-extensions' }
)
// { type: 'node', name: 'node-extensions' }
```

#### isObject

```js
Object.isObject({}) === true
Object.isObject(new Date) === false
Object.isObject(/reg/) === false
Object.isObject(undefined) === false
Object.isObject(null) === false
```

#### isNull

```js
Object.isNull(null) === true
Object.isNull(undefined) === false
```

#### isUndefined

```js
Object.isUndefined(undefined) === true
Object.isUndefined(null) === false
```

#### merge

Deep version of `Object#assign()`.

```js
Object.merge(
    { project: { type: 'node' } },
    { project: { name: 'node-extensions' } }
)
// { project: { type: 'node', name: 'node-extensions' } }
```

## Array

### Properties

#### first

```js
[1, 2].first === 1
[].first === undefined
[null].first === null
```

#### isEmpty

```js
[].isEmpty === true
[1].isEmpty === false
[ , ].isEmpty === true
[null].isEmpty === false
```

#### last

```js
[1, 2].last === 2
[].last === undefined
[null].last === null
```

### Methods

#### compact

`compact()`

Like Ruby's [Array#compact()](http://www.ruby-doc.org/core-2.1.3/Array.html#method-i-compact), creates a new array that all undefined and null elements removed, or a new array with all elements that pass the test implemented by the provided function.

`compact(mapfn[, thisArg])` alias of `Array#filter()`.

```js
[1, , null, 2].compact() // [1, 2]

['foo', 'bar', 1, 2].compact(function (item) {
    return typeof item === 'string'
}) // ['foo', 'bar']
```

#### equalTo

`equalTo(target, mapfn, thisArg)`

```js
[1, 2].equalTo([1, 2]) === true
['a', 1, true].equalTo(['a', 1, true]) === true

[new Date(2014, 0, 1)].equalTo([new Date(2014, 0, 1)]) === false

[new Date(2014, 0, 1)].equalTo([new Date(2014, 0, 1)], function (a, b) {
    return a.getTime() === b.getTime()
}) === true
```

#### insert

```js
Array.insert(element, position)
```

```js
var arr = [1, 2, 3]
arr.insert(5) // [1, 2, 3, 5]
arr.insert(4, 3) // [1, 2, 3, 4, 5]
```

#### find & findIndex

```js
[1, 2, 3].find(function (item) {
    return item % 2 === 0
}) // 2

[1, 2, 3].findIndex(function (item) {
    return item % 2 === 0
}) // 1
```

#### flatten

```js
[1, [2, [3, [4, { 0: 5, length: 1 }]]]].flatten() // [1, 2, 3, 4, 5]
```

#### from

[http://people.mozilla.org/\~jorendorff/es6-draft.html#sec-array.from](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from)

For now, only support array and array-like object.

```js
Array.from({ 0: 'a', 1: 'b', length: 2 })
// [ 'a', 'b' ]

Array.from('abc')
// [ 'a', 'b', 'c' ]

Array.from(new String('abc'))
// [ 'a', 'b', 'c' ]
```

#### isArrayLike

```js
Array.isArrayLike({ 0: 'a', 1: 'b', length: 2 }) === true
Array.isArrayLike('abc') === true
Array.isArrayLike(new String('abc')) === true

Array.isArrayLike({ 0: 'a', 1: 'b' }) === false
Array.isArrayLike(1) === false
Array.isArrayLike(true) === false

var b = new Boolean(true)
b.length = 4
Array.isArrayLike(b) === false
```

#### isEmpty

```js
Array.isEmpty([]) === true
Array.isEmpty([ , ]) === true
```

#### Iterators

`forEach`, `map`, `every`, `some`, `filter`, `reduce`, `reduceRight`, `indexOf`, and `lastIndexOf` are overried for performance concerned.

The new methods are faster than built-in methods. By overriding the built-in methods, the general performances of using built-in methods should be improved. More details: [benchmarks](https://github.com/chrisyip/node-extensions/blob/master/bench/results).

```js
array.forEach(iterator).map(iterator)

[1, 2, 3].forEachRight(function (item) {
    console.log(item)
})
// 3, 2, 1
```

#### of

[http://people.mozilla.org/\~jorendorff/es6-draft.html#sec-array.of](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.of)

```js
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

#### remove

```js
Array.remove(element, startPosition)
```

```js
var arr = ['foo', 'bar', 'foo']
arr.remove('foo', 1) // 'foo'
arr // ['foo', 'bar']
arr.remove('foo', 1) // undefined
arr // ['foo', 'bar']
```

## Boolean

### Methods

#### isBoolean

`isBoolean(target)`

```js
Boolean.isBoolean(true) // true
Boolean.isBoolean(false) // true
Boolean.isBoolean(new Boolean(true)) // true
Boolean.isBoolean('true') // false
```

## String

### Properties

#### isEmpty

```js
''.isEmpty === true
'  '.isEmpty === true
'str'.isEmpty === false
```

### Methods

#### contains

[http://people.mozilla.org/\~jorendorff/es6-draft.html#sec-string.prototype.contains](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.contains)

```js
'str'.contains('t') === true
'str'.contains('sub') === false
'substr'.contains('sub', 1) === false
```

#### endsWith

[http://people.mozilla.org/\~jorendorff/es6-draft.html#sec-string.prototype.startswith](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.endswith)

```js
'Hello'.endsWith('o') === true
'Hello'.endsWith('O') === false
'Hello'.endsWith('l') === false
'Hello'.endsWith('l', 4) === true
```

#### isEmpty

```js
String.isEmpty('') === true
String.isEmpty(' ') === true
```

#### isString

```js
String.isString('str') === true
String.isString(new String('str')) === true
String.isString(true) === false
```

#### interpolate

```js
'Good morning, #{title} #{lastname}.'.interpolate({
    title: 'Mr.',
    firstname: 'John',
    lastname: 'Smith'
})
// 'Good morning, Mr. Smith.'

'Good morning, #{0} #{2}.'.interpolate(['Mr.', 'John', 'Smith'])
// 'Good morning, Mr. Smith.'
```

#### repeat

[http://people.mozilla.org/\~jorendorff/es6-draft.html#sec-string.prototype.repeat](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.repeat)

```js
'*'.repeat(5) === '*****'
```

#### startsWith

[http://people.mozilla.org/\~jorendorff/es6-draft.html#sec-string.prototype.startswith](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.startswith)

```js
'Hello'.startsWith('H') === true
'Hello'.startsWith('h') === false
'Hello'.startsWith('e') === false
'Hello'.startsWith('e', 1) === true
```

#### toCamelCase

[http://stackoverflow.com/a/10425344](http://stackoverflow.com/a/10425344)

```js
'hello   world'.toCamelCase() === 'helloWorld'
'hello----world'.toCamelCase() === 'helloWorld'
'hello___world'.toCamelCase() === 'helloWorld'
'hello_world'.toCamelCase() === 'helloWorld'
'hello.world'.toCamelCase() === 'hello.world'
'hello.nodejs   world'.toCamelCase() === 'hello.nodejsWorld'
```

#### toCapitalCase

```js
'hello world'.toCapitalCase() === 'Hello World'
'hello-world'.toCapitalCase() === 'Hello-world'
'the great gatsby'.toCapitalCase() === 'the Great Gatsby'
```

**Note: I'm not a native speaker of English, use it at your own risk. Any contributions would be appreciated.**

## Function

### Methods

#### isCallable

[http://people.mozilla.org/\~jorendorff/es6-draft.html#sec-iscallable](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable)

```js
function fn () {}
Function.isCallable(fn) === true

var obj = { call: function () {} }
Function.isCallable(obj) === true

Function.isCallable(Date) === true
```

#### isFunction

```js
Function.isFunction(function () {}) === true
Function.isFunction({}) === false
```

**Symbol is not supported.**


# Notes

## Overriding Properties

Due to the limitation of `Object.defineProperty`, you have to use it when overriding properties:

```js
var s = ''
s.isEmpty = 'hello'
s.isEmpty // true

Object.defineProperty(String.prototype, 'isEmpty', {
    value: 'hello'
})

s.isEmpty // 'hello'
```

[npm-url]: https://npmjs.org/package/node-extensions
[npm-image]: http://img.shields.io/npm/v/node-extensions.svg?style=flat-square
[daviddm-url]: https://david-dm.org/chrisyip/node-extensions
[daviddm-image]: http://img.shields.io/david/chrisyip/node-extensions.svg?style=flat-square
[travis-url]: https://travis-ci.org/chrisyip/node-extensions
[travis-image]: http://img.shields.io/travis/chrisyip/node-extensions.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chrisyip/node-extensions
[coveralls-image]: http://img.shields.io/coveralls/chrisyip/node-extensions.svg?style=flat-square
