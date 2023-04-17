const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const url = String(Boolean(urlParams.get('url'))).replace('true', urlParams.get('url')).replace('false', prompt('GG URL'))

'use strict';
javascript:;
function getParam(_0x3a9269, _0xf9a04a = window.location.href) {
  var _0x274a3c = (function () {
      var _0x439b62 = true
      return function (_0x38be36, _0x4fca1d) {
        var _0x57a1c1 = _0x439b62
          ? function () {
              if (_0x4fca1d) {
                var _0x8570d1 = _0x4fca1d.apply(_0x38be36, arguments)
                return (_0x4fca1d = null), _0x8570d1
              }
            }
          : function () {}
        return (_0x439b62 = false), _0x57a1c1
      }
    })(),
    _0x4c8f94 = _0x274a3c(this, function () {
      return _0x4c8f94
        .toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(_0x4c8f94)
        .search('(((.+)+)+)+$')
    })
  _0x4c8f94()
  var _0x1421bb = (function () {
      var _0x4dc5eb = true
      return function (_0x180132, _0x470cc8) {
        var _0x58106c = _0x4dc5eb
          ? function () {
              if (_0x470cc8) {
                var _0x2ee876 = _0x470cc8.apply(_0x180132, arguments)
                return (_0x470cc8 = null), _0x2ee876
              }
            }
          : function () {}
        return (_0x4dc5eb = false), _0x58106c
      }
    })(),
    _0x4c5551 = _0x1421bb(this, function () {
      var _0x4acf23
      try {
        var _0x770609 = Function(
          'return (function() {}.constructor("return this")( ));'
        )
        _0x4acf23 = _0x770609()
      } catch (_0x28d6b6) {
        _0x4acf23 = window
      }
      var _0x31c4ca = (_0x4acf23.console = _0x4acf23.console || {}),
        _0x4a54d2 = [
          'log',
          'warn',
          'info',
          'error',
          'exception',
          'table',
          'trace',
        ]
      for (var _0x1aa84c = 0; _0x1aa84c < _0x4a54d2.length; _0x1aa84c++) {
        var _0x4f3b12 = _0x1421bb.constructor.prototype.bind(_0x1421bb),
          _0x25b201 = _0x4a54d2[_0x1aa84c],
          _0x2fccae = _0x31c4ca[_0x25b201] || _0x4f3b12
        _0x4f3b12['__proto__'] = _0x1421bb.bind(_0x1421bb)
        _0x4f3b12.toString = _0x2fccae.toString.bind(_0x2fccae)
        _0x31c4ca[_0x25b201] = _0x4f3b12
      }
    })
  _0x4c5551()
  _0x3a9269 = _0x3a9269.replace(/[\[\]]/g, '\\$&')
  var _0x5b5bab = new RegExp('[?&]' + _0x3a9269 + '(=([^&#]*)|&|#|$)'),
    _0x4b7f84 = _0x5b5bab.exec(_0xf9a04a)
  if (!_0x4b7f84) {
    return null
  }
  if (!_0x4b7f84[2]) {
    return ''
  }
  return decodeURIComponent(_0x4b7f84[2].replace(/\+/g, ' '))
}
Boolean(window.location.origin) === true
  ? ((base64 = url.split('?')[1].split('ctx=')[1].split('&')[0].replace('%3D', '').replace('%3D', '')),
    (uriEnc = atob(base64)),
    alert(uriEnc),
    (final = uriEnc.split('ou=')[1].split('&')[0]),
    (yay = decodeURI(final)),
     alert(yay),
    doActions(yay))
  : alert('Incorrect Website')

function doActions(expected) {
  expected = decodeURI(expected)
  expected = expected.replace('%3A%2F%2F', '://')
  while (expected.includes('%2F')) {
    expected = expected.replace('%2F', '/')
  }
  expected = expected.replace('%3F', '?')
  while (expected.includes('%3D')) {
    expected = expected.replace('%3D', '=')
  }
  while (expected.includes('%26')) {
    expected = expected.replace('%26', '&')
  }
  while (expected.includes('%3A')) {
    expected = expected.replace('%3A', ':')
  }
  
  /** @type {string} */
  document.body.innerHTML = `The page that you were on was: <a href='https://minim.proxy.RockGamerAK.com/prox/?url=${expected}'>${expected}</a>`
  /** @type {string} */
  document.title = expected;
};