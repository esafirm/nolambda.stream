module.exports = [
  51979,
  (a, b, c) => {
    b.exports = a.x('mdx-bundler-bff6273bd765e049/client', () =>
      require('mdx-bundler-bff6273bd765e049/client')
    )
  },
  49099,
  (a, b, c) => {
    'use strict'
    function d({
      widthInt: a,
      heightInt: b,
      blurWidth: c,
      blurHeight: e,
      blurDataURL: f,
      objectFit: g,
    }) {
      let h = c ? 40 * c : a,
        i = e ? 40 * e : b,
        j = h && i ? `viewBox='0 0 ${h} ${i}'` : ''
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${j}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${
        j ? 'none' : 'contain' === g ? 'xMidYMid' : 'cover' === g ? 'xMidYMid slice' : 'none'
      }' style='filter: url(%23b);' href='${f}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(c, '__esModule', { value: !0 }),
      Object.defineProperty(c, 'getImageBlurSvg', {
        enumerable: !0,
        get: function () {
          return d
        },
      })
  },
  62718,
  (a, b, c) => {
    'use strict'
    Object.defineProperty(c, '__esModule', { value: !0 })
    var d = {
      VALID_LOADERS: function () {
        return f
      },
      imageConfigDefault: function () {
        return g
      },
    }
    for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] })
    let f = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'],
      g = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: '/_next/image',
        loader: 'default',
        loaderFile: '',
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ['image/webp'],
        maximumDiskCacheSize: void 0,
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: 'attachment',
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
        customCacheHandler: !1,
      }
  },
  94927,
  (a, b, c) => {
    'use strict'
    Object.defineProperty(c, '__esModule', { value: !0 }),
      Object.defineProperty(c, 'getImgProps', {
        enumerable: !0,
        get: function () {
          return j
        },
      }),
      a.r(71719)
    let d = a.r(87850),
      e = a.r(49099),
      f = a.r(62718),
      g = ['-moz-initial', 'fill', 'none', 'scale-down', void 0]
    function h(a) {
      return void 0 !== a.default
    }
    function i(a) {
      return void 0 === a
        ? a
        : 'number' == typeof a
        ? Number.isFinite(a)
          ? a
          : NaN
        : 'string' == typeof a && /^[0-9]+$/.test(a)
        ? parseInt(a, 10)
        : NaN
    }
    function j(
      {
        src: a,
        sizes: b,
        unoptimized: c = !1,
        priority: k = !1,
        preload: l = !1,
        loading: m,
        className: n,
        quality: o,
        width: p,
        height: q,
        fill: r = !1,
        style: s,
        overrideSrc: t,
        onLoad: u,
        onLoadingComplete: v,
        placeholder: w = 'empty',
        blurDataURL: x,
        fetchPriority: y,
        decoding: z = 'async',
        layout: A,
        objectFit: B,
        objectPosition: C,
        lazyBoundary: D,
        lazyRoot: E,
        ...F
      },
      G
    ) {
      var H
      let I,
        J,
        K,
        { imgConf: L, showAltText: M, blurComplete: N, defaultLoader: O } = G,
        P = L || f.imageConfigDefault
      if ('allSizes' in P) I = P
      else {
        let a = [...P.deviceSizes, ...P.imageSizes].sort((a, b) => a - b),
          b = P.deviceSizes.sort((a, b) => a - b),
          c = P.qualities?.sort((a, b) => a - b)
        I = { ...P, allSizes: a, deviceSizes: b, qualities: c }
      }
      if (void 0 === O)
        throw Object.defineProperty(
          Error(
            'images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'
          ),
          '__NEXT_ERROR_CODE',
          { value: 'E163', enumerable: !1, configurable: !0 }
        )
      let Q = F.loader || O
      delete F.loader, delete F.srcSet
      let R = '__next_img_default' in Q
      if (R) {
        if ('custom' === I.loader)
          throw Object.defineProperty(
            Error(`Image with src "${a}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            '__NEXT_ERROR_CODE',
            { value: 'E252', enumerable: !1, configurable: !0 }
          )
      } else {
        let a = Q
        Q = (b) => {
          let { config: c, ...d } = b
          return a(d)
        }
      }
      if (A) {
        'fill' === A && (r = !0)
        let a = {
          intrinsic: { maxWidth: '100%', height: 'auto' },
          responsive: { width: '100%', height: 'auto' },
        }[A]
        a && (s = { ...s, ...a })
        let c = { responsive: '100vw', fill: '100vw' }[A]
        c && !b && (b = c)
      }
      let S = '',
        T = i(p),
        U = i(q)
      if ((H = a) && 'object' == typeof H && (h(H) || void 0 !== H.src)) {
        let b = h(a) ? a.default : a
        if (!b.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                b
              )}`
            ),
            '__NEXT_ERROR_CODE',
            { value: 'E460', enumerable: !1, configurable: !0 }
          )
        if (!b.height || !b.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                b
              )}`
            ),
            '__NEXT_ERROR_CODE',
            { value: 'E48', enumerable: !1, configurable: !0 }
          )
        if (((J = b.blurWidth), (K = b.blurHeight), (x = x || b.blurDataURL), (S = b.src), !r))
          if (T || U) {
            if (T && !U) {
              let a = T / b.width
              U = Math.round(b.height * a)
            } else if (!T && U) {
              let a = U / b.height
              T = Math.round(b.width * a)
            }
          } else (T = b.width), (U = b.height)
      }
      let V = !k && !l && ('lazy' === m || void 0 === m)
      ;(!(a = 'string' == typeof a ? a : S) || a.startsWith('data:') || a.startsWith('blob:')) &&
        ((c = !0), (V = !1)),
        I.unoptimized && (c = !0),
        R && !I.dangerouslyAllowSVG && a.split('?', 1)[0].endsWith('.svg') && (c = !0)
      let W = i(o),
        X = Object.assign(
          r
            ? {
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: B,
                objectPosition: C,
              }
            : {},
          M ? {} : { color: 'transparent' },
          s
        ),
        Y =
          N || 'empty' === w
            ? null
            : 'blur' === w
            ? `url("data:image/svg+xml;charset=utf-8,${(0, e.getImageBlurSvg)({
                widthInt: T,
                heightInt: U,
                blurWidth: J,
                blurHeight: K,
                blurDataURL: x || '',
                objectFit: X.objectFit,
              })}")`
            : `url("${w}")`,
        Z = g.includes(X.objectFit)
          ? 'fill' === X.objectFit
            ? '100% 100%'
            : 'cover'
          : X.objectFit,
        $ = Y
          ? {
              backgroundSize: Z,
              backgroundPosition: X.objectPosition || '50% 50%',
              backgroundRepeat: 'no-repeat',
              backgroundImage: Y,
            }
          : {},
        _ = (function ({
          config: a,
          src: b,
          unoptimized: c,
          width: e,
          quality: f,
          sizes: g,
          loader: h,
        }) {
          if (c) {
            if (b.startsWith('/') && !b.startsWith('//')) {
              let a = (0, d.getDeploymentId)()
              if (a) {
                let c = b.indexOf('?')
                if (-1 !== c) {
                  let d = new URLSearchParams(b.slice(c + 1))
                  d.get('dpl') || (d.append('dpl', a), (b = b.slice(0, c) + '?' + d.toString()))
                } else b += `?dpl=${a}`
              }
            }
            return { src: b, srcSet: void 0, sizes: void 0 }
          }
          let { widths: i, kind: j } = (function ({ deviceSizes: a, allSizes: b }, c, d) {
              if (d) {
                let c = /(^|\s)(1?\d?\d)vw/g,
                  e = []
                for (let a; (a = c.exec(d)); ) e.push(parseInt(a[2]))
                if (e.length) {
                  let c = 0.01 * Math.min(...e)
                  return { widths: b.filter((b) => b >= a[0] * c), kind: 'w' }
                }
                return { widths: b, kind: 'w' }
              }
              return 'number' != typeof c
                ? { widths: a, kind: 'w' }
                : {
                    widths: [
                      ...new Set([c, 2 * c].map((a) => b.find((b) => b >= a) || b[b.length - 1])),
                    ],
                    kind: 'x',
                  }
            })(a, e, g),
            k = i.length - 1
          return {
            sizes: g || 'w' !== j ? g : '100vw',
            srcSet: i
              .map(
                (c, d) =>
                  `${h({ config: a, src: b, quality: f, width: c })} ${'w' === j ? c : d + 1}${j}`
              )
              .join(', '),
            src: h({ config: a, src: b, quality: f, width: i[k] }),
          }
        })({ config: I, src: a, unoptimized: c, width: T, quality: W, sizes: b, loader: Q }),
        aa = V ? 'lazy' : m
      return {
        props: {
          ...F,
          loading: aa,
          fetchPriority: y,
          width: T,
          height: U,
          decoding: z,
          className: n,
          style: { ...X, ...$ },
          sizes: _.sizes,
          srcSet: _.srcSet,
          src: t || _.src,
        },
        meta: { unoptimized: c, preload: l || k, placeholder: w, fill: r },
      }
    }
  },
  50508,
  (a, b, c) => {
    'use strict'
    b.exports = a.r(29424).vendored.contexts.ImageConfigContext
  },
  72066,
  (a, b, c) => {
    'use strict'
    function d(a, b) {
      let c = a || 75
      return b?.qualities?.length
        ? b.qualities.reduce((a, b) => (Math.abs(b - c) < Math.abs(a - c) ? b : a), b.qualities[0])
        : c
    }
    Object.defineProperty(c, '__esModule', { value: !0 }),
      Object.defineProperty(c, 'findClosestQuality', {
        enumerable: !0,
        get: function () {
          return d
        },
      })
  },
  55481,
  (a, b, c) => {
    'use strict'
    Object.defineProperty(c, '__esModule', { value: !0 }),
      Object.defineProperty(c, 'default', {
        enumerable: !0,
        get: function () {
          return g
        },
      })
    let d = a.r(72066),
      e = a.r(87850)
    function f({ config: a, src: b, width: c, quality: g }) {
      let h = (0, e.getDeploymentId)()
      if (b.startsWith('/') && !b.startsWith('//')) {
        let a = b.indexOf('?')
        if (-1 !== a) {
          let c = new URLSearchParams(b.slice(a + 1)),
            d = c.get('dpl')
          if (d) {
            ;(h = d), c.delete('dpl')
            let e = c.toString()
            b = b.slice(0, a) + (e ? '?' + e : '')
          }
        }
      }
      if (
        b.startsWith('/') &&
        b.includes('?') &&
        a.localPatterns?.length === 1 &&
        '**' === a.localPatterns[0].pathname &&
        '' === a.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${b}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          '__NEXT_ERROR_CODE',
          { value: 'E871', enumerable: !1, configurable: !0 }
        )
      let i = (0, d.findClosestQuality)(g, a)
      return `${a.path}?url=${encodeURIComponent(b)}&w=${c}&q=${i}${
        b.startsWith('/') && h ? `&dpl=${h}` : ''
      }`
    }
    f.__next_img_default = !0
    let g = f
  },
  99567,
  (a, b, c) => {
    'use strict'
    Object.defineProperty(c, '__esModule', { value: !0 }),
      Object.defineProperty(c, 'Image', {
        enumerable: !0,
        get: function () {
          return u
        },
      })
    let d = a.r(5218),
      e = a.r(22298),
      f = a.r(8171),
      g = e._(a.r(27669)),
      h = d._(a.r(56195)),
      i = d._(a.r(72387)),
      j = a.r(94927),
      k = a.r(62718),
      l = a.r(50508)
    a.r(71719)
    let m = a.r(96019),
      n = d._(a.r(55481)),
      o = a.r(85866),
      p = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: '/_next/image',
        loader: 'default',
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      }
    function q(a, b, c, d, e, f, g) {
      let h = a?.src
      a &&
        a['data-loaded-src'] !== h &&
        ((a['data-loaded-src'] = h),
        ('decode' in a ? a.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (a.parentElement && a.isConnected) {
              if (('empty' !== b && e(!0), c?.current)) {
                let b = new Event('load')
                Object.defineProperty(b, 'target', { writable: !1, value: a })
                let d = !1,
                  e = !1
                c.current({
                  ...b,
                  nativeEvent: b,
                  currentTarget: a,
                  target: a,
                  isDefaultPrevented: () => d,
                  isPropagationStopped: () => e,
                  persist: () => {},
                  preventDefault: () => {
                    ;(d = !0), b.preventDefault()
                  },
                  stopPropagation: () => {
                    ;(e = !0), b.stopPropagation()
                  },
                })
              }
              d?.current && d.current(a)
            }
          }))
    }
    function r(a) {
      return g.use ? { fetchPriority: a } : { fetchpriority: a }
    }
    globalThis.__NEXT_IMAGE_IMPORTED = !0
    let s = (0, g.forwardRef)(
      (
        {
          src: a,
          srcSet: b,
          sizes: c,
          height: d,
          width: e,
          decoding: h,
          className: i,
          style: j,
          fetchPriority: k,
          placeholder: l,
          loading: m,
          unoptimized: n,
          fill: p,
          onLoadRef: s,
          onLoadingCompleteRef: t,
          setBlurComplete: u,
          setShowAltText: v,
          sizesInput: w,
          onLoad: x,
          onError: y,
          ...z
        },
        A
      ) => {
        let B = (0, g.useCallback)(
            (a) => {
              a && (y && (a.src = a.src), a.complete && q(a, l, s, t, u, n, w))
            },
            [a, l, s, t, u, y, n, w]
          ),
          C = (0, o.useMergedRef)(A, B)
        return (0, f.jsx)('img', {
          ...z,
          ...r(k),
          loading: m,
          width: e,
          height: d,
          decoding: h,
          'data-nimg': p ? 'fill' : '1',
          className: i,
          style: j,
          sizes: c,
          srcSet: b,
          src: a,
          ref: C,
          onLoad: (a) => {
            q(a.currentTarget, l, s, t, u, n, w)
          },
          onError: (a) => {
            v(!0), 'empty' !== l && u(!0), y && y(a)
          },
        })
      }
    )
    function t({ isAppRouter: a, imgAttributes: b }) {
      let c = {
        as: 'image',
        imageSrcSet: b.srcSet,
        imageSizes: b.sizes,
        crossOrigin: b.crossOrigin,
        referrerPolicy: b.referrerPolicy,
        ...r(b.fetchPriority),
      }
      return a && h.default.preload
        ? (h.default.preload(b.src, c), null)
        : (0, f.jsx)(i.default, {
            children: (0, f.jsx)(
              'link',
              { rel: 'preload', href: b.srcSet ? void 0 : b.src, ...c },
              '__nimg-' + b.src + b.srcSet + b.sizes
            ),
          })
    }
    let u = (0, g.forwardRef)((a, b) => {
      let c = (0, g.useContext)(m.RouterContext),
        d = (0, g.useContext)(l.ImageConfigContext),
        e = (0, g.useMemo)(() => {
          let a = p || d || k.imageConfigDefault,
            b = [...a.deviceSizes, ...a.imageSizes].sort((a, b) => a - b),
            c = a.deviceSizes.sort((a, b) => a - b),
            e = a.qualities?.sort((a, b) => a - b)
          return {
            ...a,
            allSizes: b,
            deviceSizes: c,
            qualities: e,
            localPatterns: d?.localPatterns,
          }
        }, [d]),
        { onLoad: h, onLoadingComplete: i } = a,
        o = (0, g.useRef)(h)
      ;(0, g.useEffect)(() => {
        o.current = h
      }, [h])
      let q = (0, g.useRef)(i)
      ;(0, g.useEffect)(() => {
        q.current = i
      }, [i])
      let [r, u] = (0, g.useState)(!1),
        [v, w] = (0, g.useState)(!1),
        { props: x, meta: y } = (0, j.getImgProps)(a, {
          defaultLoader: n.default,
          imgConf: e,
          blurComplete: r,
          showAltText: v,
        })
      return (0, f.jsxs)(f.Fragment, {
        children: [
          (0, f.jsx)(s, {
            ...x,
            unoptimized: y.unoptimized,
            placeholder: y.placeholder,
            fill: y.fill,
            onLoadRef: o,
            onLoadingCompleteRef: q,
            setBlurComplete: u,
            setShowAltText: w,
            sizesInput: a.sizes,
            ref: b,
          }),
          y.preload ? (0, f.jsx)(t, { isAppRouter: !c, imgAttributes: x }) : null,
        ],
      })
    })
    ;('function' == typeof c.default || ('object' == typeof c.default && null !== c.default)) &&
      void 0 === c.default.__esModule &&
      (Object.defineProperty(c.default, '__esModule', { value: !0 }),
      Object.assign(c.default, c),
      (b.exports = c.default))
  },
  76692,
  (a, b, c) => {
    'use strict'
    Object.defineProperty(c, '__esModule', { value: !0 })
    var d = {
      default: function () {
        return k
      },
      getImageProps: function () {
        return j
      },
    }
    for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] })
    let f = a.r(5218),
      g = a.r(94927),
      h = a.r(99567),
      i = f._(a.r(55481))
    function j(a) {
      let { props: b } = (0, g.getImgProps)(a, {
        defaultLoader: i.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: '/_next/image',
          loader: 'default',
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
      })
      for (let [a, c] of Object.entries(b)) void 0 === c && delete b[a]
      return { props: b }
    }
    let k = h.Image
  },
  55132,
  (a, b, c) => {
    b.exports = a.r(76692)
  },
  62767,
  (a) => {
    'use strict'
    var b = a.i(8171)
    a.s([
      'default',
      0,
      function ({ children: a }) {
        return (0, b.jsx)('h1', {
          className:
            'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14',
          children: a,
        })
      },
    ])
  },
  26305,
  (a, b, c) => {
    'use strict'
    b.exports = a.r(29424).vendored.contexts.Loadable
  },
  16632,
  (a, b, c) => {
    'use strict'
    Object.defineProperty(c, '__esModule', { value: !0 })
    var d = {
      default: function () {
        return k
      },
      noSSR: function () {
        return j
      },
    }
    for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] })
    let f = a.r(5218),
      g = a.r(8171)
    a.r(27669)
    let h = f._(a.r(26305))
    function i(a) {
      return { default: a?.default || a }
    }
    function j(a, b) {
      delete b.webpack, delete b.modules
      let c = b.loading
      return () => (0, g.jsx)(c, { error: null, isLoading: !0, pastDelay: !1, timedOut: !1 })
    }
    function k(a, b) {
      let c = h.default,
        d = { loading: ({ error: a, isLoading: b, pastDelay: c }) => null }
      a instanceof Promise
        ? (d.loader = () => a)
        : 'function' == typeof a
        ? (d.loader = a)
        : 'object' == typeof a && (d = { ...d, ...a })
      let e = (d = { ...d, ...b }).loader
      return (d.loadableGenerated &&
        ((d = { ...d, ...d.loadableGenerated }), delete d.loadableGenerated),
      'boolean' != typeof d.ssr || d.ssr)
        ? c({ ...d, loader: () => (null != e ? e().then(i) : Promise.resolve(i(() => null))) })
        : (delete d.webpack, delete d.modules, j(c, d))
    }
    ;('function' == typeof c.default || ('object' == typeof c.default && null !== c.default)) &&
      void 0 === c.default.__esModule &&
      (Object.defineProperty(c.default, '__esModule', { value: !0 }),
      Object.assign(c.default, c),
      (b.exports = c.default))
  },
  62639,
  (a, b, c) => {
    b.exports = a.r(16632)
  },
  83116,
  (a) => {
    'use strict'
    var b = a.i(8171),
      c = a.i(27669),
      d = a.i(51979),
      e = a.i(55132)
    let f = (a) => (0, b.jsx)(e.default, { ...a })
    var g = a.i(20163),
      h = a.i(75886),
      i = a.i(62767),
      j = a.i(44e3),
      k = a.i(9377),
      l = a.i(61683),
      m = a.i(80244),
      n = a.i(62639)
    let o = (0, n.default)(() => a.A(93963), { loadableGenerated: { modules: [88317] }, ssr: !1 }),
      p = (0, n.default)(() => a.A(66981), { loadableGenerated: { modules: [86995] }, ssr: !1 }),
      q = (0, n.default)(() => a.A(7297), { loadableGenerated: { modules: [74729] }, ssr: !1 }),
      r = ({ frontMatter: a }) => {
        let c = m.default?.comment
        return c && 0 !== Object.keys(c).length
          ? (0, b.jsxs)('div', {
              id: 'comment',
              children: [
                m.default.comment && 'giscus' === m.default.comment.provider && (0, b.jsx)(p, {}),
                m.default.comment &&
                  'utterances' === m.default.comment.provider &&
                  (0, b.jsx)(o, {}),
                m.default.comment &&
                  'disqus' === m.default.comment.provider &&
                  (0, b.jsx)(q, { frontMatter: a }),
              ],
            })
          : (0, b.jsx)(b.Fragment, {})
      },
      s = () => {
        let [a, d] = (0, c.useState)(!1)
        return (
          (0, c.useEffect)(() => {
            let a = () => {
              window.scrollY > 50 ? d(!0) : d(!1)
            }
            return (
              window.addEventListener('scroll', a), () => window.removeEventListener('scroll', a)
            )
          }, []),
          (0, b.jsxs)('div', {
            className: `fixed bottom-8 right-8 hidden flex-col gap-3 ${
              a ? 'md:flex' : 'md:hidden'
            }`,
            children: [
              m.default.comment.provider &&
                (0, b.jsx)('button', {
                  'aria-label': 'Scroll To Comment',
                  type: 'button',
                  onClick: () => {
                    document.getElementById('comment').scrollIntoView()
                  },
                  className:
                    'rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600',
                  children: (0, b.jsx)('svg', {
                    className: 'h-5 w-5',
                    viewBox: '0 0 20 20',
                    fill: 'currentColor',
                    children: (0, b.jsx)('path', {
                      fillRule: 'evenodd',
                      d: 'M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z',
                      clipRule: 'evenodd',
                    }),
                  }),
                }),
              (0, b.jsx)('button', {
                'aria-label': 'Scroll To Top',
                type: 'button',
                onClick: () => {
                  window.scrollTo({ top: 0 })
                },
                className:
                  'rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600',
                children: (0, b.jsx)('svg', {
                  className: 'h-5 w-5',
                  viewBox: '0 0 20 20',
                  fill: 'currentColor',
                  children: (0, b.jsx)('path', {
                    fillRule: 'evenodd',
                    d: 'M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z',
                    clipRule: 'evenodd',
                  }),
                }),
              }),
            ],
          })
        )
      },
      t = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
      u = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    var v = a.i(41089)
    let w = {
        PostLayout: function ({
          frontMatter: a,
          authorDetails: c = [],
          next: d,
          prev: e,
          children: h,
        }) {
          let { slug: n, fileName: o, date: p, title: q, images: u, tags: v } = a
          return (0, b.jsxs)(j.default, {
            children: [
              (0, b.jsx)(k.BlogSEO, {
                url: `${m.default.siteUrl}/posts/${n}`,
                title: q,
                summary: a.summary || '',
                date: p,
                lastmod: p,
                canonicalUrl: `${m.default.siteUrl}/posts/${n}`,
                authorDetails: c,
              }),
              (0, b.jsx)(s, {}),
              (0, b.jsx)('article', {
                children: (0, b.jsxs)('div', {
                  className: 'xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700',
                  children: [
                    (0, b.jsx)('header', {
                      className: 'pt-6 xl:pb-6',
                      children: (0, b.jsxs)('div', {
                        className: 'space-y-1 text-center',
                        children: [
                          (0, b.jsx)('dl', {
                            className: 'space-y-10',
                            children: (0, b.jsxs)('div', {
                              children: [
                                (0, b.jsx)('dt', {
                                  className: 'sr-only',
                                  children: 'Published on',
                                }),
                                (0, b.jsx)('dd', {
                                  className:
                                    'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                  children: (0, b.jsx)('time', {
                                    dateTime: p,
                                    children: new Date(p).toLocaleDateString(m.default.locale, t),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, b.jsx)('div', { children: (0, b.jsx)(i.default, { children: q }) }),
                        ],
                      }),
                    }),
                    (0, b.jsxs)('div', {
                      className:
                        'divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0',
                      style: { gridTemplateRows: 'auto 1fr' },
                      children: [
                        (0, b.jsxs)('dl', {
                          className:
                            'pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700',
                          children: [
                            (0, b.jsx)('dt', { className: 'sr-only', children: 'Authors' }),
                            (0, b.jsx)('dd', {
                              children: (0, b.jsx)('ul', {
                                className:
                                  'flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8',
                                children: c.map((a) =>
                                  (0, b.jsxs)(
                                    'li',
                                    {
                                      className: 'flex items-center space-x-2',
                                      children: [
                                        a.avatar &&
                                          (0, b.jsx)(f, {
                                            src: a.avatar,
                                            width: 38,
                                            height: 38,
                                            alt: 'avatar',
                                            className: 'h-10 w-10 rounded-full',
                                          }),
                                        (0, b.jsxs)('dl', {
                                          className:
                                            'whitespace-nowrap text-sm font-medium leading-5',
                                          children: [
                                            (0, b.jsx)('dt', {
                                              className: 'sr-only',
                                              children: 'Name',
                                            }),
                                            (0, b.jsx)('dd', {
                                              className: 'text-gray-900 dark:text-gray-100',
                                              children: a.name,
                                            }),
                                            (0, b.jsx)('dt', {
                                              className: 'sr-only',
                                              children: 'Twitter',
                                            }),
                                            (0, b.jsx)('dd', {
                                              children:
                                                a.twitter &&
                                                (0, b.jsx)(g.default, {
                                                  href: a.twitter,
                                                  className:
                                                    'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                                  children: a.twitter.replace(
                                                    'https://twitter.com/',
                                                    '@'
                                                  ),
                                                }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    a.name
                                  )
                                ),
                              }),
                            }),
                          ],
                        }),
                        (0, b.jsxs)('div', {
                          className:
                            'divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0',
                          children: [
                            (0, b.jsx)('div', {
                              className: 'prose max-w-none pb-8 pt-10 dark:prose-dark',
                              children: h,
                            }),
                            (0, b.jsxs)('div', {
                              className: 'pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300',
                              children: [
                                (0, b.jsx)(g.default, {
                                  href: `https://mobile.twitter.com/search?q=${encodeURIComponent(
                                    `${m.default.siteUrl}/posts/${n}`
                                  )}`,
                                  rel: 'nofollow',
                                  children: 'Discuss on Twitter',
                                }),
                                ' • ',
                                (0, b.jsx)(g.default, {
                                  href: `${m.default.siteRepo}/blob/master/data/posts/${o}`,
                                  children: 'View on GitHub',
                                }),
                              ],
                            }),
                            (0, b.jsx)(r, { frontMatter: a }),
                          ],
                        }),
                        (0, b.jsxs)('footer', {
                          children: [
                            (0, b.jsxs)('div', {
                              className:
                                'divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y',
                              children: [
                                v &&
                                  (0, b.jsxs)('div', {
                                    className: 'py-4 xl:py-8',
                                    children: [
                                      (0, b.jsx)('h2', {
                                        className:
                                          'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                        children: 'Tags',
                                      }),
                                      (0, b.jsx)('div', {
                                        className: 'flex flex-wrap',
                                        children: v.map((a) =>
                                          (0, b.jsx)(l.default, { text: a }, a)
                                        ),
                                      }),
                                    ],
                                  }),
                                (d || e) &&
                                  (0, b.jsxs)('div', {
                                    className:
                                      'flex justify-between py-4 xl:block xl:space-y-8 xl:py-8',
                                    children: [
                                      e &&
                                        (0, b.jsxs)('div', {
                                          children: [
                                            (0, b.jsx)('h2', {
                                              className:
                                                'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                              children: 'Previous Article',
                                            }),
                                            (0, b.jsx)('div', {
                                              className:
                                                'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                              children: (0, b.jsx)(g.default, {
                                                href: `/posts/${e.slug}`,
                                                children: e.title,
                                              }),
                                            }),
                                          ],
                                        }),
                                      d &&
                                        (0, b.jsxs)('div', {
                                          children: [
                                            (0, b.jsx)('h2', {
                                              className:
                                                'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                              children: 'Next Article',
                                            }),
                                            (0, b.jsx)('div', {
                                              className:
                                                'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                              children: (0, b.jsx)(g.default, {
                                                href: `/posts/${d.slug}`,
                                                children: d.title,
                                              }),
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, b.jsx)('div', {
                              className: 'pt-4 xl:pt-8',
                              children: (0, b.jsx)(g.default, {
                                href: '/posts',
                                className:
                                  'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                children: '← Back to the blog',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        },
        PostSimple: function ({ frontMatter: a, authorDetails: c, next: d, prev: e, children: h }) {
          let { slug: n, fileName: o, date: p, title: q, images: t, tags: v } = a
          return (0, b.jsxs)(j.default, {
            children: [
              (0, b.jsx)(k.BlogSEO, {
                url: `${m.default.siteUrl}/posts/${n}`,
                title: q,
                summary: a.summary || '',
                date: p,
                lastmod: p,
                images: t || [],
                canonicalUrl: `${m.default.siteUrl}/posts/${n}`,
                authorDetails: c,
              }),
              (0, b.jsx)(s, {}),
              (0, b.jsx)('article', {
                children: (0, b.jsxs)('div', {
                  className: 'xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700',
                  children: [
                    (0, b.jsx)('header', {
                      className: 'pt-6 xl:pb-6',
                      children: (0, b.jsxs)('div', {
                        className: 'space-y-1 text-center',
                        children: [
                          (0, b.jsx)('dl', {
                            className: 'space-y-10',
                            children: (0, b.jsxs)('div', {
                              children: [
                                (0, b.jsx)('dt', {
                                  className: 'sr-only',
                                  children: 'Published on',
                                }),
                                (0, b.jsx)('dd', {
                                  className:
                                    'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                  children: (0, b.jsx)('time', {
                                    dateTime: p,
                                    children: new Date(p).toLocaleDateString(m.default.locale, u),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, b.jsx)('div', { children: (0, b.jsx)(i.default, { children: q }) }),
                        ],
                      }),
                    }),
                    (0, b.jsxs)('div', {
                      className:
                        'divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0',
                      style: { gridTemplateRows: 'auto 1fr' },
                      children: [
                        (0, b.jsxs)('dl', {
                          className:
                            'pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700',
                          children: [
                            (0, b.jsx)('dt', { className: 'sr-only', children: 'Authors' }),
                            (0, b.jsx)('dd', {
                              children: (0, b.jsx)('ul', {
                                className:
                                  'flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8',
                                children: c?.map((a) =>
                                  (0, b.jsxs)(
                                    'li',
                                    {
                                      className: 'flex items-center space-x-2',
                                      children: [
                                        a.avatar &&
                                          (0, b.jsx)(f, {
                                            src: a.avatar,
                                            width: 38,
                                            height: 38,
                                            alt: 'avatar',
                                            className: 'h-10 w-10 rounded-full',
                                          }),
                                        (0, b.jsxs)('dl', {
                                          className:
                                            'whitespace-nowrap text-sm font-medium leading-5',
                                          children: [
                                            (0, b.jsx)('dt', {
                                              className: 'sr-only',
                                              children: 'Name',
                                            }),
                                            (0, b.jsx)('dd', {
                                              className: 'text-gray-900 dark:text-gray-100',
                                              children: a.name,
                                            }),
                                            (0, b.jsx)('dt', {
                                              className: 'sr-only',
                                              children: 'Twitter',
                                            }),
                                            (0, b.jsx)('dd', {
                                              children:
                                                a.twitter &&
                                                (0, b.jsx)(g.default, {
                                                  href: a.twitter,
                                                  className:
                                                    'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                                  children: a.twitter.replace(
                                                    'https://twitter.com/',
                                                    '@'
                                                  ),
                                                }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    a.name
                                  )
                                ),
                              }),
                            }),
                          ],
                        }),
                        (0, b.jsxs)('div', {
                          className:
                            'divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0',
                          children: [
                            (0, b.jsx)('div', {
                              className: 'prose max-w-none pb-8 pt-10 dark:prose-dark',
                              children: h,
                            }),
                            (0, b.jsxs)('div', {
                              className: 'pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300',
                              children: [
                                (0, b.jsx)(g.default, {
                                  href: `https://mobile.twitter.com/search?q=${encodeURIComponent(
                                    `${m.default.siteUrl}/posts/${n}`
                                  )}`,
                                  rel: 'nofollow',
                                  children: 'Discuss on Twitter',
                                }),
                                ' • ',
                                (0, b.jsx)(g.default, {
                                  href: `${m.default.siteRepo}/blob/master/data/posts/${o}`,
                                  children: 'View on GitHub',
                                }),
                              ],
                            }),
                            (0, b.jsx)(r, { frontMatter: a }),
                          ],
                        }),
                        (0, b.jsxs)('footer', {
                          children: [
                            (0, b.jsxs)('div', {
                              className:
                                'divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y',
                              children: [
                                v &&
                                  (0, b.jsxs)('div', {
                                    className: 'py-4 xl:py-8',
                                    children: [
                                      (0, b.jsx)('h2', {
                                        className:
                                          'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                        children: 'Tags',
                                      }),
                                      (0, b.jsx)('div', {
                                        className: 'flex flex-wrap',
                                        children: v.map((a) =>
                                          (0, b.jsx)(l.default, { text: a }, a)
                                        ),
                                      }),
                                    ],
                                  }),
                                (d || e) &&
                                  (0, b.jsxs)('div', {
                                    className:
                                      'flex justify-between py-4 xl:block xl:space-y-8 xl:py-8',
                                    children: [
                                      e &&
                                        (0, b.jsxs)('div', {
                                          children: [
                                            (0, b.jsx)('h2', {
                                              className:
                                                'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                              children: 'Previous Article',
                                            }),
                                            (0, b.jsx)('div', {
                                              className:
                                                'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                              children: (0, b.jsx)(g.default, {
                                                href: `/posts/${e.slug}`,
                                                children: e.title,
                                              }),
                                            }),
                                          ],
                                        }),
                                      d &&
                                        (0, b.jsxs)('div', {
                                          children: [
                                            (0, b.jsx)('h2', {
                                              className:
                                                'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                              children: 'Next Article',
                                            }),
                                            (0, b.jsx)('div', {
                                              className:
                                                'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                              children: (0, b.jsx)(g.default, {
                                                href: `/posts/${d.slug}`,
                                                children: d.title,
                                              }),
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, b.jsx)('div', {
                              className: 'pt-4 xl:pt-8',
                              children: (0, b.jsx)(g.default, {
                                href: '/posts',
                                className:
                                  'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                children: '← Back to the blog',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        },
        AuthorLayout: function ({ children: a, frontMatter: c }) {
          let {
            name: d,
            avatar: e,
            occupation: g,
            company: h,
            email: i,
            twitter: j,
            linkedin: l,
            github: m,
          } = c
          return (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)(k.PageSEO, { title: `About - ${d}`, description: `About me - ${d}` }),
              (0, b.jsxs)('div', {
                className: 'divide-y divide-gray-200 dark:divide-gray-700',
                children: [
                  (0, b.jsx)('div', {
                    className: 'space-y-2 pb-8 pt-6 md:space-y-5',
                    children: (0, b.jsx)('h1', {
                      className:
                        'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                      children: 'About',
                    }),
                  }),
                  (0, b.jsxs)('div', {
                    className:
                      'items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0',
                    children: [
                      (0, b.jsxs)('div', {
                        className: 'flex flex-col items-center pt-8',
                        children: [
                          (0, b.jsx)(f, {
                            src: e,
                            alt: 'avatar',
                            width: 192,
                            height: 192,
                            className: 'h-48 w-48 rounded-full',
                          }),
                          (0, b.jsx)('h3', {
                            className: 'pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight',
                            children: d,
                          }),
                          (0, b.jsx)('div', {
                            className: 'text-gray-500 dark:text-gray-400',
                            children: g,
                          }),
                          (0, b.jsx)('div', {
                            className: 'text-gray-500 dark:text-gray-400',
                            children: h,
                          }),
                          (0, b.jsxs)('div', {
                            className: 'flex space-x-3 pt-6',
                            children: [
                              (0, b.jsx)(v.default, { kind: 'mail', href: `mailto:${i}` }),
                              (0, b.jsx)(v.default, { kind: 'github', href: m }),
                              (0, b.jsx)(v.default, { kind: 'linkedin', href: l }),
                              (0, b.jsx)(v.default, { kind: 'twitter', href: j }),
                            ],
                          }),
                        ],
                      }),
                      (0, b.jsx)('div', {
                        className: 'prose max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-2',
                        children: a,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        },
        ListLayout: a.i(92136).default,
      },
      x = {
        Image: f,
        TOCInline: ({
          toc: a,
          indentDepth: c = 3,
          fromHeading: d = 1,
          toHeading: e = 6,
          asDisclosure: f = !1,
          exclude: g = '',
        }) => {
          let h = Array.isArray(g)
              ? RegExp('^(' + g.join('|') + ')$', 'i')
              : RegExp('^(' + g + ')$', 'i'),
            i = a.filter((a) => a.depth >= d && a.depth <= e && !h.test(a.value)),
            j = (0, b.jsx)('ul', {
              children: i.map((a) =>
                (0, b.jsx)(
                  'li',
                  {
                    className: `${a.depth >= c && 'ml-6'}`,
                    children: (0, b.jsx)('a', { href: a.url, children: a.value }),
                  },
                  a.value
                )
              ),
            })
          return (0, b.jsx)(b.Fragment, {
            children: f
              ? (0, b.jsxs)('details', {
                  open: !0,
                  children: [
                    (0, b.jsx)('summary', {
                      className: 'ml-6 pb-2 pt-2 text-xl font-bold',
                      children: 'Table of Contents',
                    }),
                    (0, b.jsx)('div', { className: 'ml-6', children: j }),
                  ],
                })
              : j,
          })
        },
        a: g.default,
        pre: (a) => {
          let d = (0, c.useRef)(null),
            [e, f] = (0, c.useState)(!1),
            [g, h] = (0, c.useState)(!1)
          return (0, b.jsxs)('div', {
            ref: d,
            onMouseEnter: () => {
              f(!0)
            },
            onMouseLeave: () => {
              f(!1), h(!1)
            },
            className: 'relative',
            children: [
              e &&
                (0, b.jsx)('button', {
                  'aria-label': 'Copy code',
                  type: 'button',
                  className: `absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ${
                    g
                      ? 'border-green-400 focus:border-green-400 focus:outline-none'
                      : 'border-gray-300'
                  }`,
                  onClick: () => {
                    h(!0),
                      navigator.clipboard.writeText(d.current.textContent),
                      setTimeout(() => {
                        h(!1)
                      }, 2e3)
                  },
                  children: (0, b.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 24 24',
                    stroke: 'currentColor',
                    fill: 'none',
                    className: g ? 'text-green-400' : 'text-gray-300',
                    children: g
                      ? (0, b.jsx)(b.Fragment, {
                          children: (0, b.jsx)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
                          }),
                        })
                      : (0, b.jsx)(b.Fragment, {
                          children: (0, b.jsx)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
                          }),
                        }),
                  }),
                }),
              (0, b.jsx)('pre', { children: a.children }),
            ],
          })
        },
        BlogNewsletterForm: h.BlogNewsletterForm,
        wrapper: ({ components: a, layout: d, ...e }) => {
          let f = (0, c.useMemo)(() => (d && w[d]) || null, [d])
          return f ? (0, b.jsx)(f, { ...e }) : null
        },
      }
    a.s(
      [
        'MDXLayoutRenderer',
        0,
        ({ layout: a, mdxSource: e, ...f }) => {
          let g = (0, c.useMemo)(() => (0, d.getMDXComponent)(e), [e])
          return (0, b.jsx)(g, { layout: a, components: x, ...f })
        },
      ],
      83116
    )
  },
]

//# sourceMappingURL=%5Broot-of-the-server%5D__12rm8uy._.js.map
