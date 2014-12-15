
var Promise = require('native-or-bluebird')

module.exports = function (interval) {
  return new Promise(function (resolve) {
    setTimeout(resolve, interval || 0)
  })
}
