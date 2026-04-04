module.exports = [
  5208,
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
                  'dark' === c || 'dark' === h
                    ? g.default.comment.utterancesConfig.darkTheme
                    : g.default.comment.utterancesConfig.theme,
                j = 'comments-container',
                k = (0, e.useCallback)(() => {
                  b(!1)
                  let a = document.createElement('script')
                  ;(a.src = 'https://utteranc.es/client.js'),
                    a.setAttribute('repo', g.default.comment.utterancesConfig.repo),
                    a.setAttribute('issue-term', g.default.comment.utterancesConfig.issueTerm),
                    a.setAttribute('label', g.default.comment.utterancesConfig.label),
                    a.setAttribute('theme', i),
                    a.setAttribute('crossorigin', 'anonymous'),
                    (a.async = !0)
                  let c = document.getElementById(j)
                  return (
                    c && c.appendChild(a),
                    () => {
                      let a = document.getElementById(j)
                      a && (a.innerHTML = '')
                    }
                  )
                }, [i])
              return (
                (0, e.useEffect)(() => {
                  document.querySelector('iframe.utterances-frame') && k()
                }, [k]),
                (0, d.jsxs)('div', {
                  className: 'pb-6 pt-6 text-center text-gray-700 dark:text-gray-300',
                  children: [
                    a && (0, d.jsx)('button', { onClick: k, children: 'Load Comments' }),
                    (0, d.jsx)('div', { className: 'utterances-frame relative', id: j }),
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
  70435,
  (a) => {
    a.n(a.i(5208))
  },
]

//# sourceMappingURL=components_comments_Utterances_01fx9k~.js.map
