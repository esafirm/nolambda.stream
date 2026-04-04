module.exports = [
  57046,
  (a) =>
    a.a(async (b, c) => {
      try {
        let b = await a.y('js-yaml-7c41297ec48beeee')
        a.n(b), c()
      } catch (a) {
        c(a)
      }
    }, !0),
  38411,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(8171),
          e = a.i(27669),
          f = a.i(22734),
          g = a.i(14747),
          h = a.i(57046),
          i = b([h])
        async function j() {
          let a = g.default.join(process.cwd(), 'data', 'wanderlist'),
            b = g.default.join(a, 'world_nations.yaml'),
            c = f.default.readFileSync(b, 'utf8'),
            d = (0, h.load)(c) || [],
            e = g.default.join(a, 'indonesia_provinces.yaml'),
            i = f.default.readFileSync(e, 'utf8'),
            j = (0, h.load)(i) || [],
            k = g.default.join(a, 'members'),
            l = f.default
              .readdirSync(k)
              .filter((a) => a.endsWith('.yaml'))
              .map((a) => {
                let b = g.default.join(k, a),
                  c = f.default.readFileSync(b, 'utf8')
                return (0, h.load)(c)
              })
          return { props: { nations: d, provinces: j, members: l } }
        }
        ;([h] = i.then ? (await i)() : i),
          a.s([
            'default',
            0,
            ({ nations: a, provinces: b, members: c }) => {
              let [f, g] = (0, e.useState)(() => (c && c.length > 0 ? [c[0]] : [])),
                h = (a) => {
                  g((b) =>
                    1 === b.length && b[0].name === a.name
                      ? b
                      : b.some((b) => b.name === a.name)
                      ? b.filter((b) => b.name !== a.name)
                      : [...b, a]
                  )
                },
                i = (a, b) =>
                  0 === f.length ? null : f.find((c) => c.visited?.[b]?.includes(a)) || null,
                j = (a, b) =>
                  0 === f.length ? null : f.find((c) => c.planned?.[b]?.includes(a)) || null
              return (0, d.jsxs)('div', {
                className: 'container mx-auto p-4',
                children: [
                  (0, d.jsx)('style', {
                    children: `
        @keyframes jumpy {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        .animate-jumpy {
          display: inline-block;
          animation: jumpy 1.5s infinite ease-in-out;
        }
      `,
                  }),
                  (0, d.jsx)('h1', {
                    className: 'mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100',
                    children: 'Travel Tracker',
                  }),
                  (0, d.jsx)('div', {
                    className: 'mb-8 flex space-x-4',
                    children: c.map((a) =>
                      (0, d.jsxs)(
                        'div',
                        {
                          role: 'button',
                          tabIndex: 0,
                          className: `relative h-16 w-16 cursor-pointer overflow-hidden rounded-full transition-all duration-200 ease-in-out
              ${
                f.some((b) => b.name === a.name)
                  ? `ring-4 ring-${a.color || 'indigo-500'}`
                  : 'ring-2 ring-gray-300 hover:ring-indigo-400 dark:ring-gray-700'
              }`,
                          onClick: () => h(a),
                          onKeyDown: (b) => {
                            ;('Enter' === b.key || ' ' === b.key) && (b.preventDefault(), h(a))
                          },
                          title: a.name,
                          children: [
                            a.avatar
                              ? (0, d.jsx)('img', {
                                  src: a.avatar,
                                  alt: a.name,
                                  className: 'h-full w-full object-cover',
                                })
                              : (0, d.jsx)('div', {
                                  className:
                                    'flex h-full w-full items-center justify-center bg-gray-200 text-xl font-bold text-gray-800 dark:bg-gray-700 dark:text-gray-200',
                                  children: a.name
                                    .split(' ')
                                    .map((a) => a[0])
                                    .join('')
                                    .toUpperCase()
                                    .substring(0, 2),
                                }),
                            (0, d.jsx)('span', {
                              className:
                                'absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-0.5 text-center text-xs text-white',
                              children: a.name,
                            }),
                          ],
                        },
                        a.name
                      )
                    ),
                  }),
                  (0, d.jsxs)('div', {
                    className:
                      'mb-8 flex items-center space-x-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-800',
                    children: [
                      (0, d.jsxs)('div', {
                        className: 'flex items-center space-x-2',
                        children: [
                          (0, d.jsx)('span', {
                            className:
                              'animate-jumpy rounded bg-gray-500 px-2 py-0.5 text-[10px] font-bold text-white',
                            children: 'Visited',
                          }),
                          (0, d.jsx)('span', {
                            className: 'text-sm font-medium',
                            children: 'Been there!',
                          }),
                        ],
                      }),
                      (0, d.jsxs)('div', {
                        className: 'flex items-center space-x-2',
                        children: [
                          (0, d.jsx)('span', {
                            className:
                              'animate-jumpy rounded border border-dashed border-gray-500 px-2 py-0.5 text-[10px] font-bold text-gray-500',
                            children: 'Planned',
                          }),
                          (0, d.jsx)('span', {
                            className: 'text-sm font-medium',
                            children: 'Next stop!',
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.length > 0 &&
                    (0, d.jsxs)('div', {
                      className: 'grid grid-cols-1 gap-12 md:grid-cols-2',
                      children: [
                        (0, d.jsxs)('div', {
                          children: [
                            (0, d.jsxs)('h2', {
                              className:
                                'mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100',
                              children: [
                                'World Nations (',
                                new Set(f.flatMap((a) => a.visited?.world || [])).size,
                                '/',
                                a.length,
                                ')',
                              ],
                            }),
                            (0, d.jsx)('ul', {
                              className: 'space-y-4',
                              children: a.map((a) => {
                                let b = i(a.code, 'world'),
                                  c = j(a.code, 'world'),
                                  e = !!b,
                                  f = !!c && !e
                                return (0, d.jsxs)(
                                  'li',
                                  {
                                    className: 'flex flex-wrap items-center gap-2',
                                    children: [
                                      (0, d.jsxs)('span', {
                                        className: 'text-lg',
                                        children: [
                                          ((a) => {
                                            if (!a || 'string' != typeof a || 2 !== a.length)
                                              return ''
                                            let b = a
                                              .toUpperCase()
                                              .split('')
                                              .map((a) => 127397 + a.charCodeAt(0))
                                            return String.fromCodePoint(...b)
                                          })(a.code),
                                          ' ',
                                          a.name,
                                        ],
                                      }),
                                      e &&
                                        (0, d.jsx)('span', {
                                          className: `animate-jumpy rounded px-2 py-0.5 text-[10px] font-bold text-white bg-${
                                            b?.color || 'indigo-500'
                                          }`,
                                          children: 'Visited',
                                        }),
                                      f &&
                                        (0, d.jsx)('span', {
                                          className: `animate-jumpy rounded border border-dashed px-2 py-0.5 text-[10px] font-bold border-${
                                            c?.color || 'indigo-500'
                                          } text-${c?.color || 'indigo-500'}`,
                                          children: 'Planned',
                                        }),
                                    ],
                                  },
                                  a.code
                                )
                              }),
                            }),
                          ],
                        }),
                        (0, d.jsxs)('div', {
                          children: [
                            (0, d.jsxs)('h2', {
                              className:
                                'mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100',
                              children: [
                                'Indonesian Provinces (',
                                new Set(f.flatMap((a) => a.visited?.indonesia || [])).size,
                                '/',
                                b.length,
                                ')',
                              ],
                            }),
                            (0, d.jsx)('ul', {
                              className: 'space-y-4',
                              children: b.map((a) => {
                                let b = i(a.code, 'indonesia'),
                                  c = j(a.code, 'indonesia'),
                                  e = !!b,
                                  f = !!c && !e
                                return (0, d.jsxs)(
                                  'li',
                                  {
                                    className: 'flex flex-wrap items-center gap-2',
                                    children: [
                                      (0, d.jsx)('span', {
                                        className: 'text-lg text-gray-900 dark:text-gray-100',
                                        children: a.name,
                                      }),
                                      e &&
                                        (0, d.jsx)('span', {
                                          className: `animate-jumpy rounded px-2 py-0.5 text-[10px] font-bold text-white bg-${
                                            b?.color || 'indigo-500'
                                          }`,
                                          children: 'Visited',
                                        }),
                                      f &&
                                        (0, d.jsx)('span', {
                                          className: `animate-jumpy rounded border border-dashed px-2 py-0.5 text-[10px] font-bold border-${
                                            c?.color || 'indigo-500'
                                          } text-${c?.color || 'indigo-500'}`,
                                          children: 'Planned',
                                        }),
                                    ],
                                  },
                                  a.code
                                )
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              })
            },
            'getStaticProps',
            0,
            j,
          ]),
          c()
      } catch (a) {
        c(a)
      }
    }, !1),
  27773,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(31363),
          e = a.i(78238),
          f = a.i(63683),
          g = a.i(20935),
          h = a.i(27342),
          i = a.i(38411),
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
              page: '/wanderlist',
              pathname: '/wanderlist',
              bundlePath: '',
              filename: '',
            },
            distDir: '.next',
            relativeProjectDir: '',
            components: { App: h.default, Document: g.default },
            userland: i,
          }),
          x = (0, j.getHandler)({
            srcPage: '/wanderlist',
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

//# sourceMappingURL=%5Broot-of-the-server%5D__001sld6._.js.map
