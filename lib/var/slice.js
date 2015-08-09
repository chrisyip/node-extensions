module.exports = function slice (arrayLike, startPos, endPos) {
  if (!arrayLike) {
    return []
  }

  var result = [],
      i = typeof startPos === 'number' || startPos instanceof Number ? startPos : 0,
      endIndex = typeof endPos === 'number' || endPos instanceof Number ? endPos : arrayLike.length

  if (i < 0) {
    i = i + arrayLike.length

    if (i < 0) {
      i = 0
    }
  }

  if (endIndex < 0) {
    endIndex = endIndex + arrayLike.length

    if (endIndex < 0) {
      endIndex = 0
    }
  }

  if (endIndex > arrayLike.length) {
    endIndex = arrayLike.length
  }

  for (; i < endIndex; i++) {
    result[result.length] = arrayLike[i]
  }

  return result
}
