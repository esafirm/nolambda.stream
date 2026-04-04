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
  99784,
  (a, b, c) => {
    b.exports = a.x('mdx-bundler-bff6273bd765e049', () => require('mdx-bundler-bff6273bd765e049'))
  },
  61789,
  (a, b, c) => {
    b.exports = a.x('gray-matter-7a5a01feddb85c93', () => require('gray-matter-7a5a01feddb85c93'))
  },
  48734,
  (a, b, c) => {
    b.exports = a.x('reading-time-d0e6ea9ddf793bd4', () => require('reading-time-d0e6ea9ddf793bd4'))
  },
  48243,
  (a) =>
    a.a(async (b, c) => {
      try {
        let b = await a.y('unist-util-visit-e0dae7d9dc5a97de')
        a.n(b), c()
      } catch (a) {
        c(a)
      }
    }, !0),
  34736,
  (a) => {
    'use strict'
    var b = a.i(22734),
      c = a.i(14747)
    let d =
        (...a) =>
        (b) =>
          a.reduce((a, b) => b(a), b),
      e = (a) => a.reduce((a, b) => [...a, ...(Array.isArray(b) ? b : [b])], []),
      f = (a) => (b.default.statSync(a).isFile() ? a : g(a)),
      g = (a) => {
        let g
        return d(
          b.default.readdirSync,
          ((g = d((b) => c.default.join(a, b), f)), (a) => a.map(g)),
          e
        )(a)
      }
    a.s(['default', 0, g])
  },
  84198,
  (a) =>
    a.a(async (b, c) => {
      try {
        let b = await a.y('remark-gfm-2507f047933c9bcf')
        a.n(b), c()
      } catch (a) {
        c(a)
      }
    }, !0),
  12135,
  (a) =>
    a.a(async (b, c) => {
      try {
        let b = await a.y('remark-footnotes-bd2c0ca44f314739')
        a.n(b), c()
      } catch (a) {
        c(a)
      }
    }, !0),
  90617,
  (a) =>
    a.a(async (b, c) => {
      try {
        let b = await a.y('remark-math-f31e17832ce8043f')
        a.n(b), c()
      } catch (a) {
        c(a)
      }
    }, !0),
  34587,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(48243),
          e = a.i(57046),
          f = b([d, e])
        ;([d, e] = f.then ? (await f)() : f),
          a.s([
            'default',
            0,
            function () {
              return (a, b) => {
                ;(0, d.visit)(a, 'yaml', (a, c, d) => {
                  b.data.frontmatter = (0, e.load)(a.value)
                })
              }
            },
          ]),
          c()
      } catch (a) {
        c(a)
      }
    }, !1),
  93282,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(48243),
          e = b([d])
        ;([d] = e.then ? (await e)() : e),
          a.s([
            'default',
            0,
            function () {
              return (a) =>
                (0, d.visit)(a, 'code', (a, b, c) => {
                  let d = a.lang || '',
                    e = '',
                    f = ''
                  if (
                    (d.includes(':') &&
                      ((e = d.slice(0, d.search(':'))), (f = d.slice(d.search(':') + 1, d.length))),
                    !f)
                  )
                    return
                  let g = {
                    type: 'mdxJsxFlowElement',
                    name: 'div',
                    attributes: [
                      { type: 'mdxJsxAttribute', name: 'className', value: 'remark-code-title' },
                    ],
                    children: [{ type: 'text', value: f }],
                    data: { _xdmExplicitJsx: !0 },
                  }
                  c.children.splice(b, 0, g), (a.lang = e)
                })
            },
          ]),
          c()
      } catch (a) {
        c(a)
      }
    }, !1),
  21793,
  (a, b, c) => {
    b.exports = a.x('github-slugger-b95a8c2640e6eccc', () =>
      require('github-slugger-b95a8c2640e6eccc')
    )
  },
  55083,
  (a) =>
    a.a(async (b, c) => {
      try {
        let b = await a.y('mdast-util-to-string-06a0b72553f341ad')
        a.n(b), c()
      } catch (a) {
        c(a)
      }
    }, !0),
  96367,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(48243),
          e = a.i(21793),
          f = a.i(55083),
          g = b([d, f])
        ;([d, f] = g.then ? (await g)() : g),
          a.s([
            'default',
            0,
            function (a) {
              return (b) =>
                (0, d.visit)(b, 'heading', (b, c, d) => {
                  let g = (0, f.toString)(b)
                  a.exportRef.push({ value: g, url: '#' + (0, e.slug)(g), depth: b.depth })
                })
            },
          ]),
          c()
      } catch (a) {
        c(a)
      }
    }, !1),
  4341,
  (a, b, c) => {
    b.exports = a.x('image-size-fff8456be450f945', () => require('image-size-fff8456be450f945'))
  },
  55939,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(48243),
          e = a.i(4341),
          f = a.i(22734),
          g = b([d])
        ;([d] = g.then ? (await g)() : g),
          a.s([
            'default',
            0,
            function () {
              return (a) => {
                ;(0, d.visit)(
                  a,
                  (a) => 'paragraph' === a.type && a.children.some((a) => 'image' === a.type),
                  (a) => {
                    let b = a.children.find((a) => 'image' === a.type)
                    if (f.default.existsSync(`${process.cwd()}/public${b.url}`)) {
                      let c = (0, e.default)(`${process.cwd()}/public${b.url}`)
                      ;(b.type = 'mdxJsxFlowElement'),
                        (b.name = 'Image'),
                        (b.attributes = [
                          { type: 'mdxJsxAttribute', name: 'alt', value: b.alt },
                          { type: 'mdxJsxAttribute', name: 'src', value: b.url },
                          { type: 'mdxJsxAttribute', name: 'width', value: c.width },
                          { type: 'mdxJsxAttribute', name: 'height', value: c.height },
                        ]),
                        (a.type = 'div'),
                        (a.children = [b])
                    }
                  }
                )
              }
            },
          ]),
          c()
      } catch (a) {
        c(a)
      }
    }, !1),
  49489,
  (a) =>
    a.a(async (b, c) => {
      try {
        let b = await a.y('rehype-slug-eb142f64a1f72a51')
        a.n(b), c()
      } catch (a) {
        c(a)
      }
    }, !0),
  80065,
  (a) =>
    a.a(async (b, c) => {
      try {
        let b = await a.y('rehype-autolink-headings-b9c2dd75176c0954')
        a.n(b), c()
      } catch (a) {
        c(a)
      }
    }, !0),
  89427,
  (a) =>
    a.a(async (b, c) => {
      try {
        let b = await a.y('rehype-katex-b5b580de65309822')
        a.n(b), c()
      } catch (a) {
        c(a)
      }
    }, !0),
  77264,
  (a) =>
    a.a(async (b, c) => {
      try {
        let b = await a.y('rehype-citation-5d88fd8523500b64')
        a.n(b), c()
      } catch (a) {
        c(a)
      }
    }, !0),
  49499,
  (a) =>
    a.a(async (b, c) => {
      try {
        let b = await a.y('rehype-prism-plus-fa6f417568503a9d')
        a.n(b), c()
      } catch (a) {
        c(a)
      }
    }, !0),
  60260,
  (a) =>
    a.a(async (b, c) => {
      try {
        let b = await a.y('rehype-preset-minify-254f86802b80f9b5')
        a.n(b), c()
      } catch (a) {
        c(a)
      }
    }, !0),
  55163,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(99784),
          e = a.i(22734),
          f = a.i(61789),
          g = a.i(14747),
          h = a.i(48734),
          i = a.i(48243),
          j = a.i(34736),
          k = a.i(84198),
          l = a.i(12135),
          m = a.i(90617),
          n = a.i(34587),
          o = a.i(93282),
          p = a.i(96367),
          q = a.i(55939),
          r = a.i(49489),
          s = a.i(80065),
          t = a.i(89427),
          u = a.i(77264),
          v = a.i(49499),
          w = a.i(60260),
          x = b([i, k, l, m, n, o, p, q, r, s, t, u, v, w])
        ;[i, k, l, m, n, o, p, q, r, s, t, u, v, w] = x.then ? (await x)() : x
        let B = process.cwd()
        function y(a) {
          return a.replace(/\.(mdx|md)/, '')
        }
        async function z(a, b) {
          let c = g.default.join(B, 'data', a, `${b}.mdx`),
            f = g.default.join(B, 'data', a, `${b}.md`),
            i = e.default.existsSync(c)
              ? e.default.readFileSync(c, 'utf8')
              : e.default.readFileSync(f, 'utf8')
          process.env.ESBUILD_BINARY_PATH = g.default.join(
            B,
            'node_modules',
            'esbuild',
            'bin',
            'esbuild'
          )
          let j = [],
            { code: x, frontmatter: y } = await (0, d.bundleMDX)({
              source: i,
              cwd: g.default.join(B, 'components'),
              xdmOptions: (a, b) => (
                (a.remarkPlugins = [
                  ...(a.remarkPlugins ?? []),
                  n.default,
                  [p.default, { exportRef: j }],
                  k.default,
                  o.default,
                  [l.default, { inlineNotes: !0 }],
                  m.default,
                  q.default,
                ]),
                (a.rehypePlugins = [
                  ...(a.rehypePlugins ?? []),
                  r.default,
                  s.default,
                  t.default,
                  [u.default, { path: g.default.join(B, 'data') }],
                  [v.default, { ignoreMissing: !0 }],
                  w.default,
                ]),
                a
              ),
              esbuildOptions: (a) => ((a.loader = { ...a.loader, '.js': 'jsx' }), a),
            })
          return {
            mdxSource: x,
            toc: j,
            frontMatter: {
              readingTime: (0, h.default)(x),
              slug: b || null,
              fileName: e.default.existsSync(c) ? `${b}.mdx` : `${b}.md`,
              ...y,
              date: y.date ? new Date(y.date).toISOString() : null,
            },
          }
        }
        async function A(a) {
          let b = g.default.join(B, 'data', a),
            c = (0, j.default)(b),
            d = []
          return (
            c.forEach((a) => {
              let c = a.slice(b.length + 1).replace(/\\/g, '/')
              if ('.md' !== g.default.extname(c) && '.mdx' !== g.default.extname(c)) return
              let h = e.default.readFileSync(a, 'utf8'),
                { data: i } = (0, f.default)(h)
              !0 !== i.draft &&
                d.push({ ...i, slug: y(c), date: i.date ? new Date(i.date).toISOString() : null })
            }),
            d.sort((a, b) => {
              var c, d
              return (c = a.date), (d = b.date), c > d ? -1 : +(c < d)
            })
          )
        }
        a.s([
          'formatSlug',
          0,
          y,
          'getAllFilesFrontMatter',
          0,
          A,
          'getFileBySlug',
          0,
          z,
          'getFiles',
          0,
          function (a) {
            let b = g.default.join(B, 'data', a)
            return (0, j.default)(b).map((a) => a.slice(b.length + 1).replace(/\\/g, '/'))
          },
        ]),
          c()
      } catch (a) {
        c(a)
      }
    }, !1),
  6482,
  (a) => {
    'use strict'
    var b = a.i(21793)
    a.s(['default', 0, (a) => (0, b.slug)(a)])
  },
  61683,
  (a) => {
    'use strict'
    var b = a.i(8171),
      c = a.i(76881),
      d = a.i(6482)
    a.s([
      'default',
      0,
      ({ text: a }) =>
        (0, b.jsx)(c.default, {
          href: `/tags/${(0, d.default)(a)}`,
          className:
            'mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
          children: a.split(' ').join('-'),
        }),
    ])
  },
  51941,
  (a) => {
    'use strict'
    var b = a.i(80244)
    a.s([
      'default',
      0,
      (a) =>
        new Date(a).toLocaleDateString(b.default.locale, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
    ])
  },
]

//# sourceMappingURL=%5Broot-of-the-server%5D__04-gc34._.js.map
