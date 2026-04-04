module.exports = [
  22734,
  (e, t, a) => {
    t.exports = e.x('fs', () => require('fs'))
  },
  70406,
  (e, t, a) => {
    t.exports = e.x('next/dist/compiled/@opentelemetry/api', () =>
      require('next/dist/compiled/@opentelemetry/api')
    )
  },
  14747,
  (e, t, a) => {
    t.exports = e.x('path', () => require('path'))
  },
  64691,
  (e) => {
    'use strict'
    var t = e.i(49756),
      a = e.i(94450),
      r = e.i(93827),
      i = e.i(9151),
      n = e.i(22734),
      s = e.i(14747)
    e.s(
      [
        'default',
        0,
        function (e, t) {
          let { slug: a } = e.query,
            r = s.default.join(process.cwd(), 'reviews', a, 'badge.png')
          if (!n.default.existsSync(r))
            return t.status(404).json({ error: 'Badge image not found' })
          let i = n.default.readFileSync(r)
          t.setHeader('Content-Type', 'image/png'),
            t.setHeader('Content-Length', i.length),
            t.setHeader('Cache-Control', 'public, max-age=31536000'),
            t.send(i)
        },
      ],
      80868
    )
    var l = e.i(80868),
      o = e.i(74337),
      d = e.i(99938),
      u = e.i(95795)
    let p = (0, i.hoist)(l, 'default'),
      g = (0, i.hoist)(l, 'config'),
      c = new r.PagesAPIRouteModule({
        definition: {
          kind: a.RouteKind.PAGES_API,
          page: '/api/reviews/[slug]/badge-image',
          pathname: '/api/reviews/[slug]/badge-image',
          bundlePath: '',
          filename: '',
        },
        userland: l,
        distDir: '.next',
        relativeProjectDir: '',
      })
    async function v(e, a, r) {
      r.requestMeta && (0, u.setRequestMeta)(e, r.requestMeta),
        c.isDev && (0, u.addRequestMeta)(e, 'devRequestTimingInternalsEnd', process.hrtime.bigint())
      let i = '/api/reviews/[slug]/badge-image'
      i = i.replace(/\/index$/, '') || '/'
      let n = await c.prepare(e, a, { srcPage: i })
      if (!n) {
        ;(a.statusCode = 400),
          a.end('Bad Request'),
          null == r.waitUntil || r.waitUntil.call(r, Promise.resolve())
        return
      }
      let { query: s, params: l, prerenderManifest: p, routerServerContext: g } = n
      try {
        let t,
          r = e.method || 'GET',
          n = (0, o.getTracer)(),
          u = n.getActiveScopeSpan(),
          v = !!(null == g ? void 0 : g.isWrappedByNextServer),
          m = c.instrumentationOnRequestError.bind(c),
          h = async (o) =>
            c
              .render(e, a, {
                query: { ...s, ...l },
                params: l,
                allowedRevalidateHeaderKeys: [],
                multiZoneDraftMode: !1,
                trustHostHeader: !1,
                previewProps: p.preview,
                propagateError: !1,
                dev: c.isDev,
                page: '/api/reviews/[slug]/badge-image',
                internalRevalidate: null == g ? void 0 : g.revalidate,
                onError: (...t) => m(e, ...t),
              })
              .finally(() => {
                if (!o) return
                o.setAttributes({ 'http.status_code': a.statusCode, 'next.rsc': !1 })
                let e = n.getRootSpanAttributes()
                if (!e) return
                if (e.get('next.span_type') !== d.BaseServerSpan.handleRequest)
                  return void console.warn(
                    `Unexpected root span type '${e.get(
                      'next.span_type'
                    )}'. Please report this Next.js issue https://github.com/vercel/next.js`
                  )
                let s = e.get('next.route')
                if (s) {
                  let e = `${r} ${s}`
                  o.setAttributes({ 'next.route': s, 'http.route': s, 'next.span_name': e }),
                    o.updateName(e),
                    t && t !== o && (t.setAttribute('http.route', s), t.updateName(e))
                } else o.updateName(`${r} ${i}`)
              })
        v && u
          ? await h(u)
          : ((t = n.getActiveScopeSpan()),
            await n.withPropagatedContext(
              e.headers,
              () =>
                n.trace(
                  d.BaseServerSpan.handleRequest,
                  {
                    spanName: `${r} ${i}`,
                    kind: o.SpanKind.SERVER,
                    attributes: { 'http.method': r, 'http.target': e.url },
                  },
                  h
                ),
              void 0,
              !v
            ))
      } catch (e) {
        if (c.isDev) throw e
        ;(0, t.sendError)(a, 500, 'Internal Server Error')
      } finally {
        null == r.waitUntil || r.waitUntil.call(r, Promise.resolve())
      }
    }
    e.s(['config', 0, g, 'default', 0, p, 'handler', 0, v], 64691)
  },
]

//# sourceMappingURL=%5Broot-of-the-server%5D__0w7hk89._.js.map
