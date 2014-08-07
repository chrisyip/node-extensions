[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-url]][daviddm-image]

# Usage

```
npm install --save node-extensions
```

Require once in your project's main file, e.g. `index.js` or `app.js`:

```js
require('node-extensions')
```

Done!

```
[].isEmpty // true

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

#### find & findIndex

```js
[1, 2, 3].find(function (item) {
    return item % 2 === 0
}) // 2

[1, 2, 3].findIndex(function (item) {
    return item % 2 === 0
}) // 1
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

Those methods are slower than [fast.js](https://github.com/codemix/fast.js) or [lodash](http://lodash.com), but still faster than built-in methods. The performance of package that uses built-in methods should be improved. *[Benchmarks](https://github.com/chrisyip/node-extensions/blob/master/benchmarks.md)*.

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
[npm-image]: https://badge.fury.io/js/node-extensions.svg
[daviddm-url]: https://david-dm.org/chrisyip/node-extensions.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/chrisyip/node-extensions
