;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  67104,
  (e, a, t) => {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = {
      VALID_LOADERS: function () {
        return s
      },
      imageConfigDefault: function () {
        return l
      },
    }
    for (var r in i) Object.defineProperty(t, r, { enumerable: !0, get: i[r] })
    let s = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'],
      l = {
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
  (e, a, t) => {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      Object.defineProperty(t, 'ImageConfigContext', {
        enumerable: !0,
        get: function () {
          return s
        },
      })
    let i = e.r(2879)._(e.r(50394)),
      r = e.r(67104),
      s = i.default.createContext(r.imageConfigDefault)
  },
  31172,
  (e) => {
    'use strict'
    var a = e.i(15497),
      t = e.i(50394),
      i = e.i(13730),
      r = e.i(81272)
    e.s([
      '__N_SSG',
      0,
      !0,
      'default',
      0,
      function ({
        slug: e,
        data: s,
        badgeHtml: l,
        badgePngExists: d,
        notionContent: n,
        reviewContent: o,
      }) {
        let [c, m] = (0, t.useState)(!1),
          g = async () => {
            m(!0)
            try {
              let a = await fetch(`/api/reviews/${e}/badge-image`)
              if (a.ok) {
                let e = await a.blob(),
                  t = window.URL.createObjectURL(e),
                  i = document.createElement('a')
                ;(i.href = t),
                  (i.download = `${s.name.replace(/[^a-z0-9]/gi, '-')}-wfc-badge.png`),
                  document.body.appendChild(i),
                  i.click(),
                  window.URL.revokeObjectURL(t),
                  document.body.removeChild(i)
              }
            } catch (e) {
              console.error('Failed to download badge:', e),
                alert('Failed to download badge. Please try again.')
            } finally {
              m(!1)
            }
          },
          x = async () => {
            m(!0)
            try {
              let a = await fetch(`/api/reviews/${e}/badge-image`)
              if (a.ok) {
                let e = await a.blob(),
                  t = new File([e], `${s.name.replace(/[^a-z0-9]/gi, '-')}-wfc-badge.png`, {
                    type: 'image/png',
                  })
                if (navigator.share && navigator.canShare({ files: [t] }))
                  await navigator.share({
                    title: `WFC Review: ${s.name}`,
                    text: `Check out my WFC review of ${s.name} in ${s.location}`,
                    files: [t],
                  })
                else {
                  let a = window.URL.createObjectURL(e),
                    t = document.createElement('a')
                  ;(t.href = a),
                    (t.download = `${s.name.replace(/[^a-z0-9]/gi, '-')}-wfc-badge.png`),
                    document.body.appendChild(t),
                    t.click(),
                    window.URL.revokeObjectURL(a),
                    document.body.removeChild(t),
                    alert(
                      'Sharing not supported on this device. Badge has been downloaded instead.'
                    )
                }
              }
            } catch (e) {
              'AbortError' !== e.name &&
                (console.error('Failed to share badge:', e),
                alert('Failed to share badge. Please try again.'))
            } finally {
              m(!1)
            }
          }
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(i.PageSEO, {
              title: `${s.name} - WFC Review`,
              description: `Work From Cafe review for ${s.name} in ${s.location}`,
              ogImage: d ? `/api/reviews/${e}/badge-image` : null,
            }),
            (0, a.jsxs)('div', {
              className: 'divide-y divide-gray-200 dark:divide-gray-700',
              children: [
                (0, a.jsxs)('div', {
                  className: 'space-y-2 pb-8 pt-6 md:space-y-5',
                  children: [
                    (0, a.jsx)(r.default, {
                      href: '/wfc-reviews',
                      className:
                        'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                      children: '← Back to all WFC Reviews',
                    }),
                    (0, a.jsx)('h1', {
                      className:
                        'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                      children: s.name,
                    }),
                    (0, a.jsx)('p', {
                      className: 'text-lg leading-7 text-gray-500 dark:text-gray-400',
                      children: s.location,
                    }),
                  ],
                }),
                (0, a.jsxs)('div', {
                  className: 'grid gap-8 py-12 md:grid-cols-2',
                  children: [
                    (0, a.jsxs)('div', {
                      className: 'order-1',
                      children: [
                        (0, a.jsxs)('div', {
                          className: 'mb-4 flex items-center justify-between',
                          children: [
                            (0, a.jsx)('h2', {
                              className: 'text-2xl font-bold text-gray-900 dark:text-gray-100',
                              children: 'WFC Badge',
                            }),
                            (0, a.jsxs)('div', {
                              className: 'flex gap-2',
                              children: [
                                (0, a.jsx)('button', {
                                  onClick: g,
                                  disabled: c || !d,
                                  className:
                                    'rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-50',
                                  title: d ? '' : 'Image not available',
                                  children: c ? 'Downloading...' : 'Download',
                                }),
                                (0, a.jsx)('button', {
                                  onClick: x,
                                  disabled: c || !d,
                                  className:
                                    'rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600',
                                  title: d ? '' : 'Image not available',
                                  children: c ? 'Sharing...' : 'Share as Image',
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)('div', {
                          className: 'flex justify-center',
                          children: (0, a.jsx)('iframe', {
                            srcDoc: l,
                            className: 'w-full max-w-[500px] rounded-xl border-0 shadow-xl',
                            style: { height: '700px' },
                            title: 'WFC Badge',
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)('div', {
                      className: 'order-2 space-y-6',
                      children: [
                        (0, a.jsxs)('div', {
                          children: [
                            (0, a.jsx)('h2', {
                              className: 'mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100',
                              children: 'Review Details',
                            }),
                            (0, a.jsxs)('div', {
                              className: 'space-y-3',
                              children: [
                                (0, a.jsxs)('div', {
                                  children: [
                                    (0, a.jsx)('h3', {
                                      className:
                                        'mb-1 font-semibold text-gray-900 dark:text-gray-100',
                                      children: 'Atmosphere',
                                    }),
                                    (0, a.jsx)('p', {
                                      className: 'text-gray-600 dark:text-gray-400',
                                      children: s.atmosphere,
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)('div', {
                                  children: [
                                    (0, a.jsx)('h3', {
                                      className:
                                        'mb-1 font-semibold text-gray-900 dark:text-gray-100',
                                      children: 'Service',
                                    }),
                                    (0, a.jsx)('p', {
                                      className: 'text-gray-600 dark:text-gray-400',
                                      children: s.service,
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)('div', {
                                  children: [
                                    (0, a.jsx)('h3', {
                                      className:
                                        'mb-1 font-semibold text-gray-900 dark:text-gray-100',
                                      children: 'Food & Drink',
                                    }),
                                    (0, a.jsx)('p', {
                                      className: 'text-gray-600 dark:text-gray-400',
                                      children: s.food,
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)('div', {
                                  children: [
                                    (0, a.jsx)('h3', {
                                      className:
                                        'mb-1 font-semibold text-gray-900 dark:text-gray-100',
                                      children: 'Final Verdict',
                                    }),
                                    (0, a.jsx)('p', {
                                      className: 'text-gray-600 dark:text-gray-400',
                                      children: s.verdict,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        s.highlights &&
                          (0, a.jsxs)('div', {
                            children: [
                              (0, a.jsx)('h2', {
                                className:
                                  'mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100',
                                children: 'Highlights',
                              }),
                              (0, a.jsx)('ul', {
                                className: 'space-y-2',
                                children: s.highlights
                                  .split(',')
                                  .map((e, t) =>
                                    (0, a.jsxs)(
                                      'li',
                                      {
                                        className: 'flex items-start gap-2',
                                        children: [
                                          (0, a.jsx)('span', {
                                            className: 'mt-1 text-primary-500',
                                            children: '•',
                                          }),
                                          (0, a.jsx)('span', {
                                            className: 'text-gray-600 dark:text-gray-400',
                                            children: e.trim(),
                                          }),
                                        ],
                                      },
                                      t
                                    )
                                  ),
                              }),
                            ],
                          }),
                        (0, a.jsxs)('div', {
                          children: [
                            (0, a.jsx)('h2', {
                              className: 'mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100',
                              children: 'Review Context',
                            }),
                            (0, a.jsxs)('div', {
                              className: 'space-y-2 text-gray-600 dark:text-gray-400',
                              children: [
                                (0, a.jsxs)('p', {
                                  children: [
                                    (0, a.jsx)('span', {
                                      className: 'font-medium',
                                      children: 'Reviewed From:',
                                    }),
                                    ' ',
                                    s.currentLocation,
                                  ],
                                }),
                                (0, a.jsxs)('p', {
                                  children: [
                                    (0, a.jsx)('span', {
                                      className: 'font-medium',
                                      children: 'Date:',
                                    }),
                                    ' ',
                                    new Date(s.date).toLocaleDateString('en-US'),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
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
  32358,
  (e, a, t) => {
    let i = '/wfc-reviews/[slug]'
    ;(window.__NEXT_P = window.__NEXT_P || []).push([i, () => e.r(31172)]),
      a.hot &&
        a.hot.dispose(function () {
          window.__NEXT_P.push([i])
        })
  },
  64137,
  (e) => {
    e.v((a) =>
      Promise.all(['static/chunks/0~do3786bov67.js'].map((a) => e.l(a))).then(() => a(41174))
    )
  },
  81258,
  (e) => {
    e.v((a) =>
      Promise.all(['static/chunks/0.p-nd78t96-q.js'].map((a) => e.l(a))).then(() => a(30112))
    )
  },
])
