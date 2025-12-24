/**
 * Content Related Types
 * Types for CMS content, portfolio items, and collections
 */

export interface PortofolioCollectionItem {
  path?: string
  title?: string
  description?: string
  image?: string
  category?: string
  tags?: string[]
  date?: string
  // Extended fields for detail page
  services?: string[]
  client?: string
  status?: string
  industry?: string
}

export interface PortfolioDetailPage extends PortofolioCollectionItem {
  body?: unknown
  _path?: string
}

export interface BlogPost {
  path?: string
  title?: string
  description?: string
  image?: string
  author?: string
  date?: string
  tags?: string[]
  readingTime?: number
}

export interface ContentMeta {
  title: string
  description?: string
  image?: string
  publishedAt?: string
  updatedAt?: string
}
