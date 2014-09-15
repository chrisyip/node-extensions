var isUndefined = require('./var/isUndefined'),
    isBoolean = require('./var/isBoolean')

/* ========== Methods ========== */

if (isUndefined(Boolean.isBoolean)) {
  Boolean.isBoolean = isBoolean
}
