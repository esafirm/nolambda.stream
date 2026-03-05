import React, { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'

// Import layouts using ES module syntax
import PostLayout from '../layouts/PostLayout'
import PostSimple from '../layouts/PostSimple'
import AuthorLayout from '../layouts/AuthorLayout'
import ListLayout from '../layouts/ListLayout'

// Type for layout names
export type LayoutName = 'PostLayout' | 'PostSimple' | 'AuthorLayout' | 'ListLayout'

// Layout registry - using the imported components directly
const layoutRegistry = {
  PostLayout,
  PostSimple,
  AuthorLayout,
  ListLayout,
} as Record<string, React.ComponentType<any>>

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ components, layout, ...rest }: any) => {
    const Layout = useMemo(() => {
      if (!layout) return null

      const Component = layoutRegistry[layout]
      return Component || null
    }, [layout])

    if (!Layout) return null

    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({
  layout,
  mdxSource,
  ...rest
}: {
  layout?: string
  mdxSource: string
  [key: string]: any
}) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
