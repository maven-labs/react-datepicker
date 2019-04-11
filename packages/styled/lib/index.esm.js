import e, {
  useState as t,
  useCallback as n,
  useMemo as r,
  useContext as o,
  useRef as a,
  useEffect as i,
} from 'react'
import s, {ThemeContext as u, css as c} from 'styled-components'
var l = function() {
  return (l =
    Object.assign ||
    function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var o in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
      return e
    }).apply(this, arguments)
}
function p(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) : (e.raw = t), e
}
function f() {
  return (f =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
function d(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
function m(e, t) {
  return e((t = {exports: {}}), t.exports), t.exports
}
var h = m(function(e, t) {
  Object.defineProperty(t, '__esModule', {value: !0})
  var n = 'function' == typeof Symbol && Symbol.for,
    r = n ? Symbol.for('react.element') : 60103,
    o = n ? Symbol.for('react.portal') : 60106,
    a = n ? Symbol.for('react.fragment') : 60107,
    i = n ? Symbol.for('react.strict_mode') : 60108,
    s = n ? Symbol.for('react.profiler') : 60114,
    u = n ? Symbol.for('react.provider') : 60109,
    c = n ? Symbol.for('react.context') : 60110,
    l = n ? Symbol.for('react.async_mode') : 60111,
    p = n ? Symbol.for('react.concurrent_mode') : 60111,
    f = n ? Symbol.for('react.forward_ref') : 60112,
    d = n ? Symbol.for('react.suspense') : 60113,
    m = n ? Symbol.for('react.memo') : 60115,
    h = n ? Symbol.for('react.lazy') : 60116
  function g(e) {
    if ('object' == typeof e && null !== e) {
      var t = e.$$typeof
      switch (t) {
        case r:
          switch ((e = e.type)) {
            case l:
            case p:
            case a:
            case s:
            case i:
            case d:
              return e
            default:
              switch ((e = e && e.$$typeof)) {
                case c:
                case f:
                case u:
                  return e
                default:
                  return t
              }
          }
        case h:
        case m:
        case o:
          return t
      }
    }
  }
  function y(e) {
    return g(e) === p
  }
  ;(t.typeOf = g),
    (t.AsyncMode = l),
    (t.ConcurrentMode = p),
    (t.ContextConsumer = c),
    (t.ContextProvider = u),
    (t.Element = r),
    (t.ForwardRef = f),
    (t.Fragment = a),
    (t.Lazy = h),
    (t.Memo = m),
    (t.Portal = o),
    (t.Profiler = s),
    (t.StrictMode = i),
    (t.Suspense = d),
    (t.isValidElementType = function(e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === a ||
        e === p ||
        e === s ||
        e === i ||
        e === d ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === h ||
            e.$$typeof === m ||
            e.$$typeof === u ||
            e.$$typeof === c ||
            e.$$typeof === f))
      )
    }),
    (t.isAsyncMode = function(e) {
      return y(e) || g(e) === l
    }),
    (t.isConcurrentMode = y),
    (t.isContextConsumer = function(e) {
      return g(e) === c
    }),
    (t.isContextProvider = function(e) {
      return g(e) === u
    }),
    (t.isElement = function(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === r
    }),
    (t.isForwardRef = function(e) {
      return g(e) === f
    }),
    (t.isFragment = function(e) {
      return g(e) === a
    }),
    (t.isLazy = function(e) {
      return g(e) === h
    }),
    (t.isMemo = function(e) {
      return g(e) === m
    }),
    (t.isPortal = function(e) {
      return g(e) === o
    }),
    (t.isProfiler = function(e) {
      return g(e) === s
    }),
    (t.isStrictMode = function(e) {
      return g(e) === i
    }),
    (t.isSuspense = function(e) {
      return g(e) === d
    })
})
d(h)
h.typeOf,
  h.AsyncMode,
  h.ConcurrentMode,
  h.ContextConsumer,
  h.ContextProvider,
  h.Element,
  h.ForwardRef,
  h.Fragment,
  h.Lazy,
  h.Memo,
  h.Portal,
  h.Profiler,
  h.StrictMode,
  h.Suspense,
  h.isValidElementType,
  h.isAsyncMode,
  h.isConcurrentMode,
  h.isContextConsumer,
  h.isContextProvider,
  h.isElement,
  h.isForwardRef,
  h.isFragment,
  h.isLazy,
  h.isMemo,
  h.isPortal,
  h.isProfiler,
  h.isStrictMode,
  h.isSuspense
var g = m(function(e, t) {})
d(g)
g.typeOf,
  g.AsyncMode,
  g.ConcurrentMode,
  g.ContextConsumer,
  g.ContextProvider,
  g.Element,
  g.ForwardRef,
  g.Fragment,
  g.Lazy,
  g.Memo,
  g.Portal,
  g.Profiler,
  g.StrictMode,
  g.Suspense,
  g.isValidElementType,
  g.isAsyncMode,
  g.isConcurrentMode,
  g.isContextConsumer,
  g.isContextProvider,
  g.isElement,
  g.isForwardRef,
  g.isFragment,
  g.isLazy,
  g.isMemo,
  g.isPortal,
  g.isProfiler,
  g.isStrictMode,
  g.isSuspense,
  m(function(e) {
    e.exports = h
  })
var y = Object.getOwnPropertySymbols,
  v = Object.prototype.hasOwnProperty,
  D = Object.prototype.propertyIsEnumerable
