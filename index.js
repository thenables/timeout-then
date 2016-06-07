
var Promise = require('native-or-bluebird')

module.exports = function (interval) {
  var timeoutId
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(resolve, interval || 0)
  })
  promise.clear = function () {
    return clearTimeout(timeoutId)
  }
  return promise
}
