module.exports = function (interval) {
  let timer
  let promise = new Promise(function (resolve) {
    timer = setTimeout(resolve, interval || 0)
  })
  promise.clear = function () {
    return clearTimeout(timer)
  }
  return promise
}
