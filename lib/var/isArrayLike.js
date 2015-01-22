module.exports = function isArrayLike (input) {
  return input != null && (!isNaN(input.length) && input.length % 1 === 0)
}
