
var Promise = require('any-promise')

module.exports = function (interval) {
  var timer
  var promise = new Promise(function (resolve) {
    timer = setTimeout(resolve, interval || 0)
  })
  promise.clear = function () {
    return clearTimeout(timer)
  }
  return promise
}
