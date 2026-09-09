export const siteConfig = {
  name: 'SIDR & MEHR',
  tagline: 'TIMELESS. DISTINCT. UNMISTAKABLE.',
  description:
    'SIDR & MEHR is a modern fragrance and lifestyle brand rooted in tradition and made for today.',
  brandLine: 'Fragrance · Accessories · Lifestyle',
  philosophy: 'Rooted in tradition, made for today.',
  url: 'https://sidrmehr.com',
  ogImage: '/og-image.jpg',
  links: {
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923237814688',
  },
}

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Fragrances', href: '/fragrances' },
  { label: 'Our Story', href: '/about' },
  { label: 'Contact', href: '/contact' },
]
