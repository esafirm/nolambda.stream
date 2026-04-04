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
  33192,
  (a) => {
    'use strict'
    var b = a.i(8171),
      c = a.i(20163),
      d = a.i(9377),
      e = a.i(80244)
    a.s([
      'default',
      0,
      function () {
        return (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsx)(d.PageSEO, { title: `Page Not Found - ${e.default.title}` }),
            (0, b.jsxs)('div', {
              className:
                'flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6',
              children: [
                (0, b.jsx)('div', {
                  className: 'space-x-2 pb-8 pt-6 md:space-y-5',
                  children: (0, b.jsx)('h1', {
                    className:
                      'text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14',
                    children: '404',
                  }),
                }),
                (0, b.jsxs)('div', {
                  className: 'max-w-md',
                  children: [
                    (0, b.jsx)('p', {
                      className: 'mb-4 text-xl font-bold leading-normal md:text-2xl',
                      children: "Sorry we couldn't find this page.",
                    }),
                    (0, b.jsx)('p', {
                      className: 'mb-8',
                      children:
                        'But dont worry, you can find plenty of other things on our homepage.',
                    }),
                    (0, b.jsx)(c.default, {
                      href: '/',
                      children: (0, b.jsx)('button', {
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
  36999,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(31363),
          e = a.i(78238),
          f = a.i(63683),
          g = a.i(20935),
          h = a.i(27342),
          i = a.i(33192),
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
              page: '/404',
              pathname: '/404',
              bundlePath: '',
              filename: '',
            },
            distDir: '.next',
            relativeProjectDir: '',
            components: { App: h.default, Document: g.default },
            userland: i,
          }),
          x = (0, j.getHandler)({
            srcPage: '/404',
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

//# sourceMappingURL=_0j-pm0h._.js.map
