module.exports = function (target) {
  return target != null && Object.prototype.toString.call(target) == '[object Object]'
}