;(function() {
  try {
    if (!Object.assign) return !1
    var e = new String('abc')
    if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1
    for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n
    if (
      '0123456789' !==
      Object.getOwnPropertyNames(t)
        .map(function(e) {
          return t[e]
        })
        .join('')
    )
      return !1
    var r = {}
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function(e) {
        r[e] = e
      }),
      'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
    )
  } catch (e) {
    return !1
  }
})() && Object.assign
var b = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
Function.call.bind(Object.prototype.hasOwnProperty)
function x() {}
function w() {}
w.resetWarningCache = x
var k = m(function(e) {
    e.exports = (function() {
      function e(e, t, n, r, o, a) {
        if (a !== b) {
          var i = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
          )
          throw ((i.name = 'Invariant Violation'), i)
        }
      }
      function t() {
        return e
      }
      e.isRequired = e
      var n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: w,
        resetWarningCache: x,
      }
      return (n.PropTypes = n), n
    })()
  }),
  S = [40, 52, 64].map(function(e) {
    return e + 'em'
  }),
  M = k.oneOfType([k.number, k.string, k.array, k.object]),
  C = function(e) {
    return function() {
      return e.apply(void 0, arguments)
    }
  },
  E = function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r]
    var o = n.reduce(function(t, n) {
      return T(t)
        ? t
        : ('string' == typeof n ? n.split('.') : [n]).reduce(function(e, t) {
            return e && T(e[t]) ? e[t] : null
          }, e)
    }, null)
    return T(o) ? o : n[n.length - 1]
  },
  T = function(e) {
    return null != e
  },
  F = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  O = function(e) {
    return F(e) && 0 !== e ? e + 'px' : e
  },
  z = function(e) {
    return '@media screen and (min-width: ' + O(e) + ')'
  },
  P = function(e, t) {
    return E(t, e)
  },
  Y = function(e) {
    var t,
      n = e.prop,
      r = e.cssProperty,
      o = e.alias,
      a = e.key,
      i = e.transformValue,
      s = void 0 === i ? P : i,
      u = e.scale,
      c = void 0 === u ? {} : u,
      l = r || n,
      p = function(e) {
        var t = E(e, n, o, null)
        if (!T(t)) return null
        var r,
          i = E(e.theme, a, c),
          u = function(e) {
            var t
            return T(e) ? (((t = {})[l] = s(e, i)), t) : null
          }
        if ('object' != typeof (r = t) || null === r) return u(t)
        var p = E(e.theme, 'breakpoints', S),
          f = []
        if (Array.isArray(t)) {
          f.push(u(t[0]))
          for (var d = 1; d < t.slice(0, p.length + 1).length; d++) {
            var m = u(t[d])
            if (m) {
              var h,
                g = z(p[d - 1])
              f.push((((h = {})[g] = m), h))
            }
          }
        } else {
          for (var y in t) {
            var v,
              D = p[y],
              b = z(D),
              x = u(t[y])
            if (D) f.push((((v = {})[b] = x), v))
            else f.unshift(x)
          }
          f.sort()
        }
        return f
      }
    return (
      ((p.propTypes = (((t = {})[n] = C(M)), t))[n].meta = {prop: n, themeKey: a}),
      o && ((p.propTypes[o] = C(M)), (p.propTypes[o].meta = {prop: o, themeKey: a})),
      p
    )
  },
  I = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
    var r = function(e) {
      return t
        .map(function(t) {
          return t(e)
        })
        .filter(Boolean)
    }
    return (
      (r.propTypes = {}),
      t.forEach(function(e) {
        r.propTypes = f({}, r.propTypes, e.propTypes)
      }),
      r
    )
  },
  A = function(e) {
    return function(t) {
      var n = function(n) {
        return t(e(n))
      }
      for (var r in t) n[r] = t[r]
      return n
    }
  },
  H = function(e) {
    var t,
      n = e.key,
      r = e.prop,
      o = void 0 === r ? 'variant' : r,
      a = function(e) {
        return E(e.theme, [n, e[o]].join('.'), null)
      }
    return (a.propTypes = (((t = {})[o] = k.oneOfType([k.number, k.string])), t)), a
  },
  W = [0, 4, 8, 16, 32, 64, 128, 256, 512],
  j = function(e, t) {
    if (!F(e)) return O(E(t, e, e))
    var n = e < 0,
      r = Math.abs(e),
      o = E(t, r)
    return F(o) ? O(o * (n ? -1 : 1)) : n ? '-' + o : o
  },
  L = Y({prop: 'margin', alias: 'm', key: 'space', transformValue: j, scale: W}),
  V = Y({prop: 'marginTop', alias: 'mt', key: 'space', transformValue: j, scale: W}),
  R = Y({prop: 'marginBottom', alias: 'mb', key: 'space', transformValue: j, scale: W}),
  B = Y({prop: 'marginLeft', alias: 'ml', key: 'space', transformValue: j, scale: W}),
  $ = Y({prop: 'marginRight', alias: 'mr', key: 'space', transformValue: j, scale: W}),
  N = Y({prop: 'padding', alias: 'p', key: 'space', transformValue: j, scale: W}),
  G = Y({prop: 'paddingTop', alias: 'pt', key: 'space', transformValue: j, scale: W}),
  _ = Y({prop: 'paddingBottom', alias: 'pb', key: 'space', transformValue: j, scale: W}),
  U = Y({prop: 'paddingLeft', alias: 'pl', key: 'space', transformValue: j, scale: W}),
  X = Y({prop: 'paddingRight', alias: 'pr', key: 'space', transformValue: j, scale: W}),
  Z = A(function(e) {
    return f({}, e, {
      mt: T(e.my) ? e.my : e.mt,
      mb: T(e.my) ? e.my : e.mb,
      ml: T(e.mx) ? e.mx : e.ml,
      mr: T(e.mx) ? e.mx : e.mr,
      pt: T(e.py) ? e.py : e.pt,
      pb: T(e.py) ? e.py : e.pb,
      pl: T(e.px) ? e.px : e.pl,
      pr: T(e.px) ? e.px : e.pr,
    })
  })(I(L, V, R, B, $, N, G, _, U, X)),
  J = I(
    Y({prop: 'color', key: 'colors'}),
    Y({prop: 'backgroundColor', alias: 'bg', key: 'colors'}),
  ),
  q = function(e, t) {
    return !F(e) || e > 1 ? O(e) : 100 * e + '%'
  },
  Q = Y({prop: 'width', key: 'widths', transformValue: q}),
  K = function(e, t) {
    return O(E(t, e))
  },
  ee = Y({
    prop: 'fontSize',
    key: 'fontSizes',
    transformValue: K,
    scale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  }),
  te = Y({prop: 'fontFamily', key: 'fonts'}),
  ne = Y({prop: 'fontWeight', key: 'fontWeights'}),
  re = Y({prop: 'lineHeight', key: 'lineHeights'}),
  oe = (Y({prop: 'textAlign'}),
  Y({prop: 'fontStyle'}),
  Y({prop: 'letterSpacing', key: 'letterSpacings', transformValue: K}),
  Y({prop: 'display'})),
  ae = (Y({prop: 'maxWidth', key: 'maxWidths', transformValue: K}),
  Y({prop: 'minWidth', key: 'minWidths', transformValue: K}),
  Y({prop: 'height', key: 'heights', transformValue: K})),
  ie = (Y({prop: 'maxHeight', key: 'maxHeights', transformValue: K}),
  Y({prop: 'minHeight', key: 'minHeights', transformValue: K})),
  se = (A(function(e) {
    return f({}, e, {width: e.size, height: e.size})
  })(I(Q, ae)),
  Y({prop: 'verticalAlign'}),
  Y({prop: 'alignItems'})),
  ue = (Y({prop: 'alignContent'}), Y({prop: 'justifyItems'}), Y({prop: 'justifyContent'})),
  ce = Y({prop: 'flexWrap'}),
  le = (Y({prop: 'flexBasis', transformValue: q}), Y({prop: 'flexDirection'})),
  pe = Y({prop: 'flex'}),
  fe = (Y({prop: 'justifySelf'}),
  Y({prop: 'alignSelf'}),
  Y({prop: 'order'}),
  Y({prop: 'gridGap', key: 'space', transformValue: K, scale: W})),
  de = Y({prop: 'gridColumnGap', key: 'space', transformValue: K, scale: W}),
  me = Y({prop: 'gridRowGap', key: 'space', transformValue: K, scale: W}),
  he = (Y({prop: 'gridColumn'}), Y({prop: 'gridRow'}), Y({prop: 'gridAutoFlow'})),
  ge = Y({prop: 'gridAutoColumns'}),
  ye = Y({prop: 'gridAutoRows'}),
  ve = Y({prop: 'gridTemplateColumns'}),
  De = Y({prop: 'gridTemplateRows'}),
  be = Y({prop: 'gridTemplateAreas'}),
  xe = Y({prop: 'gridArea'}),
  we = Y({prop: 'border', key: 'borders'}),
  ke = Y({prop: 'borderWidth', key: 'borderWidths', transformValue: K}),
  Se = Y({prop: 'borderStyle', key: 'borderStyles'}),
  Me = Y({prop: 'borderColor', key: 'colors'}),
  Ce = Y({prop: 'borderTop', key: 'borders'}),
  Ee = Y({prop: 'borderRight', key: 'borders'}),
  Te = Y({prop: 'borderBottom', key: 'borders'}),
  Fe = Y({prop: 'borderLeft', key: 'borders'}),
  Oe = Y({prop: 'borderRadius', key: 'radii', transformValue: K}),
  ze = (I(we, Ce, Ee, Te, Fe, ke, Se, Me, Oe), Y({prop: 'boxShadow', key: 'shadows'})),
  Pe = Y({prop: 'opacity'}),
  Ye = (Y({prop: 'overflow'}), Y({prop: 'background'})),
  Ie = (Y({prop: 'backgroundImage'}),
  Y({prop: 'backgroundSize'}),
  Y({prop: 'backgroundPosition'}),
  Y({prop: 'backgroundRepeat'}),
  Y({prop: 'position'})),
  Ae = Y({prop: 'zIndex', key: 'zIndices'}),
  He = Y({prop: 'top', transformValue: K}),
  We = Y({prop: 'right', transformValue: K}),
  je = Y({prop: 'bottom', transformValue: K}),
  Le = Y({prop: 'left', transformValue: K}),
  Ve = (H({key: 'buttons'}),
  H({key: 'textStyles', prop: 'textStyle'}),
  H({key: 'colorStyles', prop: 'colors'}),
  function(e) {
    var t = new Date(e.getTime()),
      n = t.getTimezoneOffset()
    return t.setSeconds(0, 0), 6e4 * n + (t.getTime() % 6e4)
  }),
  Re = function(e) {
    return e instanceof Date
  },
  Be = 36e5,
  $e = /[T ]/,
  Ne = /:/,
  Ge = /^(\d{2})$/,
  _e = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  Ue = /^(\d{4})/,
  Xe = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  Ze = /^-(\d{2})$/,
  Je = /^-?(\d{3})$/,
  qe = /^-?(\d{2})-?(\d{2})$/,
  Qe = /^-?W(\d{2})$/,
  Ke = /^-?W(\d{2})-?(\d{1})$/,
  et = /^(\d{2}([.,]\d*)?)$/,
  tt = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  nt = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  rt = /([Z+-].*)$/,
  ot = /^(Z)$/,
  at = /^([+-])(\d{2})$/,
  it = /^([+-])(\d{2}):?(\d{2})$/
