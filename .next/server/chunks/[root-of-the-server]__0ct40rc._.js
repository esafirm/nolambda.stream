module.exports = [
  70406,
  (e, t, r) => {
    t.exports = e.x('next/dist/compiled/@opentelemetry/api', () =>
      require('next/dist/compiled/@opentelemetry/api')
    )
  },
  64774,
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
        let e = process.env.EMAILOCTOPUS_API_URL,
          a = process.env.EMAILOCTOPUS_API_KEY,
          i = process.env.EMAILOCTOPUS_LIST_ID,
          s = `${e}lists/${i}/contacts`
        if (
          (
            await fetch(s, {
              body: JSON.stringify({ email_address: r, api_key: a }),
              headers: { 'Content-Type': 'application/json' },
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
    e.s(['default', 0, s], 70991)
    var n = e.i(70991),
      o = e.i(74337),
      l = e.i(99938),
      u = e.i(95795)
    let p = (0, i.hoist)(n, 'default'),
      d = (0, i.hoist)(n, 'config'),
      c = new a.PagesAPIRouteModule({
        definition: {
          kind: r.RouteKind.PAGES_API,
          page: '/api/emailoctopus',
          pathname: '/api/emailoctopus',
          bundlePath: '',
          filename: '',
        },
        userland: n,
        distDir: '.next',
        relativeProjectDir: '',
      })
    async function m(e, r, a) {
      a.requestMeta && (0, u.setRequestMeta)(e, a.requestMeta),
        c.isDev && (0, u.addRequestMeta)(e, 'devRequestTimingInternalsEnd', process.hrtime.bigint())
      let i = '/api/emailoctopus'
      i = i.replace(/\/index$/, '') || '/'
      let s = await c.prepare(e, r, { srcPage: i })
      if (!s) {
        ;(r.statusCode = 400),
          r.end('Bad Request'),
          null == a.waitUntil || a.waitUntil.call(a, Promise.resolve())
        return
      }
      let { query: n, params: p, prerenderManifest: d, routerServerContext: m } = s
      try {
        let t,
          a = e.method || 'GET',
          s = (0, o.getTracer)(),
          u = s.getActiveScopeSpan(),
          v = !!(null == m ? void 0 : m.isWrappedByNextServer),
          h = c.instrumentationOnRequestError.bind(c),
          g = async (o) =>
            c
              .render(e, r, {
                query: { ...n, ...p },
                params: p,
                allowedRevalidateHeaderKeys: [],
                multiZoneDraftMode: !1,
                trustHostHeader: !1,
                previewProps: d.preview,
                propagateError: !1,
                dev: c.isDev,
                page: '/api/emailoctopus',
                internalRevalidate: null == m ? void 0 : m.revalidate,
                onError: (...t) => h(e, ...t),
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
        v && u
          ? await g(u)
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
    e.s(['config', 0, d, 'default', 0, p, 'handler', 0, m], 64774)
  },
]

//# sourceMappingURL=%5Broot-of-the-server%5D__0ct40rc._.js.map
