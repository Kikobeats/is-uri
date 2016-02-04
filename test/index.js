/* global describe, it */

'use strict'

var isURI = require('..')
var should = require('should')

var URLS = [
  'https://github.com/garycourt/uri-js',
  'magnet:?xt=urn:sha1:PDAQRAOQQRYS76MRZJ33LK4MMVZBDSCL',
  'https://🐀.ws/🐀🐀'
]

var URLS_INVALIDS = [
  'google.com'
]

describe('parse uri', function () {
  it('detect valid', function () {
    URLS.forEach(function (url) {
      isURI(url).should.be.true()
    })
  })

  it('detect invalid', function () {
    URLS_INVALIDS.forEach(function (url) {
      isURI(url).should.be.false()
    })
  })
})
