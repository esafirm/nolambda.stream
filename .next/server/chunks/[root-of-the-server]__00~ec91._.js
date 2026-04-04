module.exports = [
  70406,
  (e, t, r) => {
    t.exports = e.x('next/dist/compiled/@opentelemetry/api', () =>
      require('next/dist/compiled/@opentelemetry/api')
    )
  },
  79950,
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
        let e = process.env.KLAVIYO_API_KEY,
          a = process.env.KLAVIYO_LIST_ID
        if (
          (
            await fetch(`https://a.klaviyo.com/api/v2/list/${a}/subscribe?api_key=${e}`, {
              method: 'POST',
              headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
              body: JSON.stringify({ profiles: [{ email: r }] }),
            })
          ).status >= 400
        )
          return t.status(400).json({ error: 'There was an error subscribing to the list.' })
        return t.status(201).json({ error: '' })
      } catch (e) {
        return t.status(500).json({ error: e.message || e.toString() })
      }
    }
    e.s(['default', 0, s], 7692)
    var n = e.i(7692),
      o = e.i(74337),
      l = e.i(99938),
      p = e.i(95795)
    let u = (0, i.hoist)(n, 'default'),
      d = (0, i.hoist)(n, 'config'),
      c = new a.PagesAPIRouteModule({
        definition: {
          kind: r.RouteKind.PAGES_API,
          page: '/api/klaviyo',
          pathname: '/api/klaviyo',
          bundlePath: '',
          filename: '',
        },
        userland: n,
        distDir: '.next',
        relativeProjectDir: '',
      })
    async function v(e, r, a) {
      a.requestMeta && (0, p.setRequestMeta)(e, a.requestMeta),
        c.isDev && (0, p.addRequestMeta)(e, 'devRequestTimingInternalsEnd', process.hrtime.bigint())
      let i = '/api/klaviyo'
      i = i.replace(/\/index$/, '') || '/'
      let s = await c.prepare(e, r, { srcPage: i })
      if (!s) {
        ;(r.statusCode = 400),
          r.end('Bad Request'),
          null == a.waitUntil || a.waitUntil.call(a, Promise.resolve())
        return
      }
      let { query: n, params: u, prerenderManifest: d, routerServerContext: v } = s
      try {
        let t,
          a = e.method || 'GET',
          s = (0, o.getTracer)(),
          p = s.getActiveScopeSpan(),
          h = !!(null == v ? void 0 : v.isWrappedByNextServer),
          m = c.instrumentationOnRequestError.bind(c),
          y = async (o) =>
            c
              .render(e, r, {
                query: { ...n, ...u },
                params: u,
                allowedRevalidateHeaderKeys: [],
                multiZoneDraftMode: !1,
                trustHostHeader: !1,
                previewProps: d.preview,
                propagateError: !1,
                dev: c.isDev,
                page: '/api/klaviyo',
                internalRevalidate: null == v ? void 0 : v.revalidate,
                onError: (...t) => m(e, ...t),
              })
              .finally(() => {
                if (!o) return
                o.setAttributes({ 'http.status_code': r.statusCode, 'next.rsc': !1 })
                let e = s.getRootSpanAttributes()
                if (!e) return
                if (e.get('next.span_type') !== l.BaseServerSpan.handleRequest)
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
        h && p
          ? await y(p)
          : ((t = s.getActiveScopeSpan()),
            await s.withPropagatedContext(
              e.headers,
              () =>
                s.trace(
                  l.BaseServerSpan.handleRequest,
                  {
                    spanName: `${a} ${i}`,
                    kind: o.SpanKind.SERVER,
                    attributes: { 'http.method': a, 'http.target': e.url },
                  },
                  y
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
    e.s(['config', 0, d, 'default', 0, u, 'handler', 0, v], 79950)
  },
]

//# sourceMappingURL=%5Broot-of-the-server%5D__00~ec91._.js.map
