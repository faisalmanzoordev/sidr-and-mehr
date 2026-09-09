# Brand Assets

Place your official SIDR & MEHR logo files here:

- **logo-full.png** - Full logo with wordmark and tagline (for footer and large displays)
- **monogram.png** - Compact monogram/symbol (for navbar)

## Recommended Specifications

### Logo Full
- Format: PNG with transparency
- Minimum width: 300px
- Aspect ratio: Maintain original proportions
- Color: Gold on transparent background (or full color version)

### Monogram
- Format: PNG with transparency
- Size: 200x200px (square)
- Use: Navbar, favicon, social media
- Color: Gold on transparent background

## Current Status

The website currently uses CSS-based placeholder logos with the "S&M" initials. These will be replaced automatically once you add your official logo files here.

## Usage in Code

The logos are referenced in:
- `src/components/layout/Navbar.tsx` - Uses monogram
- `src/components/layout/Footer.tsx` - Uses full logo

Simply add the files here and they'll be loaded via Next.js Image component.
