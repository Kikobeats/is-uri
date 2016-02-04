'use strict'

var parseURI = require('parse-uri')

module.exports = function isURI (str, opts) {
  return Boolean(parseURI(str, opts).protocol)
}
