# SIDR & MEHR

Premium niche fragrance & lifestyle brand website.

**Timeless. Distinct. Unmistakable.**

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- WhatsApp ordering (no cart / payment)

## Quick Start

```bash
npm install
cp .env.example .env.local
# edit NEXT_PUBLIC_WHATSAPP_NUMBER if needed
npm run dev
```

Open http://localhost:3000

Production build:

```bash
npm run build
npm start
```

## Key Configuration

| Item | Location |
|------|----------|
| WhatsApp number | `.env.local` → `NEXT_PUBLIC_WHATSAPP_NUMBER` (e.g. `923237814688`) |
| Product data | `src/data/products.ts` |
| Site config / nav | `src/config/site.ts` |
| Social links | `src/config/social.ts` |
| Floating WhatsApp | `src/components/layout/FloatingWhatsAppButton.tsx` (rendered in root layout) |
| WhatsApp helpers | `src/lib/whatsapp.ts` |

## Replacing Product Images

1. Place photographs in `public/images/products/` (e.g. `fragrance-01.jpg`).
2. Paths are already set in `src/data/products.ts` (`image` field).
3. Update product cards / detail pages to use `next/image` with those paths when ready — visual containers already use a 3:4 ratio.

## Structure

```
src/
├── app/                 # Routes
├── components/
│   ├── home/            # Hero, BrandStory, Featured, Philosophy, Beyond, FinalCta
│   ├── layout/          # Navbar, Footer, MobileMenu, FloatingWhatsAppButton
│   ├── products/        # ProductCard, ProductGrid, RelatedProducts
│   └── ui/
├── config/
├── data/products.ts
├── lib/whatsapp.ts
└── types/
```

## Brand Notes

Authentic story only — no false heritage. Sidr tree inspiration explained primarily on Our Story. Homepage stays concise.

© SIDR & MEHR
