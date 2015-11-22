var isUndefined = require('./var/isUndefined')

if (isUndefined(Number.isInteger)) {
  Number.isInteger = function (num) {
    return typeof num === 'number' && num % 1 === 0
  }
}

if (isUndefined(Number.isFloat)) {
  Number.isFloat = function (num) {
    return typeof num === 'number' && !isNaN(num) && num % 1 !== 0
  }
}
