# Product Images

Place your product photography here.

## Naming Convention

Use the product slug from `src/data/products.ts`:

```
fragrance-01.jpg
fragrance-02.jpg
fragrance-03.jpg
fragrance-04.jpg
fragrance-05.jpg
```

## Specifications

### Primary Product Images
- **Format**: JPG or PNG
- **Aspect Ratio**: 3:4 (portrait)
- **Recommended Size**: 1200x1600px
- **Quality**: High resolution (300 DPI for prints, 72 DPI optimized for web)
- **Style**: Clean, editorial, premium product photography
- **Background**: Neutral or contextual (not busy)

### Image Guidelines

✅ **Do**:
- Use professional product photography
- Maintain consistent lighting across all products
- Show the bottle clearly and prominently
- Use neutral or luxury-appropriate backgrounds
- Ensure images are sharp and well-composed

❌ **Avoid**:
- Low resolution or pixelated images
- Inconsistent lighting or styling
- Cluttered backgrounds
- Watermarks or text overlays (use alt text for SEO)

## Alternative/Gallery Images

For multiple product images, use:
```
fragrance-01-alt.jpg
fragrance-01-detail.jpg
```

Update the `images` array in the product data to include these.

## Current Status

The website uses elegant CSS placeholders with the product name and S&M monogram. These maintain the premium aesthetic until real photography is ready.

## Optimization

Before adding images:
1. Resize to recommended dimensions
2. Compress for web (use tools like TinyPNG, Squoosh)
3. Use WebP format for better performance (Next.js handles conversion)
4. Maintain consistent style across all products

The Next.js Image component will automatically:
- Generate multiple sizes for responsive design
- Convert to modern formats (WebP, AVIF)
- Lazy load images for performance
- Optimize for different devices