function st(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var o = 7 * t + n + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + o), r
}
var ut,
  ct = function(e, t) {
    if (Re(e)) return new Date(e.getTime())
    if ('string' != typeof e) return new Date(e)
    var n = (t || {}).additionalDigits
    n = null == n ? 2 : Number(n)
    var r,
      o,
      a,
      i = (function(e) {
        var t,
          n = {},
          r = e.split($e)
        if ((Ne.test(r[0]) ? ((n.date = null), (t = r[0])) : ((n.date = r[0]), (t = r[1])), t)) {
          var o = rt.exec(t)
          o ? ((n.time = t.replace(o[1], '')), (n.timezone = o[1])) : (n.time = t)
        }
        return n
      })(e),
      s = (function(e, t) {
        var n,
          r = _e[t],
          o = Xe[t]
        if ((n = Ue.exec(e) || o.exec(e))) {
          var a = n[1]
          return {year: parseInt(a, 10), restDateString: e.slice(a.length)}
        }
        if ((n = Ge.exec(e) || r.exec(e))) {
          var i = n[1]
          return {year: 100 * parseInt(i, 10), restDateString: e.slice(i.length)}
        }
        return {year: null}
      })(i.date, n),
      u = s.year,
      c = (function(e, t) {
        if (null === t) return null
        var n, r, o
        if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r
        if ((n = Ze.exec(e)))
          return (r = new Date(0)), (o = parseInt(n[1], 10) - 1), r.setUTCFullYear(t, o), r
        if ((n = Je.exec(e))) {
          r = new Date(0)
          var a = parseInt(n[1], 10)
          return r.setUTCFullYear(t, 0, a), r
        }
        if ((n = qe.exec(e))) {
          ;(r = new Date(0)), (o = parseInt(n[1], 10) - 1)
          var i = parseInt(n[2], 10)
          return r.setUTCFullYear(t, o, i), r
        }
        return (n = Qe.exec(e))
          ? st(t, parseInt(n[1], 10) - 1)
          : (n = Ke.exec(e))
          ? st(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
          : null
      })(s.restDateString, u)
    if (c) {
      var l,
        p = c.getTime(),
        f = 0
      if (
        (i.time &&
          (f = (function(e) {
            var t, n, r
            if ((t = et.exec(e))) return ((n = parseFloat(t[1].replace(',', '.'))) % 24) * Be
            if ((t = tt.exec(e)))
              return (
                (n = parseInt(t[1], 10)),
                (r = parseFloat(t[2].replace(',', '.'))),
                (n % 24) * Be + 6e4 * r
              )
            if ((t = nt.exec(e))) {
              ;(n = parseInt(t[1], 10)), (r = parseInt(t[2], 10))
              var o = parseFloat(t[3].replace(',', '.'))
              return (n % 24) * Be + 6e4 * r + 1e3 * o
            }
            return null
          })(i.time)),
        i.timezone)
      )
        (r = i.timezone),
          (l =
            6e4 *
            ((o = ot.exec(r))
              ? 0
              : (o = at.exec(r))
              ? ((a = 60 * parseInt(o[2], 10)), '+' === o[1] ? -a : a)
              : (o = it.exec(r))
              ? ((a = 60 * parseInt(o[2], 10) + parseInt(o[3], 10)), '+' === o[1] ? -a : a)
              : 0))
      else {
        var d = p + f,
          m = new Date(d)
        l = Ve(m)
        var h = new Date(d)
        h.setDate(m.getDate() + 1)
        var g = Ve(h) - Ve(m)
        g > 0 && (l += g)
      }
      return new Date(p + f + l)
    }
    return new Date(e)
  },
  lt = function(e) {
    var t = ct(e)
    return t.setHours(0, 0, 0, 0), t
  },
  pt = function(e) {
    var t = ct(e)
    return (
      (function(e, t) {
        var n = lt(e),
          r = lt(t),
          o = n.getTime() - 6e4 * n.getTimezoneOffset(),
          a = r.getTime() - 6e4 * r.getTimezoneOffset()
        return Math.round((o - a) / 864e5)
      })(
        t,
        (function(e) {
          var t = ct(e),
            n = new Date(0)
          return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        })(t),
      ) + 1
    )
  },
  ft = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = ct(e),
      o = r.getDay(),
      a = (o < n ? 7 : 0) + o - n
    return r.setDate(r.getDate() - a), r.setHours(0, 0, 0, 0), r
  },
  dt = function(e) {
    return ft(e, {weekStartsOn: 1})
  },
  mt = function(e) {
    var t = ct(e),
      n = t.getFullYear(),
      r = new Date(0)
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
    var o = dt(r),
      a = new Date(0)
    a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0)
    var i = dt(a)
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
  },
  ht = function(e) {
    var t = ct(e),
      n =
        dt(t).getTime() -
        (function(e) {
          var t = mt(e),
            n = new Date(0)
          return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), dt(n)
        })(t).getTime()
    return Math.round(n / 6048e5) + 1
  },
  gt = function(e) {
    if (Re(e)) return !isNaN(e)
    throw new TypeError(toString.call(e) + ' is not an instance of Date')
  },
  yt = [
    'M',
    'MM',
    'Q',
    'D',
    'DD',
    'DDD',
    'DDDD',
    'd',
    'E',
    'W',
    'WW',
    'YY',
    'YYYY',
    'GG',
    'GGGG',
    'H',
    'HH',
    'h',
    'hh',
    'm',
    'mm',
    's',
    'ss',
    'S',
    'SS',
    'SSS',
    'Z',
    'ZZ',
    'X',
    'x',
  ],
  vt = function(e) {
    var t = []
    for (var n in e) e.hasOwnProperty(n) && t.push(n)
    var r = yt
      .concat(t)
      .sort()
      .reverse()
    return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + r.join('|') + '|.)', 'g')
  },
  Dt = {
    distanceInWords: ((ut = {
      lessThanXSeconds: {one: 'less than a second', other: 'less than {{count}} seconds'},
      xSeconds: {one: '1 second', other: '{{count}} seconds'},
      halfAMinute: 'half a minute',
      lessThanXMinutes: {one: 'less than a minute', other: 'less than {{count}} minutes'},
      xMinutes: {one: '1 minute', other: '{{count}} minutes'},
      aboutXHours: {one: 'about 1 hour', other: 'about {{count}} hours'},
      xHours: {one: '1 hour', other: '{{count}} hours'},
      xDays: {one: '1 day', other: '{{count}} days'},
      aboutXMonths: {one: 'about 1 month', other: 'about {{count}} months'},
      xMonths: {one: '1 month', other: '{{count}} months'},
      aboutXYears: {one: 'about 1 year', other: 'about {{count}} years'},
      xYears: {one: '1 year', other: '{{count}} years'},
      overXYears: {one: 'over 1 year', other: 'over {{count}} years'},
      almostXYears: {one: 'almost 1 year', other: 'almost {{count}} years'},
    }),
    {
      localize: function(e, t, n) {
        var r
        return (
          (n = n || {}),
          (r =
            'string' == typeof ut[e]
              ? ut[e]
              : 1 === t
              ? ut[e].one
              : ut[e].other.replace('{{count}}', t)),
          n.addSuffix ? (n.comparison > 0 ? 'in ' + r : r + ' ago') : r
        )
      },
    }),
    format: (function() {
      var e = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        t = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        n = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        r = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        o = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        a = ['AM', 'PM'],
        i = ['am', 'pm'],
        s = ['a.m.', 'p.m.'],
        u = {
          MMM: function(t) {
            return e[t.getMonth()]
          },
          MMMM: function(e) {
            return t[e.getMonth()]
          },
          dd: function(e) {
            return n[e.getDay()]
          },
          ddd: function(e) {
            return r[e.getDay()]
          },
          dddd: function(e) {
            return o[e.getDay()]
          },
          A: function(e) {
            return e.getHours() / 12 >= 1 ? a[1] : a[0]
          },
          a: function(e) {
            return e.getHours() / 12 >= 1 ? i[1] : i[0]
          },
          aa: function(e) {
            return e.getHours() / 12 >= 1 ? s[1] : s[0]
          },
        }
      return (
        ['M', 'D', 'DDD', 'd', 'Q', 'W'].forEach(function(e) {
          u[e + 'o'] = function(t, n) {
            return (function(e) {
              var t = e % 100
              if (t > 20 || t < 10)
                switch (t % 10) {
                  case 1:
                    return e + 'st'
                  case 2:
                    return e + 'nd'
                  case 3:
                    return e + 'rd'
                }
              return e + 'th'
            })(n[e](t))
          }
        }),
        {formatters: u, formattingTokensRegExp: vt(u)}
      )
    })(),
  },
  bt = {
    M: function(e) {
      return e.getMonth() + 1
    },
    MM: function(e) {
      return wt(e.getMonth() + 1, 2)
    },
    Q: function(e) {
      return Math.ceil((e.getMonth() + 1) / 3)
    },
    D: function(e) {
      return e.getDate()
    },
    DD: function(e) {
      return wt(e.getDate(), 2)
    },
    DDD: function(e) {
      return pt(e)
    },
    DDDD: function(e) {
      return wt(pt(e), 3)
    },
    d: function(e) {
      return e.getDay()
    },
    E: function(e) {
      return e.getDay() || 7
    },
    W: function(e) {
      return ht(e)
    },
    WW: function(e) {
      return wt(ht(e), 2)
    },
    YY: function(e) {
      return wt(e.getFullYear(), 4).substr(2)
    },
    YYYY: function(e) {
      return wt(e.getFullYear(), 4)
    },
    GG: function(e) {
      return String(mt(e)).substr(2)
    },
    GGGG: function(e) {
      return mt(e)
    },
    H: function(e) {
      return e.getHours()
    },
    HH: function(e) {
      return wt(e.getHours(), 2)
    },
    h: function(e) {
      var t = e.getHours()
      return 0 === t ? 12 : t > 12 ? t % 12 : t
    },
    hh: function(e) {
      return wt(bt.h(e), 2)
    },
    m: function(e) {
      return e.getMinutes()
    },
    mm: function(e) {
      return wt(e.getMinutes(), 2)
    },
    s: function(e) {
      return e.getSeconds()
    },
    ss: function(e) {
      return wt(e.getSeconds(), 2)
    },
    S: function(e) {
      return Math.floor(e.getMilliseconds() / 100)
    },
    SS: function(e) {
      return wt(Math.floor(e.getMilliseconds() / 10), 2)
    },
    SSS: function(e) {
      return wt(e.getMilliseconds(), 3)
    },
    Z: function(e) {
      return xt(e.getTimezoneOffset(), ':')
    },
    ZZ: function(e) {
      return xt(e.getTimezoneOffset())
    },
    X: function(e) {
      return Math.floor(e.getTime() / 1e3)
    },
    x: function(e) {
      return e.getTime()
    },
  }
