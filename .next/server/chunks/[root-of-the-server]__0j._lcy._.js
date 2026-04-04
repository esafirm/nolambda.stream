module.exports = [
  22734,
  (e, t, r) => {
    t.exports = e.x('fs', () => require('fs'))
  },
  70406,
  (e, t, r) => {
    t.exports = e.x('next/dist/compiled/@opentelemetry/api', () =>
      require('next/dist/compiled/@opentelemetry/api')
    )
  },
  14747,
  (e, t, r) => {
    t.exports = e.x('path', () => require('path'))
  },
  34293,
  (e) => {
    'use strict'
    var t = e.i(49756),
      r = e.i(94450),
      a = e.i(93827),
      i = e.i(9151),
      s = e.i(22734),
      n = e.i(14747)
    e.s(
      [
        'default',
        0,
        function (e, t) {
          let { slug: r } = e.query
          if (!r) return t.status(400).json({ error: 'Slug is required' })
          let a = n.default.join(process.cwd(), 'reviews', r, 'badge.html')
          if (!s.default.existsSync(a)) return t.status(404).json({ error: 'Badge not found' })
          let i = s.default.readFileSync(a, 'utf8')
          t.setHeader('Content-Type', 'text/html'),
            t.setHeader('Cache-Control', 'public, max-age=3600'),
            t.send(i)
        },
      ],
      17649
    )
    var l = e.i(17649),
      o = e.i(74337),
      u = e.i(99938),
      d = e.i(95795)
    let p = (0, i.hoist)(l, 'default'),
      c = (0, i.hoist)(l, 'config'),
      v = new a.PagesAPIRouteModule({
        definition: {
          kind: r.RouteKind.PAGES_API,
          page: '/api/reviews/[slug]/badge',
          pathname: '/api/reviews/[slug]/badge',
          bundlePath: '',
          filename: '',
        },
        userland: l,
        distDir: '.next',
        relativeProjectDir: '',
      })
    async function g(e, r, a) {
      a.requestMeta && (0, d.setRequestMeta)(e, a.requestMeta),
        v.isDev && (0, d.addRequestMeta)(e, 'devRequestTimingInternalsEnd', process.hrtime.bigint())
      let i = '/api/reviews/[slug]/badge'
      i = i.replace(/\/index$/, '') || '/'
      let s = await v.prepare(e, r, { srcPage: i })
      if (!s) {
        ;(r.statusCode = 400),
          r.end('Bad Request'),
          null == a.waitUntil || a.waitUntil.call(a, Promise.resolve())
        return
      }
      let { query: n, params: l, prerenderManifest: p, routerServerContext: c } = s
      try {
        let t,
          a = e.method || 'GET',
          s = (0, o.getTracer)(),
          d = s.getActiveScopeSpan(),
          g = !!(null == c ? void 0 : c.isWrappedByNextServer),
          f = v.instrumentationOnRequestError.bind(v),
          h = async (o) =>
            v
              .render(e, r, {
                query: { ...n, ...l },
                params: l,
                allowedRevalidateHeaderKeys: [],
                multiZoneDraftMode: !1,
                trustHostHeader: !1,
                previewProps: p.preview,
                propagateError: !1,
                dev: v.isDev,
                page: '/api/reviews/[slug]/badge',
                internalRevalidate: null == c ? void 0 : c.revalidate,
                onError: (...t) => f(e, ...t),
              })
              .finally(() => {
                if (!o) return
                o.setAttributes({ 'http.status_code': r.statusCode, 'next.rsc': !1 })
                let e = s.getRootSpanAttributes()
                if (!e) return
                if (e.get('next.span_type') !== u.BaseServerSpan.handleRequest)
                  return void console.warn(
                    `Unexpected root span type '${e.get(
                      'next.span_type'
                    )}'. Please report this Next.js issue https://github.com/vercel/next.js`
                  )
                let n = e.get('next.route')
                if (n) {
                  let e = `${a} ${n}`
                  o.setAttributes({ 'next.route': n, 'http.route': n, 'next.span_name': e }),
                    o.updateName(e),
                    t && t !== o && (t.setAttribute('http.route', n), t.updateName(e))
                } else o.updateName(`${a} ${i}`)
              })
        g && d
          ? await h(d)
          : ((t = s.getActiveScopeSpan()),
            await s.withPropagatedContext(
              e.headers,
              () =>
                s.trace(
                  u.BaseServerSpan.handleRequest,
                  {
                    spanName: `${a} ${i}`,
                    kind: o.SpanKind.SERVER,
                    attributes: { 'http.method': a, 'http.target': e.url },
                  },
                  h
                ),
              void 0,
              !g
            ))
      } catch (e) {
        if (v.isDev) throw e
        ;(0, t.sendError)(r, 500, 'Internal Server Error')
      } finally {
        null == a.waitUntil || a.waitUntil.call(a, Promise.resolve())
      }
    }
    e.s(['config', 0, c, 'default', 0, p, 'handler', 0, g], 34293)
  },
]

//# sourceMappingURL=%5Broot-of-the-server%5D__0j._lcy._.js.map
