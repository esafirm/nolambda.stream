module.exports = [
  69156,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(8171),
          e = a.i(27669),
          f = a.i(74067),
          g = a.i(80244),
          h = b([f])
        ;([f] = h.then ? (await h)() : h),
          a.s([
            'default',
            0,
            () => {
              let [a, b] = (0, e.useState)(!0),
                { theme: c, resolvedTheme: h } = (0, f.useTheme)(),
                i =
                  '' === g.default.comment.giscusConfig.themeURL
                    ? 'dark' === c || 'dark' === h
                      ? g.default.comment.giscusConfig.darkTheme
                      : g.default.comment.giscusConfig.theme
                    : g.default.comment.giscusConfig.themeURL,
                j = 'comments-container',
                k = (0, e.useCallback)(() => {
                  b(!1)
                  let a = g.default?.comment?.giscusConfig
                  if (!a)
                    return void console.warn(
                      'Giscus: giscusConfig is undefined, skipping comment loading'
                    )
                  let {
                      repo: c,
                      repositoryId: d,
                      category: e,
                      categoryId: f,
                      mapping: h,
                      reactions: k,
                      metadata: l,
                      inputPosition: m,
                      lang: n,
                    } = a,
                    o = document.createElement('script')
                  ;(o.src = 'https://giscus.app/client.js'),
                    o.setAttribute('data-repo', c),
                    o.setAttribute('data-repo-id', d),
                    o.setAttribute('data-category', e),
                    o.setAttribute('data-category-id', f),
                    o.setAttribute('data-mapping', h),
                    o.setAttribute('data-reactions-enabled', k),
                    o.setAttribute('data-emit-metadata', l),
                    o.setAttribute('data-input-position', m),
                    o.setAttribute('data-lang', n),
                    o.setAttribute('data-theme', i),
                    o.setAttribute('crossorigin', 'anonymous'),
                    (o.async = !0)
                  let p = document.getElementById(j)
                  return (
                    p && p.appendChild(o),
                    () => {
                      let a = document.getElementById(j)
                      a && (a.innerHTML = '')
                    }
                  )
                }, [i])
              return (
                (0, e.useEffect)(() => {
                  document.querySelector('iframe.giscus-frame') && k()
                }, [k]),
                (0, d.jsxs)('div', {
                  className: 'pb-6 pt-6 text-center text-gray-700 dark:text-gray-300',
                  children: [
                    a && (0, d.jsx)('button', { onClick: k, children: 'Load Comments' }),
                    (0, d.jsx)('div', { className: 'giscus', id: j }),
                  ],
                })
              )
            },
          ]),
          c()
      } catch (a) {
        c(a)
      }
    }, !1),
  80986,
  (a) => {
    a.n(a.i(69156))
  },
]

//# sourceMappingURL=components_comments_Giscus_tsx_13jdw1e._.js.map
