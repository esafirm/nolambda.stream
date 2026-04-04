module.exports = [
  70406,
  (e, t, r) => {
    t.exports = e.x('next/dist/compiled/@opentelemetry/api', () =>
      require('next/dist/compiled/@opentelemetry/api')
    )
  },
  71457,
  (e) => {
    'use strict'
    var t = e.i(49756),
      r = e.i(94450),
      a = e.i(93827),
      i = e.i(9151)
    let s = async (e, t) => {
      let { email: r } = e.body
      if (!r) return t.status(400).json({ error: 'Email is required' })
      try {
        let e = process.env.REVUE_API_KEY,
          a = `${process.env.REVUE_API_URL}subscribers`
        if (
          (
            await fetch(a, {
              method: 'POST',
              headers: { Authorization: `Token ${e}`, 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: r, double_opt_in: !1 }),
            })
          ).status >= 400
        )
          return t.status(500).json({ error: 'There was an error subscribing to the list.' })
        return t.status(201).json({ error: '' })
      } catch (e) {
        return t.status(500).json({ error: e.message || e.toString() })
      }
    }
    e.s(['default', 0, s], 53343)
    var n = e.i(53343),
      o = e.i(74337),
      u = e.i(99938),
      l = e.i(95795)
    let d = (0, i.hoist)(n, 'default'),
      p = (0, i.hoist)(n, 'config'),
      c = new a.PagesAPIRouteModule({
        definition: {
          kind: r.RouteKind.PAGES_API,
          page: '/api/revue',
          pathname: '/api/revue',
          bundlePath: '',
          filename: '',
        },
        userland: n,
        distDir: '.next',
        relativeProjectDir: '',
      })
    async function v(e, r, a) {
      a.requestMeta && (0, l.setRequestMeta)(e, a.requestMeta),
        c.isDev && (0, l.addRequestMeta)(e, 'devRequestTimingInternalsEnd', process.hrtime.bigint())
      let i = '/api/revue'
      i = i.replace(/\/index$/, '') || '/'
      let s = await c.prepare(e, r, { srcPage: i })
      if (!s) {
        ;(r.statusCode = 400),
          r.end('Bad Request'),
          null == a.waitUntil || a.waitUntil.call(a, Promise.resolve())
        return
      }
      let { query: n, params: d, prerenderManifest: p, routerServerContext: v } = s
      try {
        let t,
          a = e.method || 'GET',
          s = (0, o.getTracer)(),
          l = s.getActiveScopeSpan(),
          h = !!(null == v ? void 0 : v.isWrappedByNextServer),
          m = c.instrumentationOnRequestError.bind(c),
          g = async (o) =>
            c
              .render(e, r, {
                query: { ...n, ...d },
                params: d,
                allowedRevalidateHeaderKeys: [],
                multiZoneDraftMode: !1,
                trustHostHeader: !1,
                previewProps: p.preview,
                propagateError: !1,
                dev: c.isDev,
                page: '/api/revue',
                internalRevalidate: null == v ? void 0 : v.revalidate,
                onError: (...t) => m(e, ...t),
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
        h && l
          ? await g(l)
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
                  g
                ),
              void 0,
              !h
            ))
      } catch (e) {
        if (c.isDev) throw e
        ;(0, t.sendError)(r, 500, 'Internal Server Error')
      } finally {
        null == a.waitUntil || a.waitUntil.call(a, Promise.resolve())
      }
    }
    e.s(['config', 0, p, 'default', 0, d, 'handler', 0, v], 71457)
  },
]

//# sourceMappingURL=%5Broot-of-the-server%5D__10-tjyd._.js.map
