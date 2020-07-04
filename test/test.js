
const assert = require('assert')

const timeout = require('..')

it('should wait', function () {
  let blah = false

  setTimeout(function () {
    blah = true
  }, 5)

  return timeout(100).then(function () {
    assert(blah)
  })
})

it('should clear', function (done) {
  let blah = true

  let timer = timeout(5)
  timer.then(function () {
    blah = false
  })
  timer.clear()

  setTimeout(function () {
    assert(blah)
    done()
  }, 100)
})
