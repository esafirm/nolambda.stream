import React from 'react'
import Link from 'next/link'
import type { LinkProps as NextLinkProps } from 'next/link'

type CustomLinkProps = NextLinkProps & {
  href?: string
  children: React.ReactNode
  className?: string
  rel?: string
  target?: string
}

const CustomLink = ({ href, children, ...rest }: CustomLinkProps) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    )
  }

  if (isAnchorLink) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </a>
  )
}

export default CustomLink
