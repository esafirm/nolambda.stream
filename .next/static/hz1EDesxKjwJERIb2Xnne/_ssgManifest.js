self.__SSG_MANIFEST = new Set([
  '\u002F',
  '\u002Fabout',
  '\u002Fposts',
  '\u002Fposts\u002F[...slug]',
  '\u002Fposts\u002Fpage\u002F[page]',
  '\u002Ftags',
  '\u002Ftags\u002F[tag]',
  '\u002Ftalks',
  '\u002Fwanderlist',
  '\u002Fwfc-reviews\u002F[slug]',
])
self.__SSG_MANIFEST_CB && self.__SSG_MANIFEST_CB()
