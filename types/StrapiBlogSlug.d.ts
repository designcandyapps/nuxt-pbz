import type { BaseStrapiBlog } from './StrapiBlogs'

export interface StrapiBlogSlug extends BaseStrapiBlog {
  categories: Category[]
  mainImage: MainImage
}

export interface Category {
  id: number
  documentId: string
  name: string
}

export interface MainImage {
  id: number
  documentId: string
  url: string
}
