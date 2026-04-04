;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
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
            a = (e.exports = {})
          function o() {
            throw Error('setTimeout has not been defined')
          }
          function i() {
            throw Error('clearTimeout has not been defined')
          }
          try {
            t = 'function' == typeof setTimeout ? setTimeout : o
          } catch (e) {
            t = o
          }
          try {
            r = 'function' == typeof clearTimeout ? clearTimeout : i
          } catch (e) {
            r = i
          }
          function s(e) {
            if (t === setTimeout) return setTimeout(e, 0)
            if ((t === o || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0)
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
          var u = [],
            l = !1,
            c = -1
          function f() {
            l && n && ((l = !1), n.length ? (u = n.concat(u)) : (c = -1), u.length && d())
          }
          function d() {
            if (!l) {
              var e = s(f)
              l = !0
              for (var t = u.length; t; ) {
                for (n = u, u = []; ++c < t; ) n && n[c].run()
                ;(c = -1), (t = u.length)
              }
              ;(n = null),
                (l = !1),
                (function (e) {
                  if (r === clearTimeout) return clearTimeout(e)
                  if ((r === i || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e)
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
          function m() {}
          ;(a.nextTick = function (e) {
            var t = Array(arguments.length - 1)
            if (arguments.length > 1)
              for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
            u.push(new p(e, t)), 1 !== u.length || l || s(d)
          }),
            (p.prototype.run = function () {
              this.fun.apply(null, this.array)
            }),
            (a.title = 'browser'),
            (a.browser = !0),
            (a.env = {}),
            (a.argv = []),
            (a.version = ''),
            (a.versions = {}),
            (a.on = m),
            (a.addListener = m),
            (a.once = m),
            (a.off = m),
            (a.removeListener = m),
            (a.removeAllListeners = m),
            (a.emit = m),
            (a.prependListener = m),
            (a.prependOnceListener = m),
            (a.listeners = function (e) {
              return []
            }),
            (a.binding = function (e) {
              throw Error('process.binding is not supported')
            }),
            (a.cwd = function () {
              return '/'
            }),
            (a.chdir = function (e) {
              throw Error('process.chdir is not supported')
            }),
            (a.umask = function () {
              return 0
            })
        },
      },
      a = {}
    function o(e) {
      var t = a[e]
      if (void 0 !== t) return t.exports
      var r = (a[e] = { exports: {} }),
        i = !0
      try {
        n[e](r, r.exports, o), (i = !1)
      } finally {
        i && delete a[e]
      }
      return r.exports
    }
    ;(o.ab =
      '/ROOT/node_modules/.pnpm/next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/process/'),
      (t.exports = o(229))
  },
  93906,
  (e, t, r) => {
    'use strict'
    var n, a
    t.exports =
      (null == (n = e.g.process) ? void 0 : n.env) &&
      'object' == typeof (null == (a = e.g.process) ? void 0 : a.env)
        ? e.g.process
        : e.r(34342)
  },
  34126,
  (e, t, r) => {
    'use strict'
    var n = Symbol.for('react.transitional.element')
    function a(e, t, r) {
      var a = null
      if ((void 0 !== r && (a = '' + r), void 0 !== t.key && (a = '' + t.key), 'key' in t))
        for (var o in ((r = {}), t)) 'key' !== o && (r[o] = t[o])
      else r = t
      return { $$typeof: n, type: e, key: a, ref: void 0 !== (t = r.ref) ? t : null, props: r }
    }
    ;(r.Fragment = Symbol.for('react.fragment')), (r.jsx = a), (r.jsxs = a)
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
      a = Symbol.for('react.transitional.element'),
      o = Symbol.for('react.portal'),
      i = Symbol.for('react.fragment'),
      s = Symbol.for('react.strict_mode'),
      u = Symbol.for('react.profiler'),
      l = Symbol.for('react.consumer'),
      c = Symbol.for('react.context'),
      f = Symbol.for('react.forward_ref'),
      d = Symbol.for('react.suspense'),
      p = Symbol.for('react.memo'),
      m = Symbol.for('react.lazy'),
      y = Symbol.for('react.activity'),
      g = Symbol.iterator,
      h = {
        isMounted: function () {
          return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      b = Object.assign,
      v = {}
    function x(e, t, r) {
      ;(this.props = e), (this.context = t), (this.refs = v), (this.updater = r || h)
    }
    function _() {}
    function w(e, t, r) {
      ;(this.props = e), (this.context = t), (this.refs = v), (this.updater = r || h)
    }
    ;(x.prototype.isReactComponent = {}),
      (x.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e)
          throw Error(
            'takes an object of state variables to update or a function which returns an object of state variables.'
          )
        this.updater.enqueueSetState(this, e, t, 'setState')
      }),
      (x.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
      }),
      (_.prototype = x.prototype)
    var j = (w.prototype = new _())
    ;(j.constructor = w), b(j, x.prototype), (j.isPureReactComponent = !0)
    var S = Array.isArray
    function E() {}
    var k = { H: null, A: null, T: null, S: null },
      P = Object.prototype.hasOwnProperty
    function O(e, t, r) {
      var n = r.ref
      return { $$typeof: a, type: e, key: t, ref: void 0 !== n ? n : null, props: r }
    }
    function C(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === a
    }
    var T = /\/+/g
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
    function N(e, t, r) {
      if (null == e) return e
      var n = [],
        i = 0
      return (
        !(function e(t, r, n, i, s) {
          var u,
            l,
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
                  case a:
                  case o:
                    d = !0
                    break
                  case m:
                    return e((d = t._init)(t._payload), r, n, i, s)
                }
            }
          if (d)
            return (
              (s = s(t)),
              (d = '' === i ? '.' + I(t, 0) : i),
              S(s)
                ? ((n = ''),
                  null != d && (n = d.replace(T, '$&/') + '/'),
                  e(s, r, n, '', function (e) {
                    return e
                  }))
                : null != s &&
                  (C(s) &&
                    ((u = s),
                    (l =
                      n +
                      (null == s.key || (t && t.key === s.key)
                        ? ''
                        : ('' + s.key).replace(T, '$&/') + '/') +
                      d),
                    (s = O(u.type, l, u.props))),
                  r.push(s)),
              1
            )
          d = 0
          var p = '' === i ? '.' : i + ':'
          if (S(t))
            for (var y = 0; y < t.length; y++) (f = p + I((i = t[y]), y)), (d += e(i, r, n, f, s))
          else if (
            'function' ==
            typeof (y =
              null === (c = t) || 'object' != typeof c
                ? null
                : 'function' == typeof (c = (g && c[g]) || c['@@iterator'])
                ? c
                : null)
          )
            for (t = y.call(t), y = 0; !(i = t.next()).done; )
              (f = p + I((i = i.value), y++)), (d += e(i, r, n, f, s))
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
                          ? e.then(E, E)
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
                i,
                s
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
          return t.call(r, e, i++)
        }),
        n
      )
    }
    function R(e) {
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
    var U =
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
    ;(r.Activity = y),
      (r.Children = {
        map: N,
        forEach: function (e, t, r) {
          N(
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
            N(e, function () {
              t++
            }),
            t
          )
        },
        toArray: function (e) {
          return (
            N(e, function (e) {
              return e
            }) || []
          )
        },
        only: function (e) {
          if (!C(e))
            throw Error('React.Children.only expected to receive a single React element child.')
          return e
        },
      }),
      (r.Component = x),
      (r.Fragment = i),
      (r.Profiler = u),
      (r.PureComponent = w),
      (r.StrictMode = s),
      (r.Suspense = d),
      (r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
      (r.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return k.H.useMemoCache(e)
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
          a = e.key
        if (null != t)
          for (o in (void 0 !== t.key && (a = '' + t.key), t))
            P.call(t, o) &&
              'key' !== o &&
              '__self' !== o &&
              '__source' !== o &&
              ('ref' !== o || void 0 !== t.ref) &&
              (n[o] = t[o])
        var o = arguments.length - 2
        if (1 === o) n.children = r
        else if (1 < o) {
          for (var i = Array(o), s = 0; s < o; s++) i[s] = arguments[s + 2]
          n.children = i
        }
        return O(e.type, a, n)
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
          (e.Consumer = { $$typeof: l, _context: e }),
          e
        )
      }),
      (r.createElement = function (e, t, r) {
        var n,
          a = {},
          o = null
        if (null != t)
          for (n in (void 0 !== t.key && (o = '' + t.key), t))
            P.call(t, n) && 'key' !== n && '__self' !== n && '__source' !== n && (a[n] = t[n])
        var i = arguments.length - 2
        if (1 === i) a.children = r
        else if (1 < i) {
          for (var s = Array(i), u = 0; u < i; u++) s[u] = arguments[u + 2]
          a.children = s
        }
        if (e && e.defaultProps) for (n in (i = e.defaultProps)) void 0 === a[n] && (a[n] = i[n])
        return O(e, o, a)
      }),
      (r.createRef = function () {
        return { current: null }
      }),
      (r.forwardRef = function (e) {
        return { $$typeof: f, render: e }
      }),
      (r.isValidElement = C),
      (r.lazy = function (e) {
        return { $$typeof: m, _payload: { _status: -1, _result: e }, _init: R }
      }),
      (r.memo = function (e, t) {
        return { $$typeof: p, type: e, compare: void 0 === t ? null : t }
      }),
      (r.startTransition = function (e) {
        var t = k.T,
          r = {}
        k.T = r
        try {
          var n = e(),
            a = k.S
          null !== a && a(r, n),
            'object' == typeof n && null !== n && 'function' == typeof n.then && n.then(E, U)
        } catch (e) {
          U(e)
        } finally {
          null !== t && null !== r.types && (t.types = r.types), (k.T = t)
        }
      }),
      (r.unstable_useCacheRefresh = function () {
        return k.H.useCacheRefresh()
      }),
      (r.use = function (e) {
        return k.H.use(e)
      }),
      (r.useActionState = function (e, t, r) {
        return k.H.useActionState(e, t, r)
      }),
      (r.useCallback = function (e, t) {
        return k.H.useCallback(e, t)
      }),
      (r.useContext = function (e) {
        return k.H.useContext(e)
      }),
      (r.useDebugValue = function () {}),
      (r.useDeferredValue = function (e, t) {
        return k.H.useDeferredValue(e, t)
      }),
      (r.useEffect = function (e, t) {
        return k.H.useEffect(e, t)
      }),
      (r.useEffectEvent = function (e) {
        return k.H.useEffectEvent(e)
      }),
      (r.useId = function () {
        return k.H.useId()
      }),
      (r.useImperativeHandle = function (e, t, r) {
        return k.H.useImperativeHandle(e, t, r)
      }),
      (r.useInsertionEffect = function (e, t) {
        return k.H.useInsertionEffect(e, t)
      }),
      (r.useLayoutEffect = function (e, t) {
        return k.H.useLayoutEffect(e, t)
      }),
      (r.useMemo = function (e, t) {
        return k.H.useMemo(e, t)
      }),
      (r.useOptimistic = function (e, t) {
        return k.H.useOptimistic(e, t)
      }),
      (r.useReducer = function (e, t, r) {
        return k.H.useReducer(e, t, r)
      }),
      (r.useRef = function (e) {
        return k.H.useRef(e)
      }),
      (r.useState = function (e) {
        return k.H.useState(e)
      }),
      (r.useSyncExternalStore = function (e, t, r) {
        return k.H.useSyncExternalStore(e, t, r)
      }),
      (r.useTransition = function () {
        return k.H.useTransition()
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
      var a = { __proto__: null },
        o = Object.defineProperty && Object.getOwnPropertyDescriptor
      for (var i in e)
        if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
          var s = o ? Object.getOwnPropertyDescriptor(e, i) : null
          s && (s.get || s.set) ? Object.defineProperty(a, i, s) : (a[i] = e[i])
        }
      return (a.default = e), r && r.set(e, a), a
    }
  },
  60864,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'default', {
        enumerable: !0,
        get: function () {
          return s
        },
      })
    let n = e.r(50394),
      a = 'u' < typeof window,
      o = a ? () => {} : n.useLayoutEffect,
      i = a ? () => {} : n.useEffect
    function s(e) {
      let { headManager: t, reduceComponentsToState: r } = e
      function s() {
        if (t && t.mountedInstances) {
          let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean))
          t.updateHead(r(e))
        }
      }
      return (
        a && (t?.mountedInstances?.add(e.children), s()),
        o(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children)
            }
          )
        ),
        o(
          () => (
            t && (t._pendingUpdate = s),
            () => {
              t && (t._pendingUpdate = s)
            }
          )
        ),
        i(
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
        return y
      },
      defaultHead: function () {
        return f
      },
    }
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] })
    let o = e.r(2879),
      i = e.r(87602),
      s = e.r(15497),
      u = i._(e.r(50394)),
      l = o._(e.r(60864)),
      c = e.r(47110)
    function f() {
      return [
        (0, s.jsx)('meta', { charSet: 'utf-8' }, 'charset'),
        (0, s.jsx)('meta', { name: 'viewport', content: 'width=device-width' }, 'viewport'),
      ]
    }
    function d(e, t) {
      return 'string' == typeof t || 'number' == typeof t
        ? e
        : t.type === u.default.Fragment
        ? e.concat(
            u.default.Children.toArray(t.props.children).reduce(
              (e, t) => ('string' == typeof t || 'number' == typeof t ? e : e.concat(t)),
              []
            )
          )
        : e.concat(t)
    }
    e.r(67103)
    let p = ['name', 'httpEquiv', 'charSet', 'itemProp']
    function m(e) {
      let t, r, n, a
      return e
        .reduce(d, [])
        .reverse()
        .concat(f().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (n = new Set()),
          (a = {}),
          (e) => {
            let o = !0,
              i = !1
            if (e.key && 'number' != typeof e.key && e.key.indexOf('$') > 0) {
              i = !0
              let r = e.key.slice(e.key.indexOf('$') + 1)
              t.has(r) ? (o = !1) : t.add(r)
            }
            switch (e.type) {
              case 'title':
              case 'base':
                r.has(e.type) ? (o = !1) : r.add(e.type)
                break
              case 'meta':
                for (let t = 0, r = p.length; t < r; t++) {
                  let r = p[t]
                  if (e.props.hasOwnProperty(r))
                    if ('charSet' === r) n.has(r) ? (o = !1) : n.add(r)
                    else {
                      let t = e.props[r],
                        n = a[r] || new Set()
                      ;('name' !== r || !i) && n.has(t) ? (o = !1) : (n.add(t), (a[r] = n))
                    }
                }
            }
            return o
          })
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t
          return u.default.cloneElement(e, { key: r })
        })
    }
    let y = function ({ children: e }) {
      let t = (0, u.useContext)(c.HeadManagerContext)
      return (0, s.jsx)(l.default, { reduceComponentsToState: m, headManager: t, children: e })
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
        return h
      },
      MiddlewareNotFoundError: function () {
        return _
      },
      MissingStaticPage: function () {
        return x
      },
      NormalizeError: function () {
        return b
      },
      PageNotFoundError: function () {
        return v
      },
      SP: function () {
        return y
      },
      ST: function () {
        return g
      },
      WEB_VITALS: function () {
        return o
      },
      execOnce: function () {
        return i
      },
      getDisplayName: function () {
        return f
      },
      getLocationOrigin: function () {
        return l
      },
      getURL: function () {
        return c
      },
      isAbsoluteUrl: function () {
        return u
      },
      isResSent: function () {
        return d
      },
      loadGetInitialProps: function () {
        return m
      },
      normalizeRepeatedSlashes: function () {
        return p
      },
      stringifyError: function () {
        return w
      },
    }
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] })
    let o = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB']
    function i(e) {
      let t,
        r = !1
      return (...n) => (r || ((r = !0), (t = e(...n))), t)
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      u = (e) => s.test(e)
    function l() {
      let { protocol: e, hostname: t, port: r } = window.location
      return `${e}//${t}${r ? ':' + r : ''}`
    }
    function c() {
      let { href: e } = window.location,
        t = l()
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
    async function m(e, t) {
      let r = t.res || (t.ctx && t.ctx.res)
      if (!e.getInitialProps)
        return t.ctx && t.Component ? { pageProps: await m(t.Component, t.ctx) } : {}
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
    let y = 'u' > typeof performance,
      g =
        y &&
        ['mark', 'measure', 'getEntriesByName'].every((e) => 'function' == typeof performance[e])
    class h extends Error {}
    class b extends Error {}
    class v extends Error {
      constructor(e) {
        super(),
          (this.code = 'ENOENT'),
          (this.name = 'PageNotFoundError'),
          (this.message = `Cannot find module for page: ${e}`)
      }
    }
    class x extends Error {
      constructor(e, t) {
        super(), (this.message = `Failed to load static file for page: ${e} ${t}`)
      }
    }
    class _ extends Error {
      constructor() {
        super(), (this.code = 'ENOENT'), (this.message = 'Cannot find the middleware module')
      }
    }
    function w(e) {
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
      a = e.i(89973)
    let o = ({ title: e, description: o, ogType: i, ogImage: s, twImage: u, canonicalUrl: l }) => {
      let c = (0, n.useRouter)()
      return (0, t.jsxs)(r.default, {
        children: [
          (0, t.jsx)('title', { children: e }),
          (0, t.jsx)('meta', { name: 'robots', content: 'follow, index' }),
          (0, t.jsx)('meta', { name: 'description', content: o }),
          (0, t.jsx)('meta', { property: 'og:url', content: `${a.default.siteUrl}${c.asPath}` }),
          (0, t.jsx)('meta', { property: 'og:type', content: i }),
          (0, t.jsx)('meta', { property: 'og:site_name', content: a.default.title }),
          (0, t.jsx)('meta', { property: 'og:description', content: o }),
          (0, t.jsx)('meta', { property: 'og:title', content: e }),
          Array.isArray(s)
            ? s.map(({ url: e }) => (0, t.jsx)('meta', { property: 'og:image', content: e }, e))
            : (0, t.jsx)('meta', { property: 'og:image', content: s }, s),
          (0, t.jsx)('meta', { name: 'twitter:card', content: 'summary_large_image' }),
          (0, t.jsx)('meta', { name: 'twitter:site', content: a.default.twitter }),
          (0, t.jsx)('meta', { name: 'twitter:title', content: e }),
          (0, t.jsx)('meta', { name: 'twitter:description', content: o }),
          (0, t.jsx)('meta', { name: 'twitter:image', content: u }),
          (0, t.jsx)('link', { rel: 'canonical', href: l || `${a.default.siteUrl}${c.asPath}` }),
        ],
      })
    }
    e.s([
      'BlogSEO',
      0,
      ({
        authorDetails: e,
        title: i,
        summary: s,
        date: u,
        lastmod: l,
        url: c,
        images: f = [],
        canonicalUrl: d,
      }) => {
        ;(0, n.useRouter)()
        let p = new Date(u).toISOString(),
          m = new Date(l || u).toISOString(),
          y = (0 === f.length ? [a.default.socialBanner] : 'string' == typeof f ? [f] : f).map(
            (e) => ({ '@type': 'ImageObject', url: e.includes('http') ? e : a.default.siteUrl + e })
          ),
          g = {
            '@context': 'https://schema.org',
            '@type': 'Article',
            mainEntityOfPage: { '@type': 'WebPage', '@id': c },
            headline: i,
            image: y,
            datePublished: p,
            dateModified: m,
            author: e
              ? e.map((e) => ({ '@type': 'Person', name: e.name }))
              : { '@type': 'Person', name: a.default.author },
            publisher: {
              '@type': 'Organization',
              name: a.default.author,
              logo: { '@type': 'ImageObject', url: `${a.default.siteUrl}${a.default.siteLogo}` },
            },
            description: s,
          },
          h = y[0].url
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(o, {
              title: i,
              description: s,
              ogType: 'article',
              ogImage: y,
              twImage: h,
              canonicalUrl: d,
            }),
            (0, t.jsxs)(r.default, {
              children: [
                u && (0, t.jsx)('meta', { property: 'article:published_time', content: p }),
                l && (0, t.jsx)('meta', { property: 'article:modified_time', content: m }),
                (0, t.jsx)('script', {
                  id: 'structured-data',
                  type: 'application/ld+json',
                  dangerouslySetInnerHTML: { __html: JSON.stringify(g, null, 2) },
                }),
              ],
            }),
          ],
        })
      },
      'PageSEO',
      0,
      ({ title: e, description: r, ogImage: n }) => {
        let i = n
            ? n.includes('http')
              ? n
              : a.default.siteUrl + n
            : a.default.siteUrl + a.default.socialBanner,
          s = n
            ? n.includes('http')
              ? n
              : a.default.siteUrl + n
            : a.default.siteUrl + a.default.socialBanner
        return (0, t.jsx)(o, {
          title: e,
          description: r,
          ogType: 'website',
          ogImage: i,
          twImage: s,
        })
      },
      'TagSEO',
      0,
      ({ title: e, description: i }) => {
        let s = a.default.siteUrl + a.default.socialBanner,
          u = a.default.siteUrl + a.default.socialBanner,
          l = (0, n.useRouter)()
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(o, { title: e, description: i, ogType: 'website', ogImage: s, twImage: u }),
            (0, t.jsx)(r.default, {
              children: (0, t.jsx)('link', {
                rel: 'alternate',
                type: 'application/rss+xml',
                title: `${i} - RSS feed`,
                href: `${a.default.siteUrl}${l.asPath}/feed.xml`,
              }),
            }),
          ],
        })
      },
    ])
  },
  67104,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 })
    var n = {
      VALID_LOADERS: function () {
        return o
      },
      imageConfigDefault: function () {
        return i
      },
    }
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] })
    let o = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'],
      i = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: '/_next/image',
        loader: 'default',
        loaderFile: '',
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ['image/webp'],
        maximumDiskCacheSize: void 0,
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: 'attachment',
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
        customCacheHandler: !1,
      }
  },
  62481,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'ImageConfigContext', {
        enumerable: !0,
        get: function () {
          return o
        },
      })
    let n = e.r(2879)._(e.r(50394)),
      a = e.r(67104),
      o = n.default.createContext(a.imageConfigDefault)
  },
  97950,
  (e) => {
    'use strict'
    var t = e.i(15497),
      r = e.i(50394),
      n = e.i(13730)
    e.s([
      'default',
      0,
      function () {
        let [e, a] = (0, r.useState)([]),
          [o, i] = (0, r.useState)(!0),
          [s, u] = (0, r.useState)('')
        ;(0, r.useState)(() => {
          fetch('/api/reviews')
            .then((e) => e.json())
            .then((e) => {
              a(e), i(!1)
            })
            .catch(() => i(!1))
        })
        let l = (0, r.useMemo)(() => {
          if (!s) return e
          let t = s.toLowerCase()
          return e.filter(
            (e) =>
              e.data.name.toLowerCase().includes(t) ||
              e.data.location.toLowerCase().includes(t) ||
              e.data.wfcSuitability.toLowerCase().includes(t)
          )
        }, [e, s])
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.PageSEO, {
              title: 'WFC Reviews',
              description: 'Work From Cafe reviews and badges',
            }),
            (0, t.jsxs)('div', {
              className: 'divide-y divide-gray-200 dark:divide-gray-700',
              children: [
                (0, t.jsxs)('div', {
                  className: 'space-y-2 pb-8 pt-6 md:space-y-5',
                  children: [
                    (0, t.jsx)('h1', {
                      className:
                        'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                      children: 'Work From Cafe Reviews',
                    }),
                    (0, t.jsx)('p', {
                      className: 'text-lg leading-7 text-gray-500 dark:text-gray-400',
                      children:
                        'Reviews of cafes and spots suitable for remote work, with detailed metrics and badges.',
                    }),
                  ],
                }),
                !o &&
                  e.length > 0 &&
                  (0, t.jsx)('div', {
                    className: 'py-4',
                    children: (0, t.jsx)('input', {
                      type: 'text',
                      placeholder: 'Search by name, location, or suitability...',
                      value: s,
                      onChange: (e) => u(e.target.value),
                      className:
                        'w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100',
                    }),
                  }),
                o
                  ? (0, t.jsx)('div', {
                      className: 'py-12',
                      children: (0, t.jsx)('p', {
                        className: 'text-gray-500 dark:text-gray-400',
                        children: 'Loading reviews...',
                      }),
                    })
                  : e.length
                  ? 0 === l.length
                    ? (0, t.jsx)('div', {
                        className: 'py-12',
                        children: (0, t.jsx)('p', {
                          className: 'text-gray-500 dark:text-gray-400',
                          children: 'No reviews match your search.',
                        }),
                      })
                    : (0, t.jsx)('div', {
                        className: 'grid gap-3 py-8 md:grid-cols-2 lg:grid-cols-3',
                        children: l.map((e) =>
                          (0, t.jsx)(
                            'a',
                            {
                              href: `/wfc-reviews/${e.slug}`,
                              className:
                                'block rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-primary-500',
                              children: (0, t.jsxs)('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  (0, t.jsxs)('div', {
                                    className: 'flex-1',
                                    children: [
                                      (0, t.jsx)('h3', {
                                        className: 'font-bold text-gray-900 dark:text-gray-100',
                                        children: e.data.name,
                                      }),
                                      (0, t.jsx)('p', {
                                        className: 'text-sm text-gray-600 dark:text-gray-400',
                                        children: e.data.location,
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)('div', {
                                    className: 'flex items-center gap-4',
                                    children: [
                                      (0, t.jsxs)('div', {
                                        className: 'text-lg font-bold text-primary-500',
                                        children: [e.data.rating, '/5'],
                                      }),
                                      (0, t.jsx)('div', {
                                        className: `rounded px-3 py-1 text-xs font-medium ${
                                          'Excellent' === e.data.wfcSuitability
                                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                            : 'Good' === e.data.wfcSuitability
                                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                            : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                                        }`,
                                        children: e.data.wfcSuitability,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            e.slug
                          )
                        ),
                      })
                  : (0, t.jsx)('div', {
                      className: 'py-12',
                      children: (0, t.jsx)('p', {
                        className: 'text-gray-500 dark:text-gray-400',
                        children: 'No WFC reviews yet. Generate one using the wfc-review script!',
                      }),
                    }),
              ],
            }),
          ],
        })
      },
    ])
  },
  59682,
  (e, t, r) => {
    let n = '/wfc-reviews'
    ;(window.__NEXT_P = window.__NEXT_P || []).push([n, () => e.r(97950)]),
      t.hot &&
        t.hot.dispose(function () {
          window.__NEXT_P.push([n])
        })
  },
  64137,
  (e) => {
    e.v((t) =>
      Promise.all(['static/chunks/0~do3786bov67.js'].map((t) => e.l(t))).then(() => t(41174))
    )
  },
  81258,
  (e) => {
    e.v((t) =>
      Promise.all(['static/chunks/0.p-nd78t96-q.js'].map((t) => e.l(t))).then(() => t(30112))
    )
  },
])