function xt(e, t) {
  t = t || ''
  var n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    o = r % 60
  return n + wt(Math.floor(r / 60), 2) + t + wt(o, 2)
}
function wt(e, t) {
  for (var n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return n
}
var kt = function(e, t, n) {
    var r = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
      o = (n || {}).locale,
      a = Dt.format.formatters,
      i = Dt.format.formattingTokensRegExp
    o &&
      o.format &&
      o.format.formatters &&
      ((a = o.format.formatters),
      o.format.formattingTokensRegExp && (i = o.format.formattingTokensRegExp))
    var s = ct(e)
    return gt(s)
      ? (function(e, t, n) {
          var r,
            o,
            a,
            i = e.match(n),
            s = i.length
          for (r = 0; r < s; r++)
            (o = t[i[r]] || bt[i[r]]),
              (i[r] =
                o ||
                ((a = i[r]).match(/\[[\s\S]/) ? a.replace(/^\[|]$/g, '') : a.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', n = 0; n < s; n++)
              i[n] instanceof Function ? (t += i[n](e, bt)) : (t += i[n])
            return t
          }
        })(r, a, i)(s)
      : 'Invalid Date'
  },
  St = function(e, t) {
    var n = ct(e),
      r = Number(t)
    return n.setDate(n.getDate() + r), n
  },
  Mt = function(e, t, n) {
    var r = ct(e),
      o = void 0 !== n ? n : 1,
      a = ct(t).getTime()
    if (r.getTime() > a) throw new Error('The first date cannot be after the second date')
    var i = [],
      s = r
    for (s.setHours(0, 0, 0, 0); s.getTime() <= a; ) i.push(ct(s)), s.setDate(s.getDate() + o)
    return i
  },
  Ct = function(e) {
    var t = ct(e),
      n = t.getMonth()
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  Et = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = ct(e),
      o = r.getDay(),
      a = 6 + (o < n ? -7 : 0) - (o - n)
    return r.setDate(r.getDate() + a), r.setHours(23, 59, 59, 999), r
  },
  Tt = function(e) {
    return ct(e).getDay()
  },
  Ft = function(e) {
    var t = ct(e)
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
  }
function Ot(e) {
  var t = e.year,
    n = e.month,
    o = e.weekStartsOn,
    a = void 0 === o ? 1 : o,
    i = e.dayFormat,
    s =
      void 0 === i
        ? function(e) {
            return kt(e, 'DD')
          }
        : i,
    u = e.weekDayFormat,
    c =
      void 0 === u
        ? function(e) {
            return kt(e, 'dd')
          }
        : u,
    l = e.monthLabelFormat,
    p =
      void 0 === l
        ? function(e) {
            return kt(e, 'MMMM YYYY')
          }
        : l
  return {
    days: r(
      function() {
        return (function(e) {
          var t = e.year,
            n = e.month,
            r = e.weekStartsOn,
            o = void 0 === r ? 1 : r,
            a = e.dayFormat,
            i =
              void 0 === a
                ? function(e) {
                    return kt(e, 'DD')
                  }
                : a,
            s = new Date(t, n),
            u = Ft(s),
            c = Tt(u),
            l = Ct(s),
            p = Array.from(Array(c >= o ? c - o : o).keys()).fill(0),
            f = Mt(u, l).map(function(e) {
              return {date: e, day: i(e)}
            })
          return p.concat(f)
        })({year: t, month: n, weekStartsOn: a, dayFormat: s})
      },
      [t, n, a],
    ),
    weekDays: r(
      function() {
        return (function(e) {
          var t = void 0 === e ? {} : e,
            n = t.weekStartsOn,
            r = void 0 === n ? 1 : n,
            o = t.weekDayFormat,
            a =
              void 0 === o
                ? function(e) {
                    return kt(e, 'dd')
                  }
                : o,
            i = new Date()
          return Mt(St(ft(i), r), St(Et(i), r)).reduce(function(e, t) {
            return e.push(a(t)), e
          }, [])
        })({weekStartsOn: a, weekDayFormat: c})
      },
      [a],
    ),
    monthLabel: p(new Date(t, n)),
  }
}
var zt = function(e, t) {
    var n = ct(e),
      r = ct(t)
    return n.getTime() < r.getTime()
  },
  Pt = function(e, t) {
    var n = ct(e),
      r = ct(t)
    return n.getTime() > r.getTime()
  },
  Yt = function(e, t, n) {
    var r = ct(e).getTime(),
      o = ct(t).getTime(),
      a = ct(n).getTime()
    if (o > a) throw new Error('The start of the range cannot be after the end of the range')
    return r >= o && r <= a
  },
  It = function(e, t) {
    var n = lt(e),
      r = lt(t)
    return n.getTime() === r.getTime()
  },
  At = function(e) {
    return ct(e).getFullYear()
  },
  Ht = function(e) {
    return ct(e).getMonth()
  },
  Wt = function() {
    return lt(new Date())
  },
  jt = function(e, t) {
    var n = ct(e),
      r = Number(t),
      o = n.getMonth() + r,
      a = new Date(0)
    a.setFullYear(n.getFullYear(), o, 1), a.setHours(0, 0, 0, 0)
    var i = (function(e) {
      var t = ct(e),
        n = t.getFullYear(),
        r = t.getMonth(),
        o = new Date(0)
      return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
    })(a)
    return n.setMonth(o, Math.min(i, n.getDate())), n
  }
function Lt(e) {
  var t = Ft(e)
  return {year: At(t), month: Ht(t), date: t}
}
function Vt(e, t) {
  var n = Lt(t || Wt()),
    r = n.date,
    o = [n]
  return (
    e > 1 &&
      (o = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = jt(e[e.length - 1].date, 1)), e.concat([Lt(r)])
      }, o)),
    o
  )
}
function Rt(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (r = jt(r, n)), n > 0 ? e.concat([Lt(r)]) : [Lt(r)].concat(e)
  }, [])
}
function Bt(e, t, n) {
  return e && 'string' == typeof t ? kt(e, t) : e && 'function' == typeof t ? t(e) : n
}
var $t = 'startDate',
  Nt = 'endDate'
