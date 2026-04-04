module.exports = [
  92136,
  (a) => {
    'use strict'
    var b = a.i(8171),
      c = a.i(27669),
      d = a.i(20163),
      e = a.i(61683)
    function f({ totalPages: a, currentPage: c }) {
      let e = parseInt(c) - 1 > 0,
        g = parseInt(c) + 1 <= parseInt(a)
      return (0, b.jsx)('div', {
        className: 'space-y-2 pb-8 pt-6 md:space-y-5',
        children: (0, b.jsxs)('nav', {
          className: 'flex justify-between',
          children: [
            !e &&
              (0, b.jsx)('button', {
                rel: 'previous',
                className: 'cursor-auto disabled:opacity-50',
                disabled: !e,
                children: 'Previous',
              }),
            e &&
              (0, b.jsx)(d.default, {
                href: c - 1 == 1 ? '/posts/' : `/posts/page/${c - 1}`,
                legacyBehavior: !0,
                children: (0, b.jsx)('button', { rel: 'previous', children: 'Previous' }),
              }),
            (0, b.jsxs)('span', { children: [c, ' of ', a] }),
            !g &&
              (0, b.jsx)('button', {
                rel: 'next',
                className: 'cursor-auto disabled:opacity-50',
                disabled: !g,
                children: 'Next',
              }),
            g &&
              (0, b.jsx)(d.default, {
                href: `/posts/page/${c + 1}`,
                legacyBehavior: !0,
                children: (0, b.jsx)('button', { rel: 'next', children: 'Next' }),
              }),
          ],
        }),
      })
    }
    var g = a.i(51941)
    a.s(
      [
        'default',
        0,
        function ({ posts: a, title: h, initialDisplayPosts: i = [], pagination: j }) {
          let [k, l] = (0, c.useState)(''),
            m = a.filter((a) =>
              (a.title + a.summary + a.tags.join(' ')).toLowerCase().includes(k.toLowerCase())
            ),
            n = i.length > 0 && !k ? i : m
          return (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsxs)('div', {
                className: 'divide-y divide-gray-200 dark:divide-gray-700',
                children: [
                  (0, b.jsxs)('div', {
                    className: 'space-y-2 pb-8 pt-6 md:space-y-5',
                    children: [
                      (0, b.jsx)('h1', {
                        className:
                          'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                        children: h,
                      }),
                      (0, b.jsxs)('div', {
                        className: 'relative max-w-lg',
                        children: [
                          (0, b.jsx)('input', {
                            'aria-label': 'Search articles',
                            type: 'text',
                            onChange: (a) => l(a.target.value),
                            placeholder: 'Search articles',
                            className:
                              'block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100',
                          }),
                          (0, b.jsx)('svg', {
                            className:
                              'absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300',
                            xmlns: 'http://www.w3.org/2000/svg',
                            fill: 'none',
                            viewBox: '0 0 24 24',
                            stroke: 'currentColor',
                            children: (0, b.jsx)('path', {
                              strokeLinecap: 'round',
                              strokeLinejoin: 'round',
                              strokeWidth: 2,
                              d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, b.jsxs)('ul', {
                    children: [
                      !m.length && 'No posts found.',
                      n.map((a) => {
                        let { slug: c, date: f, title: h, summary: i, tags: j } = a
                        return (0, b.jsx)(
                          'li',
                          {
                            className: 'py-4',
                            children: (0, b.jsxs)('article', {
                              className:
                                'space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0',
                              children: [
                                (0, b.jsxs)('dl', {
                                  children: [
                                    (0, b.jsx)('dt', {
                                      className: 'sr-only',
                                      children: 'Published on',
                                    }),
                                    (0, b.jsx)('dd', {
                                      className:
                                        'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                      children: (0, b.jsx)('time', {
                                        dateTime: f,
                                        children: (0, g.default)(f),
                                      }),
                                    }),
                                  ],
                                }),
                                (0, b.jsxs)('div', {
                                  className: 'space-y-3 xl:col-span-3',
                                  children: [
                                    (0, b.jsxs)('div', {
                                      children: [
                                        (0, b.jsx)('h3', {
                                          className: 'text-2xl font-bold leading-8 tracking-tight',
                                          children: (0, b.jsx)(d.default, {
                                            href: `/posts/${c}`,
                                            className: 'text-gray-900 dark:text-gray-100',
                                            children: h,
                                          }),
                                        }),
                                        (0, b.jsx)('div', {
                                          className: 'flex flex-wrap',
                                          children: j.map((a) =>
                                            (0, b.jsx)(e.default, { text: a }, a)
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, b.jsx)('div', {
                                      className:
                                        'prose max-w-none text-gray-500 dark:text-gray-400',
                                      children: i,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          c
                        )
                      }),
                    ],
                  }),
                ],
              }),
              j &&
                j.totalPages > 1 &&
                !k &&
                (0, b.jsx)(f, { currentPage: j.currentPage, totalPages: j.totalPages }),
            ],
          })
        },
      ],
      92136
    )
  },
  42825,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(22734),
          e = a.i(61789),
          f = a.i(14747),
          g = a.i(55163),
          h = a.i(6482),
          i = b([g])
        ;[g] = i.then ? (await i)() : i
        let k = process.cwd()
        async function j(a) {
          let b = await (0, g.getFiles)(a),
            c = {}
          return (
            b.forEach((b) => {
              let g = d.default.readFileSync(f.default.join(k, 'data', a, b), 'utf8'),
                { data: i } = (0, e.default)(g)
              i.tags &&
                !0 !== i.draft &&
                i.tags.forEach((a) => {
                  let b = (0, h.default)(a)
                  b in c ? (c[b] += 1) : (c[b] = 1)
                })
            }),
            c
          )
        }
        a.s(['getAllTags', 0, j]), c()
      } catch (a) {
        c(a)
      }
    }, !1),
  94680,
  (a) => {
    'use strict'
    let { replace: b } = '',
      c = /[&<>'"]/g,
      d = { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' },
      e = (a) => d[a]
    var f = a.i(80244)
    let g = (a) => {
      let d, g
      return `
  <item>
    <guid>${f.default.siteUrl}/posts/${a.slug}</guid>
    <title>${((d = a.title || 'Untitled'), b.call(d, c, e))}</title>
    <link>${f.default.siteUrl}/posts/${a.slug}</link>
    ${a.summary && `<description>${((g = a.summary), b.call(g, c, e))}</description>`}
    <pubDate>${new Date(a.date).toUTCString()}</pubDate>
    <author>${f.default.email} (${f.default.author})</author>
    ${a.tags && a.tags.map((a) => `<category>${a}</category>`).join('')}
  </item>
`
    }
    a.s(
      [
        'default',
        0,
        (a, d = 'feed.xml') => {
          let h, i
          return `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${((h = f.default.title), b.call(h, c, e))}</title>
      <link>${f.default.siteUrl}/posts</link>
      <description>${((i = f.default.description), b.call(i, c, e))}</description>
      <language>${f.default.language}</language>
      <managingEditor>${f.default.email} (${f.default.author})</managingEditor>
      <webMaster>${f.default.email} (${f.default.author})</webMaster>
      <lastBuildDate>${new Date(a[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${f.default.siteUrl}/${d}" rel="self" type="application/rss+xml"/>
      ${a.map(g).join('')}
    </channel>
  </rss>
`
        },
      ],
      94680
    )
  },
  2095,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(8171),
          e = a.i(9377),
          f = a.i(80244),
          g = a.i(92136),
          h = a.i(94680),
          i = a.i(55163),
          j = a.i(42825),
          k = a.i(6482),
          l = a.i(22734),
          m = a.i(14747),
          n = b([i, j])
        ;[i, j] = n.then ? (await n)() : n
        let q = process.cwd()
        async function o() {
          let a = await (0, j.getAllTags)('posts')
          return { paths: Object.keys(a).map((a) => ({ params: { tag: a } })), fallback: !1 }
        }
        async function p({ params: a }) {
          let b = (await (0, i.getAllFilesFrontMatter)('posts')).filter(
            (b) => !0 !== b.draft && b.tags.map((a) => (0, k.default)(a)).includes(a.tag)
          )
          if (b.length > 0) {
            let c = (0, h.default)(b, `tags/${a.tag}/feed.xml`),
              d = m.default.join(q, 'public', 'tags', a.tag)
            l.default.mkdirSync(d, { recursive: !0 }),
              l.default.writeFileSync(m.default.join(d, 'feed.xml'), c)
          }
          return { props: { posts: b, tag: a.tag } }
        }
        a.s([
          'default',
          0,
          function ({ posts: a, tag: b }) {
            let c = b[0].toUpperCase() + b.split(' ').join('-').slice(1)
            return (0, d.jsxs)(d.Fragment, {
              children: [
                (0, d.jsx)(e.TagSEO, {
                  title: `${b} - ${f.default.author}`,
                  description: `${b} tags - ${f.default.author}`,
                }),
                (0, d.jsx)(g.default, { posts: a, title: c }),
              ],
            })
          },
          'getStaticPaths',
          0,
          o,
          'getStaticProps',
          0,
          p,
        ]),
          c()
      } catch (a) {
        c(a)
      }
    }, !1),
  98011,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(31363),
          e = a.i(78238),
          f = a.i(63683),
          g = a.i(20935),
          h = a.i(27342),
          i = a.i(2095),
          j = a.i(224),
          k = b([h, i])
        ;[h, i] = k.then ? (await k)() : k
        let l = (0, f.hoist)(i, 'default'),
          m = (0, f.hoist)(i, 'getStaticProps'),
          n = (0, f.hoist)(i, 'getStaticPaths'),
          o = (0, f.hoist)(i, 'getServerSideProps'),
          p = (0, f.hoist)(i, 'config'),
          q = (0, f.hoist)(i, 'reportWebVitals'),
          r = (0, f.hoist)(i, 'unstable_getStaticProps'),
          s = (0, f.hoist)(i, 'unstable_getStaticPaths'),
          t = (0, f.hoist)(i, 'unstable_getStaticParams'),
          u = (0, f.hoist)(i, 'unstable_getServerProps'),
          v = (0, f.hoist)(i, 'unstable_getServerSideProps'),
          w = new d.PagesRouteModule({
            definition: {
              kind: e.RouteKind.PAGES,
              page: '/tags/[tag]',
              pathname: '/tags/[tag]',
              bundlePath: '',
              filename: '',
            },
            distDir: '.next',
            relativeProjectDir: '',
            components: { App: h.default, Document: g.default },
            userland: i,
          }),
          x = (0, j.getHandler)({
            srcPage: '/tags/[tag]',
            config: p,
            userland: i,
            routeModule: w,
            getStaticPaths: n,
            getStaticProps: m,
            getServerSideProps: o,
          })
        a.s([
          'config',
          0,
          p,
          'default',
          0,
          l,
          'getServerSideProps',
          0,
          o,
          'getStaticPaths',
          0,
          n,
          'getStaticProps',
          0,
          m,
          'handler',
          0,
          x,
          'reportWebVitals',
          0,
          q,
          'routeModule',
          0,
          w,
          'unstable_getServerProps',
          0,
          u,
          'unstable_getServerSideProps',
          0,
          v,
          'unstable_getStaticParams',
          0,
          t,
          'unstable_getStaticPaths',
          0,
          s,
          'unstable_getStaticProps',
          0,
          r,
        ]),
          c()
      } catch (a) {
        c(a)
      }
    }, !1),
]

//# sourceMappingURL=_0b2lr9~._.js.map
