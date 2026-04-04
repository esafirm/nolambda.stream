;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  28667,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 }),
      (r.getMDXComponent = function (e, t) {
        return n(e, t).default
      }),
      (r.getMDXExport = n)
    var a = d(e.r(50394)),
      l = d(e.r(15497)),
      s = d(e.r(8303))
    function i(e) {
      if ('function' != typeof WeakMap) return null
      var t = new WeakMap(),
        r = new WeakMap()
      return (i = function (e) {
        return e ? r : t
      })(e)
    }
    function d(e, t) {
      if (!t && e && e.__esModule) return e
      if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e }
      var r = i(t)
      if (r && r.has(e)) return r.get(e)
      var a = {},
        l = Object.defineProperty && Object.getOwnPropertyDescriptor
      for (var s in e)
        if ('default' !== s && Object.prototype.hasOwnProperty.call(e, s)) {
          var d = l ? Object.getOwnPropertyDescriptor(e, s) : null
          d && (d.get || d.set) ? Object.defineProperty(a, s, d) : (a[s] = e[s])
        }
      return (a.default = e), r && r.set(e, a), a
    }
    function n(e, t) {
      let r = { React: a, ReactDOM: s, _jsx_runtime: l, ...t }
      return Function(...Object.keys(r), e)(...Object.values(r))
    }
  },
  71582,
  (e, t, r) => {
    t.exports = e.r(28667)
  },
  92448,
  (e, t, r) => {
    'use strict'
    function a({
      widthInt: e,
      heightInt: t,
      blurWidth: r,
      blurHeight: l,
      blurDataURL: s,
      objectFit: i,
    }) {
      let d = r ? 40 * r : e,
        n = l ? 40 * l : t,
        o = d && n ? `viewBox='0 0 ${d} ${n}'` : ''
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${o}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${
        o ? 'none' : 'contain' === i ? 'xMidYMid' : 'cover' === i ? 'xMidYMid slice' : 'none'
      }' style='filter: url(%23b);' href='${s}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'getImageBlurSvg', {
        enumerable: !0,
        get: function () {
          return a
        },
      })
  },
  69958,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'getImgProps', {
        enumerable: !0,
        get: function () {
          return o
        },
      }),
      e.r(67103)
    let a = e.r(16514),
      l = e.r(92448),
      s = e.r(67104),
      i = ['-moz-initial', 'fill', 'none', 'scale-down', void 0]
    function d(e) {
      return void 0 !== e.default
    }
    function n(e) {
      return void 0 === e
        ? e
        : 'number' == typeof e
        ? Number.isFinite(e)
          ? e
          : NaN
        : 'string' == typeof e && /^[0-9]+$/.test(e)
        ? parseInt(e, 10)
        : NaN
    }
    function o(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: c = !1,
        preload: u = !1,
        loading: m,
        className: f,
        quality: h,
        width: p,
        height: x,
        fill: g = !1,
        style: y,
        overrideSrc: v,
        onLoad: j,
        onLoadingComplete: b,
        placeholder: w = 'empty',
        blurDataURL: _,
        fetchPriority: N,
        decoding: k = 'async',
        layout: O,
        objectFit: P,
        objectPosition: E,
        lazyBoundary: C,
        lazyRoot: R,
        ...S
      },
      M
    ) {
      var $
      let T,
        D,
        z,
        { imgConf: A, showAltText: L, blurComplete: I, defaultLoader: B } = M,
        F = A || s.imageConfigDefault
      if ('allSizes' in F) T = F
      else {
        let e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
          t = F.deviceSizes.sort((e, t) => e - t),
          r = F.qualities?.sort((e, t) => e - t)
        T = { ...F, allSizes: e, deviceSizes: t, qualities: r }
      }
      if (void 0 === B)
        throw Object.defineProperty(
          Error(
            'images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'
          ),
          '__NEXT_ERROR_CODE',
          { value: 'E163', enumerable: !1, configurable: !0 }
        )
      let V = S.loader || B
      delete S.loader, delete S.srcSet
      let U = '__next_img_default' in V
      if (U) {
        if ('custom' === T.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            '__NEXT_ERROR_CODE',
            { value: 'E252', enumerable: !1, configurable: !0 }
          )
      } else {
        let e = V
        V = (t) => {
          let { config: r, ...a } = t
          return e(a)
        }
      }
      if (O) {
        'fill' === O && (g = !0)
        let e = {
          intrinsic: { maxWidth: '100%', height: 'auto' },
          responsive: { width: '100%', height: 'auto' },
        }[O]
        e && (y = { ...y, ...e })
        let r = { responsive: '100vw', fill: '100vw' }[O]
        r && !t && (t = r)
      }
      let W = '',
        G = n(p),
        q = n(x)
      if (($ = e) && 'object' == typeof $ && (d($) || void 0 !== $.src)) {
        let t = d(e) ? e.default : e
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                t
              )}`
            ),
            '__NEXT_ERROR_CODE',
            { value: 'E460', enumerable: !1, configurable: !0 }
          )
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                t
              )}`
            ),
            '__NEXT_ERROR_CODE',
            { value: 'E48', enumerable: !1, configurable: !0 }
          )
        if (((D = t.blurWidth), (z = t.blurHeight), (_ = _ || t.blurDataURL), (W = t.src), !g))
          if (G || q) {
            if (G && !q) {
              let e = G / t.width
              q = Math.round(t.height * e)
            } else if (!G && q) {
              let e = q / t.height
              G = Math.round(t.width * e)
            }
          } else (G = t.width), (q = t.height)
      }
      let X = !c && !u && ('lazy' === m || void 0 === m)
      ;(!(e = 'string' == typeof e ? e : W) || e.startsWith('data:') || e.startsWith('blob:')) &&
        ((r = !0), (X = !1)),
        T.unoptimized && (r = !0),
        U && !T.dangerouslyAllowSVG && e.split('?', 1)[0].endsWith('.svg') && (r = !0)
      let H = n(h),
        Y = Object.assign(
          g
            ? {
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: P,
                objectPosition: E,
              }
            : {},
          L ? {} : { color: 'transparent' },
          y
        ),
        J =
          I || 'empty' === w
            ? null
            : 'blur' === w
            ? `url("data:image/svg+xml;charset=utf-8,${(0, l.getImageBlurSvg)({
                widthInt: G,
                heightInt: q,
                blurWidth: D,
                blurHeight: z,
                blurDataURL: _ || '',
                objectFit: Y.objectFit,
              })}")`
            : `url("${w}")`,
        K = i.includes(Y.objectFit)
          ? 'fill' === Y.objectFit
            ? '100% 100%'
            : 'cover'
          : Y.objectFit,
        Q = J
          ? {
              backgroundSize: K,
              backgroundPosition: Y.objectPosition || '50% 50%',
              backgroundRepeat: 'no-repeat',
              backgroundImage: J,
            }
          : {},
        Z = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: l,
          quality: s,
          sizes: i,
          loader: d,
        }) {
          if (r) {
            if (t.startsWith('/') && !t.startsWith('//')) {
              let e = (0, a.getDeploymentId)()
              if (e) {
                let r = t.indexOf('?')
                if (-1 !== r) {
                  let a = new URLSearchParams(t.slice(r + 1))
                  a.get('dpl') || (a.append('dpl', e), (t = t.slice(0, r) + '?' + a.toString()))
                } else t += `?dpl=${e}`
              }
            }
            return { src: t, srcSet: void 0, sizes: void 0 }
          }
          let { widths: n, kind: o } = (function ({ deviceSizes: e, allSizes: t }, r, a) {
              if (a) {
                let r = /(^|\s)(1?\d?\d)vw/g,
                  l = []
                for (let e; (e = r.exec(a)); ) l.push(parseInt(e[2]))
                if (l.length) {
                  let r = 0.01 * Math.min(...l)
                  return { widths: t.filter((t) => t >= e[0] * r), kind: 'w' }
                }
                return { widths: t, kind: 'w' }
              }
              return 'number' != typeof r
                ? { widths: e, kind: 'w' }
                : {
                    widths: [
                      ...new Set([r, 2 * r].map((e) => t.find((t) => t >= e) || t[t.length - 1])),
                    ],
                    kind: 'x',
                  }
            })(e, l, i),
            c = n.length - 1
          return {
            sizes: i || 'w' !== o ? i : '100vw',
            srcSet: n
              .map(
                (r, a) =>
                  `${d({ config: e, src: t, quality: s, width: r })} ${'w' === o ? r : a + 1}${o}`
              )
              .join(', '),
            src: d({ config: e, src: t, quality: s, width: n[c] }),
          }
        })({ config: T, src: e, unoptimized: r, width: G, quality: H, sizes: t, loader: V }),
        ee = X ? 'lazy' : m
      return {
        props: {
          ...S,
          loading: ee,
          fetchPriority: N,
          width: G,
          height: q,
          decoding: k,
          className: f,
          style: { ...Y, ...Q },
          sizes: Z.sizes,
          srcSet: Z.srcSet,
          src: v || Z.src,
        },
        meta: { unoptimized: r, preload: u || c, placeholder: w, fill: g },
      }
    }
  },
  10015,
  (e, t, r) => {
    'use strict'
    function a(e, t) {
      let r = e || 75
      return t?.qualities?.length
        ? t.qualities.reduce((e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e), t.qualities[0])
        : r
    }
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'findClosestQuality', {
        enumerable: !0,
        get: function () {
          return a
        },
      })
  },
  58974,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'default', {
        enumerable: !0,
        get: function () {
          return i
        },
      })
    let a = e.r(10015),
      l = e.r(16514)
    function s({ config: e, src: t, width: r, quality: i }) {
      let d = (0, l.getDeploymentId)()
      if (t.startsWith('/') && !t.startsWith('//')) {
        let e = t.indexOf('?')
        if (-1 !== e) {
          let r = new URLSearchParams(t.slice(e + 1)),
            a = r.get('dpl')
          if (a) {
            ;(d = a), r.delete('dpl')
            let l = r.toString()
            t = t.slice(0, e) + (l ? '?' + l : '')
          }
        }
      }
      if (
        t.startsWith('/') &&
        t.includes('?') &&
        e.localPatterns?.length === 1 &&
        '**' === e.localPatterns[0].pathname &&
        '' === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          '__NEXT_ERROR_CODE',
          { value: 'E871', enumerable: !1, configurable: !0 }
        )
      let n = (0, a.findClosestQuality)(i, e)
      return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${n}${
        t.startsWith('/') && d ? `&dpl=${d}` : ''
      }`
    }
    s.__next_img_default = !0
    let i = s
  },
  74169,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'Image', {
        enumerable: !0,
        get: function () {
          return j
        },
      })
    let a = e.r(2879),
      l = e.r(87602),
      s = e.r(15497),
      i = l._(e.r(50394)),
      d = a._(e.r(8303)),
      n = a._(e.r(6641)),
      o = e.r(69958),
      c = e.r(67104),
      u = e.r(62481)
    e.r(67103)
    let m = e.r(64985),
      f = a._(e.r(58974)),
      h = e.r(59149),
      p = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: '/_next/image',
        loader: 'default',
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      }
    function x(e, t, r, a, l, s, i) {
      let d = e?.src
      e &&
        e['data-loaded-src'] !== d &&
        ((e['data-loaded-src'] = d),
        ('decode' in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (('empty' !== t && l(!0), r?.current)) {
                let t = new Event('load')
                Object.defineProperty(t, 'target', { writable: !1, value: e })
                let a = !1,
                  l = !1
                r.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => a,
                  isPropagationStopped: () => l,
                  persist: () => {},
                  preventDefault: () => {
                    ;(a = !0), t.preventDefault()
                  },
                  stopPropagation: () => {
                    ;(l = !0), t.stopPropagation()
                  },
                })
              }
              a?.current && a.current(e)
            }
          }))
    }
    function g(e) {
      return i.use ? { fetchPriority: e } : { fetchpriority: e }
    }
    'u' < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0)
    let y = (0, i.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: r,
          height: a,
          width: l,
          decoding: d,
          className: n,
          style: o,
          fetchPriority: c,
          placeholder: u,
          loading: m,
          unoptimized: f,
          fill: p,
          onLoadRef: y,
          onLoadingCompleteRef: v,
          setBlurComplete: j,
          setShowAltText: b,
          sizesInput: w,
          onLoad: _,
          onError: N,
          ...k
        },
        O
      ) => {
        let P = (0, i.useCallback)(
            (e) => {
              e && (N && (e.src = e.src), e.complete && x(e, u, y, v, j, f, w))
            },
            [e, u, y, v, j, N, f, w]
          ),
          E = (0, h.useMergedRef)(O, P)
        return (0, s.jsx)('img', {
          ...k,
          ...g(c),
          loading: m,
          width: l,
          height: a,
          decoding: d,
          'data-nimg': p ? 'fill' : '1',
          className: n,
          style: o,
          sizes: r,
          srcSet: t,
          src: e,
          ref: E,
          onLoad: (e) => {
            x(e.currentTarget, u, y, v, j, f, w)
          },
          onError: (e) => {
            b(!0), 'empty' !== u && j(!0), N && N(e)
          },
        })
      }
    )
    function v({ isAppRouter: e, imgAttributes: t }) {
      let r = {
        as: 'image',
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...g(t.fetchPriority),
      }
      return e && d.default.preload
        ? (d.default.preload(t.src, r), null)
        : (0, s.jsx)(n.default, {
            children: (0, s.jsx)(
              'link',
              { rel: 'preload', href: t.srcSet ? void 0 : t.src, ...r },
              '__nimg-' + t.src + t.srcSet + t.sizes
            ),
          })
    }
    let j = (0, i.forwardRef)((e, t) => {
      let r = (0, i.useContext)(m.RouterContext),
        a = (0, i.useContext)(u.ImageConfigContext),
        l = (0, i.useMemo)(() => {
          let e = p || a || c.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            r = e.deviceSizes.sort((e, t) => e - t),
            l = e.qualities?.sort((e, t) => e - t)
          return {
            ...e,
            allSizes: t,
            deviceSizes: r,
            qualities: l,
            localPatterns: 'u' < typeof window ? a?.localPatterns : e.localPatterns,
          }
        }, [a]),
        { onLoad: d, onLoadingComplete: n } = e,
        h = (0, i.useRef)(d)
      ;(0, i.useEffect)(() => {
        h.current = d
      }, [d])
      let x = (0, i.useRef)(n)
      ;(0, i.useEffect)(() => {
        x.current = n
      }, [n])
      let [g, j] = (0, i.useState)(!1),
        [b, w] = (0, i.useState)(!1),
        { props: _, meta: N } = (0, o.getImgProps)(e, {
          defaultLoader: f.default,
          imgConf: l,
          blurComplete: g,
          showAltText: b,
        })
      return (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(y, {
            ..._,
            unoptimized: N.unoptimized,
            placeholder: N.placeholder,
            fill: N.fill,
            onLoadRef: h,
            onLoadingCompleteRef: x,
            setBlurComplete: j,
            setShowAltText: w,
            sizesInput: e.sizes,
            ref: t,
          }),
          N.preload ? (0, s.jsx)(v, { isAppRouter: !r, imgAttributes: _ }) : null,
        ],
      })
    })
    ;('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default))
  },
  30917,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 })
    var a = {
      default: function () {
        return c
      },
      getImageProps: function () {
        return o
      },
    }
    for (var l in a) Object.defineProperty(r, l, { enumerable: !0, get: a[l] })
    let s = e.r(2879),
      i = e.r(69958),
      d = e.r(74169),
      n = s._(e.r(58974))
    function o(e) {
      let { props: t } = (0, i.getImgProps)(e, {
        defaultLoader: n.default,
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
      for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e]
      return { props: t }
    }
    let c = d.Image
  },
  91977,
  (e, t, r) => {
    t.exports = e.r(30917)
  },
  51178,
  47667,
  96055,
  (e) => {
    'use strict'
    var t = e.i(15497),
      r = e.i(91977)
    e.s(['default', 0, (e) => (0, t.jsx)(r.default, { ...e })], 51178),
      e.s(
        [
          'default',
          0,
          ({
            toc: e,
            indentDepth: r = 3,
            fromHeading: a = 1,
            toHeading: l = 6,
            asDisclosure: s = !1,
            exclude: i = '',
          }) => {
            let d = Array.isArray(i)
                ? RegExp('^(' + i.join('|') + ')$', 'i')
                : RegExp('^(' + i + ')$', 'i'),
              n = e.filter((e) => e.depth >= a && e.depth <= l && !d.test(e.value)),
              o = (0, t.jsx)('ul', {
                children: n.map((e) =>
                  (0, t.jsx)(
                    'li',
                    {
                      className: `${e.depth >= r && 'ml-6'}`,
                      children: (0, t.jsx)('a', { href: e.url, children: e.value }),
                    },
                    e.value
                  )
                ),
              })
            return (0, t.jsx)(t.Fragment, {
              children: s
                ? (0, t.jsxs)('details', {
                    open: !0,
                    children: [
                      (0, t.jsx)('summary', {
                        className: 'ml-6 pb-2 pt-2 text-xl font-bold',
                        children: 'Table of Contents',
                      }),
                      (0, t.jsx)('div', { className: 'ml-6', children: o }),
                    ],
                  })
                : o,
            })
          },
        ],
        47667
      )
    var a = e.i(50394)
    e.s(
      [
        'default',
        0,
        (e) => {
          let r = (0, a.useRef)(null),
            [l, s] = (0, a.useState)(!1),
            [i, d] = (0, a.useState)(!1)
          return (0, t.jsxs)('div', {
            ref: r,
            onMouseEnter: () => {
              s(!0)
            },
            onMouseLeave: () => {
              s(!1), d(!1)
            },
            className: 'relative',
            children: [
              l &&
                (0, t.jsx)('button', {
                  'aria-label': 'Copy code',
                  type: 'button',
                  className: `absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ${
                    i
                      ? 'border-green-400 focus:border-green-400 focus:outline-none'
                      : 'border-gray-300'
                  }`,
                  onClick: () => {
                    d(!0),
                      navigator.clipboard.writeText(r.current.textContent),
                      setTimeout(() => {
                        d(!1)
                      }, 2e3)
                  },
                  children: (0, t.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 24 24',
                    stroke: 'currentColor',
                    fill: 'none',
                    className: i ? 'text-green-400' : 'text-gray-300',
                    children: i
                      ? (0, t.jsx)(t.Fragment, {
                          children: (0, t.jsx)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
                          }),
                        })
                      : (0, t.jsx)(t.Fragment, {
                          children: (0, t.jsx)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
                          }),
                        }),
                  }),
                }),
              (0, t.jsx)('pre', { children: e.children }),
            ],
          })
        },
      ],
      96055
    )
  },
  8435,
  (e) => {
    'use strict'
    var t = e.i(15497)
    e.s([
      'default',
      0,
      function ({ children: e }) {
        return (0, t.jsx)('h1', {
          className:
            'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14',
          children: e,
        })
      },
    ])
  },
  48856,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'LoadableContext', {
        enumerable: !0,
        get: function () {
          return a
        },
      })
    let a = e.r(2879)._(e.r(50394)).default.createContext(null)
  },
  55283,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'default', {
        enumerable: !0,
        get: function () {
          return m
        },
      })
    let a = e.r(2879)._(e.r(50394)),
      l = e.r(48856),
      s = [],
      i = [],
      d = !1
    function n(e) {
      let t = e(),
        r = { loading: !0, loaded: null, error: null }
      return (
        (r.promise = t
          .then((e) => ((r.loading = !1), (r.loaded = e), e))
          .catch((e) => {
            throw ((r.loading = !1), (r.error = e), e)
          })),
        r
      )
    }
    class o {
      constructor(e, t) {
        ;(this._loadFn = e),
          (this._opts = t),
          (this._callbacks = new Set()),
          (this._delay = null),
          (this._timeout = null),
          this.retry()
      }
      promise() {
        return this._res.promise
      }
      retry() {
        this._clearTimeouts(),
          (this._res = this._loadFn(this._opts.loader)),
          (this._state = { pastDelay: !1, timedOut: !1 })
        let { _res: e, _opts: t } = this
        e.loading &&
          ('number' == typeof t.delay &&
            (0 === t.delay
              ? (this._state.pastDelay = !0)
              : (this._delay = setTimeout(() => {
                  this._update({ pastDelay: !0 })
                }, t.delay))),
          'number' == typeof t.timeout &&
            (this._timeout = setTimeout(() => {
              this._update({ timedOut: !0 })
            }, t.timeout))),
          this._res.promise
            .then(() => {
              this._update({}), this._clearTimeouts()
            })
            .catch((e) => {
              this._update({}), this._clearTimeouts()
            }),
          this._update({})
      }
      _update(e) {
        ;(this._state = {
          ...this._state,
          error: this._res.error,
          loaded: this._res.loaded,
          loading: this._res.loading,
          ...e,
        }),
          this._callbacks.forEach((e) => e())
      }
      _clearTimeouts() {
        clearTimeout(this._delay), clearTimeout(this._timeout)
      }
      getCurrentValue() {
        return this._state
      }
      subscribe(e) {
        return (
          this._callbacks.add(e),
          () => {
            this._callbacks.delete(e)
          }
        )
      }
    }
    function c(t) {
      return (function (t, r) {
        let n = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              webpack: null,
              modules: null,
            },
            r
          ),
          c = null
        function u() {
          if (!c) {
            let e = new o(t, n)
            c = {
              getCurrentValue: e.getCurrentValue.bind(e),
              subscribe: e.subscribe.bind(e),
              retry: e.retry.bind(e),
              promise: e.promise.bind(e),
            }
          }
          return c.promise()
        }
        if (('u' < typeof window && s.push(u), !d && 'u' > typeof window)) {
          let t = n.webpack && 'function' == typeof e.t.resolveWeak ? n.webpack() : n.modules
          t &&
            i.push((e) => {
              for (let r of t) if (e.includes(r)) return u()
            })
        }
        function m(e, t) {
          let r
          u(),
            (r = a.default.useContext(l.LoadableContext)) &&
              Array.isArray(n.modules) &&
              n.modules.forEach((e) => {
                r(e)
              })
          let s = a.default.useSyncExternalStore(c.subscribe, c.getCurrentValue, c.getCurrentValue)
          return (
            a.default.useImperativeHandle(t, () => ({ retry: c.retry }), []),
            a.default.useMemo(() => {
              var t
              return s.loading || s.error
                ? a.default.createElement(n.loading, {
                    isLoading: s.loading,
                    pastDelay: s.pastDelay,
                    timedOut: s.timedOut,
                    error: s.error,
                    retry: c.retry,
                  })
                : s.loaded
                ? a.default.createElement((t = s.loaded) && t.default ? t.default : t, e)
                : null
            }, [e, s])
          )
        }
        return (
          (m.preload = () => u()), (m.displayName = 'LoadableComponent'), a.default.forwardRef(m)
        )
      })(n, t)
    }
    function u(e, t) {
      let r = []
      for (; e.length; ) {
        let a = e.pop()
        r.push(a(t))
      }
      return Promise.all(r).then(() => {
        if (e.length) return u(e, t)
      })
    }
    ;(c.preloadAll = () =>
      new Promise((e, t) => {
        u(s).then(e, t)
      })),
      (c.preloadReady = (e = []) =>
        new Promise((t) => {
          let r = () => ((d = !0), t())
          u(i, e).then(r, r)
        })),
      'u' > typeof window && (window.__NEXT_PRELOADREADY = c.preloadReady)
    let m = c
  },
  32742,
  (e, t, r) => {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 })
    var a = {
      default: function () {
        return u
      },
      noSSR: function () {
        return c
      },
    }
    for (var l in a) Object.defineProperty(r, l, { enumerable: !0, get: a[l] })
    let s = e.r(2879),
      i = e.r(15497)
    e.r(50394)
    let d = s._(e.r(55283)),
      n = 'u' < typeof window
    function o(e) {
      return { default: e?.default || e }
    }
    function c(e, t) {
      if ((delete t.webpack, delete t.modules, !n)) return e(t)
      let r = t.loading
      return () => (0, i.jsx)(r, { error: null, isLoading: !0, pastDelay: !1, timedOut: !1 })
    }
    function u(e, t) {
      let r = d.default,
        a = { loading: ({ error: e, isLoading: t, pastDelay: r }) => null }
      e instanceof Promise
        ? (a.loader = () => e)
        : 'function' == typeof e
        ? (a.loader = e)
        : 'object' == typeof e && (a = { ...a, ...e })
      let l = (a = { ...a, ...t }).loader
      return (a.loadableGenerated &&
        ((a = { ...a, ...a.loadableGenerated }), delete a.loadableGenerated),
      'boolean' != typeof a.ssr || a.ssr)
        ? r({ ...a, loader: () => (null != l ? l().then(o) : Promise.resolve(o(() => null))) })
        : (delete a.webpack, delete a.modules, c(r, a))
    }
    ;('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default))
  },
  1956,
  (e, t, r) => {
    t.exports = e.r(32742)
  },
  61698,
  (e) => {
    'use strict'
    var t = e.i(15497),
      r = e.i(50394),
      a = e.i(71582),
      l = e.i(51178),
      s = e.i(81272),
      i = e.i(47667),
      d = e.i(96055),
      n = e.i(4166),
      o = e.i(8435),
      c = e.i(93638),
      u = e.i(13730),
      m = e.i(72130),
      f = e.i(89973),
      h = e.i(1956)
    let p = (0, h.default)(() => e.A(12997), { loadableGenerated: { modules: [88317] }, ssr: !1 }),
      x = (0, h.default)(() => e.A(11413), { loadableGenerated: { modules: [86995] }, ssr: !1 }),
      g = (0, h.default)(() => e.A(61427), { loadableGenerated: { modules: [74729] }, ssr: !1 }),
      y = ({ frontMatter: e }) => {
        let r = f.default?.comment
        return r && 0 !== Object.keys(r).length
          ? (0, t.jsxs)('div', {
              id: 'comment',
              children: [
                f.default.comment && 'giscus' === f.default.comment.provider && (0, t.jsx)(x, {}),
                f.default.comment &&
                  'utterances' === f.default.comment.provider &&
                  (0, t.jsx)(p, {}),
                f.default.comment &&
                  'disqus' === f.default.comment.provider &&
                  (0, t.jsx)(g, { frontMatter: e }),
              ],
            })
          : (0, t.jsx)(t.Fragment, {})
      },
      v = () => {
        let [e, a] = (0, r.useState)(!1)
        return (
          (0, r.useEffect)(() => {
            let e = () => {
              window.scrollY > 50 ? a(!0) : a(!1)
            }
            return (
              window.addEventListener('scroll', e), () => window.removeEventListener('scroll', e)
            )
          }, []),
          (0, t.jsxs)('div', {
            className: `fixed bottom-8 right-8 hidden flex-col gap-3 ${
              e ? 'md:flex' : 'md:hidden'
            }`,
            children: [
              f.default.comment.provider &&
                (0, t.jsx)('button', {
                  'aria-label': 'Scroll To Comment',
                  type: 'button',
                  onClick: () => {
                    document.getElementById('comment').scrollIntoView()
                  },
                  className:
                    'rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600',
                  children: (0, t.jsx)('svg', {
                    className: 'h-5 w-5',
                    viewBox: '0 0 20 20',
                    fill: 'currentColor',
                    children: (0, t.jsx)('path', {
                      fillRule: 'evenodd',
                      d: 'M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z',
                      clipRule: 'evenodd',
                    }),
                  }),
                }),
              (0, t.jsx)('button', {
                'aria-label': 'Scroll To Top',
                type: 'button',
                onClick: () => {
                  window.scrollTo({ top: 0 })
                },
                className:
                  'rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600',
                children: (0, t.jsx)('svg', {
                  className: 'h-5 w-5',
                  viewBox: '0 0 20 20',
                  fill: 'currentColor',
                  children: (0, t.jsx)('path', {
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
      j = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
      b = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    var w = e.i(68339)
    let _ = {
        PostLayout: function ({
          frontMatter: e,
          authorDetails: r = [],
          next: a,
          prev: i,
          children: d,
        }) {
          let { slug: n, fileName: h, date: p, title: x, images: g, tags: b } = e
          return (0, t.jsxs)(c.default, {
            children: [
              (0, t.jsx)(u.BlogSEO, {
                url: `${f.default.siteUrl}/posts/${n}`,
                title: x,
                summary: e.summary || '',
                date: p,
                lastmod: p,
                canonicalUrl: `${f.default.siteUrl}/posts/${n}`,
                authorDetails: r,
              }),
              (0, t.jsx)(v, {}),
              (0, t.jsx)('article', {
                children: (0, t.jsxs)('div', {
                  className: 'xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700',
                  children: [
                    (0, t.jsx)('header', {
                      className: 'pt-6 xl:pb-6',
                      children: (0, t.jsxs)('div', {
                        className: 'space-y-1 text-center',
                        children: [
                          (0, t.jsx)('dl', {
                            className: 'space-y-10',
                            children: (0, t.jsxs)('div', {
                              children: [
                                (0, t.jsx)('dt', {
                                  className: 'sr-only',
                                  children: 'Published on',
                                }),
                                (0, t.jsx)('dd', {
                                  className:
                                    'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                  children: (0, t.jsx)('time', {
                                    dateTime: p,
                                    children: new Date(p).toLocaleDateString(f.default.locale, j),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, t.jsx)('div', { children: (0, t.jsx)(o.default, { children: x }) }),
                        ],
                      }),
                    }),
                    (0, t.jsxs)('div', {
                      className:
                        'divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0',
                      style: { gridTemplateRows: 'auto 1fr' },
                      children: [
                        (0, t.jsxs)('dl', {
                          className:
                            'pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700',
                          children: [
                            (0, t.jsx)('dt', { className: 'sr-only', children: 'Authors' }),
                            (0, t.jsx)('dd', {
                              children: (0, t.jsx)('ul', {
                                className:
                                  'flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8',
                                children: r.map((e) =>
                                  (0, t.jsxs)(
                                    'li',
                                    {
                                      className: 'flex items-center space-x-2',
                                      children: [
                                        e.avatar &&
                                          (0, t.jsx)(l.default, {
                                            src: e.avatar,
                                            width: 38,
                                            height: 38,
                                            alt: 'avatar',
                                            className: 'h-10 w-10 rounded-full',
                                          }),
                                        (0, t.jsxs)('dl', {
                                          className:
                                            'whitespace-nowrap text-sm font-medium leading-5',
                                          children: [
                                            (0, t.jsx)('dt', {
                                              className: 'sr-only',
                                              children: 'Name',
                                            }),
                                            (0, t.jsx)('dd', {
                                              className: 'text-gray-900 dark:text-gray-100',
                                              children: e.name,
                                            }),
                                            (0, t.jsx)('dt', {
                                              className: 'sr-only',
                                              children: 'Twitter',
                                            }),
                                            (0, t.jsx)('dd', {
                                              children:
                                                e.twitter &&
                                                (0, t.jsx)(s.default, {
                                                  href: e.twitter,
                                                  className:
                                                    'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                                  children: e.twitter.replace(
                                                    'https://twitter.com/',
                                                    '@'
                                                  ),
                                                }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e.name
                                  )
                                ),
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsxs)('div', {
                          className:
                            'divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0',
                          children: [
                            (0, t.jsx)('div', {
                              className: 'prose max-w-none pb-8 pt-10 dark:prose-dark',
                              children: d,
                            }),
                            (0, t.jsxs)('div', {
                              className: 'pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300',
                              children: [
                                (0, t.jsx)(s.default, {
                                  href: `https://mobile.twitter.com/search?q=${encodeURIComponent(
                                    `${f.default.siteUrl}/posts/${n}`
                                  )}`,
                                  rel: 'nofollow',
                                  children: 'Discuss on Twitter',
                                }),
                                ' • ',
                                (0, t.jsx)(s.default, {
                                  href: `${f.default.siteRepo}/blob/master/data/posts/${h}`,
                                  children: 'View on GitHub',
                                }),
                              ],
                            }),
                            (0, t.jsx)(y, { frontMatter: e }),
                          ],
                        }),
                        (0, t.jsxs)('footer', {
                          children: [
                            (0, t.jsxs)('div', {
                              className:
                                'divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y',
                              children: [
                                b &&
                                  (0, t.jsxs)('div', {
                                    className: 'py-4 xl:py-8',
                                    children: [
                                      (0, t.jsx)('h2', {
                                        className:
                                          'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                        children: 'Tags',
                                      }),
                                      (0, t.jsx)('div', {
                                        className: 'flex flex-wrap',
                                        children: b.map((e) =>
                                          (0, t.jsx)(m.default, { text: e }, e)
                                        ),
                                      }),
                                    ],
                                  }),
                                (a || i) &&
                                  (0, t.jsxs)('div', {
                                    className:
                                      'flex justify-between py-4 xl:block xl:space-y-8 xl:py-8',
                                    children: [
                                      i &&
                                        (0, t.jsxs)('div', {
                                          children: [
                                            (0, t.jsx)('h2', {
                                              className:
                                                'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                              children: 'Previous Article',
                                            }),
                                            (0, t.jsx)('div', {
                                              className:
                                                'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                              children: (0, t.jsx)(s.default, {
                                                href: `/posts/${i.slug}`,
                                                children: i.title,
                                              }),
                                            }),
                                          ],
                                        }),
                                      a &&
                                        (0, t.jsxs)('div', {
                                          children: [
                                            (0, t.jsx)('h2', {
                                              className:
                                                'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                              children: 'Next Article',
                                            }),
                                            (0, t.jsx)('div', {
                                              className:
                                                'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                              children: (0, t.jsx)(s.default, {
                                                href: `/posts/${a.slug}`,
                                                children: a.title,
                                              }),
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, t.jsx)('div', {
                              className: 'pt-4 xl:pt-8',
                              children: (0, t.jsx)(s.default, {
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
        PostSimple: function ({ frontMatter: e, authorDetails: r, next: a, prev: i, children: d }) {
          let { slug: n, fileName: h, date: p, title: x, images: g, tags: j } = e
          return (0, t.jsxs)(c.default, {
            children: [
              (0, t.jsx)(u.BlogSEO, {
                url: `${f.default.siteUrl}/posts/${n}`,
                title: x,
                summary: e.summary || '',
                date: p,
                lastmod: p,
                images: g || [],
                canonicalUrl: `${f.default.siteUrl}/posts/${n}`,
                authorDetails: r,
              }),
              (0, t.jsx)(v, {}),
              (0, t.jsx)('article', {
                children: (0, t.jsxs)('div', {
                  className: 'xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700',
                  children: [
                    (0, t.jsx)('header', {
                      className: 'pt-6 xl:pb-6',
                      children: (0, t.jsxs)('div', {
                        className: 'space-y-1 text-center',
                        children: [
                          (0, t.jsx)('dl', {
                            className: 'space-y-10',
                            children: (0, t.jsxs)('div', {
                              children: [
                                (0, t.jsx)('dt', {
                                  className: 'sr-only',
                                  children: 'Published on',
                                }),
                                (0, t.jsx)('dd', {
                                  className:
                                    'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                  children: (0, t.jsx)('time', {
                                    dateTime: p,
                                    children: new Date(p).toLocaleDateString(f.default.locale, b),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, t.jsx)('div', { children: (0, t.jsx)(o.default, { children: x }) }),
                        ],
                      }),
                    }),
                    (0, t.jsxs)('div', {
                      className:
                        'divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0',
                      style: { gridTemplateRows: 'auto 1fr' },
                      children: [
                        (0, t.jsxs)('dl', {
                          className:
                            'pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700',
                          children: [
                            (0, t.jsx)('dt', { className: 'sr-only', children: 'Authors' }),
                            (0, t.jsx)('dd', {
                              children: (0, t.jsx)('ul', {
                                className:
                                  'flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8',
                                children: r?.map((e) =>
                                  (0, t.jsxs)(
                                    'li',
                                    {
                                      className: 'flex items-center space-x-2',
                                      children: [
                                        e.avatar &&
                                          (0, t.jsx)(l.default, {
                                            src: e.avatar,
                                            width: 38,
                                            height: 38,
                                            alt: 'avatar',
                                            className: 'h-10 w-10 rounded-full',
                                          }),
                                        (0, t.jsxs)('dl', {
                                          className:
                                            'whitespace-nowrap text-sm font-medium leading-5',
                                          children: [
                                            (0, t.jsx)('dt', {
                                              className: 'sr-only',
                                              children: 'Name',
                                            }),
                                            (0, t.jsx)('dd', {
                                              className: 'text-gray-900 dark:text-gray-100',
                                              children: e.name,
                                            }),
                                            (0, t.jsx)('dt', {
                                              className: 'sr-only',
                                              children: 'Twitter',
                                            }),
                                            (0, t.jsx)('dd', {
                                              children:
                                                e.twitter &&
                                                (0, t.jsx)(s.default, {
                                                  href: e.twitter,
                                                  className:
                                                    'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                                  children: e.twitter.replace(
                                                    'https://twitter.com/',
                                                    '@'
                                                  ),
                                                }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e.name
                                  )
                                ),
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsxs)('div', {
                          className:
                            'divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0',
                          children: [
                            (0, t.jsx)('div', {
                              className: 'prose max-w-none pb-8 pt-10 dark:prose-dark',
                              children: d,
                            }),
                            (0, t.jsxs)('div', {
                              className: 'pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300',
                              children: [
                                (0, t.jsx)(s.default, {
                                  href: `https://mobile.twitter.com/search?q=${encodeURIComponent(
                                    `${f.default.siteUrl}/posts/${n}`
                                  )}`,
                                  rel: 'nofollow',
                                  children: 'Discuss on Twitter',
                                }),
                                ' • ',
                                (0, t.jsx)(s.default, {
                                  href: `${f.default.siteRepo}/blob/master/data/posts/${h}`,
                                  children: 'View on GitHub',
                                }),
                              ],
                            }),
                            (0, t.jsx)(y, { frontMatter: e }),
                          ],
                        }),
                        (0, t.jsxs)('footer', {
                          children: [
                            (0, t.jsxs)('div', {
                              className:
                                'divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y',
                              children: [
                                j &&
                                  (0, t.jsxs)('div', {
                                    className: 'py-4 xl:py-8',
                                    children: [
                                      (0, t.jsx)('h2', {
                                        className:
                                          'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                        children: 'Tags',
                                      }),
                                      (0, t.jsx)('div', {
                                        className: 'flex flex-wrap',
                                        children: j.map((e) =>
                                          (0, t.jsx)(m.default, { text: e }, e)
                                        ),
                                      }),
                                    ],
                                  }),
                                (a || i) &&
                                  (0, t.jsxs)('div', {
                                    className:
                                      'flex justify-between py-4 xl:block xl:space-y-8 xl:py-8',
                                    children: [
                                      i &&
                                        (0, t.jsxs)('div', {
                                          children: [
                                            (0, t.jsx)('h2', {
                                              className:
                                                'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                              children: 'Previous Article',
                                            }),
                                            (0, t.jsx)('div', {
                                              className:
                                                'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                              children: (0, t.jsx)(s.default, {
                                                href: `/posts/${i.slug}`,
                                                children: i.title,
                                              }),
                                            }),
                                          ],
                                        }),
                                      a &&
                                        (0, t.jsxs)('div', {
                                          children: [
                                            (0, t.jsx)('h2', {
                                              className:
                                                'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                              children: 'Next Article',
                                            }),
                                            (0, t.jsx)('div', {
                                              className:
                                                'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                              children: (0, t.jsx)(s.default, {
                                                href: `/posts/${a.slug}`,
                                                children: a.title,
                                              }),
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, t.jsx)('div', {
                              className: 'pt-4 xl:pt-8',
                              children: (0, t.jsx)(s.default, {
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
        AuthorLayout: function ({ children: e, frontMatter: r }) {
          let {
            name: a,
            avatar: s,
            occupation: i,
            company: d,
            email: n,
            twitter: o,
            linkedin: c,
            github: m,
          } = r
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(u.PageSEO, { title: `About - ${a}`, description: `About me - ${a}` }),
              (0, t.jsxs)('div', {
                className: 'divide-y divide-gray-200 dark:divide-gray-700',
                children: [
                  (0, t.jsx)('div', {
                    className: 'space-y-2 pb-8 pt-6 md:space-y-5',
                    children: (0, t.jsx)('h1', {
                      className:
                        'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                      children: 'About',
                    }),
                  }),
                  (0, t.jsxs)('div', {
                    className:
                      'items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0',
                    children: [
                      (0, t.jsxs)('div', {
                        className: 'flex flex-col items-center pt-8',
                        children: [
                          (0, t.jsx)(l.default, {
                            src: s,
                            alt: 'avatar',
                            width: 192,
                            height: 192,
                            className: 'h-48 w-48 rounded-full',
                          }),
                          (0, t.jsx)('h3', {
                            className: 'pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight',
                            children: a,
                          }),
                          (0, t.jsx)('div', {
                            className: 'text-gray-500 dark:text-gray-400',
                            children: i,
                          }),
                          (0, t.jsx)('div', {
                            className: 'text-gray-500 dark:text-gray-400',
                            children: d,
                          }),
                          (0, t.jsxs)('div', {
                            className: 'flex space-x-3 pt-6',
                            children: [
                              (0, t.jsx)(w.default, { kind: 'mail', href: `mailto:${n}` }),
                              (0, t.jsx)(w.default, { kind: 'github', href: m }),
                              (0, t.jsx)(w.default, { kind: 'linkedin', href: c }),
                              (0, t.jsx)(w.default, { kind: 'twitter', href: o }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)('div', {
                        className: 'prose max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-2',
                        children: e,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        },
        ListLayout: e.i(68041).default,
      },
      N = {
        Image: l.default,
        TOCInline: i.default,
        a: s.default,
        pre: d.default,
        BlogNewsletterForm: n.BlogNewsletterForm,
        wrapper: ({ components: e, layout: a, ...l }) => {
          let s = (0, r.useMemo)(() => (a && _[a]) || null, [a])
          return s ? (0, t.jsx)(s, { ...l }) : null
        },
      }
    e.s(
      [
        'MDXLayoutRenderer',
        0,
        ({ layout: e, mdxSource: l, ...s }) => {
          let i = (0, r.useMemo)(() => (0, a.getMDXComponent)(l), [l])
          return (0, t.jsx)(i, { layout: e, components: N, ...s })
        },
      ],
      61698
    )
  },
])
