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
  75886,
  (a) => {
    'use strict'
    var b = a.i(8171),
      c = a.i(27669),
      d = a.i(80244)
    let e = ({ title: a = 'Subscribe to the newsletter' }) => {
      let e = (0, c.useRef)(null),
        [f, g] = (0, c.useState)(!1),
        [h, i] = (0, c.useState)(''),
        [j, k] = (0, c.useState)(!1),
        l = async (a) => {
          a.preventDefault()
          let b = await fetch(`/api/${d.default.newsletter.provider}`, {
              body: JSON.stringify({ email: e.current.value }),
              headers: { 'Content-Type': 'application/json' },
              method: 'POST',
            }),
            { error: c } = await b.json()
          if (c) {
            g(!0), i('Your e-mail address is invalid or you are already subscribed!')
            return
          }
          ;(e.current.value = ''), g(!1), k(!0), i('Successfully! 🎉 You are now subscribed.')
        }
      return (0, b.jsxs)('div', {
        children: [
          (0, b.jsx)('div', {
            className: 'pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100',
            children: a,
          }),
          (0, b.jsxs)('form', {
            className: 'flex flex-col sm:flex-row',
            onSubmit: l,
            children: [
              (0, b.jsxs)('div', {
                children: [
                  (0, b.jsx)('label', {
                    className: 'sr-only',
                    htmlFor: 'email-input',
                    children: 'Email address',
                  }),
                  (0, b.jsx)('input', {
                    autoComplete: 'email',
                    className:
                      'w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black',
                    id: 'email-input',
                    name: 'email',
                    placeholder: j ? "You're subscribed !  🎉" : 'Enter your email',
                    ref: e,
                    required: !0,
                    type: 'email',
                    disabled: j,
                  }),
                ],
              }),
              (0, b.jsx)('div', {
                className: 'mt-2 flex w-full rounded-md shadow-sm sm:ml-3 sm:mt-0',
                children: (0, b.jsx)('button', {
                  className: `w-full rounded-md bg-primary-500 px-4 py-2 font-medium text-white sm:py-0 ${
                    j ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-primary-400'
                  } focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`,
                  type: 'submit',
                  disabled: j,
                  children: j ? 'Thank you!' : 'Sign up',
                }),
              }),
            ],
          }),
          f &&
            (0, b.jsx)('div', {
              className: 'w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96',
              children: h,
            }),
        ],
      })
    }
    a.s([
      'BlogNewsletterForm',
      0,
      ({ title: a }) =>
        (0, b.jsx)('div', {
          className: 'flex items-center justify-center',
          children: (0, b.jsx)('div', {
            className: 'bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8',
            children: (0, b.jsx)(e, { title: a }),
          }),
        }),
      'default',
      0,
      e,
    ])
  },
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
  25152,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(8171),
          e = a.i(22734),
          f = a.i(62767),
          g = a.i(94680),
          h = a.i(83116),
          i = a.i(55163),
          j = b([i])
        async function k() {
          return {
            paths: (0, i.getFiles)('posts').map((a) => ({
              params: { slug: (0, i.formatSlug)(a).split('/') },
            })),
            fallback: !1,
          }
        }
        async function l({ params: a }) {
          let b = await (0, i.getAllFilesFrontMatter)('posts'),
            c = b.findIndex((b) => (0, i.formatSlug)(b.slug) === a.slug.join('/')),
            d = b[c + 1] || null,
            f = b[c - 1] || null,
            h = await (0, i.getFileBySlug)('posts', a.slug.join('/')),
            j = (h.frontMatter.authors || ['default']).map(
              async (a) => (await (0, i.getFileBySlug)('authors', [a])).frontMatter
            ),
            k = await Promise.all(j)
          if (b.length > 0) {
            let a = (0, g.default)(b)
            e.default.writeFileSync('./public/feed.xml', a)
          }
          return { props: { post: h, authorDetails: k, prev: d, next: f } }
        }
        ;([i] = j.then ? (await j)() : j),
          a.s([
            'default',
            0,
            function ({ post: a, authorDetails: b, prev: c, next: e }) {
              let { mdxSource: g, toc: i, frontMatter: j } = a
              return (0, d.jsx)(d.Fragment, {
                children:
                  !0 !== j.draft
                    ? (0, d.jsx)(h.MDXLayoutRenderer, {
                        layout: j.layout || 'PostLayout',
                        toc: i,
                        mdxSource: g,
                        frontMatter: j,
                        authorDetails: b,
                        prev: c,
                        next: e,
                      })
                    : (0, d.jsx)('div', {
                        className: 'mt-24 text-center',
                        children: (0, d.jsxs)(f.default, {
                          children: [
                            'Under Construction',
                            ' ',
                            (0, d.jsx)('span', {
                              role: 'img',
                              'aria-label': 'roadwork sign',
                              children: '🚧',
                            }),
                          ],
                        }),
                      }),
              })
            },
            'getStaticPaths',
            0,
            k,
            'getStaticProps',
            0,
            l,
          ]),
          c()
      } catch (a) {
        c(a)
      }
    }, !1),
  87601,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(31363),
          e = a.i(78238),
          f = a.i(63683),
          g = a.i(20935),
          h = a.i(27342),
          i = a.i(25152),
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
              page: '/posts/[...slug]',
              pathname: '/posts/[...slug]',
              bundlePath: '',
              filename: '',
            },
            distDir: '.next',
            relativeProjectDir: '',
            components: { App: h.default, Document: g.default },
            userland: i,
          }),
          x = (0, j.getHandler)({
            srcPage: '/posts/[...slug]',
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
  93963,
  (a) => {
    a.v((b) =>
      Promise.all(
        ['server/chunks/ssr/components_comments_Utterances_01fx9k~.js'].map((b) => a.l(b))
      ).then(() => b(70435))
    )
  },
  66981,
  (a) => {
    a.v((b) =>
      Promise.all(
        ['server/chunks/ssr/components_comments_Giscus_tsx_13jdw1e._.js'].map((b) => a.l(b))
      ).then(() => b(80986))
    )
  },
  7297,
  (a) => {
    a.v((b) =>
      Promise.all(
        ['server/chunks/ssr/components_comments_Disqus_06h43n9.js'].map((b) => a.l(b))
      ).then(() => b(78393))
    )
  },
]

//# sourceMappingURL=_00k3q0x._.js.map
