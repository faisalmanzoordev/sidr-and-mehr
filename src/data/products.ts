import type { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: '1',
    slug: 'fragrance-01',
    name: 'Heritage Oud',
    description: 'A sophisticated blend that honors the timeless tradition of oud, reimagined for the modern connoisseur. Deep, rich, and unmistakably luxurious, this signature scent opens with bright bergamot and settles into a warm embrace of aged oud and precious woods.',
    shortDescription: 'Timeless oud reimagined for today',
    price: 6500,
    size: '50ml',
    category: 'fragrance',
    fragranceFamily: 'Woody Oriental',
    topNotes: ['Bergamot', 'Saffron', 'Pink Pepper'],
    heartNotes: ['Oud', 'Rose', 'Jasmine'],
    baseNotes: ['Sandalwood', 'Amber', 'Musk'],
    image: '/images/products/fragrance-01.png',
    images: [
      '/images/products/fragrance-01.png',
      '/images/products/fragrance-01-alt.png',
    ],
    featured: true,
    order: 1,
  },
  {
    id: '2',
    slug: 'fragrance-02',
    name: 'Sidr Essence',
    description: 'Inspired by the sacred Sidr tree, this fragrance captures the essence of nature and tradition. Fresh green notes meet warm spices, creating a scent that feels both grounded and elevated. A tribute to our namesake and philosophy.',
    shortDescription: 'Nature meets tradition in every note',
    price: 5800,
    size: '50ml',
    category: 'fragrance',
    fragranceFamily: 'Fresh Spicy',
    topNotes: ['Green Notes', 'Cardamom', 'Lemon'],
    heartNotes: ['Sidr Leaves', 'Geranium', 'Clove'],
    baseNotes: ['Cedarwood', 'Vetiver', 'Tonka Bean'],
    image: '/images/products/fragrance-02.png',
    images: [
      '/images/products/fragrance-02.png',
      '/images/products/fragrance-02-alt.png',
    ],
    featured: true,
    order: 2,
  },
  {
    id: '3',
    slug: 'fragrance-03',
    name: 'Midnight Amber',
    description: 'As night falls, this captivating scent reveals its depths. Warm amber intertwines with dark spices and leather, creating an aura of mystery and confidence. For those who command attention without saying a word.',
    shortDescription: 'Mysterious warmth for the evening',
    price: 6200,
    size: '50ml',
    category: 'fragrance',
    fragranceFamily: 'Amber Spicy',
    topNotes: ['Black Pepper', 'Ginger', 'Lavender'],
    heartNotes: ['Leather', 'Tobacco', 'Cinnamon'],
    baseNotes: ['Amber', 'Patchouli', 'Vanilla'],
    image: '/images/products/fragrance-03.png',
    images: [
      '/images/products/fragrance-03.png',
      '/images/products/fragrance-03-alt.png',
    ],
    featured: false,
    order: 3,
  },
  {
    id: '4',
    slug: 'fragrance-04',
    name: 'Desert Citrus',
    description: 'Bright and invigorating, this fragrance captures the energy of sun-kissed citrus groves meeting warm desert winds. Fresh yet refined, it balances vibrant top notes with a sophisticated dry-down that lingers beautifully.',
    shortDescription: 'Bright citrus with desert warmth',
    price: 5500,
    size: '50ml',
    category: 'fragrance',
    fragranceFamily: 'Citrus Aromatic',
    topNotes: ['Bitter Orange', 'Grapefruit', 'Mandarin'],
    heartNotes: ['Neroli', 'Sea Salt', 'Sage'],
    baseNotes: ['Driftwood', 'White Musk', 'Ambergris'],
    image: '/images/products/fragrance-04.png',
    images: [
      '/images/products/fragrance-04.png',
      '/images/products/fragrance-04-alt.png',
    ],
    featured: false,
    order: 4,
  },
  {
    id: '5',
    slug: 'fragrance-05',
    name: 'Royal Velvet',
    description: 'The pinnacle of our collection. This opulent fragrance weaves together the finest ingredients: rich florals, precious woods, and golden resins. A scent of timeless elegance and understated power, crafted for those with refined taste.',
    shortDescription: 'Opulent elegance in every spray',
    price: 7200,
    size: '50ml',
    category: 'fragrance',
    fragranceFamily: 'Floral Woody',
    topNotes: ['Iris', 'Osmanthus', 'Aldehydes'],
    heartNotes: ['Orris', 'Magnolia', 'Incense'],
    baseNotes: ['Oud', 'Cashmere Wood', 'Labdanum'],
    image: '/images/products/fragrance-05.png',
    images: [
      '/images/products/fragrance-05.png',
      '/images/products/fragrance-05-alt.png',
    ],
    featured: true,
    order: 5,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured).sort((a, b) => a.order - b.order)
}

export function getAllProducts(): Product[] {
  return products.sort((a, b) => a.order - b.order)
}

export function getRelatedProducts(currentProductId: string, limit: number = 3): Product[] {
  return products
    .filter((product) => product.id !== currentProductId)
    .slice(0, limit)
}
