module.exports = [
  9377,
  (a) => {
    'use strict'
    var b = a.i(8171),
      c = a.i(22099),
      d = a.i(87093),
      e = a.i(80244)
    let f = ({ title: a, description: f, ogType: g, ogImage: h, twImage: i, canonicalUrl: j }) => {
      let k = (0, d.useRouter)()
      return (0, b.jsxs)(c.default, {
        children: [
          (0, b.jsx)('title', { children: a }),
          (0, b.jsx)('meta', { name: 'robots', content: 'follow, index' }),
          (0, b.jsx)('meta', { name: 'description', content: f }),
          (0, b.jsx)('meta', { property: 'og:url', content: `${e.default.siteUrl}${k.asPath}` }),
          (0, b.jsx)('meta', { property: 'og:type', content: g }),
          (0, b.jsx)('meta', { property: 'og:site_name', content: e.default.title }),
          (0, b.jsx)('meta', { property: 'og:description', content: f }),
          (0, b.jsx)('meta', { property: 'og:title', content: a }),
          Array.isArray(h)
            ? h.map(({ url: a }) => (0, b.jsx)('meta', { property: 'og:image', content: a }, a))
            : (0, b.jsx)('meta', { property: 'og:image', content: h }, h),
          (0, b.jsx)('meta', { name: 'twitter:card', content: 'summary_large_image' }),
          (0, b.jsx)('meta', { name: 'twitter:site', content: e.default.twitter }),
          (0, b.jsx)('meta', { name: 'twitter:title', content: a }),
          (0, b.jsx)('meta', { name: 'twitter:description', content: f }),
          (0, b.jsx)('meta', { name: 'twitter:image', content: i }),
          (0, b.jsx)('link', { rel: 'canonical', href: j || `${e.default.siteUrl}${k.asPath}` }),
        ],
      })
    }
    a.s([
      'BlogSEO',
      0,
      ({
        authorDetails: a,
        title: g,
        summary: h,
        date: i,
        lastmod: j,
        url: k,
        images: l = [],
        canonicalUrl: m,
      }) => {
        ;(0, d.useRouter)()
        let n = new Date(i).toISOString(),
          o = new Date(j || i).toISOString(),
          p = (0 === l.length ? [e.default.socialBanner] : 'string' == typeof l ? [l] : l).map(
            (a) => ({ '@type': 'ImageObject', url: a.includes('http') ? a : e.default.siteUrl + a })
          ),
          q = {
            '@context': 'https://schema.org',
            '@type': 'Article',
            mainEntityOfPage: { '@type': 'WebPage', '@id': k },
            headline: g,
            image: p,
            datePublished: n,
            dateModified: o,
            author: a
              ? a.map((a) => ({ '@type': 'Person', name: a.name }))
              : { '@type': 'Person', name: e.default.author },
            publisher: {
              '@type': 'Organization',
              name: e.default.author,
              logo: { '@type': 'ImageObject', url: `${e.default.siteUrl}${e.default.siteLogo}` },
            },
            description: h,
          },
          r = p[0].url
        return (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsx)(f, {
              title: g,
              description: h,
              ogType: 'article',
              ogImage: p,
              twImage: r,
              canonicalUrl: m,
            }),
            (0, b.jsxs)(c.default, {
              children: [
                i && (0, b.jsx)('meta', { property: 'article:published_time', content: n }),
                j && (0, b.jsx)('meta', { property: 'article:modified_time', content: o }),
                (0, b.jsx)('script', {
                  id: 'structured-data',
                  type: 'application/ld+json',
                  dangerouslySetInnerHTML: { __html: JSON.stringify(q, null, 2) },
                }),
              ],
            }),
          ],
        })
      },
      'PageSEO',
      0,
      ({ title: a, description: c, ogImage: d }) => {
        let g = d
            ? d.includes('http')
              ? d
              : e.default.siteUrl + d
            : e.default.siteUrl + e.default.socialBanner,
          h = d
            ? d.includes('http')
              ? d
              : e.default.siteUrl + d
            : e.default.siteUrl + e.default.socialBanner
        return (0, b.jsx)(f, {
          title: a,
          description: c,
          ogType: 'website',
          ogImage: g,
          twImage: h,
        })
      },
      'TagSEO',
      0,
      ({ title: a, description: g }) => {
        let h = e.default.siteUrl + e.default.socialBanner,
          i = e.default.siteUrl + e.default.socialBanner,
          j = (0, d.useRouter)()
        return (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsx)(f, { title: a, description: g, ogType: 'website', ogImage: h, twImage: i }),
            (0, b.jsx)(c.default, {
              children: (0, b.jsx)('link', {
                rel: 'alternate',
                type: 'application/rss+xml',
                title: `${g} - RSS feed`,
                href: `${e.default.siteUrl}${j.asPath}/feed.xml`,
              }),
            }),
          ],
        })
      },
    ])
  },
  29525,
  (a) => {
    'use strict'
    var b = a.i(8171),
      c = a.i(27669),
      d = a.i(9377)
    a.s([
      'default',
      0,
      function () {
        let [a, e] = (0, c.useState)([]),
          [f, g] = (0, c.useState)(!0),
          [h, i] = (0, c.useState)('')
        ;(0, c.useState)(() => {
          fetch('/api/reviews')
            .then((a) => a.json())
            .then((a) => {
              e(a), g(!1)
            })
            .catch(() => g(!1))
        })
        let j = (0, c.useMemo)(() => {
          if (!h) return a
          let b = h.toLowerCase()
          return a.filter(
            (a) =>
              a.data.name.toLowerCase().includes(b) ||
              a.data.location.toLowerCase().includes(b) ||
              a.data.wfcSuitability.toLowerCase().includes(b)
          )
        }, [a, h])
        return (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsx)(d.PageSEO, {
              title: 'WFC Reviews',
              description: 'Work From Cafe reviews and badges',
            }),
            (0, b.jsxs)('div', {
              className: 'divide-y divide-gray-200 dark:divide-gray-700',
              children: [
                (0, b.jsxs)('div', {
                  className: 'space-y-2 pb-8 pt-6 md:space-y-5',
                  children: [
                    (0, b.jsx)('h1', {
                      className:
                        'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                      children: 'Work From Cafe Reviews',
                    }),
                    (0, b.jsx)('p', {
                      className: 'text-lg leading-7 text-gray-500 dark:text-gray-400',
                      children:
                        'Reviews of cafes and spots suitable for remote work, with detailed metrics and badges.',
                    }),
                  ],
                }),
                !f &&
                  a.length > 0 &&
                  (0, b.jsx)('div', {
                    className: 'py-4',
                    children: (0, b.jsx)('input', {
                      type: 'text',
                      placeholder: 'Search by name, location, or suitability...',
                      value: h,
                      onChange: (a) => i(a.target.value),
                      className:
                        'w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100',
                    }),
                  }),
                f
                  ? (0, b.jsx)('div', {
                      className: 'py-12',
                      children: (0, b.jsx)('p', {
                        className: 'text-gray-500 dark:text-gray-400',
                        children: 'Loading reviews...',
                      }),
                    })
                  : a.length
                  ? 0 === j.length
                    ? (0, b.jsx)('div', {
                        className: 'py-12',
                        children: (0, b.jsx)('p', {
                          className: 'text-gray-500 dark:text-gray-400',
                          children: 'No reviews match your search.',
                        }),
                      })
                    : (0, b.jsx)('div', {
                        className: 'grid gap-3 py-8 md:grid-cols-2 lg:grid-cols-3',
                        children: j.map((a) =>
                          (0, b.jsx)(
                            'a',
                            {
                              href: `/wfc-reviews/${a.slug}`,
                              className:
                                'block rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-primary-500',
                              children: (0, b.jsxs)('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  (0, b.jsxs)('div', {
                                    className: 'flex-1',
                                    children: [
                                      (0, b.jsx)('h3', {
                                        className: 'font-bold text-gray-900 dark:text-gray-100',
                                        children: a.data.name,
                                      }),
                                      (0, b.jsx)('p', {
                                        className: 'text-sm text-gray-600 dark:text-gray-400',
                                        children: a.data.location,
                                      }),
                                    ],
                                  }),
                                  (0, b.jsxs)('div', {
                                    className: 'flex items-center gap-4',
                                    children: [
                                      (0, b.jsxs)('div', {
                                        className: 'text-lg font-bold text-primary-500',
                                        children: [a.data.rating, '/5'],
                                      }),
                                      (0, b.jsx)('div', {
                                        className: `rounded px-3 py-1 text-xs font-medium ${
                                          'Excellent' === a.data.wfcSuitability
                                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                            : 'Good' === a.data.wfcSuitability
                                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                            : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                                        }`,
                                        children: a.data.wfcSuitability,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            a.slug
                          )
                        ),
                      })
                  : (0, b.jsx)('div', {
                      className: 'py-12',
                      children: (0, b.jsx)('p', {
                        className: 'text-gray-500 dark:text-gray-400',
                        children: 'No WFC reviews yet. Generate one using the wfc-review script!',
                      }),
                    }),
              ],
            }),
          ],
        })
      },
    ])
  },
  30871,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(31363),
          e = a.i(78238),
          f = a.i(63683),
          g = a.i(20935),
          h = a.i(27342),
          i = a.i(29525),
          j = a.i(224),
          k = b([h])
        ;[h] = k.then ? (await k)() : k
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
              page: '/wfc-reviews',
              pathname: '/wfc-reviews',
              bundlePath: '',
              filename: '',
            },
            distDir: '.next',
            relativeProjectDir: '',
            components: { App: h.default, Document: g.default },
            userland: i,
          }),
          x = (0, j.getHandler)({
            srcPage: '/wfc-reviews',
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

//# sourceMappingURL=_0zqah18._.js.map
