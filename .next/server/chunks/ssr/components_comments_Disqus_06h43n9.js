module.exports = [
  43817,
  (a) => {
    'use strict'
    var b = a.i(8171),
      c = a.i(27669),
      d = a.i(80244)
    a.s([
      'default',
      0,
      ({ frontMatter: a }) => {
        let [e, f] = (0, c.useState)(!0)
        return (0, b.jsxs)('div', {
          className: 'pb-6 pt-6 text-center text-gray-700 dark:text-gray-300',
          children: [
            e &&
              (0, b.jsx)('button', {
                onClick: function () {
                  if (
                    (f(!1),
                    (window.disqus_config = function () {
                      ;(this.page.url = window.location.href), (this.page.identifier = a.slug)
                    }),
                    void 0 === window.DISQUS)
                  ) {
                    let a = document.createElement('script')
                    ;(a.src =
                      'https://' +
                      d.default.comment.disqusConfig.shortname +
                      '.disqus.com/embed.js'),
                      a.setAttribute('data-timestamp', +new Date()),
                      a.setAttribute('crossorigin', 'anonymous'),
                      (a.async = !0),
                      document.body.appendChild(a)
                  } else window.DISQUS.reset({ reload: !0 })
                },
                children: 'Load Comments',
              }),
            (0, b.jsx)('div', { className: 'disqus-frame', id: 'disqus_thread' }),
          ],
        })
      },
    ])
  },
  78393,
  (a) => {
    a.n(a.i(43817))
  },
]

//# sourceMappingURL=components_comments_Disqus_06h43n9.js.map
