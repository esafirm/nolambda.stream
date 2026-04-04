module.exports = [
  70406,
  (e, t, r) => {
    t.exports = e.x('next/dist/compiled/@opentelemetry/api', () =>
      require('next/dist/compiled/@opentelemetry/api')
    )
  },
  41607,
  (e, t, r) => {
    t.exports = e.x('@mailchimp/mailchimp_marketing-79dd6f8713b9109b', () =>
      require('@mailchimp/mailchimp_marketing-79dd6f8713b9109b')
    )
  },
  8823,
  (e) => {
    'use strict'
    var t = e.i(49756),
      r = e.i(94450),
      i = e.i(93827),
      a = e.i(9151),
      s = e.i(41607)
    s.default.setConfig({
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: process.env.MAILCHIMP_API_SERVER,
    })
    let n = async (e, t) => {
      let { email: r } = e.body
      if (!r) return t.status(400).json({ error: 'Email is required' })
      try {
        return (
          await s.default.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
            email_address: r,
            status: 'subscribed',
          }),
          t.status(201).json({ error: '' })
        )
      } catch (e) {
        return t.status(500).json({ error: e.message || e.toString() })
      }
    }
    e.s(['default', 0, n], 46580)
    var l = e.i(46580),
      o = e.i(74337),
      d = e.i(99938),
      p = e.i(95795)
    let u = (0, a.hoist)(l, 'default'),
      m = (0, a.hoist)(l, 'config'),
      c = new i.PagesAPIRouteModule({
        definition: {
          kind: r.RouteKind.PAGES_API,
          page: '/api/mailchimp',
          pathname: '/api/mailchimp',
          bundlePath: '',
          filename: '',
        },
        userland: l,
        distDir: '.next',
        relativeProjectDir: '',
      })
    async function h(e, r, i) {
      i.requestMeta && (0, p.setRequestMeta)(e, i.requestMeta),
        c.isDev && (0, p.addRequestMeta)(e, 'devRequestTimingInternalsEnd', process.hrtime.bigint())
      let a = '/api/mailchimp'
      a = a.replace(/\/index$/, '') || '/'
      let s = await c.prepare(e, r, { srcPage: a })
      if (!s) {
        ;(r.statusCode = 400),
          r.end('Bad Request'),
          null == i.waitUntil || i.waitUntil.call(i, Promise.resolve())
        return
      }
      let { query: n, params: l, prerenderManifest: u, routerServerContext: m } = s
      try {
        let t,
          i = e.method || 'GET',
          s = (0, o.getTracer)(),
          p = s.getActiveScopeSpan(),
          h = !!(null == m ? void 0 : m.isWrappedByNextServer),
          v = c.instrumentationOnRequestError.bind(c),
          f = async (o) =>
            c
              .render(e, r, {
                query: { ...n, ...l },
                params: l,
                allowedRevalidateHeaderKeys: [],
                multiZoneDraftMode: !1,
                trustHostHeader: !1,
                previewProps: u.preview,
                propagateError: !1,
                dev: c.isDev,
                page: '/api/mailchimp',
                internalRevalidate: null == m ? void 0 : m.revalidate,
                onError: (...t) => v(e, ...t),
              })
              .finally(() => {
                if (!o) return
                o.setAttributes({ 'http.status_code': r.statusCode, 'next.rsc': !1 })
                let e = s.getRootSpanAttributes()
                if (!e) return
                if (e.get('next.span_type') !== d.BaseServerSpan.handleRequest)
                  return void console.warn(
                    `Unexpected root span type '${e.get(
                      'next.span_type'
                    )}'. Please report this Next.js issue https://github.com/vercel/next.js`
                  )
                let n = e.get('next.route')
                if (n) {
                  let e = `${i} ${n}`
                  o.setAttributes({ 'next.route': n, 'http.route': n, 'next.span_name': e }),
                    o.updateName(e),
                    t && t !== o && (t.setAttribute('http.route', n), t.updateName(e))
                } else o.updateName(`${i} ${a}`)
              })
        h && p
          ? await f(p)
          : ((t = s.getActiveScopeSpan()),
            await s.withPropagatedContext(
              e.headers,
              () =>
                s.trace(
                  d.BaseServerSpan.handleRequest,
                  {
                    spanName: `${i} ${a}`,
                    kind: o.SpanKind.SERVER,
                    attributes: { 'http.method': i, 'http.target': e.url },
                  },
                  f
                ),
              void 0,
              !h
            ))
      } catch (e) {
        if (c.isDev) throw e
        ;(0, t.sendError)(r, 500, 'Internal Server Error')
      } finally {
        null == i.waitUntil || i.waitUntil.call(i, Promise.resolve())
      }
    }
    e.s(['config', 0, m, 'default', 0, u, 'handler', 0, h], 8823)
  },
]

//# sourceMappingURL=%5Broot-of-the-server%5D__0y-j7r4._.js.map
