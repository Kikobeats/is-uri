'use strict'

const test = require('ava')
const isURI = require('..')

test('true', t => {
  t.true(isURI('http://google.com', { strictMode: true }))
  t.true(isURI('http://localhost/', { strictMode: true }))
  t.true(
    isURI('http://example.w3.org/path%20with%20spaces.html', {
      strictMode: true
    })
  )
  t.true(isURI('http://example.w3.org/%20', { strictMode: true }))
  t.true(isURI('ftp://ftp.is.co.za/rfc/rfc1808.txt', { strictMode: true }))
  t.true(
    isURI('ftp://ftp.is.co.za/../../../rfc/rfc1808.txt', { strictMode: true })
  )
  t.true(isURI('http://www.ietf.org/rfc/rfc2396.txt', { strictMode: true }))
  t.true(
    isURI('ldap://[2001:db8::7]/c=GB?objectClass?one', { strictMode: true })
  )
  t.true(isURI('mailto:John.Doe@example.com', { strictMode: true }))
  t.true(isURI('news:comp.infosystems.www.servers.unix', { strictMode: true }))
  t.true(isURI('tel:+1-816-555-1212', { strictMode: true }))
  t.true(isURI('telnet://192.0.2.16:80/', { strictMode: true }))
  t.true(
    isURI('urn:oasis:names:specification:docbook:dtd:xml:4.1.2', {
      strictMode: true
    })
  )
  t.true(isURI('https://🐀.ws/🐀🐀', { strictMode: true }))
  t.true(
    isURI('magnet:?xt=urn:sha1:PDAQRAOQQRYS76MRZJ33LK4MMVZBDSCL', {
      strictMode: true
    })
  )
})

test('false', t => {
  t.false(isURI(5, { strictMode: true }))
  t.false(isURI(null, { strictMode: true }))
  t.false(isURI(undefined, { strictMode: true }))
  t.false(isURI(true, { strictMode: true }))
  t.false(isURI(NaN, { strictMode: true }))
  t.false(isURI({}, { strictMode: true }))
  t.false(isURI([], { strictMode: true }))
  t.false(isURI(function () {}, { strictMode: true }))
  t.false(isURI('', { strictMode: true }))
  t.false(isURI('foo', { strictMode: true }))
  t.false(isURI('foo@bar', { strictMode: true })) // no scheme
  t.false(isURI('://foo/', { strictMode: true })) // empty scheme
  t.false(isURI('1http://foo', { strictMode: true })) // invalid scheme
  t.false(isURI('http://<foo>', { strictMode: true })) // illegals
  t.false(isURI('http:////foo.html', { strictMode: true })) // invalid path
  t.false(isURI('http://example.w3.org/%illegal.html', { strictMode: true }))
  t.false(isURI('http://example.w3.org/%a', { strictMode: true })) // incomplete hex escape
  t.false(isURI('http://example.w3.org/%a/foo', { strictMode: true })) // incomplete hex escape
  t.false(isURI('http://example.w3.org/%at', { strictMode: true })) // incomplete hex escape
})
