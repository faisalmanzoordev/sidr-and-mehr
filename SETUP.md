# SIDR & MEHR - Setup Instructions

## Quick Start

Follow these steps to get your website running:

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- Other required dependencies

### 2. Create Environment File

Create a file named `.env.local` in the root directory and add:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=923237814688
```

**Important**: Replace with your actual WhatsApp number if different.

Format: Country code + number (no spaces, no + symbol)

### 3. Run Development Server

```bash
npm run dev
```

Your website will be available at: **http://localhost:3000**

### 4. Add Brand Assets (Optional)

Place your logo files in:
- `public/brand/logo-full.png`
- `public/brand/monogram.png`

Place product images in:
- `public/images/products/fragrance-01.jpg`
- `public/images/products/fragrance-02.jpg`
- etc.

The website will work with placeholders if these aren't ready yet.

## What You'll See

The website includes:

✅ **Homepage** with hero, brand story, philosophy, and featured products  
✅ **Fragrances Page** with all 5 products  
✅ **Product Detail Pages** for each fragrance  
✅ **About Page** with brand story and philosophy  
✅ **Contact Page** with WhatsApp and social links  
✅ **Responsive Navigation** with mobile menu  
✅ **WhatsApp Ordering** integrated throughout  

## Customization

### Update Products

Edit: `src/data/products.ts`

Add new products, change prices, update descriptions, etc.

### Update Brand Info

Edit: `src/config/site.ts`

Change tagline, description, navigation items.

### Update Social Links

Edit: `src/config/social.ts`

Update Instagram, Facebook, TikTok, YouTube handles.

### Update Styles

Edit: `tailwind.config.ts` and `src/app/globals.css`

Adjust colors, fonts, spacing, animations.

## Building for Production

When ready to deploy:

```bash
npm run build
npm start
```

Or deploy to Vercel (recommended for Next.js):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## File Structure Overview

```
src/
├── app/              # Pages (Home, Fragrances, About, Contact)
├── components/       # Reusable UI components
├── data/            # Product data (easy to edit)
├── config/          # Site & social configuration
├── lib/             # Utility functions
└── types/           # TypeScript types

public/
├── brand/           # Logo assets
└── images/          # Product images
```

## Common Tasks

### Add a New Product
1. Open `src/data/products.ts`
2. Add new product object to the array
3. Add product image to `public/images/products/`

### Change WhatsApp Number
1. Update `.env.local` file
2. Restart dev server

### Update Colors
1. Edit `tailwind.config.ts`
2. Update color values in theme

### Modify Navigation
1. Edit `src/config/site.ts`
2. Update `navItems` array

## Need Help?

- Check the README.md for detailed documentation
- All components are well-commented
- Data is centralized for easy updates
- Architecture is clean and maintainable

## Next Steps

1. ✅ Get the dev server running
2. ✅ Browse the website locally
3. ✅ Add your real product images
4. ✅ Update product data
5. ✅ Customize brand colors if needed
6. ✅ Deploy to production

---

**Contact**: +92 323 7814688 (WhatsApp)
