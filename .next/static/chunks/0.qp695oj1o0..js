;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  8346,
  (e) => {
    'use strict'
    var t = e.i(50394),
      s = (e, t, s, a, r, n, i, o) => {
        let l = document.documentElement,
          c = ['light', 'dark']
        function m(t) {
          var s
          ;(Array.isArray(e) ? e : [e]).forEach((e) => {
            let s = 'class' === e,
              a = s && n ? r.map((e) => n[e] || e) : r
            s
              ? (l.classList.remove(...a), l.classList.add(n && n[t] ? n[t] : t))
              : l.setAttribute(e, t)
          }),
            (s = t),
            o && c.includes(s) && (l.style.colorScheme = s)
        }
        if (a) m(a)
        else
          try {
            let e = localStorage.getItem(t) || s,
              a =
                i && 'system' === e
                  ? window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light'
                  : e
            m(a)
          } catch (e) {}
      },
      a = ['light', 'dark'],
      r = '(prefers-color-scheme: dark)',
      n = 'u' < typeof window,
      i = t.createContext(void 0),
      o = { setTheme: (e) => {}, themes: [] },
      l = ['light', 'dark'],
      c = ({
        forcedTheme: e,
        disableTransitionOnChange: s = !1,
        enableSystem: n = !0,
        enableColorScheme: o = !0,
        storageKey: c = 'theme',
        themes: g = l,
        defaultTheme: f = n ? 'system' : 'light',
        attribute: p = 'data-theme',
        value: y,
        children: b,
        nonce: v,
        scriptProps: C,
      }) => {
        let [T, A] = t.useState(() => d(c, f)),
          [w, S] = t.useState(() => ('system' === T ? h() : T)),
          k = y ? Object.values(y) : g,
          E = t.useCallback(
            (e) => {
              let t = e
              if (!t) return
              'system' === e && n && (t = h())
              let r = y ? y[t] : t,
                i = s ? u(v) : null,
                l = document.documentElement,
                c = (e) => {
                  'class' === e
                    ? (l.classList.remove(...k), r && l.classList.add(r))
                    : e.startsWith('data-') && (r ? l.setAttribute(e, r) : l.removeAttribute(e))
                }
              if ((Array.isArray(p) ? p.forEach(c) : c(p), o)) {
                let e = a.includes(f) ? f : null,
                  s = a.includes(t) ? t : e
                l.style.colorScheme = s
              }
              null == i || i()
            },
            [v]
          ),
          L = t.useCallback(
            (e) => {
              let t = 'function' == typeof e ? e(T) : e
              A(t)
              try {
                localStorage.setItem(c, t)
              } catch (e) {}
            },
            [T]
          ),
          x = t.useCallback(
            (t) => {
              S(h(t)), 'system' === T && n && !e && E('system')
            },
            [T, e]
          )
        t.useEffect(() => {
          let e = window.matchMedia(r)
          return e.addListener(x), x(e), () => e.removeListener(x)
        }, [x]),
          t.useEffect(() => {
            let e = (e) => {
              e.key === c && (e.newValue ? A(e.newValue) : L(f))
            }
            return (
              window.addEventListener('storage', e), () => window.removeEventListener('storage', e)
            )
          }, [L]),
          t.useEffect(() => {
            E(null != e ? e : T)
          }, [e, T])
        let P = t.useMemo(
          () => ({
            theme: T,
            setTheme: L,
            forcedTheme: e,
            resolvedTheme: 'system' === T ? w : T,
            themes: n ? [...g, 'system'] : g,
            systemTheme: n ? w : void 0,
          }),
          [T, L, e, w, n, g]
        )
        return t.createElement(
          i.Provider,
          { value: P },
          t.createElement(m, {
            forcedTheme: e,
            storageKey: c,
            attribute: p,
            enableSystem: n,
            enableColorScheme: o,
            defaultTheme: f,
            value: y,
            themes: g,
            nonce: v,
            scriptProps: C,
          }),
          b
        )
      },
      m = t.memo(
        ({
          forcedTheme: e,
          storageKey: a,
          attribute: r,
          enableSystem: n,
          enableColorScheme: i,
          defaultTheme: o,
          value: l,
          themes: c,
          nonce: m,
          scriptProps: d,
        }) => {
          let u = JSON.stringify([r, a, o, e, c, l, n, i]).slice(1, -1)
          return t.createElement('script', {
            ...d,
            suppressHydrationWarning: !0,
            nonce: 'u' < typeof window ? m : '',
            dangerouslySetInnerHTML: { __html: `(${s.toString()})(${u})` },
          })
        }
      ),
      d = (e, t) => {
        let s
        if (!n) {
          try {
            s = localStorage.getItem(e) || void 0
          } catch (e) {}
          return s || t
        }
      },
      u = (e) => {
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
      h = (e) => (e || (e = window.matchMedia(r)), e.matches ? 'dark' : 'light')
    e.s([
      'ThemeProvider',
      0,
      (e) =>
        t.useContext(i)
          ? t.createElement(t.Fragment, null, e.children)
          : t.createElement(c, { ...e }),
      'useTheme',
      0,
      () => {
        var e
        return null != (e = t.useContext(i)) ? e : o
      },
    ])
  },
  19329,
  (e) => {
    'use strict'
    var t = e.i(15497),
      s = e.i(50394),
      a = e.i(8346),
      r = e.i(89973)
    e.s([
      'default',
      0,
      () => {
        let [e, n] = (0, s.useState)(!0),
          { theme: i, resolvedTheme: o } = (0, a.useTheme)(),
          l =
            '' === r.default.comment.giscusConfig.themeURL
              ? 'dark' === i || 'dark' === o
                ? r.default.comment.giscusConfig.darkTheme
                : r.default.comment.giscusConfig.theme
              : r.default.comment.giscusConfig.themeURL,
          c = 'comments-container',
          m = (0, s.useCallback)(() => {
            n(!1)
            let e = r.default?.comment?.giscusConfig
            if (!e)
              return void console.warn(
                'Giscus: giscusConfig is undefined, skipping comment loading'
              )
            let {
                repo: t,
                repositoryId: s,
                category: a,
                categoryId: i,
                mapping: o,
                reactions: m,
                metadata: d,
                inputPosition: u,
                lang: h,
              } = e,
              g = document.createElement('script')
            ;(g.src = 'https://giscus.app/client.js'),
              g.setAttribute('data-repo', t),
              g.setAttribute('data-repo-id', s),
              g.setAttribute('data-category', a),
              g.setAttribute('data-category-id', i),
              g.setAttribute('data-mapping', o),
              g.setAttribute('data-reactions-enabled', m),
              g.setAttribute('data-emit-metadata', d),
              g.setAttribute('data-input-position', u),
              g.setAttribute('data-lang', h),
              g.setAttribute('data-theme', l),
              g.setAttribute('crossorigin', 'anonymous'),
              (g.async = !0)
            let f = document.getElementById(c)
            return (
              f && f.appendChild(g),
              () => {
                let e = document.getElementById(c)
                e && (e.innerHTML = '')
              }
            )
          }, [l])
        return (
          (0, s.useEffect)(() => {
            document.querySelector('iframe.giscus-frame') && m()
          }, [m]),
          (0, t.jsxs)('div', {
            className: 'pb-6 pt-6 text-center text-gray-700 dark:text-gray-300',
            children: [
              e && (0, t.jsx)('button', { onClick: m, children: 'Load Comments' }),
              (0, t.jsx)('div', { className: 'giscus', id: c }),
            ],
          })
        )
      },
    ])
  },
  86995,
  (e) => {
    e.n(e.i(19329))
  },
])
