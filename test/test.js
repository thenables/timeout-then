
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

it('should clear', function (done) {
  var blah = true

  var timer = timeout(5)
  timer.then(function () {
    blah = false
  })
  timer.clear()

  setTimeout(function () {
    assert(blah)
    done()
  }, 100)
})
