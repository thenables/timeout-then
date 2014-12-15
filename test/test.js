
var assert = require('assert')

var timeout = require('..')

it('should wait', function () {
  var blah = false

  setTimeout(function () {
    blah = true
  }, 5)

  return timeout(100).then(function () {
    assert(blah)
  })
})
