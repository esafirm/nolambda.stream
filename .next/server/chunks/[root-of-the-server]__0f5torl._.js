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
  39129,
  (e) => {
    'use strict'
    var t = e.i(49756),
      r = e.i(94450),
      a = e.i(93827),
      i = e.i(9151),
      n = e.i(22734),
      s = e.i(14747)
    e.s(
      [
        'default',
        0,
        function (e, t) {
          if ('GET' !== e.method) return t.status(405).json({ message: 'Method not allowed' })
          let r = s.default.join(process.cwd(), 'reviews')
          if (!n.default.existsSync(r)) return t.json([])
          let a = n.default
            .readdirSync(r)
            .filter((e) => {
              let t = s.default.join(r, e)
              return n.default.statSync(t).isDirectory()
            })
            .map((e) => {
              let t = s.default.join(r, e, 'data.json'),
                a = s.default.join(r, e, 'badge.html'),
                i = null
              return (
                n.default.existsSync(t) && (i = JSON.parse(n.default.readFileSync(t, 'utf8'))),
                { slug: e, hasBadge: n.default.existsSync(a), data: i }
              )
            })
            .filter((e) => e.hasBadge && e.data)
          t.json(a)
        },
      ],
      16423
    )
    var l = e.i(16423),
      d = e.i(74337),
      o = e.i(99938),
      u = e.i(95795)
    let p = (0, i.hoist)(l, 'default'),
      c = (0, i.hoist)(l, 'config'),
      f = new a.PagesAPIRouteModule({
        definition: {
          kind: r.RouteKind.PAGES_API,
          page: '/api/reviews/index',
          pathname: '/api/reviews',
          bundlePath: '',
          filename: '',
        },
        userland: l,
        distDir: '.next',
        relativeProjectDir: '',
      })
    async function v(e, r, a) {
      a.requestMeta && (0, u.setRequestMeta)(e, a.requestMeta),
        f.isDev && (0, u.addRequestMeta)(e, 'devRequestTimingInternalsEnd', process.hrtime.bigint())
      let i = '/api/reviews/index'
      i = i.replace(/\/index$/, '') || '/'
      let n = await f.prepare(e, r, { srcPage: i })
      if (!n) {
        ;(r.statusCode = 400),
          r.end('Bad Request'),
          null == a.waitUntil || a.waitUntil.call(a, Promise.resolve())
        return
      }
      let { query: s, params: l, prerenderManifest: p, routerServerContext: c } = n
      try {
        let t,
          a = e.method || 'GET',
          n = (0, d.getTracer)(),
          u = n.getActiveScopeSpan(),
          v = !!(null == c ? void 0 : c.isWrappedByNextServer),
          h = f.instrumentationOnRequestError.bind(f),
          x = async (d) =>
            f
              .render(e, r, {
                query: { ...s, ...l },
                params: l,
                allowedRevalidateHeaderKeys: [],
                multiZoneDraftMode: !1,
                trustHostHeader: !1,
                previewProps: p.preview,
                propagateError: !1,
                dev: f.isDev,
                page: '/api/reviews/index',
                internalRevalidate: null == c ? void 0 : c.revalidate,
                onError: (...t) => h(e, ...t),
              })
              .finally(() => {
                if (!d) return
                d.setAttributes({ 'http.status_code': r.statusCode, 'next.rsc': !1 })
                let e = n.getRootSpanAttributes()
                if (!e) return
                if (e.get('next.span_type') !== o.BaseServerSpan.handleRequest)
                  return void console.warn(
                    `Unexpected root span type '${e.get(
                      'next.span_type'
                    )}'. Please report this Next.js issue https://github.com/vercel/next.js`
                  )
                let s = e.get('next.route')
                if (s) {
                  let e = `${a} ${s}`
                  d.setAttributes({ 'next.route': s, 'http.route': s, 'next.span_name': e }),
                    d.updateName(e),
                    t && t !== d && (t.setAttribute('http.route', s), t.updateName(e))
                } else d.updateName(`${a} ${i}`)
              })
        v && u
          ? await x(u)
          : ((t = n.getActiveScopeSpan()),
            await n.withPropagatedContext(
              e.headers,
              () =>
                n.trace(
                  o.BaseServerSpan.handleRequest,
                  {
                    spanName: `${a} ${i}`,
                    kind: d.SpanKind.SERVER,
                    attributes: { 'http.method': a, 'http.target': e.url },
                  },
                  x
                ),
              void 0,
              !v
            ))
      } catch (e) {
        if (f.isDev) throw e
        ;(0, t.sendError)(r, 500, 'Internal Server Error')
      } finally {
        null == a.waitUntil || a.waitUntil.call(a, Promise.resolve())
      }
    }
    e.s(['config', 0, c, 'default', 0, p, 'handler', 0, v], 39129)
  },
]

//# sourceMappingURL=%5Broot-of-the-server%5D__0f5torl._.js.map
