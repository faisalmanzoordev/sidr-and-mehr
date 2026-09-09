export interface Product {
  id: string
  slug: string
  name: string
  description: string
  shortDescription: string
  price: number
  size: string
  category: 'fragrance' | 'accessory'
  fragranceFamily?: string
  topNotes?: string[]
  heartNotes?: string[]
  baseNotes?: string[]
  image: string
  images?: string[]
  featured: boolean
  order: number
}

export interface ProductCardProps {
  product: Product
  priority?: boolean
  className?: string
}
