import type { BaseStrapiBlog, Category } from './StrapiBlogs'

export interface StrapiBlogSlug extends BaseStrapiBlog {
  categories: Category[]
  mainImage: MainImage
}

export interface MainImage {
  id: number
  documentId: string
  url: string
}
