module.exports = [
  22734,
  (a, b, c) => {
    b.exports = a.x('fs', () => require('fs'))
  },
  80244,
  (a) => {
    'use strict'
    let b = {
      title: 'I Have No Lambda',
      author: 'Esa Firman',
      headerTitle: 'Esa Firman',
      description: 'I prefer to write code, really.',
      language: 'en-us',
      theme: 'system',
      siteUrl: 'https://nolambda.stream',
      siteRepo: 'https://github.com/esafirm/nolambda.stream',
      siteLogo: '/static/images/logo.png',
      image: 'https://www.gravatar.com/avatar/dcafc93100ece4c0582543b020a63ec8?s=250&d=mm&r=x',
      socialBanner: '/static/images/twitter-card.png',
      github: 'https://github.com/esafirm',
      twitter: 'https://twitter.com/esafirm',
      locale: 'en-US',
      analytics: {
        plausibleDataDomain: '',
        simpleAnalytics: !1,
        umamiWebsiteId: '',
        googleAnalyticsId: 'UA-102328330-1',
        posthogAnalyticsId: '',
      },
      newsletter: { provider: '' },
      comment: {
        provider: 'disqus',
        giscusConfig: {
          repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
          repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
          category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
          categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
          mapping: 'pathname',
          reactions: '1',
          metadata: '0',
          theme: 'light',
          inputPosition: 'bottom',
          lang: 'en',
          darkTheme: 'transparent_dark',
          themeURL: '',
        },
        utterancesConfig: {
          repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
          issueTerm: '',
          label: '',
          theme: '',
          darkTheme: '',
        },
        disqusConfig: { shortname: 'esafirm' },
      },
    }
    a.s(['default', 0, b])
  },
  74067,
  (a) =>
    a.a(async (b, c) => {
      try {
        let b = await a.y('next-themes-d8e1422fc965264e')
        a.n(b), c()
      } catch (a) {
        c(a)
      }
    }, !0),
  4652,
  (a) => {
    a.v((b) =>
      Promise.all(
        ['server/chunks/ssr/[externals]_socket_io-client_0nlgiyy._.js'].map((b) => a.l(b))
      ).then(() => b(12175))
    )
  },
]

//# sourceMappingURL=%5Broot-of-the-server%5D__0d.n527._.js.map
