;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  67104,
  (e, t, a) => {
    'use strict'
    Object.defineProperty(a, '__esModule', { value: !0 })
    var i = {
      VALID_LOADERS: function () {
        return o
      },
      imageConfigDefault: function () {
        return r
      },
    }
    for (var n in i) Object.defineProperty(a, n, { enumerable: !0, get: i[n] })
    let o = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'],
      r = {
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
  (e, t, a) => {
    'use strict'
    Object.defineProperty(a, '__esModule', { value: !0 }),
      Object.defineProperty(a, 'ImageConfigContext', {
        enumerable: !0,
        get: function () {
          return o
        },
      })
    let i = e.r(2879)._(e.r(50394)),
      n = e.r(67104),
      o = i.default.createContext(n.imageConfigDefault)
  },
  29859,
  (e) => {
    'use strict'
    var t = e.i(15497),
      a = e.i(81272),
      i = e.i(13730),
      n = e.i(89973)
    e.s([
      'default',
      0,
      function () {
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(i.PageSEO, { title: `Page Not Found - ${n.default.title}` }),
            (0, t.jsxs)('div', {
              className:
                'flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6',
              children: [
                (0, t.jsx)('div', {
                  className: 'space-x-2 pb-8 pt-6 md:space-y-5',
                  children: (0, t.jsx)('h1', {
                    className:
                      'text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14',
                    children: '404',
                  }),
                }),
                (0, t.jsxs)('div', {
                  className: 'max-w-md',
                  children: [
                    (0, t.jsx)('p', {
                      className: 'mb-4 text-xl font-bold leading-normal md:text-2xl',
                      children: "Sorry we couldn't find this page.",
                    }),
                    (0, t.jsx)('p', {
                      className: 'mb-8',
                      children:
                        'But dont worry, you can find plenty of other things on our homepage.',
                    }),
                    (0, t.jsx)(a.default, {
                      href: '/',
                      children: (0, t.jsx)('button', {
                        className:
                          'focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500',
                        children: 'Back to homepage',
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      },
    ])
  },
  57676,
  (e, t, a) => {
    let i = '/404'
    ;(window.__NEXT_P = window.__NEXT_P || []).push([i, () => e.r(29859)]),
      t.hot &&
        t.hot.dispose(function () {
          window.__NEXT_P.push([i])
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
])
