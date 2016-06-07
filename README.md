
# timeout-then

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]

`setTimeout` as a promise.

```js
var timeout = require('timeout-then');

timeout(100).then(function () {
  console.log('blah');
});

// clear timeout
var timer = timeout(100);
timer.then(function () {
  console.log('blah');
});
timer.clear();
```

[gitter-image]: https://badges.gitter.im/thenables/timeout-then.png
[gitter-url]: https://gitter.im/thenables/timeout-then
[npm-image]: https://img.shields.io/npm/v/timeout-then.svg?style=flat-square
[npm-url]: https://npmjs.org/package/timeout-then
[github-tag]: http://img.shields.io/github/tag/thenables/timeout-then.svg?style=flat-square
[github-url]: https://github.com/thenables/timeout-then/tags
[travis-image]: https://img.shields.io/travis/thenables/timeout-then.svg?style=flat-square
[travis-url]: https://travis-ci.org/thenables/timeout-then
[coveralls-image]: https://img.shields.io/coveralls/thenables/timeout-then.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/thenables/timeout-then
[david-image]: http://img.shields.io/david/thenables/timeout-then.svg?style=flat-square
[david-url]: https://david-dm.org/thenables/timeout-then
[license-image]: http://img.shields.io/npm/l/timeout-then.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/timeout-then.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/timeout-then
[gittip-image]: https://img.shields.io/gratipay/jonathanong.svg?style=flat-square
[gittip-url]: https://gratipay.com/jonathanong/
