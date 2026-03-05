// Type for layout names
export type LayoutName = 'PostLayout' | 'PostSimple' | 'AuthorLayout' | 'ListLayout'

export interface FrontMatter {
  title: string
  date: string
  slug?: string
  fileName?: string
  tags?: string[]
  summary?: string
  images?: string[]
  draft?: boolean
  layout?: LayoutName
}

export interface Author {
  name: string
  avatar?: string
  twitter?: string
}

export interface PostNav {
  title: string
  slug: string
}

export interface Pagination {
  currentPage: number
  totalPages: number
}

export interface AuthorFrontMatter {
  name: string
  avatar: string
  occupation?: string
  company?: string
  email?: string
  twitter?: string
  linkedin?: string
  github?: string
}
