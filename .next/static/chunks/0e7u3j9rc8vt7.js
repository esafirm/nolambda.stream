;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  59149,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'useMergedRef', {
        enumerable: !0,
        get: function () {
          return o
        },
      })
    let n = e.r(50394)
    function o(e, t) {
      let r = (0, n.useRef)(null),
        o = (0, n.useRef)(null)
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current
            e && ((r.current = null), e())
            let t = o.current
            t && ((o.current = null), t())
          } else e && (r.current = u(e, n)), t && (o.current = u(t, n))
        },
        [e, t]
      )
    }
    function u(e, t) {
      if ('function' != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null
          }
        )
      {
        let r = e(t)
        return 'function' == typeof r ? r : () => e(null)
      }
    }
    ;('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default))
  },
  86942,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'useIntersection', {
        enumerable: !0,
        get: function () {
          return l
        },
      })
    let n = e.r(50394),
      o = e.r(60235),
      u = 'function' == typeof IntersectionObserver,
      a = new Map(),
      i = []
    function l({ rootRef: e, rootMargin: t, disabled: r }) {
      let s = r || !u,
        [c, f] = (0, n.useState)(!1),
        d = (0, n.useRef)(null),
        p = (0, n.useCallback)((e) => {
          d.current = e
        }, [])
      return (
        (0, n.useEffect)(() => {
          if (u) {
            if (s || c) return
            let r = d.current
            if (r && r.tagName)
              return (function (e, t, r) {
                let {
                  id: n,
                  observer: o,
                  elements: u,
                } = (function (e) {
                  let t,
                    r = { root: e.root || null, margin: e.rootMargin || '' },
                    n = i.find((e) => e.root === r.root && e.margin === r.margin)
                  if (n && (t = a.get(n))) return t
                  let o = new Map()
                  return (
                    (t = {
                      id: r,
                      observer: new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let t = o.get(e.target),
                            r = e.isIntersecting || e.intersectionRatio > 0
                          t && r && t(r)
                        })
                      }, e),
                      elements: o,
                    }),
                    i.push(r),
                    a.set(r, t),
                    t
                  )
                })(r)
                return (
                  u.set(e, t),
                  o.observe(e),
                  function () {
                    if ((u.delete(e), o.unobserve(e), 0 === u.size)) {
                      o.disconnect(), a.delete(n)
                      let e = i.findIndex((e) => e.root === n.root && e.margin === n.margin)
                      e > -1 && i.splice(e, 1)
                    }
                  }
                )
              })(r, (e) => e && f(e), { root: e?.current, rootMargin: t })
          } else if (!c) {
            let e = (0, o.requestIdleCallback)(() => f(!0))
            return () => (0, o.cancelIdleCallback)(e)
          }
        }, [s, t, e, c, d.current]),
        [
          p,
          c,
          (0, n.useCallback)(() => {
            f(!1)
          }, []),
        ]
      )
    }
    ;('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default))
  },
  33982,
  (e, t, r) => {
    'use strict'
    function n(e, t, r, n) {
      return !1
    }
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'getDomainLocale', {
        enumerable: !0,
        get: function () {
          return n
        },
      }),
      e.r(9531),
      ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default))
  },
  79580,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'errorOnce', {
        enumerable: !0,
        get: function () {
          return n
        },
      })
    let n = (e) => {}
  },
  82381,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 })
    var n = {
      default: function () {
        return E
      },
      useLinkStatus: function () {
        return w
      },
    }
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] })
    let u = e.r(87602),
      a = e.r(15497),
      i = u._(e.r(50394)),
      l = e.r(24112),
      s = e.r(21157),
      c = e.r(9111),
      f = e.r(57468),
      d = e.r(7236),
      p = e.r(64985),
      y = e.r(86942),
      m = e.r(33982),
      h = e.r(2500),
      g = e.r(59149)
    e.r(79580)
    let b = new Set()
    function _(e, t, r, n) {
      if (!('u' < typeof window) && (0, s.isLocalURL)(t)) {
        if (!n.bypassPrefetchedCheck) {
          let o =
            t + '%' + r + '%' + (void 0 !== n.locale ? n.locale : 'locale' in e ? e.locale : void 0)
          if (b.has(o)) return
          b.add(o)
        }
        e.prefetch(t, r, n).catch((e) => {})
      }
    }
    function v(e) {
      return 'string' == typeof e ? e : (0, c.formatUrl)(e)
    }
    let j = i.default.forwardRef(function (e, t) {
        let r,
          n,
          {
            href: o,
            as: u,
            children: c,
            prefetch: b = null,
            passHref: j,
            replace: x,
            shallow: w,
            scroll: E,
            locale: S,
            onClick: O,
            onNavigate: P,
            onMouseEnter: C,
            onTouchStart: T,
            legacyBehavior: k = !1,
            transitionTypes: I,
            ...R
          } = e
        ;(r = c),
          k &&
            ('string' == typeof r || 'number' == typeof r) &&
            (r = (0, a.jsx)('a', { children: r }))
        let U = i.default.useContext(p.RouterContext),
          M = !1 !== b,
          { href: $, as: A } = i.default.useMemo(() => {
            if (!U) {
              let e = v(o)
              return { href: e, as: u ? v(u) : e }
            }
            let [e, t] = (0, l.resolveHref)(U, o, !0)
            return { href: e, as: u ? (0, l.resolveHref)(U, u) : t || e }
          }, [U, o, u]),
          L = i.default.useRef($),
          H = i.default.useRef(A)
        k && (n = i.default.Children.only(r))
        let N = k ? n && 'object' == typeof n && n.ref : t,
          [D, B, F] = (0, y.useIntersection)({ rootMargin: '200px' }),
          q = i.default.useCallback(
            (e) => {
              ;(H.current !== A || L.current !== $) && (F(), (H.current = A), (L.current = $)), D(e)
            },
            [A, $, F, D]
          ),
          W = (0, g.useMergedRef)(q, N)
        i.default.useEffect(() => {
          !U || (B && M && _(U, $, A, { locale: S }))
        }, [A, $, B, S, M, U?.locale, U])
        let z = {
          ref: W,
          onClick(e) {
            k || 'function' != typeof O || O(e),
              k && n.props && 'function' == typeof n.props.onClick && n.props.onClick(e),
              !U ||
                e.defaultPrevented ||
                (function (e, t, r, n, o, u, a, i, l) {
                  let c,
                    { nodeName: f } = e.currentTarget
                  if (
                    !(
                      ('A' === f.toUpperCase() &&
                        (((c = e.currentTarget.getAttribute('target')) && '_self' !== c) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which))) ||
                      e.currentTarget.hasAttribute('download')
                    )
                  ) {
                    if (!(0, s.isLocalURL)(r)) {
                      o && (e.preventDefault(), location.replace(r))
                      return
                    }
                    e.preventDefault(),
                      (() => {
                        if (l) {
                          let e = !1
                          if (
                            (l({
                              preventDefault: () => {
                                e = !0
                              },
                            }),
                            e)
                          )
                            return
                        }
                        let e = a ?? !0
                        'beforePopState' in t
                          ? t[o ? 'replace' : 'push'](r, n, { shallow: u, locale: i, scroll: e })
                          : t[o ? 'replace' : 'push'](n || r, { scroll: e })
                      })()
                  }
                })(e, U, $, A, x, w, E, S, P)
          },
          onMouseEnter(e) {
            k || 'function' != typeof C || C(e),
              k && n.props && 'function' == typeof n.props.onMouseEnter && n.props.onMouseEnter(e),
              U && _(U, $, A, { locale: S, priority: !0, bypassPrefetchedCheck: !0 })
          },
          onTouchStart: function (e) {
            k || 'function' != typeof T || T(e),
              k && n.props && 'function' == typeof n.props.onTouchStart && n.props.onTouchStart(e),
              U && _(U, $, A, { locale: S, priority: !0, bypassPrefetchedCheck: !0 })
          },
        }
        if ((0, f.isAbsoluteUrl)(A)) z.href = A
        else if (!k || j || ('a' === n.type && !('href' in n.props))) {
          let e = void 0 !== S ? S : U?.locale
          z.href =
            (U?.isLocaleDomain && (0, m.getDomainLocale)(A, e, U?.locales, U?.domainLocales)) ||
            (0, h.addBasePath)((0, d.addLocale)(A, e, U?.defaultLocale))
        }
        return k ? i.default.cloneElement(n, z) : (0, a.jsx)('a', { ...R, ...z, children: r })
      }),
      x = (0, i.createContext)({ pending: !1 }),
      w = () => (0, i.useContext)(x),
      E = j
    ;('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default))
  },
  9521,
  (e, t, r) => {
    t.exports = e.r(82381)
  },
  81272,
  (e) => {
    'use strict'
    var t = e.i(15497),
      r = e.i(9521)
    e.s([
      'default',
      0,
      ({ href: e, children: n, ...o }) => {
        let u = e && e.startsWith('/'),
          a = e && e.startsWith('#')
        return u
          ? (0, t.jsx)(r.default, { href: e, ...o, children: n })
          : a
          ? (0, t.jsx)('a', { href: e, ...o, children: n })
          : (0, t.jsx)('a', {
              target: '_blank',
              rel: 'noopener noreferrer',
              href: e,
              ...o,
              children: n,
            })
      },
    ])
  },
  89973,
  (e) => {
    'use strict'
    var t = e.i(93906)
    let r = {
      title: 'I Have No Lambda',
      author: 'Esa Firman',
      headerTitle: 'Esa Firman',
      description: 'I prefer to write code, really.',
      language: 'en-us',
      theme: 'system',
      siteUrl: 'https://nolambda.stream',
      siteRepo: 'https://github.com/esafirm/nolambda.stream',
      siteLogo: '/static/images/logo.png',
      image: 'https://www.gravatar.com/avatar/dcafc93100ece4c0582543b020a63ec8?s=250&d=mm&r=x',
      socialBanner: '/static/images/twitter-card.png',
      github: 'https://github.com/esafirm',
      twitter: 'https://twitter.com/esafirm',
      locale: 'en-US',
      analytics: {
        plausibleDataDomain: '',
        simpleAnalytics: !1,
        umamiWebsiteId: '',
        googleAnalyticsId: 'UA-102328330-1',
        posthogAnalyticsId: '',
      },
      newsletter: { provider: '' },
      comment: {
        provider: 'disqus',
        giscusConfig: {
          repo: t.default.env.NEXT_PUBLIC_GISCUS_REPO,
          repositoryId: t.default.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
          category: t.default.env.NEXT_PUBLIC_GISCUS_CATEGORY,
          categoryId: t.default.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
          mapping: 'pathname',
          reactions: '1',
          metadata: '0',
          theme: 'light',
          inputPosition: 'bottom',
          lang: 'en',
          darkTheme: 'transparent_dark',
          themeURL: '',
        },
        utterancesConfig: {
          repo: t.default.env.NEXT_PUBLIC_UTTERANCES_REPO,
          issueTerm: '',
          label: '',
          theme: '',
          darkTheme: '',
        },
        disqusConfig: { shortname: 'esafirm' },
      },
    }
    e.s(['default', 0, r])
  },
  34342,
  (e, t, r) => {
    var n = {
        229: function (e) {
          var t,
            r,
            n,
            o = (e.exports = {})
          function u() {
            throw Error('setTimeout has not been defined')
          }
          function a() {
            throw Error('clearTimeout has not been defined')
          }
          try {
            t = 'function' == typeof setTimeout ? setTimeout : u
          } catch (e) {
            t = u
          }
          try {
            r = 'function' == typeof clearTimeout ? clearTimeout : a
          } catch (e) {
            r = a
          }
          function i(e) {
            if (t === setTimeout) return setTimeout(e, 0)
            if ((t === u || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0)
            try {
              return t(e, 0)
            } catch (r) {
              try {
                return t.call(null, e, 0)
              } catch (r) {
                return t.call(this, e, 0)
              }
            }
          }
          var l = [],
            s = !1,
            c = -1
          function f() {
            s && n && ((s = !1), n.length ? (l = n.concat(l)) : (c = -1), l.length && d())
          }
          function d() {
            if (!s) {
              var e = i(f)
              s = !0
              for (var t = l.length; t; ) {
                for (n = l, l = []; ++c < t; ) n && n[c].run()
                ;(c = -1), (t = l.length)
              }
              ;(n = null),
                (s = !1),
                (function (e) {
                  if (r === clearTimeout) return clearTimeout(e)
                  if ((r === a || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e)
                  try {
                    r(e)
                  } catch (t) {
                    try {
                      return r.call(null, e)
                    } catch (t) {
                      return r.call(this, e)
                    }
                  }
                })(e)
            }
          }
          function p(e, t) {
            ;(this.fun = e), (this.array = t)
          }
          function y() {}
          ;(o.nextTick = function (e) {
            var t = Array(arguments.length - 1)
            if (arguments.length > 1)
              for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
            l.push(new p(e, t)), 1 !== l.length || s || i(d)
          }),
            (p.prototype.run = function () {
              this.fun.apply(null, this.array)
            }),
            (o.title = 'browser'),
            (o.browser = !0),
            (o.env = {}),
            (o.argv = []),
            (o.version = ''),
            (o.versions = {}),
            (o.on = y),
            (o.addListener = y),
            (o.once = y),
            (o.off = y),
            (o.removeListener = y),
            (o.removeAllListeners = y),
            (o.emit = y),
            (o.prependListener = y),
            (o.prependOnceListener = y),
            (o.listeners = function (e) {
              return []
            }),
            (o.binding = function (e) {
              throw Error('process.binding is not supported')
            }),
            (o.cwd = function () {
              return '/'
            }),
            (o.chdir = function (e) {
              throw Error('process.chdir is not supported')
            }),
            (o.umask = function () {
              return 0
            })
        },
      },
      o = {}
    function u(e) {
      var t = o[e]
      if (void 0 !== t) return t.exports
      var r = (o[e] = { exports: {} }),
        a = !0
      try {
        n[e](r, r.exports, u), (a = !1)
      } finally {
        a && delete o[e]
      }
      return r.exports
    }
    ;(u.ab =
      '/ROOT/node_modules/.pnpm/next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/process/'),
      (t.exports = u(229))
  },
  93906,
  (e, t, r) => {
    'use strict'
    var n, o
    t.exports =
      (null == (n = e.g.process) ? void 0 : n.env) &&
      'object' == typeof (null == (o = e.g.process) ? void 0 : o.env)
        ? e.g.process
        : e.r(34342)
  },
  34126,
  (e, t, r) => {
    'use strict'
    var n = Symbol.for('react.transitional.element')
    function o(e, t, r) {
      var o = null
      if ((void 0 !== r && (o = '' + r), void 0 !== t.key && (o = '' + t.key), 'key' in t))
        for (var u in ((r = {}), t)) 'key' !== u && (r[u] = t[u])
      else r = t
      return { $$typeof: n, type: e, key: o, ref: void 0 !== (t = r.ref) ? t : null, props: r }
    }
    ;(r.Fragment = Symbol.for('react.fragment')), (r.jsx = o), (r.jsxs = o)
  },
  15497,
  (e, t, r) => {
    'use strict'
    t.exports = e.r(34126)
  },
  42527,
  (e, t, r) => {
    'use strict'
    var n = e.i(93906),
      o = Symbol.for('react.transitional.element'),
      u = Symbol.for('react.portal'),
      a = Symbol.for('react.fragment'),
      i = Symbol.for('react.strict_mode'),
      l = Symbol.for('react.profiler'),
      s = Symbol.for('react.consumer'),
      c = Symbol.for('react.context'),
      f = Symbol.for('react.forward_ref'),
      d = Symbol.for('react.suspense'),
      p = Symbol.for('react.memo'),
      y = Symbol.for('react.lazy'),
      m = Symbol.for('react.activity'),
      h = Symbol.iterator,
      g = {
        isMounted: function () {
          return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      b = Object.assign,
      _ = {}
    function v(e, t, r) {
      ;(this.props = e), (this.context = t), (this.refs = _), (this.updater = r || g)
    }
    function j() {}
    function x(e, t, r) {
      ;(this.props = e), (this.context = t), (this.refs = _), (this.updater = r || g)
    }
    ;(v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e)
          throw Error(
            'takes an object of state variables to update or a function which returns an object of state variables.'
          )
        this.updater.enqueueSetState(this, e, t, 'setState')
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
      }),
      (j.prototype = v.prototype)
    var w = (x.prototype = new j())
    ;(w.constructor = x), b(w, v.prototype), (w.isPureReactComponent = !0)
    var E = Array.isArray
    function S() {}
    var O = { H: null, A: null, T: null, S: null },
      P = Object.prototype.hasOwnProperty
    function C(e, t, r) {
      var n = r.ref
      return { $$typeof: o, type: e, key: t, ref: void 0 !== n ? n : null, props: r }
    }
    function T(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === o
    }
    var k = /\/+/g
    function I(e, t) {
      var r, n
      return 'object' == typeof e && null !== e && null != e.key
        ? ((r = '' + e.key),
          (n = { '=': '=0', ':': '=2' }),
          '$' +
            r.replace(/[=:]/g, function (e) {
              return n[e]
            }))
        : t.toString(36)
    }
    function R(e, t, r) {
      if (null == e) return e
      var n = [],
        a = 0
      return (
        !(function e(t, r, n, a, i) {
          var l,
            s,
            c,
            f = typeof t
          ;('undefined' === f || 'boolean' === f) && (t = null)
          var d = !1
          if (null === t) d = !0
          else
            switch (f) {
              case 'bigint':
              case 'string':
              case 'number':
                d = !0
                break
              case 'object':
                switch (t.$$typeof) {
                  case o:
                  case u:
                    d = !0
                    break
                  case y:
                    return e((d = t._init)(t._payload), r, n, a, i)
                }
            }
          if (d)
            return (
              (i = i(t)),
              (d = '' === a ? '.' + I(t, 0) : a),
              E(i)
                ? ((n = ''),
                  null != d && (n = d.replace(k, '$&/') + '/'),
                  e(i, r, n, '', function (e) {
                    return e
                  }))
                : null != i &&
                  (T(i) &&
                    ((l = i),
                    (s =
                      n +
                      (null == i.key || (t && t.key === i.key)
                        ? ''
                        : ('' + i.key).replace(k, '$&/') + '/') +
                      d),
                    (i = C(l.type, s, l.props))),
                  r.push(i)),
              1
            )
          d = 0
          var p = '' === a ? '.' : a + ':'
          if (E(t))
            for (var m = 0; m < t.length; m++) (f = p + I((a = t[m]), m)), (d += e(a, r, n, f, i))
          else if (
            'function' ==
            typeof (m =
              null === (c = t) || 'object' != typeof c
                ? null
                : 'function' == typeof (c = (h && c[h]) || c['@@iterator'])
                ? c
                : null)
          )
            for (t = m.call(t), m = 0; !(a = t.next()).done; )
              (f = p + I((a = a.value), m++)), (d += e(a, r, n, f, i))
          else if ('object' === f) {
            if ('function' == typeof t.then)
              return e(
                (function (e) {
                  switch (e.status) {
                    case 'fulfilled':
                      return e.value
                    case 'rejected':
                      throw e.reason
                    default:
                      switch (
                        ('string' == typeof e.status
                          ? e.then(S, S)
                          : ((e.status = 'pending'),
                            e.then(
                              function (t) {
                                'pending' === e.status && ((e.status = 'fulfilled'), (e.value = t))
                              },
                              function (t) {
                                'pending' === e.status && ((e.status = 'rejected'), (e.reason = t))
                              }
                            )),
                        e.status)
                      ) {
                        case 'fulfilled':
                          return e.value
                        case 'rejected':
                          throw e.reason
                      }
                  }
                  throw e
                })(t),
                r,
                n,
                a,
                i
              )
            throw Error(
              'Objects are not valid as a React child (found: ' +
                ('[object Object]' === (r = String(t))
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : r) +
                '). If you meant to render a collection of children, use an array instead.'
            )
          }
          return d
        })(e, n, '', '', function (e) {
          return t.call(r, e, a++)
        }),
        n
      )
    }
    function U(e) {
      if (-1 === e._status) {
        var t = e._result
        ;(t = t()).then(
          function (t) {
            ;(0 === e._status || -1 === e._status) && ((e._status = 1), (e._result = t))
          },
          function (t) {
            ;(0 === e._status || -1 === e._status) && ((e._status = 2), (e._result = t))
          }
        ),
          -1 === e._status && ((e._status = 0), (e._result = t))
      }
      if (1 === e._status) return e._result.default
      throw e._result
    }
    var M =
      'function' == typeof reportError
        ? reportError
        : function (e) {
            if ('object' == typeof window && 'function' == typeof window.ErrorEvent) {
              var t = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  'object' == typeof e && null !== e && 'string' == typeof e.message
                    ? String(e.message)
                    : String(e),
                error: e,
              })
              if (!window.dispatchEvent(t)) return
            } else if ('object' == typeof n.default && 'function' == typeof n.default.emit)
              return void n.default.emit('uncaughtException', e)
            console.error(e)
          }
    ;(r.Activity = m),
      (r.Children = {
        map: R,
        forEach: function (e, t, r) {
          R(
            e,
            function () {
              t.apply(this, arguments)
            },
            r
          )
        },
        count: function (e) {
          var t = 0
          return (
            R(e, function () {
              t++
            }),
            t
          )
        },
        toArray: function (e) {
          return (
            R(e, function (e) {
              return e
            }) || []
          )
        },
        only: function (e) {
          if (!T(e))
            throw Error('React.Children.only expected to receive a single React element child.')
          return e
        },
      }),
      (r.Component = v),
      (r.Fragment = a),
      (r.Profiler = l),
      (r.PureComponent = x),
      (r.StrictMode = i),
      (r.Suspense = d),
      (r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O),
      (r.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return O.H.useMemoCache(e)
        },
      }),
      (r.cache = function (e) {
        return function () {
          return e.apply(null, arguments)
        }
      }),
      (r.cacheSignal = function () {
        return null
      }),
      (r.cloneElement = function (e, t, r) {
        if (null == e)
          throw Error('The argument must be a React element, but you passed ' + e + '.')
        var n = b({}, e.props),
          o = e.key
        if (null != t)
          for (u in (void 0 !== t.key && (o = '' + t.key), t))
            P.call(t, u) &&
              'key' !== u &&
              '__self' !== u &&
              '__source' !== u &&
              ('ref' !== u || void 0 !== t.ref) &&
              (n[u] = t[u])
        var u = arguments.length - 2
        if (1 === u) n.children = r
        else if (1 < u) {
          for (var a = Array(u), i = 0; i < u; i++) a[i] = arguments[i + 2]
          n.children = a
        }
        return C(e.type, o, n)
      }),
      (r.createContext = function (e) {
        return (
          ((e = {
            $$typeof: c,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }).Provider = e),
          (e.Consumer = { $$typeof: s, _context: e }),
          e
        )
      }),
      (r.createElement = function (e, t, r) {
        var n,
          o = {},
          u = null
        if (null != t)
          for (n in (void 0 !== t.key && (u = '' + t.key), t))
            P.call(t, n) && 'key' !== n && '__self' !== n && '__source' !== n && (o[n] = t[n])
        var a = arguments.length - 2
        if (1 === a) o.children = r
        else if (1 < a) {
          for (var i = Array(a), l = 0; l < a; l++) i[l] = arguments[l + 2]
          o.children = i
        }
        if (e && e.defaultProps) for (n in (a = e.defaultProps)) void 0 === o[n] && (o[n] = a[n])
        return C(e, u, o)
      }),
      (r.createRef = function () {
        return { current: null }
      }),
      (r.forwardRef = function (e) {
        return { $$typeof: f, render: e }
      }),
      (r.isValidElement = T),
      (r.lazy = function (e) {
        return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: U }
      }),
      (r.memo = function (e, t) {
        return { $$typeof: p, type: e, compare: void 0 === t ? null : t }
      }),
      (r.startTransition = function (e) {
        var t = O.T,
          r = {}
        O.T = r
        try {
          var n = e(),
            o = O.S
          null !== o && o(r, n),
            'object' == typeof n && null !== n && 'function' == typeof n.then && n.then(S, M)
        } catch (e) {
          M(e)
        } finally {
          null !== t && null !== r.types && (t.types = r.types), (O.T = t)
        }
      }),
      (r.unstable_useCacheRefresh = function () {
        return O.H.useCacheRefresh()
      }),
      (r.use = function (e) {
        return O.H.use(e)
      }),
      (r.useActionState = function (e, t, r) {
        return O.H.useActionState(e, t, r)
      }),
      (r.useCallback = function (e, t) {
        return O.H.useCallback(e, t)
      }),
      (r.useContext = function (e) {
        return O.H.useContext(e)
      }),
      (r.useDebugValue = function () {}),
      (r.useDeferredValue = function (e, t) {
        return O.H.useDeferredValue(e, t)
      }),
      (r.useEffect = function (e, t) {
        return O.H.useEffect(e, t)
      }),
      (r.useEffectEvent = function (e) {
        return O.H.useEffectEvent(e)
      }),
      (r.useId = function () {
        return O.H.useId()
      }),
      (r.useImperativeHandle = function (e, t, r) {
        return O.H.useImperativeHandle(e, t, r)
      }),
      (r.useInsertionEffect = function (e, t) {
        return O.H.useInsertionEffect(e, t)
      }),
      (r.useLayoutEffect = function (e, t) {
        return O.H.useLayoutEffect(e, t)
      }),
      (r.useMemo = function (e, t) {
        return O.H.useMemo(e, t)
      }),
      (r.useOptimistic = function (e, t) {
        return O.H.useOptimistic(e, t)
      }),
      (r.useReducer = function (e, t, r) {
        return O.H.useReducer(e, t, r)
      }),
      (r.useRef = function (e) {
        return O.H.useRef(e)
      }),
      (r.useState = function (e) {
        return O.H.useState(e)
      }),
      (r.useSyncExternalStore = function (e, t, r) {
        return O.H.useSyncExternalStore(e, t, r)
      }),
      (r.useTransition = function () {
        return O.H.useTransition()
      }),
      (r.version = '19.2.4')
  },
  50394,
  (e, t, r) => {
    'use strict'
    t.exports = e.r(42527)
  },
  2879,
  (e, t, r) => {
    'use strict'
    r._ = function (e) {
      return e && e.__esModule ? e : { default: e }
    }
  },
  47110,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'HeadManagerContext', {
        enumerable: !0,
        get: function () {
          return n
        },
      })
    let n = e.r(2879)._(e.r(50394)).default.createContext({})
  },
  67103,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'warnOnce', {
        enumerable: !0,
        get: function () {
          return n
        },
      })
    let n = (e) => {}
  },
  87602,
  (e, t, r) => {
    'use strict'
    function n(e) {
      if ('function' != typeof WeakMap) return null
      var t = new WeakMap(),
        r = new WeakMap()
      return (n = function (e) {
        return e ? r : t
      })(e)
    }
    r._ = function (e, t) {
      if (!t && e && e.__esModule) return e
      if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e }
      var r = n(t)
      if (r && r.has(e)) return r.get(e)
      var o = { __proto__: null },
        u = Object.defineProperty && Object.getOwnPropertyDescriptor
      for (var a in e)
        if ('default' !== a && Object.prototype.hasOwnProperty.call(e, a)) {
          var i = u ? Object.getOwnPropertyDescriptor(e, a) : null
          i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a])
        }
      return (o.default = e), r && r.set(e, o), o
    }
  },
  60864,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'default', {
        enumerable: !0,
        get: function () {
          return i
        },
      })
    let n = e.r(50394),
      o = 'u' < typeof window,
      u = o ? () => {} : n.useLayoutEffect,
      a = o ? () => {} : n.useEffect
    function i(e) {
      let { headManager: t, reduceComponentsToState: r } = e
      function i() {
        if (t && t.mountedInstances) {
          let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean))
          t.updateHead(r(e))
        }
      }
      return (
        o && (t?.mountedInstances?.add(e.children), i()),
        u(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children)
            }
          )
        ),
        u(
          () => (
            t && (t._pendingUpdate = i),
            () => {
              t && (t._pendingUpdate = i)
            }
          )
        ),
        a(
          () => (
            t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null))
            }
          )
        ),
        null
      )
    }
  },
  6641,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 })
    var n = {
      default: function () {
        return m
      },
      defaultHead: function () {
        return f
      },
    }
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] })
    let u = e.r(2879),
      a = e.r(87602),
      i = e.r(15497),
      l = a._(e.r(50394)),
      s = u._(e.r(60864)),
      c = e.r(47110)
    function f() {
      return [
        (0, i.jsx)('meta', { charSet: 'utf-8' }, 'charset'),
        (0, i.jsx)('meta', { name: 'viewport', content: 'width=device-width' }, 'viewport'),
      ]
    }
    function d(e, t) {
      return 'string' == typeof t || 'number' == typeof t
        ? e
        : t.type === l.default.Fragment
        ? e.concat(
            l.default.Children.toArray(t.props.children).reduce(
              (e, t) => ('string' == typeof t || 'number' == typeof t ? e : e.concat(t)),
              []
            )
          )
        : e.concat(t)
    }
    e.r(67103)
    let p = ['name', 'httpEquiv', 'charSet', 'itemProp']
    function y(e) {
      let t, r, n, o
      return e
        .reduce(d, [])
        .reverse()
        .concat(f().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (n = new Set()),
          (o = {}),
          (e) => {
            let u = !0,
              a = !1
            if (e.key && 'number' != typeof e.key && e.key.indexOf('$') > 0) {
              a = !0
              let r = e.key.slice(e.key.indexOf('$') + 1)
              t.has(r) ? (u = !1) : t.add(r)
            }
            switch (e.type) {
              case 'title':
              case 'base':
                r.has(e.type) ? (u = !1) : r.add(e.type)
                break
              case 'meta':
                for (let t = 0, r = p.length; t < r; t++) {
                  let r = p[t]
                  if (e.props.hasOwnProperty(r))
                    if ('charSet' === r) n.has(r) ? (u = !1) : n.add(r)
                    else {
                      let t = e.props[r],
                        n = o[r] || new Set()
                      ;('name' !== r || !a) && n.has(t) ? (u = !1) : (n.add(t), (o[r] = n))
                    }
                }
            }
            return u
          })
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t
          return l.default.cloneElement(e, { key: r })
        })
    }
    let m = function ({ children: e }) {
      let t = (0, l.useContext)(c.HeadManagerContext)
      return (0, i.jsx)(s.default, { reduceComponentsToState: y, headManager: t, children: e })
    }
    ;('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default))
  },
  57468,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 })
    var n = {
      DecodeError: function () {
        return g
      },
      MiddlewareNotFoundError: function () {
        return j
      },
      MissingStaticPage: function () {
        return v
      },
      NormalizeError: function () {
        return b
      },
      PageNotFoundError: function () {
        return _
      },
      SP: function () {
        return m
      },
      ST: function () {
        return h
      },
      WEB_VITALS: function () {
        return u
      },
      execOnce: function () {
        return a
      },
      getDisplayName: function () {
        return f
      },
      getLocationOrigin: function () {
        return s
      },
      getURL: function () {
        return c
      },
      isAbsoluteUrl: function () {
        return l
      },
      isResSent: function () {
        return d
      },
      loadGetInitialProps: function () {
        return y
      },
      normalizeRepeatedSlashes: function () {
        return p
      },
      stringifyError: function () {
        return x
      },
    }
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] })
    let u = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB']
    function a(e) {
      let t,
        r = !1
      return (...n) => (r || ((r = !0), (t = e(...n))), t)
    }
    let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => i.test(e)
    function s() {
      let { protocol: e, hostname: t, port: r } = window.location
      return `${e}//${t}${r ? ':' + r : ''}`
    }
    function c() {
      let { href: e } = window.location,
        t = s()
      return e.substring(t.length)
    }
    function f(e) {
      return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown'
    }
    function d(e) {
      return e.finished || e.headersSent
    }
    function p(e) {
      let t = e.split('?')
      return (
        t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') + (t[1] ? `?${t.slice(1).join('?')}` : '')
      )
    }
    async function y(e, t) {
      let r = t.res || (t.ctx && t.ctx.res)
      if (!e.getInitialProps)
        return t.ctx && t.Component ? { pageProps: await y(t.Component, t.ctx) } : {}
      let n = await e.getInitialProps(t)
      if (r && d(r)) return n
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`
          ),
          '__NEXT_ERROR_CODE',
          { value: 'E1025', enumerable: !1, configurable: !0 }
        )
      return n
    }
    let m = 'u' > typeof performance,
      h =
        m &&
        ['mark', 'measure', 'getEntriesByName'].every((e) => 'function' == typeof performance[e])
    class g extends Error {}
    class b extends Error {}
    class _ extends Error {
      constructor(e) {
        super(),
          (this.code = 'ENOENT'),
          (this.name = 'PageNotFoundError'),
          (this.message = `Cannot find module for page: ${e}`)
      }
    }
    class v extends Error {
      constructor(e, t) {
        super(), (this.message = `Failed to load static file for page: ${e} ${t}`)
      }
    }
    class j extends Error {
      constructor() {
        super(), (this.code = 'ENOENT'), (this.message = 'Cannot find the middleware module')
      }
    }
    function x(e) {
      return JSON.stringify({ message: e.message, stack: e.stack })
    }
  },
  25957,
  (e, t, r) => {
    t.exports = e.r(6641)
  },
  66854,
  (e, t, r) => {
    t.exports = e.r(60248)
  },
  13730,
  (e) => {
    'use strict'
    var t = e.i(15497),
      r = e.i(25957),
      n = e.i(66854),
      o = e.i(89973)
    let u = ({ title: e, description: u, ogType: a, ogImage: i, twImage: l, canonicalUrl: s }) => {
      let c = (0, n.useRouter)()
      return (0, t.jsxs)(r.default, {
        children: [
          (0, t.jsx)('title', { children: e }),
          (0, t.jsx)('meta', { name: 'robots', content: 'follow, index' }),
          (0, t.jsx)('meta', { name: 'description', content: u }),
          (0, t.jsx)('meta', { property: 'og:url', content: `${o.default.siteUrl}${c.asPath}` }),
          (0, t.jsx)('meta', { property: 'og:type', content: a }),
          (0, t.jsx)('meta', { property: 'og:site_name', content: o.default.title }),
          (0, t.jsx)('meta', { property: 'og:description', content: u }),
          (0, t.jsx)('meta', { property: 'og:title', content: e }),
          Array.isArray(i)
            ? i.map(({ url: e }) => (0, t.jsx)('meta', { property: 'og:image', content: e }, e))
            : (0, t.jsx)('meta', { property: 'og:image', content: i }, i),
          (0, t.jsx)('meta', { name: 'twitter:card', content: 'summary_large_image' }),
          (0, t.jsx)('meta', { name: 'twitter:site', content: o.default.twitter }),
          (0, t.jsx)('meta', { name: 'twitter:title', content: e }),
          (0, t.jsx)('meta', { name: 'twitter:description', content: u }),
          (0, t.jsx)('meta', { name: 'twitter:image', content: l }),
          (0, t.jsx)('link', { rel: 'canonical', href: s || `${o.default.siteUrl}${c.asPath}` }),
        ],
      })
    }
    e.s([
      'BlogSEO',
      0,
      ({
        authorDetails: e,
        title: a,
        summary: i,
        date: l,
        lastmod: s,
        url: c,
        images: f = [],
        canonicalUrl: d,
      }) => {
        ;(0, n.useRouter)()
        let p = new Date(l).toISOString(),
          y = new Date(s || l).toISOString(),
          m = (0 === f.length ? [o.default.socialBanner] : 'string' == typeof f ? [f] : f).map(
            (e) => ({ '@type': 'ImageObject', url: e.includes('http') ? e : o.default.siteUrl + e })
          ),
          h = {
            '@context': 'https://schema.org',
            '@type': 'Article',
            mainEntityOfPage: { '@type': 'WebPage', '@id': c },
            headline: a,
            image: m,
            datePublished: p,
            dateModified: y,
            author: e
              ? e.map((e) => ({ '@type': 'Person', name: e.name }))
              : { '@type': 'Person', name: o.default.author },
            publisher: {
              '@type': 'Organization',
              name: o.default.author,
              logo: { '@type': 'ImageObject', url: `${o.default.siteUrl}${o.default.siteLogo}` },
            },
            description: i,
          },
          g = m[0].url
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(u, {
              title: a,
              description: i,
              ogType: 'article',
              ogImage: m,
              twImage: g,
              canonicalUrl: d,
            }),
            (0, t.jsxs)(r.default, {
              children: [
                l && (0, t.jsx)('meta', { property: 'article:published_time', content: p }),
                s && (0, t.jsx)('meta', { property: 'article:modified_time', content: y }),
                (0, t.jsx)('script', {
                  id: 'structured-data',
                  type: 'application/ld+json',
                  dangerouslySetInnerHTML: { __html: JSON.stringify(h, null, 2) },
                }),
              ],
            }),
          ],
        })
      },
      'PageSEO',
      0,
      ({ title: e, description: r, ogImage: n }) => {
        let a = n
            ? n.includes('http')
              ? n
              : o.default.siteUrl + n
            : o.default.siteUrl + o.default.socialBanner,
          i = n
            ? n.includes('http')
              ? n
              : o.default.siteUrl + n
            : o.default.siteUrl + o.default.socialBanner
        return (0, t.jsx)(u, {
          title: e,
          description: r,
          ogType: 'website',
          ogImage: a,
          twImage: i,
        })
      },
      'TagSEO',
      0,
      ({ title: e, description: a }) => {
        let i = o.default.siteUrl + o.default.socialBanner,
          l = o.default.siteUrl + o.default.socialBanner,
          s = (0, n.useRouter)()
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(u, { title: e, description: a, ogType: 'website', ogImage: i, twImage: l }),
            (0, t.jsx)(r.default, {
              children: (0, t.jsx)('link', {
                rel: 'alternate',
                type: 'application/rss+xml',
                title: `${a} - RSS feed`,
                href: `${o.default.siteUrl}${s.asPath}/feed.xml`,
              }),
            }),
          ],
        })
      },
    ])
  },
])
