module.exports = [
  70406,
  (e, t, r) => {
    t.exports = e.x('next/dist/compiled/@opentelemetry/api', () =>
      require('next/dist/compiled/@opentelemetry/api')
    )
  },
  78472,
  (e) => {
    'use strict'
    var t = e.i(49756),
      r = e.i(94450),
      a = e.i(93827),
      n = e.i(9151)
    let i = async (e, t) => {
      let { email: r } = e.body
      if (!r) return t.status(400).json({ error: 'Email is required' })
      try {
        let e = process.env.BUTTONDOWN_API_KEY,
          a = `${process.env.BUTTONDOWN_API_URL}subscribers`
        if (
          (
            await fetch(a, {
              body: JSON.stringify({ email: r }),
              headers: { Authorization: `Token ${e}`, 'Content-Type': 'application/json' },
              method: 'POST',
            })
          ).status >= 400
        )
          return t.status(500).json({ error: 'There was an error subscribing to the list.' })
        return t.status(201).json({ error: '' })
      } catch (e) {
        return t.status(500).json({ error: e.message || e.toString() })
      }
    }
    e.s(['default', 0, i], 58026)
    var s = e.i(58026),
      o = e.i(74337),
      u = e.i(99938),
      l = e.i(95795)
    let d = (0, n.hoist)(s, 'default'),
      p = (0, n.hoist)(s, 'config'),
      c = new a.PagesAPIRouteModule({
        definition: {
          kind: r.RouteKind.PAGES_API,
          page: '/api/buttondown',
          pathname: '/api/buttondown',
          bundlePath: '',
          filename: '',
        },
        userland: s,
        distDir: '.next',
        relativeProjectDir: '',
      })
    async function h(e, r, a) {
      a.requestMeta && (0, l.setRequestMeta)(e, a.requestMeta),
        c.isDev && (0, l.addRequestMeta)(e, 'devRequestTimingInternalsEnd', process.hrtime.bigint())
      let n = '/api/buttondown'
      n = n.replace(/\/index$/, '') || '/'
      let i = await c.prepare(e, r, { srcPage: n })
      if (!i) {
        ;(r.statusCode = 400),
          r.end('Bad Request'),
          null == a.waitUntil || a.waitUntil.call(a, Promise.resolve())
        return
      }
      let { query: s, params: d, prerenderManifest: p, routerServerContext: h } = i
      try {
        let t,
          a = e.method || 'GET',
          i = (0, o.getTracer)(),
          l = i.getActiveScopeSpan(),
          v = !!(null == h ? void 0 : h.isWrappedByNextServer),
          m = c.instrumentationOnRequestError.bind(c),
          g = async (o) =>
            c
              .render(e, r, {
                query: { ...s, ...d },
                params: d,
                allowedRevalidateHeaderKeys: [],
                multiZoneDraftMode: !1,
                trustHostHeader: !1,
                previewProps: p.preview,
                propagateError: !1,
                dev: c.isDev,
                page: '/api/buttondown',
                internalRevalidate: null == h ? void 0 : h.revalidate,
                onError: (...t) => m(e, ...t),
              })
              .finally(() => {
                if (!o) return
                o.setAttributes({ 'http.status_code': r.statusCode, 'next.rsc': !1 })
                let e = i.getRootSpanAttributes()
                if (!e) return
                if (e.get('next.span_type') !== u.BaseServerSpan.handleRequest)
                  return void console.warn(
                    `Unexpected root span type '${e.get(
                      'next.span_type'
                    )}'. Please report this Next.js issue https://github.com/vercel/next.js`
                  )
                let s = e.get('next.route')
                if (s) {
                  let e = `${a} ${s}`
                  o.setAttributes({ 'next.route': s, 'http.route': s, 'next.span_name': e }),
                    o.updateName(e),
                    t && t !== o && (t.setAttribute('http.route', s), t.updateName(e))
                } else o.updateName(`${a} ${n}`)
              })
        v && l
          ? await g(l)
          : ((t = i.getActiveScopeSpan()),
            await i.withPropagatedContext(
              e.headers,
              () =>
                i.trace(
                  u.BaseServerSpan.handleRequest,
                  {
                    spanName: `${a} ${n}`,
                    kind: o.SpanKind.SERVER,
                    attributes: { 'http.method': a, 'http.target': e.url },
                  },
                  g
                ),
              void 0,
              !v
            ))
      } catch (e) {
        if (c.isDev) throw e
        ;(0, t.sendError)(r, 500, 'Internal Server Error')
      } finally {
        null == a.waitUntil || a.waitUntil.call(a, Promise.resolve())
      }
    }
    e.s(['config', 0, p, 'default', 0, d, 'handler', 0, h], 78472)
  },
]

//# sourceMappingURL=%5Broot-of-the-server%5D__09sq7z2._.js.map
