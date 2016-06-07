
var Promise = require('native-or-bluebird')

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
