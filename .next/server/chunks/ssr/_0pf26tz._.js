module.exports = [
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
  13715,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(8171),
          e = a.i(20163),
          f = a.i(9377),
          g = a.i(61683),
          h = a.i(80244),
          i = a.i(55163),
          j = a.i(51941),
          k = a.i(75886),
          l = b([i])
        async function m() {
          return { props: { posts: await (0, i.getAllFilesFrontMatter)('posts') } }
        }
        ;([i] = l.then ? (await l)() : l),
          a.s([
            'default',
            0,
            function ({ posts: a }) {
              return (0, d.jsxs)(d.Fragment, {
                children: [
                  (0, d.jsx)(f.PageSEO, {
                    title: h.default.title,
                    description: h.default.description,
                  }),
                  (0, d.jsxs)('div', {
                    className: 'divide-y divide-gray-200 dark:divide-gray-700',
                    children: [
                      (0, d.jsxs)('div', {
                        className: 'space-y-2 pb-8 pt-6 md:space-y-5',
                        children: [
                          (0, d.jsx)('h1', {
                            className:
                              'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                            children: 'Latest',
                          }),
                          (0, d.jsx)('p', {
                            className: 'text-lg leading-7 text-gray-500 dark:text-gray-400',
                            children: h.default.description,
                          }),
                        ],
                      }),
                      (0, d.jsxs)('ul', {
                        className: 'divide-y divide-gray-200 dark:divide-gray-700',
                        children: [
                          !a.length && 'No posts found.',
                          a.slice(0, 5).map((a) => {
                            let { slug: b, date: c, title: f, summary: h, tags: i } = a
                            return (0, d.jsx)(
                              'li',
                              {
                                className: 'py-12',
                                children: (0, d.jsx)('article', {
                                  children: (0, d.jsxs)('div', {
                                    className:
                                      'space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0',
                                    children: [
                                      (0, d.jsxs)('dl', {
                                        children: [
                                          (0, d.jsx)('dt', {
                                            className: 'sr-only',
                                            children: 'Published on',
                                          }),
                                          (0, d.jsx)('dd', {
                                            className:
                                              'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                            children: (0, d.jsx)('time', {
                                              dateTime: c,
                                              children: (0, j.default)(c),
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, d.jsxs)('div', {
                                        className: 'space-y-5 xl:col-span-3',
                                        children: [
                                          (0, d.jsxs)('div', {
                                            className: 'space-y-6',
                                            children: [
                                              (0, d.jsxs)('div', {
                                                children: [
                                                  (0, d.jsx)('h2', {
                                                    className:
                                                      'text-2xl font-bold leading-8 tracking-tight',
                                                    children: (0, d.jsx)(e.default, {
                                                      href: `/posts/${b}`,
                                                      className: 'text-gray-900 dark:text-gray-100',
                                                      children: f,
                                                    }),
                                                  }),
                                                  (0, d.jsx)('div', {
                                                    className: 'flex flex-wrap',
                                                    children: i.map((a) =>
                                                      (0, d.jsx)(g.default, { text: a }, a)
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, d.jsx)('div', {
                                                className:
                                                  'prose max-w-none text-gray-500 dark:text-gray-400',
                                                children: h,
                                              }),
                                            ],
                                          }),
                                          (0, d.jsx)('div', {
                                            className: 'text-base font-medium leading-6',
                                            children: (0, d.jsx)(e.default, {
                                              href: `/posts/${b}`,
                                              className:
                                                'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                              'aria-label': `Read "${f}"`,
                                              children: 'Read more →',
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              },
                              b
                            )
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.length > 5 &&
                    (0, d.jsx)('div', {
                      className: 'flex justify-end text-base font-medium leading-6',
                      children: (0, d.jsx)(e.default, {
                        href: '/posts',
                        className:
                          'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                        'aria-label': 'all posts',
                        children: 'All Posts →',
                      }),
                    }),
                  '' !== h.default.newsletter.provider &&
                    (0, d.jsx)('div', {
                      className: 'flex items-center justify-center pt-4',
                      children: (0, d.jsx)(k.default, {}),
                    }),
                ],
              })
            },
            'getStaticProps',
            0,
            m,
          ]),
          c()
      } catch (a) {
        c(a)
      }
    }, !1),
  67654,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(31363),
          e = a.i(78238),
          f = a.i(63683),
          g = a.i(20935),
          h = a.i(27342),
          i = a.i(13715),
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
              page: '/index',
              pathname: '/',
              bundlePath: '',
              filename: '',
            },
            distDir: '.next',
            relativeProjectDir: '',
            components: { App: h.default, Document: g.default },
            userland: i,
          }),
          x = (0, j.getHandler)({
            srcPage: '/index',
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

//# sourceMappingURL=_0pf26tz._.js.map
