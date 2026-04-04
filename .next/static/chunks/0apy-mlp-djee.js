;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  41283,
  (u, D, F) => {
    D.exports =
      /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g
  },
  62267,
  (u, D, F) => {
    let e = u.r(41283)
    D.exports = r
    let t = Object.hasOwnProperty
    function r() {
      if (!(this instanceof r)) return new r()
      this.reset()
    }
    function a(u, D) {
      return 'string' != typeof u
        ? ''
        : (D || (u = u.toLowerCase()), u.replace(e, '').replace(/ /g, '-'))
    }
    ;(r.prototype.slug = function (u, D) {
      let F = a(u, !0 === D),
        e = F
      for (; t.call(this.occurrences, F); )
        this.occurrences[e]++, (F = e + '-' + this.occurrences[e])
      return (this.occurrences[F] = 0), F
    }),
      (r.prototype.reset = function () {
        this.occurrences = Object.create(null)
      }),
      (r.slug = a)
  },
  72130,
  56142,
  (u) => {
    'use strict'
    var D = u.i(15497),
      F = u.i(9521),
      e = u.i(62267)
    let t = (u) => (0, e.slug)(u)
    u.s(['default', 0, t], 56142),
      u.s(
        [
          'default',
          0,
          ({ text: u }) =>
            (0, D.jsx)(F.default, {
              href: `/tags/${t(u)}`,
              className:
                'mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
              children: u.split(' ').join('-'),
            }),
        ],
        72130
      )
  },
  36603,
  (u) => {
    'use strict'
    var D = u.i(89973)
    u.s([
      'default',
      0,
      (u) =>
        new Date(u).toLocaleDateString(D.default.locale, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
    ])
  },
  68041,
  (u) => {
    'use strict'
    var D = u.i(15497),
      F = u.i(50394),
      e = u.i(81272),
      t = u.i(72130)
    function r({ totalPages: u, currentPage: F }) {
      let t = parseInt(F) - 1 > 0,
        a = parseInt(F) + 1 <= parseInt(u)
      return (0, D.jsx)('div', {
        className: 'space-y-2 pb-8 pt-6 md:space-y-5',
        children: (0, D.jsxs)('nav', {
          className: 'flex justify-between',
          children: [
            !t &&
              (0, D.jsx)('button', {
                rel: 'previous',
                className: 'cursor-auto disabled:opacity-50',
                disabled: !t,
                children: 'Previous',
              }),
            t &&
              (0, D.jsx)(e.default, {
                href: F - 1 == 1 ? '/posts/' : `/posts/page/${F - 1}`,
                legacyBehavior: !0,
                children: (0, D.jsx)('button', { rel: 'previous', children: 'Previous' }),
              }),
            (0, D.jsxs)('span', { children: [F, ' of ', u] }),
            !a &&
              (0, D.jsx)('button', {
                rel: 'next',
                className: 'cursor-auto disabled:opacity-50',
                disabled: !a,
                children: 'Next',
              }),
            a &&
              (0, D.jsx)(e.default, {
                href: `/posts/page/${F + 1}`,
                legacyBehavior: !0,
                children: (0, D.jsx)('button', { rel: 'next', children: 'Next' }),
              }),
          ],
        }),
      })
    }
    var a = u.i(36603)
    u.s(
      [
        'default',
        0,
        function ({ posts: u, title: s, initialDisplayPosts: l = [], pagination: n }) {
          let [C, i] = (0, F.useState)(''),
            E = u.filter((u) =>
              (u.title + u.summary + u.tags.join(' ')).toLowerCase().includes(C.toLowerCase())
            ),
            A = l.length > 0 && !C ? l : E
          return (0, D.jsxs)(D.Fragment, {
            children: [
              (0, D.jsxs)('div', {
                className: 'divide-y divide-gray-200 dark:divide-gray-700',
                children: [
                  (0, D.jsxs)('div', {
                    className: 'space-y-2 pb-8 pt-6 md:space-y-5',
                    children: [
                      (0, D.jsx)('h1', {
                        className:
                          'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                        children: s,
                      }),
                      (0, D.jsxs)('div', {
                        className: 'relative max-w-lg',
                        children: [
                          (0, D.jsx)('input', {
                            'aria-label': 'Search articles',
                            type: 'text',
                            onChange: (u) => i(u.target.value),
                            placeholder: 'Search articles',
                            className:
                              'block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100',
                          }),
                          (0, D.jsx)('svg', {
                            className:
                              'absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300',
                            xmlns: 'http://www.w3.org/2000/svg',
                            fill: 'none',
                            viewBox: '0 0 24 24',
                            stroke: 'currentColor',
                            children: (0, D.jsx)('path', {
                              strokeLinecap: 'round',
                              strokeLinejoin: 'round',
                              strokeWidth: 2,
                              d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, D.jsxs)('ul', {
                    children: [
                      !E.length && 'No posts found.',
                      A.map((u) => {
                        let { slug: F, date: r, title: s, summary: l, tags: n } = u
                        return (0, D.jsx)(
                          'li',
                          {
                            className: 'py-4',
                            children: (0, D.jsxs)('article', {
                              className:
                                'space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0',
                              children: [
                                (0, D.jsxs)('dl', {
                                  children: [
                                    (0, D.jsx)('dt', {
                                      className: 'sr-only',
                                      children: 'Published on',
                                    }),
                                    (0, D.jsx)('dd', {
                                      className:
                                        'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                      children: (0, D.jsx)('time', {
                                        dateTime: r,
                                        children: (0, a.default)(r),
                                      }),
                                    }),
                                  ],
                                }),
                                (0, D.jsxs)('div', {
                                  className: 'space-y-3 xl:col-span-3',
                                  children: [
                                    (0, D.jsxs)('div', {
                                      children: [
                                        (0, D.jsx)('h3', {
                                          className: 'text-2xl font-bold leading-8 tracking-tight',
                                          children: (0, D.jsx)(e.default, {
                                            href: `/posts/${F}`,
                                            className: 'text-gray-900 dark:text-gray-100',
                                            children: s,
                                          }),
                                        }),
                                        (0, D.jsx)('div', {
                                          className: 'flex flex-wrap',
                                          children: n.map((u) =>
                                            (0, D.jsx)(t.default, { text: u }, u)
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, D.jsx)('div', {
                                      className:
                                        'prose max-w-none text-gray-500 dark:text-gray-400',
                                      children: l,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          F
                        )
                      }),
                    ],
                  }),
                ],
              }),
              n &&
                n.totalPages > 1 &&
                !C &&
                (0, D.jsx)(r, { currentPage: n.currentPage, totalPages: n.totalPages }),
            ],
          })
        },
      ],
      68041
    )
  },
  93638,
  68339,
  (u) => {
    'use strict'
    var D,
      F,
      e,
      t,
      r,
      a,
      s,
      l = u.i(15497)
    u.s(
      [
        'default',
        0,
        function ({ children: u }) {
          return (0, l.jsx)('div', {
            className: 'mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0',
            children: u,
          })
        },
      ],
      93638
    )
    var n = u.i(50394)
    function C() {
      return (C = Object.assign.bind()).apply(null, arguments)
    }
    function i() {
      return (i = Object.assign.bind()).apply(null, arguments)
    }
    function E() {
      return (E = Object.assign.bind()).apply(null, arguments)
    }
    function A() {
      return (A = Object.assign.bind()).apply(null, arguments)
    }
    function c() {
      return (c = Object.assign.bind()).apply(null, arguments)
    }
    function o() {
      return (o = Object.assign.bind()).apply(null, arguments)
    }
    let B = {
      mail: function (u) {
        return n.createElement(
          'svg',
          C({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, u),
          D ||
            (D = n.createElement('path', {
              d: 'M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z',
            })),
          F ||
            (F = n.createElement('path', {
              d: 'm18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z',
            }))
        )
      },
      github: function (u) {
        return n.createElement(
          'svg',
          i({ viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, u),
          e ||
            (e = n.createElement('path', {
              d: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
            }))
        )
      },
      facebook: function (u) {
        return n.createElement(
          'svg',
          E({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, u),
          t ||
            (t = n.createElement('path', {
              d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
            }))
        )
      },
      youtube: function (u) {
        return n.createElement(
          'svg',
          A({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, u),
          r ||
            (r = n.createElement('path', {
              d: 'M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z',
            }))
        )
      },
      linkedin: function (u) {
        return n.createElement(
          'svg',
          c({ viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, u),
          a ||
            (a = n.createElement('path', {
              d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
            }))
        )
      },
      twitter: function (u) {
        return n.createElement(
          'svg',
          o({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, u),
          s ||
            (s = n.createElement('path', {
              d: 'M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z',
            }))
        )
      },
    }
    u.s(
      [
        'default',
        0,
        ({ kind: u, href: D, size: F = 8 }) => {
          if (!D || ('mail' === u && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(D)))
            return null
          let e = B[u]
          return (0, l.jsxs)('a', {
            className: 'text-sm text-gray-500 transition hover:text-gray-600',
            target: '_blank',
            rel: 'noopener noreferrer',
            href: D,
            children: [
              (0, l.jsx)('span', { className: 'sr-only', children: u }),
              (0, l.jsx)(e, {
                className: `fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${F} w-${F}`,
              }),
            ],
          })
        },
      ],
      68339
    )
  },
  67104,
  (u, D, F) => {
    'use strict'
    Object.defineProperty(F, '__esModule', { value: !0 })
    var e = {
      VALID_LOADERS: function () {
        return r
      },
      imageConfigDefault: function () {
        return a
      },
    }
    for (var t in e) Object.defineProperty(F, t, { enumerable: !0, get: e[t] })
    let r = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'],
      a = {
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
  62481,
  (u, D, F) => {
    'use strict'
    Object.defineProperty(F, '__esModule', { value: !0 }),
      Object.defineProperty(F, 'ImageConfigContext', {
        enumerable: !0,
        get: function () {
          return r
        },
      })
    let e = u.r(2879)._(u.r(50394)),
      t = u.r(67104),
      r = e.default.createContext(t.imageConfigDefault)
  },
  4166,
  (u) => {
    'use strict'
    var D = u.i(15497),
      F = u.i(50394),
      e = u.i(89973)
    let t = ({ title: u = 'Subscribe to the newsletter' }) => {
      let t = (0, F.useRef)(null),
        [r, a] = (0, F.useState)(!1),
        [s, l] = (0, F.useState)(''),
        [n, C] = (0, F.useState)(!1),
        i = async (u) => {
          u.preventDefault()
          let D = await fetch(`/api/${e.default.newsletter.provider}`, {
              body: JSON.stringify({ email: t.current.value }),
              headers: { 'Content-Type': 'application/json' },
              method: 'POST',
            }),
            { error: F } = await D.json()
          if (F) {
            a(!0), l('Your e-mail address is invalid or you are already subscribed!')
            return
          }
          ;(t.current.value = ''), a(!1), C(!0), l('Successfully! 🎉 You are now subscribed.')
        }
      return (0, D.jsxs)('div', {
        children: [
          (0, D.jsx)('div', {
            className: 'pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100',
            children: u,
          }),
          (0, D.jsxs)('form', {
            className: 'flex flex-col sm:flex-row',
            onSubmit: i,
            children: [
              (0, D.jsxs)('div', {
                children: [
                  (0, D.jsx)('label', {
                    className: 'sr-only',
                    htmlFor: 'email-input',
                    children: 'Email address',
                  }),
                  (0, D.jsx)('input', {
                    autoComplete: 'email',
                    className:
                      'w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black',
                    id: 'email-input',
                    name: 'email',
                    placeholder: n ? "You're subscribed !  🎉" : 'Enter your email',
                    ref: t,
                    required: !0,
                    type: 'email',
                    disabled: n,
                  }),
                ],
              }),
              (0, D.jsx)('div', {
                className: 'mt-2 flex w-full rounded-md shadow-sm sm:ml-3 sm:mt-0',
                children: (0, D.jsx)('button', {
                  className: `w-full rounded-md bg-primary-500 px-4 py-2 font-medium text-white sm:py-0 ${
                    n ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-primary-400'
                  } focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`,
                  type: 'submit',
                  disabled: n,
                  children: n ? 'Thank you!' : 'Sign up',
                }),
              }),
            ],
          }),
          r &&
            (0, D.jsx)('div', {
              className: 'w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96',
              children: s,
            }),
        ],
      })
    }
    u.s([
      'BlogNewsletterForm',
      0,
      ({ title: u }) =>
        (0, D.jsx)('div', {
          className: 'flex items-center justify-center',
          children: (0, D.jsx)('div', {
            className: 'bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8',
            children: (0, D.jsx)(t, { title: u }),
          }),
        }),
      'default',
      0,
      t,
    ])
  },
  39131,
  (u) => {
    'use strict'
    var D = u.i(15497),
      F = u.i(8435),
      e = u.i(61698)
    u.s([
      '__N_SSG',
      0,
      !0,
      'default',
      0,
      function ({ post: u, authorDetails: t, prev: r, next: a }) {
        let { mdxSource: s, toc: l, frontMatter: n } = u
        return (0, D.jsx)(D.Fragment, {
          children:
            !0 !== n.draft
              ? (0, D.jsx)(e.MDXLayoutRenderer, {
                  layout: n.layout || 'PostLayout',
                  toc: l,
                  mdxSource: s,
                  frontMatter: n,
                  authorDetails: t,
                  prev: r,
                  next: a,
                })
              : (0, D.jsx)('div', {
                  className: 'mt-24 text-center',
                  children: (0, D.jsxs)(F.default, {
                    children: [
                      'Under Construction',
                      ' ',
                      (0, D.jsx)('span', {
                        role: 'img',
                        'aria-label': 'roadwork sign',
                        children: '🚧',
                      }),
                    ],
                  }),
                }),
        })
      },
    ])
  },
  62588,
  (u, D, F) => {
    let e = '/posts/[...slug]'
    ;(window.__NEXT_P = window.__NEXT_P || []).push([e, () => u.r(39131)]),
      D.hot &&
        D.hot.dispose(function () {
          window.__NEXT_P.push([e])
        })
  },
  64137,
  (u) => {
    u.v((D) =>
      Promise.all(['static/chunks/0~do3786bov67.js'].map((D) => u.l(D))).then(() => D(41174))
    )
  },
  81258,
  (u) => {
    u.v((D) =>
      Promise.all(['static/chunks/0.p-nd78t96-q.js'].map((D) => u.l(D))).then(() => D(30112))
    )
  },
  12997,
  (u) => {
    u.v((D) =>
      Promise.all(['static/chunks/02rr4ney~hr59.js'].map((D) => u.l(D))).then(() => D(88317))
    )
  },
  11413,
  (u) => {
    u.v((D) =>
      Promise.all(['static/chunks/0.qp695oj1o0..js'].map((D) => u.l(D))).then(() => D(86995))
    )
  },
  61427,
  (u) => {
    u.v((D) =>
      Promise.all(['static/chunks/0nntt_b7bngme.js'].map((D) => u.l(D))).then(() => D(74729))
    )
  },
])