function Gt(e) {
  var r = e.startDate,
    o = e.endDate,
    a = e.focusedInput,
    i = e.minBookingDate,
    s = e.maxBookingDate,
    u = e.onDateChange,
    c = e.numberOfMonths,
    l = void 0 === c ? 2 : c,
    p = e.firstDayOfWeek,
    f = void 0 === p ? 1 : p,
    d = t(function() {
      return Vt(l, r)
    }),
    m = d[0],
    h = d[1],
    g = n(
      function(e) {
        return (function(e, t, n) {
          return !(!t || !n) && Yt(e, t, n)
        })(e, r, o)
      },
      [r, o],
    ),
    y = n(
      function(e) {
        return (function(e, t, n) {
          return !!((t && It(e, t)) || (n && It(e, n)))
        })(e, r, o)
      },
      [r, o],
    ),
    v = n(
      function(e) {
        return (function(e, t, n, r) {
          var o = t ? new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0) : t,
            a = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n
          return !!((o && zt(e, o)) || (a && Pt(e, a)) || (r && r(e)))
        })(e, i, s)
      },
      [i, s],
    )
  return {
    firstDayOfWeek: f,
    activeMonths: m,
    isDateSelected: g,
    isStartOrEndDate: y,
    isDateBlocked: v,
    numberOfMonths: l,
    onResetDates: function() {
      u({startDate: null, endDate: null, focusedInput: $t})
    },
    onDaySelect: function(e) {
      ;(a === Nt && r && zt(e, r)) || (a === $t && o && Pt(e, o))
        ? u({endDate: null, startDate: e, focusedInput: Nt})
        : a === $t
        ? u({endDate: o, startDate: e, focusedInput: Nt})
        : a === Nt && r && !zt(e, r) && u({startDate: r, endDate: e, focusedInput: null})
    },
    goToPreviousMonths: function() {
      h(Rt(m, l, -1))
    },
    goToNextMonths: function() {
      h(Rt(m, l, 1))
    },
  }
}
var _t,
  Ut,
  Xt,
  Zt = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
  },
  Jt = l({}, Zt, {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  qt = s('div')(
    _t ||
      (_t = p(
        [
          '\n  display: grid;\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n',
        ],
        [
          '\n  display: grid;\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n',
        ],
      )),
    ge,
    he,
    ye,
    de,
    fe,
    me,
    be,
    ve,
    De,
    se,
    ue,
    Z,
  ),
  Qt = s('div')(
    Ut ||
      (Ut = p(
        [
          '\n  display: flex;\n\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n',
        ],
        [
          '\n  display: flex;\n\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n',
        ],
      )),
    Z,
    pe,
    ce,
    le,
    se,
    ue,
    xe,
    ae,
    Q,
  ),
  Kt = s('div')(
    Xt ||
      (Xt = p(
        [
          '\n  box-sizing: border-box;\n\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n',
        ],
        [
          '\n  box-sizing: border-box;\n\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n',
        ],
      )),
    xe,
    ae,
    Z,
    Q,
    Ie,
    He,
    Le,
    We,
    je,
    Ae,
  )
function en(t) {
  var n = t.height,
    r = t.width,
    o = t.color,
    a = t.className,
    i = void 0 === a ? '' : a
  return e.createElement(
    'svg',
    {
      width: r,
      height: n,
      color: o,
      className: i,
      viewBox: '0 0 12 12',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    e.createElement('path', {
      d:
        'M8 1H7v1h1V1zM6.5 6.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM6 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 6 3zm3.5 5.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0-2h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM9 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 9 3zm-.5 2.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm-3 0h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm-2 3h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM11 1h-1v1h1v9H1V2h1V1H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM3.5 6.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM5 1H4v1h1V1zm1.5 7.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-4-3h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zM3 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 3 3z',
      fill: 'currentColor',
      fillRule: 'nonzero',
    }),
  )
}
var tn,
  nn,
  rn,
  on = s('label')(
    tn ||
      (tn = p(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    Ie,
    we,
    Ye,
    oe,
    Oe,
    Z,
  ),
  an = s('div')(
    nn ||
      (nn = p(
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  \n  svg {\n    display: block;\n  }\n',
        ],
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  \n  svg {\n    display: block;\n  }\n',
        ],
      )),
    Ie,
    Le,
    He,
    ae,
    Q,
  ),
  sn = s('input')(
    rn ||
      (rn = p(
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  box-sizing: border-box;\n  \n  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n    font-weight: 500;\n    color: #929598;\n  }\n  ::-moz-placeholder { /* Firefox 19+ */\n    font-weight: 500;\n    color: #929598;\n  }\n  :-moz-placeholder { /* Firefox 18- */\n    font-weight: 500;\n    color: #929598;\n  }\n',
        ],
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  box-sizing: border-box;\n  \n  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n    font-weight: 500;\n    color: #929598;\n  }\n  ::-moz-placeholder { /* Firefox 19+ */\n    font-weight: 500;\n    color: #929598;\n  }\n  :-moz-placeholder { /* Firefox 18- */\n    font-weight: 500;\n    color: #929598;\n  }\n',
        ],
      )),
    Ye,
    Z,
    te,
    ee,
    J,
    ne,
    Z,
    we,
    Q,
    ie,
  )
function un(t) {
  var n = t.placeholder,
    r = t.id,
    o = t.ariaLabel,
    a = t.onClick,
    i = t.value,
    s = t.showCalendarIcon,
    u = t.inputBorder,
    c = t.inputMinHeight,
    l = t.inputPadding,
    p = t.calendarWrapperTop
  return e.createElement(
    on,
    {
      htmlFor: r,
      display: 'block',
      position: 'relative',
      border: u || '1px solid #d0d0d0',
      background: '#ffffff',
      borderRadius: '2px',
      mb: '0',
    },
    s &&
      e.createElement(
        an,
        {position: 'absolute', height: '12px', width: '12px', top: p || '16px', left: '16px'},
        e.createElement(en, {width: '12px', height: '12px', color: '#BCBEC0'}),
      ),
    e.createElement(sn, {
      border: '0',
      p: l || '0 44px',
      width: '100%',
      minHeight: c || '46px',
      background: '#ffffff',
      fontFamily: 'Montserrat',
      color: '#001217',
      fontSize: '14px',
      fontWeight: 600,
      id: r,
      placeholder: n,
      'aria-label': o,
      value: i,
      autoComplete: 'off',
      readOnly: !0,
      onFocus: a,
    }),
  )
}
function cn(t) {
  var n = t.height,
    r = t.width,
    o = t.iconColor,
    a = t.direction,
    i = void 0 === a ? 'right' : a,
    s = t.className,
    u = void 0 === s ? '' : s,
    c = (function(e) {
      switch (e) {
        case 'up':
          return 0
        case 'down':
          return 180
        case 'left':
          return -90
        case 'right':
        default:
          return 90
      }
    })(i)
  return e.createElement(
    'svg',
    {
      width: r,
      height: n,
      color: o,
      className: u,
      transform: 'rotate(' + c + ' 0 0)',
      viewBox: '0 0 9 12',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    e.createElement('path', {
      fill: 'currentColor',
      d:
        'M4.46.001a.538.538 0 0 0-.358.174L.156 4.48a.538.538 0 1 0 .796.724l3.01-3.285v13.689a.563.563 0 0 0 .538.55.563.563 0 0 0 .538-.55V1.918l3.01 3.286a.538.538 0 1 0 .796-.724L4.898.175a.538.538 0 0 0-.437-.174z',
    }),
  )
}
function ln(e) {
  void 0 === e && (e = {})
  var t = o(u)
  return r(
    function() {
      return t && 'object' == typeof t && t.reactDatepicker && 'object' == typeof t.reactDatepicker
        ? Object.keys(e).reduce(function(n, r) {
            var o
            return l({}, n, (((o = {})[r] = t.reactDatepicker[r] || e[r]), o))
          }, {})
        : e
    },
    [t, e],
  )
}
var pn,
  fn,
  dn,
  mn = {
    fontFamily: 'Montserrat, sans-serif',
    colors: {silverCloud: '#929598', charcoal: '#001217', darcula: '#343132', mud: '#58595B'},
  },
  hn = s('div')(
    pn ||
      (pn = p(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    te,
    ee,
    ne,
    J,
    re,
    Z,
  ),
  gn = s(hn)(
    dn ||
      (dn = p(
        [
          "\n  position: relative;\n  display: inline-block;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n  }\n\n  ",
          '\n',
        ],
        [
          "\n  position: relative;\n  display: inline-block;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n  }\n\n  ",
          '\n',
        ],
      )),
    function(e) {
      return (
        e.isActive &&
        c(
          fn ||
            (fn = p(
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
            )),
        )
      )
    },
  )
function yn(t) {
  var n = t.title,
    r = t.isActive,
    o = t.date,
    a = ln({
      fontFamily: mn.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: mn.colors.silverCloud,
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: mn.colors.charcoal,
      selectDateDateFontSize: '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDatePadding: '0',
    })
  return e.createElement(
    Kt,
    {p: a.selectDatePadding},
    e.createElement(
      hn,
      {
        fontFamily: a.fontFamily,
        fontSize: a.selectDateLabelFontSize,
        color: a.selectDateLabelColor,
        m: a.selectDateLabelMargin,
      },
      n,
    ),
    e.createElement(
      gn,
      {
        as: 'span',
        color: a.selectDateDateColor,
        fontSize: a.selectDateDateFontSize,
        fontWeight: a.selectDateDateFontWeight,
        fontFamily: a.fontFamily,
        p: a.selectDateDatePadding,
        isActive: r,
      },
      o,
    ),
  )
}
var vn = function(t) {
    var n = t.label
    return e.createElement(
      hn,
      {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: 1.57,
        color: '#343132',
      },
      n,
    )
  },
  Dn = function(t) {
    var n = t.label
    return e.createElement(
      hn,
      {fontFamily: 'Montserrat', fontSize: '11px', fontWeight: 500, color: '#929598'},
      n,
    )
  },
  bn = s('button')(
    Sn ||
      (Sn = p(
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  border: 0;\n  padding: 0;\n  outline: 0;\n  \n  ',
          '\n  \n  ',
          '\n',
        ],
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  border: 0;\n  padding: 0;\n  outline: 0;\n  \n  ',
          '\n  \n  ',
          '\n',
        ],
      )),
    Q,
    ae,
    ze,
    Ye,
    function(e) {
      return (
        e.disabled &&
        c(
          xn ||
            (xn = p(
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
            )),
        )
      )
    },
    function(e) {
      var t = e.disabled,
        n = e.isActive,
        r = e.isStartOrEnd
      return t || n || r
        ? n && !r
          ? c(
              kn ||
                (kn = p(
                  ['\n        &:hover {\n          background: #39beef;\n        }\n      '],
                  ['\n        &:hover {\n          background: #39beef;\n        }\n      '],
                )),
            )
          : ''
        : c(
            wn ||
              (wn = p(
                ['\n        &:hover {\n          background: #e6e7e8;\n        }\n      '],
                ['\n        &:hover {\n          background: #e6e7e8;\n        }\n      '],
              )),
          )
    },
  )
var xn,
  wn,
  kn,
  Sn,
  Mn = e.memo(function(t) {
    var n = t.day,
      r = t.isActive,
      o = t.isStartOrEnd,
      a = t.disabled,
      i = t.onDaySelect,
      s = t.date,
      u = t.daySize,
      c = (function(e, t) {
        return t ? '#00aeef' : e ? '#71c9ed' : '#e6e7e8'
      })(r, o),
      l = (function(e, t) {
        return t ? '#00aeef' : e ? '#71c9ed' : '#ffffff'
      })(r, o),
      p = (function(e, t) {
        return e || t ? '#ffffff' : '#58595b'
      })(r, o)
    return e.createElement(
      bn,
      {
        role: 'button',
        onClick: function() {
          return i(s)
        },
        disabled: a,
        isActive: r,
        isStartOrEnd: o,
        height: u || '36px',
        width: u || '36px',
        background: l,
        boxShadow:
          '1px 0 0 0 ' +
          c +
          ',\n        0 1px 0 0 ' +
          c +
          ',\n        1px 1px 0 0 ' +
          c +
          ',\n        1px 0 0 0 ' +
          c +
          ' inset,\n        0 1px 0 0 ' +
          c +
          ' inset',
      },
      e.createElement(
        Qt,
        {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
        e.createElement(
          hn,
          {color: p, fontFamily: 'Montserrat', fontWeight: 500, fontSize: '14px'},
          n,
        ),
      ),
    )
  }),
  Cn = function(t) {
    var n = t.year,
      r = t.month,
      o = t.firstDayOfWeek,
      a = t.isDateBlocked,
      i = t.isDateSelected,
      s = t.isStartOrEndDate,
      u = t.onDaySelect,
      c = t.daySize,
      l = Ot({year: n, month: r, weekStartsOn: o}),
      p = l.days,
      f = l.weekDays,
      d = l.monthLabel
    return e.createElement(
      'div',
      null,
      e.createElement(Qt, {justifyContent: 'center', mb: '28px'}, e.createElement(vn, {label: d})),
      e.createElement(
        qt,
        {gridTemplateColumns: 'repeat(7, 1fr)'},
        f.map(function(t) {
          return e.createElement(
            Qt,
            {key: t, justifyContent: 'center', mb: '16px'},
            e.createElement(Dn, {label: t}),
          )
        }),
      ),
      e.createElement(
        qt,
        {gridTemplateColumns: 'repeat(7, 1fr)'},
        p.map(function(t, n) {
          return 'object' == typeof t
            ? e.createElement(Mn, {
                isActive: i(t.date),
                date: t.date,
                key: t.day,
                day: t.day,
                disabled: a(t.date),
                isStartOrEnd: s(t.date),
                onDaySelect: u,
                daySize: c,
              })
            : e.createElement('div', {key: n})
        }),
      ),
    )
  }
function En(t) {
  var n = t.height,
    r = t.width,
    o = t.color,
    a = t.className,
    i = void 0 === a ? '' : a
  return e.createElement(
    'svg',
    {
      width: r,
      height: n,
      color: o,
      className: i,
      viewBox: '0 0 14 14',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    e.createElement('path', {
      fill: 'currentColor',
      fillRule: 'nonzero',
      d:
        'M9.015 11.15c-.027-.18-.04-.39-.067-.585a3.958 3.958 0 0 1-4.48-.056C2.663 9.241 2.142 6.663 3.292 4.74c1.217-2.02 3.797-2.592 5.696-1.282.589.404 1.03.934 1.35 1.533l-1.216.808L13 7.917l-.174-4.556-1.056.696a5.812 5.812 0 0 0-1.846-2.062C7.25.155 3.64.935 1.901 3.765c-1.672 2.717-.95 6.382 1.605 8.194a5.535 5.535 0 0 0 5.616.501c0-.083 0-.167-.013-.264a9.193 9.193 0 0 0-.094-1.046z',
    }),
  )
}
var Tn,
  Fn = s('button')(
    Tn ||
      (Tn = p(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  )
function On(t) {
  var n = t.onResetDates,
    r = t.text,
    o = a(null),
    i = ln({
      fontFamily: mn.fontFamily,
      resetDatesIconColor: mn.colors.mud,
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: mn.colors.darcula,
      resetDatesTextMargin: '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return e.createElement(
    Fn,
    {
      onClick: n,
      onMouseUp: function() {
        o && o.current && o.current.blur()
      },
      ref: o,
    },
    e.createElement(En, {
      height: i.resetDatesIconHeight,
      width: i.resetDatesIconWidth,
      color: i.resetDatesIconColor,
    }),
    e.createElement(
      hn,
      {
        m: i.resetDatesTextMargin,
        lineHeight: i.resetDatesTextLineHeight,
        fontFamily: i.fontFamily,
        fontSize: i.resetDatesTextFontSize,
        color: i.resetDatesTextColor,
      },
      r,
    ),
  )
}
var zn,
  Pn,
  Yn = s('svg')(Pn || (Pn = p(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    var t = e.angle
    return c(
      zn ||
        (zn = p(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function In(t) {
  var n = t.height,
    r = t.width,
    o = t.color,
    a = t.direction,
    i = void 0 === a ? 'right' : a,
    s = t.className,
    u = void 0 === s ? '' : s,
    c = (function(e) {
      switch (e) {
        case 'up':
          return 180
        case 'down':
          return 0
        case 'left':
          return 90
        case 'right':
        default:
          return -90
      }
    })(i)
  return e.createElement(
    Yn,
    {
      width: r,
      height: n,
      color: o,
      className: u,
      angle: c,
      viewBox: '0 0 9 6',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    e.createElement('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      d:
        'M4.058 4.594L1.185 1.72a.312.312 0 1 1 .442-.442L4.5 4.152l2.873-2.873a.312.312 0 1 1 .442.442L4.723 4.812a.316.316 0 0 1-.446 0l-.219-.218z',
    }),
  )
}
var An,
  Hn = s('button')(
    An ||
      (An = p(
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n',
        ],
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n',
        ],
      )),
    Q,
    ae,
    Ye,
    Z,
    we,
  )
function Wn(t) {
  var n = t.type,
    r = t.onClick
  return e.createElement(
    Hn,
    {
      width: '30px',
      height: '30px',
      background: '#ffffff',
      border: '1px solid #929598',
      p: '0',
      type: 'button',
      onClick: r,
    },
    e.createElement(In, {
      width: '18px',
      height: '11px',
      color: '#808285',
      direction: 'next' === n ? 'right' : 'left',
    }),
  )
}
function jn(t) {
  var n = t.height,
    r = t.width,
    o = t.color,
    a = t.className,
    i = void 0 === a ? '' : a
  return e.createElement(
    'svg',
    {
      width: r,
      height: n,
      color: o,
      className: i,
      viewBox: '0 0 15 16',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    e.createElement('path', {
      fill: 'currentColor',
      fillRule: 'nonzero',
      d:
        'M14.69.263a.802.802 0 0 0-1.187 0L7.47 6.694 1.433.262a.802.802 0 0 0-1.187 0 .938.938 0 0 0 0 1.267L6.28 7.96.246 14.392a.937.937 0 0 0 0 1.266.81.81 0 0 0 .594.262.81.81 0 0 0 .593-.262l6.035-6.432 6.035 6.432a.812.812 0 0 0 .593.262.81.81 0 0 0 .594-.262.937.937 0 0 0 0-1.266L8.656 7.96l6.034-6.43a.937.937 0 0 0 0-1.267z',
    }),
  )
}
var Ln,
  Vn,
  Rn = s('div')(
    Ln ||
      (Ln = p(
        [
          '\n  margin-left: 16px;\n  margin-top: 1px;\n  float: left;\n  font-family: Montserrat, sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #929598;\n  transition: color 0.15s;\n',
        ],
        [
          '\n  margin-left: 16px;\n  margin-top: 1px;\n  float: left;\n  font-family: Montserrat, sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #929598;\n  transition: color 0.15s;\n',
        ],
      )),
  ),
  Bn = s('button')(
    Vn ||
      (Vn = p(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
          ' {\n      color: #343132;\n    }\n\n    svg {\n      color: #343132;\n    }\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
          ' {\n      color: #343132;\n    }\n\n    svg {\n      color: #343132;\n    }\n  }\n',
        ],
      )),
    Rn,
  )
function $n(t) {
  var n = t.onClick
  return e.createElement(
    Bn,
    {onClick: n},
    e.createElement(jn, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(Rn, null, 'Close'),
  )
}
var Nn,
  Gn,
  _n = s('div')(
    Nn || (Nn = p(['\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n'])),
    Ye,
    Z,
    Oe,
    Ie,
  ),
  Un = s('div')(
    Gn ||
      (Gn = p(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  )
function Xn(t) {
  var n = t.startDate,
    r = t.endDate,
    o = t.minBookingDate,
    a = t.maxBookingDate,
    i = t.focusedInput,
    s = t.onDateChange,
    u = t.onClose,
    c = void 0 === u ? function() {} : u,
    l = t.numberOfMonths,
    p = t.firstDayOfWeek,
    f = t.displayFormat,
    d = void 0 === f ? 'MM/DD/YYYY' : f,
    m = t.phrases,
    h = void 0 === m ? Zt : m,
    g = t.styles,
    y = void 0 === g ? {} : g,
    v = Gt({
      startDate: n,
      endDate: r,
      focusedInput: i,
      onDateChange: s,
      minBookingDate: o,
      maxBookingDate: a,
      numberOfMonths: l,
      firstDayOfWeek: p,
    }),
    D = v.activeMonths,
    b = v.isDateSelected,
    x = v.isStartOrEndDate,
    w = v.isDateBlocked,
    k = v.firstDayOfWeek,
    S = v.onDaySelect,
    M = v.onResetDates,
    C = v.goToPreviousMonths,
    E = v.goToNextMonths,
    T = v.numberOfMonths
  return e.createElement(
    _n,
    {background: '#ffffff', p: '32px', borderRadius: '2px', position: 'relative'},
    e.createElement(
      Kt,
      {position: 'absolute', right: '32px', zIndex: 1},
      e.createElement($n, {onClick: c}),
    ),
    e.createElement(
      Un,
      null,
      e.createElement(
        qt,
        {gridTemplateColumns: y.selectDateGridTemplateColumns || '126px 75px 126px'},
        e.createElement(yn, {
          title: h.datepickerStartDateLabel,
          date: Bt(n, d, h.datepickerStartDatePlaceholder),
          isActive: i === $t,
        }),
        e.createElement(
          Qt,
          {justifyContent: 'center', alignItems: 'center'},
          e.createElement(cn, {height: '12px', width: '15px', iconColor: '#929598'}),
        ),
        e.createElement(yn, {
          title: h.datepickerEndDateLabel,
          date: Bt(r, d, h.datepickerEndDatePlaceholder),
          isActive: i === Nt,
        }),
      ),
    ),
    e.createElement(
      Kt,
      {mt: '28px', position: 'relative'},
      e.createElement(
        Kt,
        {position: 'absolute', top: '-5px', left: '0'},
        e.createElement(Wn, {type: 'prev', onClick: C}),
      ),
      e.createElement(
        Kt,
        {position: 'absolute', top: '-5px', right: '0'},
        e.createElement(Wn, {type: 'next', onClick: E}),
      ),
      e.createElement(
        qt,
        {gridTemplateColumns: 'repeat(' + T + ', 1fr)', gridGap: '0 32px'},
        D.map(function(t) {
          return e.createElement(Cn, {
            key: t.year + '-' + t.month,
            year: t.year,
            month: t.month,
            firstDayOfWeek: k,
            isDateBlocked: w,
            isDateSelected: b,
            isStartOrEndDate: x,
            onDaySelect: S,
            daySize: y.daySize,
          })
        }),
      ),
    ),
    e.createElement(Kt, {mt: '32px'}, e.createElement(On, {onResetDates: M, text: h.resetDates})),
  )
}
var Zn,
  Jn,
  qn = s(cn)(Zn || (Zn = p(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Pe, J),
  Qn = s(qt)(
    Jn || (Jn = p(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n'])),
    Ye,
    we,
    Oe,
  )
function Kn(t) {
  var n = t.startDate,
    r = t.endDate,
    o = t.minBookingDate,
    s = t.maxBookingDate,
    u = t.firstDayOfWeek,
    c = t.onFocusChange,
    l = t.numberOfMonths,
    p = t.focusedInput,
    f = t.onDateChange,
    d = t.onClose,
    m = void 0 === d ? function() {} : d,
    h = t.showStartDateCalendarIcon,
    g = void 0 === h || h,
    y = t.showEndDateCalendarIcon,
    v = void 0 === y || y,
    D = t.styles,
    b = void 0 === D ? {} : D,
    x = t.displayFormat,
    w = void 0 === x ? 'MM/DD/YYYY' : x,
    k = t.phrases,
    S = void 0 === k ? Jt : k,
    M = a(null)
  function C(e) {
    null !== p && M && M.current && !M.current.contains(e.target) && c(null)
  }
  return (
    i(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', C),
        function() {
          window.removeEventListener('click', C)
        }
      )
    }),
    e.createElement(
      Kt,
      {position: 'relative', ref: M},
      e.createElement(
        Qn,
        {
          background: b.inputGridBackground || 'transparent',
          gridTemplateColumns: b.inputGridTemplateColumns || '194px 39px 194px',
          border: b.inputGridBorder || '0',
          borderRadius: b.inputGridBorderRadius || '0',
        },
        e.createElement(un, {
          id: 'startDate',
          ariaLabel: S.startDateAriaLabel,
          placeholder: S.startDatePlaceholder,
          value: Bt(n, w, ''),
          onClick: function() {
            return c($t)
          },
          showCalendarIcon: g,
          inputBorder: b.inputBorder,
          inputMinHeight: b.inputMinHeight,
          inputPadding: b.inputStartDatePadding || b.inputPadding,
          calendarWrapperTop: b.inputCalendarWrapperTop,
        }),
        e.createElement(
          Qt,
          {alignItems: 'center', justifyContent: 'center'},
          e.createElement(qn, {
            width: '15px',
            height: '12px',
            color: b.inputArrowIconColor || '#ffffff',
            opacity: b.inputArrowIconOpacity || 0.4,
          }),
        ),
        e.createElement(un, {
          id: 'startDate',
          ariaLabel: S.endDateAriaLabel,
          placeholder: S.endDatePlaceholder,
          value: Bt(r, w, ''),
          onClick: function() {
            return c(n ? Nt : $t)
          },
          showCalendarIcon: v,
          inputBorder: b.inputBorder,
          inputMinHeight: b.inputMinHeight,
          calendarWrapperTop: b.inputCalendarWrapperTop,
          inputPadding: b.inputEndDatePadding || b.inputPadding,
        }),
      ),
      e.createElement(
        Kt,
        {position: 'absolute', bottom: b.datepickerBottom || '65px', left: b.datepickerLeft || '0'},
        null !== p &&
          e.createElement(Xn, {
            onClose: function() {
              m(), c(null)
            },
            startDate: n,
            endDate: r,
            minBookingDate: o,
            maxBookingDate: s,
            firstDayOfWeek: u,
            numberOfMonths: l,
            focusedInput: p,
            displayFormat: w,
            onDateChange: f,
            styles: {
              daySize: b.daySize,
              selectDateGridTemplateColumns: b.selectDateGridTemplateColumns,
            },
          }),
      ),
    )
  )
}
export {Kn as DateRangeInput, Xn as Datepicker}