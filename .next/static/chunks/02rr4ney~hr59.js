;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  8346,
  (e) => {
    'use strict'
    var t = e.i(50394),
      r = (e, t, r, n, s, a, o, l) => {
        let i = document.documentElement,
          m = ['light', 'dark']
        function c(t) {
          var r
          ;(Array.isArray(e) ? e : [e]).forEach((e) => {
            let r = 'class' === e,
              n = r && a ? s.map((e) => a[e] || e) : s
            r
              ? (i.classList.remove(...n), i.classList.add(a && a[t] ? a[t] : t))
              : i.setAttribute(e, t)
          }),
            (r = t),
            l && m.includes(r) && (i.style.colorScheme = r)
        }
        if (n) c(n)
        else
          try {
            let e = localStorage.getItem(t) || r,
              n =
                o && 'system' === e
                  ? window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light'
                  : e
            c(n)
          } catch (e) {}
      },
      n = ['light', 'dark'],
      s = '(prefers-color-scheme: dark)',
      a = 'u' < typeof window,
      o = t.createContext(void 0),
      l = { setTheme: (e) => {}, themes: [] },
      i = ['light', 'dark'],
      m = ({
        forcedTheme: e,
        disableTransitionOnChange: r = !1,
        enableSystem: a = !0,
        enableColorScheme: l = !0,
        storageKey: m = 'theme',
        themes: f = i,
        defaultTheme: y = a ? 'system' : 'light',
        attribute: p = 'data-theme',
        value: g,
        children: b,
        nonce: v,
        scriptProps: C,
      }) => {
        let [T, S] = t.useState(() => u(m, y)),
          [w, E] = t.useState(() => ('system' === T ? h() : T)),
          k = g ? Object.values(g) : f,
          A = t.useCallback(
            (e) => {
              let t = e
              if (!t) return
              'system' === e && a && (t = h())
              let s = g ? g[t] : t,
                o = r ? d(v) : null,
                i = document.documentElement,
                m = (e) => {
                  'class' === e
                    ? (i.classList.remove(...k), s && i.classList.add(s))
                    : e.startsWith('data-') && (s ? i.setAttribute(e, s) : i.removeAttribute(e))
                }
              if ((Array.isArray(p) ? p.forEach(m) : m(p), l)) {
                let e = n.includes(y) ? y : null,
                  r = n.includes(t) ? t : e
                i.style.colorScheme = r
              }
              null == o || o()
            },
            [v]
          ),
          L = t.useCallback(
            (e) => {
              let t = 'function' == typeof e ? e(T) : e
              S(t)
              try {
                localStorage.setItem(m, t)
              } catch (e) {}
            },
            [T]
          ),
          x = t.useCallback(
            (t) => {
              E(h(t)), 'system' === T && a && !e && A('system')
            },
            [T, e]
          )
        t.useEffect(() => {
          let e = window.matchMedia(s)
          return e.addListener(x), x(e), () => e.removeListener(x)
        }, [x]),
          t.useEffect(() => {
            let e = (e) => {
              e.key === m && (e.newValue ? S(e.newValue) : L(y))
            }
            return (
              window.addEventListener('storage', e), () => window.removeEventListener('storage', e)
            )
          }, [L]),
          t.useEffect(() => {
            A(null != e ? e : T)
          }, [e, T])
        let P = t.useMemo(
          () => ({
            theme: T,
            setTheme: L,
            forcedTheme: e,
            resolvedTheme: 'system' === T ? w : T,
            themes: a ? [...f, 'system'] : f,
            systemTheme: a ? w : void 0,
          }),
          [T, L, e, w, a, f]
        )
        return t.createElement(
          o.Provider,
          { value: P },
          t.createElement(c, {
            forcedTheme: e,
            storageKey: m,
            attribute: p,
            enableSystem: a,
            enableColorScheme: l,
            defaultTheme: y,
            value: g,
            themes: f,
            nonce: v,
            scriptProps: C,
          }),
          b
        )
      },
      c = t.memo(
        ({
          forcedTheme: e,
          storageKey: n,
          attribute: s,
          enableSystem: a,
          enableColorScheme: o,
          defaultTheme: l,
          value: i,
          themes: m,
          nonce: c,
          scriptProps: u,
        }) => {
          let d = JSON.stringify([s, n, l, e, m, i, a, o]).slice(1, -1)
          return t.createElement('script', {
            ...u,
            suppressHydrationWarning: !0,
            nonce: 'u' < typeof window ? c : '',
            dangerouslySetInnerHTML: { __html: `(${r.toString()})(${d})` },
          })
        }
      ),
      u = (e, t) => {
        let r
        if (!a) {
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
      h = (e) => (e || (e = window.matchMedia(s)), e.matches ? 'dark' : 'light')
    e.s([
      'ThemeProvider',
      0,
      (e) =>
        t.useContext(o)
          ? t.createElement(t.Fragment, null, e.children)
          : t.createElement(m, { ...e }),
      'useTheme',
      0,
      () => {
        var e
        return null != (e = t.useContext(o)) ? e : l
      },
    ])
  },
  37274,
  (e) => {
    'use strict'
    var t = e.i(15497),
      r = e.i(50394),
      n = e.i(8346),
      s = e.i(89973)
    e.s([
      'default',
      0,
      () => {
        let [e, a] = (0, r.useState)(!0),
          { theme: o, resolvedTheme: l } = (0, n.useTheme)(),
          i =
            'dark' === o || 'dark' === l
              ? s.default.comment.utterancesConfig.darkTheme
              : s.default.comment.utterancesConfig.theme,
          m = 'comments-container',
          c = (0, r.useCallback)(() => {
            a(!1)
            let e = document.createElement('script')
            ;(e.src = 'https://utteranc.es/client.js'),
              e.setAttribute('repo', s.default.comment.utterancesConfig.repo),
              e.setAttribute('issue-term', s.default.comment.utterancesConfig.issueTerm),
              e.setAttribute('label', s.default.comment.utterancesConfig.label),
              e.setAttribute('theme', i),
              e.setAttribute('crossorigin', 'anonymous'),
              (e.async = !0)
            let t = document.getElementById(m)
            return (
              t && t.appendChild(e),
              () => {
                let e = document.getElementById(m)
                e && (e.innerHTML = '')
              }
            )
          }, [i])
        return (
          (0, r.useEffect)(() => {
            document.querySelector('iframe.utterances-frame') && c()
          }, [c]),
          (0, t.jsxs)('div', {
            className: 'pb-6 pt-6 text-center text-gray-700 dark:text-gray-300',
            children: [
              e && (0, t.jsx)('button', { onClick: c, children: 'Load Comments' }),
              (0, t.jsx)('div', { className: 'utterances-frame relative', id: m }),
            ],
          })
        )
      },
    ])
  },
  88317,
  (e) => {
    e.n(e.i(37274))
  },
])
