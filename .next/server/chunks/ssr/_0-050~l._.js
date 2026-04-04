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
  22559,
  (a) => {
    'use strict'
    var b = a.i(8171),
      c = a.i(27669),
      d = a.i(22734),
      e = a.i(14747),
      f = a.i(9377),
      g = a.i(20163)
    async function h() {
      let a = e.default.join(process.cwd(), 'reviews')
      return d.default.existsSync(a)
        ? {
            paths: d.default
              .readdirSync(a)
              .filter((b) => {
                let c = e.default.join(a, b)
                return (
                  d.default.statSync(c).isDirectory() &&
                  d.default.existsSync(e.default.join(c, 'badge.html'))
                )
              })
              .map((a) => ({ params: { slug: a } })),
            fallback: !1,
          }
        : { paths: [], fallback: !1 }
    }
    async function i({ params: a }) {
      let { slug: b } = a,
        c = e.default.join(process.cwd(), 'reviews', b),
        f = e.default.join(c, 'data.json'),
        g = e.default.join(c, 'badge.html'),
        h = e.default.join(c, 'badge.png'),
        j = e.default.join(c, 'notion.md'),
        k = e.default.join(c, 'review.md')
      if (!d.default.existsSync(f) || !d.default.existsSync(g)) return { notFound: !0 }
      let l = JSON.parse(d.default.readFileSync(f, 'utf8')),
        m = d.default.readFileSync(g, 'utf8'),
        n = d.default.existsSync(h)
      return {
        props: {
          slug: b,
          data: l,
          badgeHtml: m,
          badgePngExists: n,
          notionContent: d.default.existsSync(j) ? d.default.readFileSync(j, 'utf8') : null,
          reviewContent: d.default.existsSync(k) ? d.default.readFileSync(k, 'utf8') : null,
        },
        revalidate: 60,
      }
    }
    a.s([
      'default',
      0,
      function ({
        slug: a,
        data: d,
        badgeHtml: e,
        badgePngExists: h,
        notionContent: i,
        reviewContent: j,
      }) {
        let [k, l] = (0, c.useState)(!1),
          m = async () => {
            l(!0)
            try {
              let b = await fetch(`/api/reviews/${a}/badge-image`)
              if (b.ok) {
                let a = await b.blob(),
                  c = window.URL.createObjectURL(a),
                  e = document.createElement('a')
                ;(e.href = c),
                  (e.download = `${d.name.replace(/[^a-z0-9]/gi, '-')}-wfc-badge.png`),
                  document.body.appendChild(e),
                  e.click(),
                  window.URL.revokeObjectURL(c),
                  document.body.removeChild(e)
              }
            } catch (a) {
              console.error('Failed to download badge:', a),
                alert('Failed to download badge. Please try again.')
            } finally {
              l(!1)
            }
          },
          n = async () => {
            l(!0)
            try {
              let b = await fetch(`/api/reviews/${a}/badge-image`)
              if (b.ok) {
                let a = await b.blob(),
                  c = new File([a], `${d.name.replace(/[^a-z0-9]/gi, '-')}-wfc-badge.png`, {
                    type: 'image/png',
                  })
                if (navigator.share && navigator.canShare({ files: [c] }))
                  await navigator.share({
                    title: `WFC Review: ${d.name}`,
                    text: `Check out my WFC review of ${d.name} in ${d.location}`,
                    files: [c],
                  })
                else {
                  let b = window.URL.createObjectURL(a),
                    c = document.createElement('a')
                  ;(c.href = b),
                    (c.download = `${d.name.replace(/[^a-z0-9]/gi, '-')}-wfc-badge.png`),
                    document.body.appendChild(c),
                    c.click(),
                    window.URL.revokeObjectURL(b),
                    document.body.removeChild(c),
                    alert(
                      'Sharing not supported on this device. Badge has been downloaded instead.'
                    )
                }
              }
            } catch (a) {
              'AbortError' !== a.name &&
                (console.error('Failed to share badge:', a),
                alert('Failed to share badge. Please try again.'))
            } finally {
              l(!1)
            }
          }
        return (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsx)(f.PageSEO, {
              title: `${d.name} - WFC Review`,
              description: `Work From Cafe review for ${d.name} in ${d.location}`,
              ogImage: h ? `/api/reviews/${a}/badge-image` : null,
            }),
            (0, b.jsxs)('div', {
              className: 'divide-y divide-gray-200 dark:divide-gray-700',
              children: [
                (0, b.jsxs)('div', {
                  className: 'space-y-2 pb-8 pt-6 md:space-y-5',
                  children: [
                    (0, b.jsx)(g.default, {
                      href: '/wfc-reviews',
                      className:
                        'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                      children: '← Back to all WFC Reviews',
                    }),
                    (0, b.jsx)('h1', {
                      className:
                        'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                      children: d.name,
                    }),
                    (0, b.jsx)('p', {
                      className: 'text-lg leading-7 text-gray-500 dark:text-gray-400',
                      children: d.location,
                    }),
                  ],
                }),
                (0, b.jsxs)('div', {
                  className: 'grid gap-8 py-12 md:grid-cols-2',
                  children: [
                    (0, b.jsxs)('div', {
                      className: 'order-1',
                      children: [
                        (0, b.jsxs)('div', {
                          className: 'mb-4 flex items-center justify-between',
                          children: [
                            (0, b.jsx)('h2', {
                              className: 'text-2xl font-bold text-gray-900 dark:text-gray-100',
                              children: 'WFC Badge',
                            }),
                            (0, b.jsxs)('div', {
                              className: 'flex gap-2',
                              children: [
                                (0, b.jsx)('button', {
                                  onClick: m,
                                  disabled: k || !h,
                                  className:
                                    'rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-50',
                                  title: h ? '' : 'Image not available',
                                  children: k ? 'Downloading...' : 'Download',
                                }),
                                (0, b.jsx)('button', {
                                  onClick: n,
                                  disabled: k || !h,
                                  className:
                                    'rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600',
                                  title: h ? '' : 'Image not available',
                                  children: k ? 'Sharing...' : 'Share as Image',
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, b.jsx)('div', {
                          className: 'flex justify-center',
                          children: (0, b.jsx)('iframe', {
                            srcDoc: e,
                            className: 'w-full max-w-[500px] rounded-xl border-0 shadow-xl',
                            style: { height: '700px' },
                            title: 'WFC Badge',
                          }),
                        }),
                      ],
                    }),
                    (0, b.jsxs)('div', {
                      className: 'order-2 space-y-6',
                      children: [
                        (0, b.jsxs)('div', {
                          children: [
                            (0, b.jsx)('h2', {
                              className: 'mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100',
                              children: 'Review Details',
                            }),
                            (0, b.jsxs)('div', {
                              className: 'space-y-3',
                              children: [
                                (0, b.jsxs)('div', {
                                  children: [
                                    (0, b.jsx)('h3', {
                                      className:
                                        'mb-1 font-semibold text-gray-900 dark:text-gray-100',
                                      children: 'Atmosphere',
                                    }),
                                    (0, b.jsx)('p', {
                                      className: 'text-gray-600 dark:text-gray-400',
                                      children: d.atmosphere,
                                    }),
                                  ],
                                }),
                                (0, b.jsxs)('div', {
                                  children: [
                                    (0, b.jsx)('h3', {
                                      className:
                                        'mb-1 font-semibold text-gray-900 dark:text-gray-100',
                                      children: 'Service',
                                    }),
                                    (0, b.jsx)('p', {
                                      className: 'text-gray-600 dark:text-gray-400',
                                      children: d.service,
                                    }),
                                  ],
                                }),
                                (0, b.jsxs)('div', {
                                  children: [
                                    (0, b.jsx)('h3', {
                                      className:
                                        'mb-1 font-semibold text-gray-900 dark:text-gray-100',
                                      children: 'Food & Drink',
                                    }),
                                    (0, b.jsx)('p', {
                                      className: 'text-gray-600 dark:text-gray-400',
                                      children: d.food,
                                    }),
                                  ],
                                }),
                                (0, b.jsxs)('div', {
                                  children: [
                                    (0, b.jsx)('h3', {
                                      className:
                                        'mb-1 font-semibold text-gray-900 dark:text-gray-100',
                                      children: 'Final Verdict',
                                    }),
                                    (0, b.jsx)('p', {
                                      className: 'text-gray-600 dark:text-gray-400',
                                      children: d.verdict,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        d.highlights &&
                          (0, b.jsxs)('div', {
                            children: [
                              (0, b.jsx)('h2', {
                                className:
                                  'mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100',
                                children: 'Highlights',
                              }),
                              (0, b.jsx)('ul', {
                                className: 'space-y-2',
                                children: d.highlights
                                  .split(',')
                                  .map((a, c) =>
                                    (0, b.jsxs)(
                                      'li',
                                      {
                                        className: 'flex items-start gap-2',
                                        children: [
                                          (0, b.jsx)('span', {
                                            className: 'mt-1 text-primary-500',
                                            children: '•',
                                          }),
                                          (0, b.jsx)('span', {
                                            className: 'text-gray-600 dark:text-gray-400',
                                            children: a.trim(),
                                          }),
                                        ],
                                      },
                                      c
                                    )
                                  ),
                              }),
                            ],
                          }),
                        (0, b.jsxs)('div', {
                          children: [
                            (0, b.jsx)('h2', {
                              className: 'mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100',
                              children: 'Review Context',
                            }),
                            (0, b.jsxs)('div', {
                              className: 'space-y-2 text-gray-600 dark:text-gray-400',
                              children: [
                                (0, b.jsxs)('p', {
                                  children: [
                                    (0, b.jsx)('span', {
                                      className: 'font-medium',
                                      children: 'Reviewed From:',
                                    }),
                                    ' ',
                                    d.currentLocation,
                                  ],
                                }),
                                (0, b.jsxs)('p', {
                                  children: [
                                    (0, b.jsx)('span', {
                                      className: 'font-medium',
                                      children: 'Date:',
                                    }),
                                    ' ',
                                    new Date(d.date).toLocaleDateString('en-US'),
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
      'getStaticPaths',
      0,
      h,
      'getStaticProps',
      0,
      i,
    ])
  },
  15225,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(31363),
          e = a.i(78238),
          f = a.i(63683),
          g = a.i(20935),
          h = a.i(27342),
          i = a.i(22559),
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
              page: '/wfc-reviews/[slug]',
              pathname: '/wfc-reviews/[slug]',
              bundlePath: '',
              filename: '',
            },
            distDir: '.next',
            relativeProjectDir: '',
            components: { App: h.default, Document: g.default },
            userland: i,
          }),
          x = (0, j.getHandler)({
            srcPage: '/wfc-reviews/[slug]',
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

//# sourceMappingURL=_0-050~l._.js.map
