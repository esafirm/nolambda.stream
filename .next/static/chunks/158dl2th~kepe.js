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
          function l(e) {
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
          var s = [],
            u = !1,
            c = -1
          function f() {
            u && n && ((u = !1), n.length ? (s = n.concat(s)) : (c = -1), s.length && d())
          }
          function d() {
            if (!u) {
              var e = l(f)
              u = !0
              for (var t = s.length; t; ) {
                for (n = s, s = []; ++c < t; ) n && n[c].run()
                ;(c = -1), (t = s.length)
              }
              ;(n = null),
                (u = !1),
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
            s.push(new p(e, t)), 1 !== s.length || u || l(d)
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
      l = Symbol.for('react.strict_mode'),
      s = Symbol.for('react.profiler'),
      u = Symbol.for('react.consumer'),
      c = Symbol.for('react.context'),
      f = Symbol.for('react.forward_ref'),
      d = Symbol.for('react.suspense'),
      p = Symbol.for('react.memo'),
      m = Symbol.for('react.lazy'),
      h = Symbol.for('react.activity'),
      y = Symbol.iterator,
      g = {
        isMounted: function () {
          return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      v = Object.assign,
      b = {}
    function x(e, t, r) {
      ;(this.props = e), (this.context = t), (this.refs = b), (this.updater = r || g)
    }
    function w() {}
    function _(e, t, r) {
      ;(this.props = e), (this.context = t), (this.refs = b), (this.updater = r || g)
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
      (w.prototype = x.prototype)
    var j = (_.prototype = new w())
    ;(j.constructor = _), v(j, x.prototype), (j.isPureReactComponent = !0)
    var E = Array.isArray
    function k() {}
    var S = { H: null, A: null, T: null, S: null },
      C = Object.prototype.hasOwnProperty
    function T(e, t, r) {
      var n = r.ref
      return { $$typeof: a, type: e, key: t, ref: void 0 !== n ? n : null, props: r }
    }
    function O(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === a
    }
    var P = /\/+/g
    function M(e, t) {
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
        !(function e(t, r, n, i, l) {
          var s,
            u,
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
                    return e((d = t._init)(t._payload), r, n, i, l)
                }
            }
          if (d)
            return (
              (l = l(t)),
              (d = '' === i ? '.' + M(t, 0) : i),
              E(l)
                ? ((n = ''),
                  null != d && (n = d.replace(P, '$&/') + '/'),
                  e(l, r, n, '', function (e) {
                    return e
                  }))
                : null != l &&
                  (O(l) &&
                    ((s = l),
                    (u =
                      n +
                      (null == l.key || (t && t.key === l.key)
                        ? ''
                        : ('' + l.key).replace(P, '$&/') + '/') +
                      d),
                    (l = T(s.type, u, s.props))),
                  r.push(l)),
              1
            )
          d = 0
          var p = '' === i ? '.' : i + ':'
          if (E(t))
            for (var h = 0; h < t.length; h++) (f = p + M((i = t[h]), h)), (d += e(i, r, n, f, l))
          else if (
            'function' ==
            typeof (h =
              null === (c = t) || 'object' != typeof c
                ? null
                : 'function' == typeof (c = (y && c[y]) || c['@@iterator'])
                ? c
                : null)
          )
            for (t = h.call(t), h = 0; !(i = t.next()).done; )
              (f = p + M((i = i.value), h++)), (d += e(i, r, n, f, l))
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
                          ? e.then(k, k)
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
                l
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
    function I(e) {
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
    var R =
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
    ;(r.Activity = h),
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
          if (!O(e))
            throw Error('React.Children.only expected to receive a single React element child.')
          return e
        },
      }),
      (r.Component = x),
      (r.Fragment = i),
      (r.Profiler = s),
      (r.PureComponent = _),
      (r.StrictMode = l),
      (r.Suspense = d),
      (r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S),
      (r.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return S.H.useMemoCache(e)
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
        var n = v({}, e.props),
          a = e.key
        if (null != t)
          for (o in (void 0 !== t.key && (a = '' + t.key), t))
            C.call(t, o) &&
              'key' !== o &&
              '__self' !== o &&
              '__source' !== o &&
              ('ref' !== o || void 0 !== t.ref) &&
              (n[o] = t[o])
        var o = arguments.length - 2
        if (1 === o) n.children = r
        else if (1 < o) {
          for (var i = Array(o), l = 0; l < o; l++) i[l] = arguments[l + 2]
          n.children = i
        }
        return T(e.type, a, n)
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
          (e.Consumer = { $$typeof: u, _context: e }),
          e
        )
      }),
      (r.createElement = function (e, t, r) {
        var n,
          a = {},
          o = null
        if (null != t)
          for (n in (void 0 !== t.key && (o = '' + t.key), t))
            C.call(t, n) && 'key' !== n && '__self' !== n && '__source' !== n && (a[n] = t[n])
        var i = arguments.length - 2
        if (1 === i) a.children = r
        else if (1 < i) {
          for (var l = Array(i), s = 0; s < i; s++) l[s] = arguments[s + 2]
          a.children = l
        }
        if (e && e.defaultProps) for (n in (i = e.defaultProps)) void 0 === a[n] && (a[n] = i[n])
        return T(e, o, a)
      }),
      (r.createRef = function () {
        return { current: null }
      }),
      (r.forwardRef = function (e) {
        return { $$typeof: f, render: e }
      }),
      (r.isValidElement = O),
      (r.lazy = function (e) {
        return { $$typeof: m, _payload: { _status: -1, _result: e }, _init: I }
      }),
      (r.memo = function (e, t) {
        return { $$typeof: p, type: e, compare: void 0 === t ? null : t }
      }),
      (r.startTransition = function (e) {
        var t = S.T,
          r = {}
        S.T = r
        try {
          var n = e(),
            a = S.S
          null !== a && a(r, n),
            'object' == typeof n && null !== n && 'function' == typeof n.then && n.then(k, R)
        } catch (e) {
          R(e)
        } finally {
          null !== t && null !== r.types && (t.types = r.types), (S.T = t)
        }
      }),
      (r.unstable_useCacheRefresh = function () {
        return S.H.useCacheRefresh()
      }),
      (r.use = function (e) {
        return S.H.use(e)
      }),
      (r.useActionState = function (e, t, r) {
        return S.H.useActionState(e, t, r)
      }),
      (r.useCallback = function (e, t) {
        return S.H.useCallback(e, t)
      }),
      (r.useContext = function (e) {
        return S.H.useContext(e)
      }),
      (r.useDebugValue = function () {}),
      (r.useDeferredValue = function (e, t) {
        return S.H.useDeferredValue(e, t)
      }),
      (r.useEffect = function (e, t) {
        return S.H.useEffect(e, t)
      }),
      (r.useEffectEvent = function (e) {
        return S.H.useEffectEvent(e)
      }),
      (r.useId = function () {
        return S.H.useId()
      }),
      (r.useImperativeHandle = function (e, t, r) {
        return S.H.useImperativeHandle(e, t, r)
      }),
      (r.useInsertionEffect = function (e, t) {
        return S.H.useInsertionEffect(e, t)
      }),
      (r.useLayoutEffect = function (e, t) {
        return S.H.useLayoutEffect(e, t)
      }),
      (r.useMemo = function (e, t) {
        return S.H.useMemo(e, t)
      }),
      (r.useOptimistic = function (e, t) {
        return S.H.useOptimistic(e, t)
      }),
      (r.useReducer = function (e, t, r) {
        return S.H.useReducer(e, t, r)
      }),
      (r.useRef = function (e) {
        return S.H.useRef(e)
      }),
      (r.useState = function (e) {
        return S.H.useState(e)
      }),
      (r.useSyncExternalStore = function (e, t, r) {
        return S.H.useSyncExternalStore(e, t, r)
      }),
      (r.useTransition = function () {
        return S.H.useTransition()
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
          var l = o ? Object.getOwnPropertyDescriptor(e, i) : null
          l && (l.get || l.set) ? Object.defineProperty(a, i, l) : (a[i] = e[i])
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
          return l
        },
      })
    let n = e.r(50394),
      a = 'u' < typeof window,
      o = a ? () => {} : n.useLayoutEffect,
      i = a ? () => {} : n.useEffect
    function l(e) {
      let { headManager: t, reduceComponentsToState: r } = e
      function l() {
        if (t && t.mountedInstances) {
          let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean))
          t.updateHead(r(e))
        }
      }
      return (
        a && (t?.mountedInstances?.add(e.children), l()),
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
            t && (t._pendingUpdate = l),
            () => {
              t && (t._pendingUpdate = l)
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
        return h
      },
      defaultHead: function () {
        return f
      },
    }
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] })
    let o = e.r(2879),
      i = e.r(87602),
      l = e.r(15497),
      s = i._(e.r(50394)),
      u = o._(e.r(60864)),
      c = e.r(47110)
    function f() {
      return [
        (0, l.jsx)('meta', { charSet: 'utf-8' }, 'charset'),
        (0, l.jsx)('meta', { name: 'viewport', content: 'width=device-width' }, 'viewport'),
      ]
    }
    function d(e, t) {
      return 'string' == typeof t || 'number' == typeof t
        ? e
        : t.type === s.default.Fragment
        ? e.concat(
            s.default.Children.toArray(t.props.children).reduce(
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
          return s.default.cloneElement(e, { key: r })
        })
    }
    let h = function ({ children: e }) {
      let t = (0, s.useContext)(c.HeadManagerContext)
      return (0, l.jsx)(u.default, { reduceComponentsToState: m, headManager: t, children: e })
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
        return w
      },
      MissingStaticPage: function () {
        return x
      },
      NormalizeError: function () {
        return v
      },
      PageNotFoundError: function () {
        return b
      },
      SP: function () {
        return h
      },
      ST: function () {
        return y
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
        return u
      },
      getURL: function () {
        return c
      },
      isAbsoluteUrl: function () {
        return s
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
        return _
      },
    }
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] })
    let o = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB']
    function i(e) {
      let t,
        r = !1
      return (...n) => (r || ((r = !0), (t = e(...n))), t)
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      s = (e) => l.test(e)
    function u() {
      let { protocol: e, hostname: t, port: r } = window.location
      return `${e}//${t}${r ? ':' + r : ''}`
    }
    function c() {
      let { href: e } = window.location,
        t = u()
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
    let h = 'u' > typeof performance,
      y =
        h &&
        ['mark', 'measure', 'getEntriesByName'].every((e) => 'function' == typeof performance[e])
    class g extends Error {}
    class v extends Error {}
    class b extends Error {
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
    class w extends Error {
      constructor() {
        super(), (this.code = 'ENOENT'), (this.message = 'Cannot find the middleware module')
      }
    }
    function _(e) {
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
  86942,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'useIntersection', {
        enumerable: !0,
        get: function () {
          return s
        },
      })
    let n = e.r(50394),
      a = e.r(60235),
      o = 'function' == typeof IntersectionObserver,
      i = new Map(),
      l = []
    function s({ rootRef: e, rootMargin: t, disabled: r }) {
      let u = r || !o,
        [c, f] = (0, n.useState)(!1),
        d = (0, n.useRef)(null),
        p = (0, n.useCallback)((e) => {
          d.current = e
        }, [])
      return (
        (0, n.useEffect)(() => {
          if (o) {
            if (u || c) return
            let r = d.current
            if (r && r.tagName)
              return (function (e, t, r) {
                let {
                  id: n,
                  observer: a,
                  elements: o,
                } = (function (e) {
                  let t,
                    r = { root: e.root || null, margin: e.rootMargin || '' },
                    n = l.find((e) => e.root === r.root && e.margin === r.margin)
                  if (n && (t = i.get(n))) return t
                  let a = new Map()
                  return (
                    (t = {
                      id: r,
                      observer: new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let t = a.get(e.target),
                            r = e.isIntersecting || e.intersectionRatio > 0
                          t && r && t(r)
                        })
                      }, e),
                      elements: a,
                    }),
                    l.push(r),
                    i.set(r, t),
                    t
                  )
                })(r)
                return (
                  o.set(e, t),
                  a.observe(e),
                  function () {
                    if ((o.delete(e), a.unobserve(e), 0 === o.size)) {
                      a.disconnect(), i.delete(n)
                      let e = l.findIndex((e) => e.root === n.root && e.margin === n.margin)
                      e > -1 && l.splice(e, 1)
                    }
                  }
                )
              })(r, (e) => e && f(e), { root: e?.current, rootMargin: t })
          } else if (!c) {
            let e = (0, a.requestIdleCallback)(() => f(!0))
            return () => (0, a.cancelIdleCallback)(e)
          }
        }, [u, t, e, c, d.current]),
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
  59149,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'useMergedRef', {
        enumerable: !0,
        get: function () {
          return a
        },
      })
    let n = e.r(50394)
    function a(e, t) {
      let r = (0, n.useRef)(null),
        a = (0, n.useRef)(null)
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current
            e && ((r.current = null), e())
            let t = a.current
            t && ((a.current = null), t())
          } else e && (r.current = o(e, n)), t && (a.current = o(t, n))
        },
        [e, t]
      )
    }
    function o(e, t) {
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
        return j
      },
    }
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] })
    let o = e.r(87602),
      i = e.r(15497),
      l = o._(e.r(50394)),
      s = e.r(24112),
      u = e.r(21157),
      c = e.r(9111),
      f = e.r(57468),
      d = e.r(7236),
      p = e.r(64985),
      m = e.r(86942),
      h = e.r(33982),
      y = e.r(2500),
      g = e.r(59149)
    e.r(79580)
    let v = new Set()
    function b(e, t, r, n) {
      if (!('u' < typeof window) && (0, u.isLocalURL)(t)) {
        if (!n.bypassPrefetchedCheck) {
          let a =
            t + '%' + r + '%' + (void 0 !== n.locale ? n.locale : 'locale' in e ? e.locale : void 0)
          if (v.has(a)) return
          v.add(a)
        }
        e.prefetch(t, r, n).catch((e) => {})
      }
    }
    function x(e) {
      return 'string' == typeof e ? e : (0, c.formatUrl)(e)
    }
    let w = l.default.forwardRef(function (e, t) {
        let r,
          n,
          {
            href: a,
            as: o,
            children: c,
            prefetch: v = null,
            passHref: w,
            replace: _,
            shallow: j,
            scroll: E,
            locale: k,
            onClick: S,
            onNavigate: C,
            onMouseEnter: T,
            onTouchStart: O,
            legacyBehavior: P = !1,
            transitionTypes: M,
            ...N
          } = e
        ;(r = c),
          P &&
            ('string' == typeof r || 'number' == typeof r) &&
            (r = (0, i.jsx)('a', { children: r }))
        let I = l.default.useContext(p.RouterContext),
          R = !1 !== v,
          { href: A, as: L } = l.default.useMemo(() => {
            if (!I) {
              let e = x(a)
              return { href: e, as: o ? x(o) : e }
            }
            let [e, t] = (0, s.resolveHref)(I, a, !0)
            return { href: e, as: o ? (0, s.resolveHref)(I, o) : t || e }
          }, [I, a, o]),
          z = l.default.useRef(A),
          H = l.default.useRef(L)
        P && (n = l.default.Children.only(r))
        let $ = P ? n && 'object' == typeof n && n.ref : t,
          [U, D, B] = (0, m.useIntersection)({ rootMargin: '200px' }),
          F = l.default.useCallback(
            (e) => {
              ;(H.current !== L || z.current !== A) && (B(), (H.current = L), (z.current = A)), U(e)
            },
            [L, A, B, U]
          ),
          V = (0, g.useMergedRef)(F, $)
        l.default.useEffect(() => {
          !I || (D && R && b(I, A, L, { locale: k }))
        }, [L, A, D, k, R, I?.locale, I])
        let q = {
          ref: V,
          onClick(e) {
            P || 'function' != typeof S || S(e),
              P && n.props && 'function' == typeof n.props.onClick && n.props.onClick(e),
              !I ||
                e.defaultPrevented ||
                (function (e, t, r, n, a, o, i, l, s) {
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
                    if (!(0, u.isLocalURL)(r)) {
                      a && (e.preventDefault(), location.replace(r))
                      return
                    }
                    e.preventDefault(),
                      (() => {
                        if (s) {
                          let e = !1
                          if (
                            (s({
                              preventDefault: () => {
                                e = !0
                              },
                            }),
                            e)
                          )
                            return
                        }
                        let e = i ?? !0
                        'beforePopState' in t
                          ? t[a ? 'replace' : 'push'](r, n, { shallow: o, locale: l, scroll: e })
                          : t[a ? 'replace' : 'push'](n || r, { scroll: e })
                      })()
                  }
                })(e, I, A, L, _, j, E, k, C)
          },
          onMouseEnter(e) {
            P || 'function' != typeof T || T(e),
              P && n.props && 'function' == typeof n.props.onMouseEnter && n.props.onMouseEnter(e),
              I && b(I, A, L, { locale: k, priority: !0, bypassPrefetchedCheck: !0 })
          },
          onTouchStart: function (e) {
            P || 'function' != typeof O || O(e),
              P && n.props && 'function' == typeof n.props.onTouchStart && n.props.onTouchStart(e),
              I && b(I, A, L, { locale: k, priority: !0, bypassPrefetchedCheck: !0 })
          },
        }
        if ((0, f.isAbsoluteUrl)(L)) q.href = L
        else if (!P || w || ('a' === n.type && !('href' in n.props))) {
          let e = void 0 !== k ? k : I?.locale
          q.href =
            (I?.isLocaleDomain && (0, h.getDomainLocale)(L, e, I?.locales, I?.domainLocales)) ||
            (0, y.addBasePath)((0, d.addLocale)(L, e, I?.defaultLocale))
        }
        return P ? l.default.cloneElement(n, q) : (0, i.jsx)('a', { ...N, ...q, children: r })
      }),
      _ = (0, l.createContext)({ pending: !1 }),
      j = () => (0, l.useContext)(_),
      E = w
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
      ({ href: e, children: n, ...a }) => {
        let o = e && e.startsWith('/'),
          i = e && e.startsWith('#')
        return o
          ? (0, t.jsx)(r.default, { href: e, ...a, children: n })
          : i
          ? (0, t.jsx)('a', { href: e, ...a, children: n })
          : (0, t.jsx)('a', {
              target: '_blank',
              rel: 'noopener noreferrer',
              href: e,
              ...a,
              children: n,
            })
      },
    ])
  },
  8346,
  (e) => {
    'use strict'
    var t = e.i(50394),
      r = (e, t, r, n, a, o, i, l) => {
        let s = document.documentElement,
          u = ['light', 'dark']
        function c(t) {
          var r
          ;(Array.isArray(e) ? e : [e]).forEach((e) => {
            let r = 'class' === e,
              n = r && o ? a.map((e) => o[e] || e) : a
            r
              ? (s.classList.remove(...n), s.classList.add(o && o[t] ? o[t] : t))
              : s.setAttribute(e, t)
          }),
            (r = t),
            l && u.includes(r) && (s.style.colorScheme = r)
        }
        if (n) c(n)
        else
          try {
            let e = localStorage.getItem(t) || r,
              n =
                i && 'system' === e
                  ? window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light'
                  : e
            c(n)
          } catch (e) {}
      },
      n = ['light', 'dark'],
      a = '(prefers-color-scheme: dark)',
      o = 'u' < typeof window,
      i = t.createContext(void 0),
      l = { setTheme: (e) => {}, themes: [] },
      s = ['light', 'dark'],
      u = ({
        forcedTheme: e,
        disableTransitionOnChange: r = !1,
        enableSystem: o = !0,
        enableColorScheme: l = !0,
        storageKey: u = 'theme',
        themes: m = s,
        defaultTheme: h = o ? 'system' : 'light',
        attribute: y = 'data-theme',
        value: g,
        children: v,
        nonce: b,
        scriptProps: x,
      }) => {
        let [w, _] = t.useState(() => f(u, h)),
          [j, E] = t.useState(() => ('system' === w ? p() : w)),
          k = g ? Object.values(g) : m,
          S = t.useCallback(
            (e) => {
              let t = e
              if (!t) return
              'system' === e && o && (t = p())
              let a = g ? g[t] : t,
                i = r ? d(b) : null,
                s = document.documentElement,
                u = (e) => {
                  'class' === e
                    ? (s.classList.remove(...k), a && s.classList.add(a))
                    : e.startsWith('data-') && (a ? s.setAttribute(e, a) : s.removeAttribute(e))
                }
              if ((Array.isArray(y) ? y.forEach(u) : u(y), l)) {
                let e = n.includes(h) ? h : null,
                  r = n.includes(t) ? t : e
                s.style.colorScheme = r
              }
              null == i || i()
            },
            [b]
          ),
          C = t.useCallback(
            (e) => {
              let t = 'function' == typeof e ? e(w) : e
              _(t)
              try {
                localStorage.setItem(u, t)
              } catch (e) {}
            },
            [w]
          ),
          T = t.useCallback(
            (t) => {
              E(p(t)), 'system' === w && o && !e && S('system')
            },
            [w, e]
          )
        t.useEffect(() => {
          let e = window.matchMedia(a)
          return e.addListener(T), T(e), () => e.removeListener(T)
        }, [T]),
          t.useEffect(() => {
            let e = (e) => {
              e.key === u && (e.newValue ? _(e.newValue) : C(h))
            }
            return (
              window.addEventListener('storage', e), () => window.removeEventListener('storage', e)
            )
          }, [C]),
          t.useEffect(() => {
            S(null != e ? e : w)
          }, [e, w])
        let O = t.useMemo(
          () => ({
            theme: w,
            setTheme: C,
            forcedTheme: e,
            resolvedTheme: 'system' === w ? j : w,
            themes: o ? [...m, 'system'] : m,
            systemTheme: o ? j : void 0,
          }),
          [w, C, e, j, o, m]
        )
        return t.createElement(
          i.Provider,
          { value: O },
          t.createElement(c, {
            forcedTheme: e,
            storageKey: u,
            attribute: y,
            enableSystem: o,
            enableColorScheme: l,
            defaultTheme: h,
            value: g,
            themes: m,
            nonce: b,
            scriptProps: x,
          }),
          v
        )
      },
      c = t.memo(
        ({
          forcedTheme: e,
          storageKey: n,
          attribute: a,
          enableSystem: o,
          enableColorScheme: i,
          defaultTheme: l,
          value: s,
          themes: u,
          nonce: c,
          scriptProps: f,
        }) => {
          let d = JSON.stringify([a, n, l, e, u, s, o, i]).slice(1, -1)
          return t.createElement('script', {
            ...f,
            suppressHydrationWarning: !0,
            nonce: 'u' < typeof window ? c : '',
            dangerouslySetInnerHTML: { __html: `(${r.toString()})(${d})` },
          })
        }
      ),
      f = (e, t) => {
        let r
        if (!o) {
          try {
            r = localStorage.getItem(e) || void 0
          } catch (e) {}
          return r || t
        }
      },
      d = (e) => {
        let t = document.createElement('style')
        return (
          e && t.setAttribute('nonce', e),
          t.appendChild(
            document.createTextNode(
              '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
            )
          ),
          document.head.appendChild(t),
          () => {
            window.getComputedStyle(document.body),
              setTimeout(() => {
                document.head.removeChild(t)
              }, 1)
          }
        )
      },
      p = (e) => (e || (e = window.matchMedia(a)), e.matches ? 'dark' : 'light')
    e.s([
      'ThemeProvider',
      0,
      (e) =>
        t.useContext(i)
          ? t.createElement(t.Fragment, null, e.children)
          : t.createElement(u, { ...e }),
      'useTheme',
      0,
      () => {
        var e
        return null != (e = t.useContext(i)) ? e : l
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
  93638,
  68339,
  (e) => {
    'use strict'
    var t,
      r,
      n,
      a,
      o,
      i,
      l,
      s = e.i(15497)
    e.s(
      [
        'default',
        0,
        function ({ children: e }) {
          return (0, s.jsx)('div', {
            className: 'mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0',
            children: e,
          })
        },
      ],
      93638
    )
    var u = e.i(50394)
    function c() {
      return (c = Object.assign.bind()).apply(null, arguments)
    }
    function f() {
      return (f = Object.assign.bind()).apply(null, arguments)
    }
    function d() {
      return (d = Object.assign.bind()).apply(null, arguments)
    }
    function p() {
      return (p = Object.assign.bind()).apply(null, arguments)
    }
    function m() {
      return (m = Object.assign.bind()).apply(null, arguments)
    }
    function h() {
      return (h = Object.assign.bind()).apply(null, arguments)
    }
    let y = {
      mail: function (e) {
        return u.createElement(
          'svg',
          c({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, e),
          t ||
            (t = u.createElement('path', {
              d: 'M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z',
            })),
          r ||
            (r = u.createElement('path', {
              d: 'm18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z',
            }))
        )
      },
      github: function (e) {
        return u.createElement(
          'svg',
          f({ viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, e),
          n ||
            (n = u.createElement('path', {
              d: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
            }))
        )
      },
      facebook: function (e) {
        return u.createElement(
          'svg',
          d({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
          a ||
            (a = u.createElement('path', {
              d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
            }))
        )
      },
      youtube: function (e) {
        return u.createElement(
          'svg',
          p({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
          o ||
            (o = u.createElement('path', {
              d: 'M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z',
            }))
        )
      },
      linkedin: function (e) {
        return u.createElement(
          'svg',
          m({ viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, e),
          i ||
            (i = u.createElement('path', {
              d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
            }))
        )
      },
      twitter: function (e) {
        return u.createElement(
          'svg',
          h({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
          l ||
            (l = u.createElement('path', {
              d: 'M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z',
            }))
        )
      },
    }
    e.s(
      [
        'default',
        0,
        ({ kind: e, href: t, size: r = 8 }) => {
          if (!t || ('mail' === e && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(t)))
            return null
          let n = y[e]
          return (0, s.jsxs)('a', {
            className: 'text-sm text-gray-500 transition hover:text-gray-600',
            target: '_blank',
            rel: 'noopener noreferrer',
            href: t,
            children: [
              (0, s.jsx)('span', { className: 'sr-only', children: e }),
              (0, s.jsx)(n, {
                className: `fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${r} w-${r}`,
              }),
            ],
          })
        },
      ],
      68339
    )
  },
  28213,
  (e, t, r) => {
    t.exports = e.r(23011)
  },
  62727,
  (e) => {
    'use strict'
    var t = e.i(93906),
      r = e.i(15497),
      n = e.i(8346),
      a = e.i(25957),
      o = e.i(89973),
      i = e.i(28213)
    let l = () =>
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i.default, {
              strategy: 'lazyOnload',
              src: `https://www.googletagmanager.com/gtag/js?id=${o.default.analytics.googleAnalyticsId}`,
            }),
            (0, r.jsx)(i.default, {
              strategy: 'lazyOnload',
              id: 'ga-script',
              children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${o.default.analytics.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
        `,
            }),
          ],
        }),
      s = () =>
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i.default, {
              strategy: 'lazyOnload',
              'data-domain': o.default.analytics.plausibleDataDomain,
              src: 'https://plausible.io/js/plausible.js',
            }),
            (0, r.jsx)(i.default, {
              strategy: 'lazyOnload',
              id: 'plausible-script',
              children: `
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `,
            }),
          ],
        }),
      u = () =>
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i.default, {
              strategy: 'lazyOnload',
              id: 'sa-script',
              children: `
            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};
        `,
            }),
            (0, r.jsx)(i.default, {
              strategy: 'lazyOnload',
              src: 'https://scripts.simpleanalyticscdn.com/latest.js',
            }),
          ],
        }),
      c = () =>
        (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(i.default, {
            async: !0,
            defer: !0,
            'data-website-id': o.default.analytics.umamiWebsiteId,
            src: 'https://umami.example.com/umami.js',
          }),
        }),
      f = () =>
        (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(i.default, {
            strategy: 'lazyOnload',
            id: 'posthog-script',
            children: `
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('${o.default.analytics.posthogAnalyticsId}',{api_host:'https://app.posthog.com'})
        `,
          }),
        }),
      d = () =>
        (0, r.jsxs)(r.Fragment, {
          children: [
            o.default.analytics.plausibleDataDomain && (0, r.jsx)(s, {}),
            o.default.analytics.simpleAnalytics && (0, r.jsx)(u, {}),
            o.default.analytics.umamiWebsiteId && (0, r.jsx)(c, {}),
            o.default.analytics.googleAnalyticsId && (0, r.jsx)(l, {}),
            o.default.analytics.posthogAnalyticsId && (0, r.jsx)(f, {}),
          ],
        }),
      p = [
        { href: '/posts', title: 'Blog' },
        { href: '/tags', title: 'Tags' },
        { href: '/talks', title: 'Talks & Workshop' },
        { href: '/wanderlist', title: 'WanderList' },
        { href: '/wfc-reviews', title: 'WFC Reviews' },
        { href: '/about', title: 'About' },
      ]
    var m = e.i(81272),
      h = e.i(93638),
      y = e.i(68339)
    function g() {
      return (0, r.jsx)('footer', {
        children: (0, r.jsxs)('div', {
          className: 'mt-16 flex flex-col items-center',
          children: [
            (0, r.jsxs)('div', {
              className: 'mb-3 flex space-x-4',
              children: [
                (0, r.jsx)(y.default, {
                  kind: 'mail',
                  href: `mailto:${o.default.email}`,
                  size: '6',
                }),
                (0, r.jsx)(y.default, { kind: 'github', href: o.default.github, size: '6' }),
                (0, r.jsx)(y.default, { kind: 'facebook', href: o.default.facebook, size: '6' }),
                (0, r.jsx)(y.default, { kind: 'youtube', href: o.default.youtube, size: '6' }),
                (0, r.jsx)(y.default, { kind: 'linkedin', href: o.default.linkedin, size: '6' }),
                (0, r.jsx)(y.default, { kind: 'twitter', href: o.default.twitter, size: '6' }),
              ],
            }),
            (0, r.jsxs)('div', {
              className: 'mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400',
              children: [
                (0, r.jsx)('div', { children: o.default.author }),
                (0, r.jsx)('div', { children: ' • ' }),
                (0, r.jsx)('div', { children: `\xa9 ${new Date().getFullYear()}` }),
                (0, r.jsx)('div', { children: ' • ' }),
                (0, r.jsx)(m.default, { href: '/', children: o.default.title }),
              ],
            }),
            (0, r.jsx)('div', {
              className: 'mb-8 text-sm text-gray-500 dark:text-gray-400',
              children: (0, r.jsx)(m.default, {
                href: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
                children: 'Tailwind Nextjs Theme',
              }),
            }),
          ],
        }),
      })
    }
    var v = e.i(50394)
    let b = () => {
        let [e, t] = (0, v.useState)(!1),
          n = () => {
            t(
              (e) => (
                e
                  ? (document.body.style.overflow = 'auto')
                  : (document.body.style.overflow = 'hidden'),
                !e
              )
            )
          }
        return (0, r.jsxs)('div', {
          className: 'sm:hidden',
          children: [
            (0, r.jsx)('button', {
              type: 'button',
              className: 'ml-1 mr-1 h-8 w-8 rounded py-1',
              'aria-label': 'Toggle Menu',
              onClick: n,
              children: (0, r.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                className: 'text-gray-900 dark:text-gray-100',
                children: (0, r.jsx)('path', {
                  fillRule: 'evenodd',
                  d: 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z',
                  clipRule: 'evenodd',
                }),
              }),
            }),
            (0, r.jsxs)('div', {
              className: `fixed left-0 top-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${
                e ? 'translate-x-0' : 'translate-x-full'
              }`,
              children: [
                (0, r.jsx)('div', {
                  className: 'flex justify-end',
                  children: (0, r.jsx)('button', {
                    type: 'button',
                    className: 'mr-5 mt-11 h-8 w-8 rounded',
                    'aria-label': 'Toggle Menu',
                    onClick: n,
                    children: (0, r.jsx)('svg', {
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 20 20',
                      fill: 'currentColor',
                      className: 'text-gray-900 dark:text-gray-100',
                      children: (0, r.jsx)('path', {
                        fillRule: 'evenodd',
                        d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                        clipRule: 'evenodd',
                      }),
                    }),
                  }),
                }),
                (0, r.jsx)('nav', {
                  className: 'fixed mt-8 h-full',
                  children: p.map((e) =>
                    (0, r.jsx)(
                      'div',
                      {
                        className: 'px-12 py-4',
                        children: (0, r.jsx)(m.default, {
                          href: e.href,
                          className:
                            'text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100',
                          onClick: n,
                          children: e.title,
                        }),
                      },
                      e.title
                    )
                  ),
                }),
              ],
            }),
          ],
        })
      },
      x = () => {
        let [e, t] = (0, v.useState)(!1),
          { theme: a, setTheme: o, resolvedTheme: i } = (0, n.useTheme)()
        return (
          (0, v.useEffect)(() => t(!0), []),
          (0, r.jsx)('button', {
            'aria-label': 'Toggle Dark Mode',
            type: 'button',
            className: 'ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4',
            onClick: () => o('dark' === a || 'dark' === i ? 'light' : 'dark'),
            children: (0, r.jsx)('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 20 20',
              fill: 'currentColor',
              className: 'text-gray-900 dark:text-gray-100',
              children:
                e && ('dark' === a || 'dark' === i)
                  ? (0, r.jsx)('path', {
                      fillRule: 'evenodd',
                      d: 'M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z',
                      clipRule: 'evenodd',
                    })
                  : (0, r.jsx)('path', {
                      d: 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z',
                    }),
            }),
          })
        )
      },
      w = ({ children: e }) =>
        (0, r.jsx)(h.default, {
          children: (0, r.jsxs)('div', {
            className: 'flex h-screen flex-col justify-between',
            children: [
              (0, r.jsxs)('header', {
                className: 'flex items-center justify-between py-10',
                children: [
                  (0, r.jsx)('div', {
                    children: (0, r.jsx)(m.default, {
                      href: '/',
                      'aria-label': o.default.headerTitle,
                      children: (0, r.jsx)('div', {
                        className: 'flex items-center justify-between',
                        children:
                          'string' == typeof o.default.headerTitle
                            ? (0, r.jsx)('div', {
                                className: 'hidden h-6 text-2xl font-semibold sm:block',
                                children: o.default.headerTitle,
                              })
                            : o.default.headerTitle,
                      }),
                    }),
                  }),
                  (0, r.jsxs)('div', {
                    className: 'flex items-center text-base leading-5',
                    children: [
                      (0, r.jsx)('div', {
                        className: 'hidden sm:block',
                        children: p.map((e) =>
                          (0, r.jsx)(
                            m.default,
                            {
                              href: e.href,
                              className: 'p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4',
                              children: e.title,
                            },
                            e.title
                          )
                        ),
                      }),
                      (0, r.jsx)(x, {}),
                      (0, r.jsx)(b, {}),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)('main', { className: 'mb-auto', children: e }),
              (0, r.jsx)(g, {}),
            ],
          }),
        })
    e.i(66854)
    t.default.env.SOCKET,
      e.s(
        [
          'default',
          0,
          function ({ Component: e, pageProps: t }) {
            return (0, r.jsxs)(n.ThemeProvider, {
              attribute: 'class',
              defaultTheme: o.default.theme,
              children: [
                (0, r.jsx)(a.default, {
                  children: (0, r.jsx)('meta', {
                    content: 'width=device-width, initial-scale=1',
                    name: 'viewport',
                  }),
                }),
                !1,
                (0, r.jsx)(d, {}),
                (0, r.jsx)(w, { children: (0, r.jsx)(e, { ...t }) }),
              ],
            })
          },
        ],
        62727
      )
  },
  56703,
  (e, t, r) => {
    let n = '/_app'
    ;(window.__NEXT_P = window.__NEXT_P || []).push([n, () => e.r(62727)]),
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
  30014,
  (e) => {
    e.v((t) =>
      Promise.all(['static/chunks/0zbyhl52699~k.js'].map((t) => e.l(t))).then(() => t(91230))
    )
  },
])
