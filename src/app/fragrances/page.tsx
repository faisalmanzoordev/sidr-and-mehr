import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ProductGrid } from '@/components/products/ProductGrid'
import { getAllProducts } from '@/data/products'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Fragrances',
  description: `Explore the complete collection of ${siteConfig.name} premium fragrances. Timeless scents crafted for the modern connoisseur.`,
  openGraph: {
    title: `Fragrances | ${siteConfig.name}`,
    description: `Explore the complete collection of ${siteConfig.name} premium fragrances.`,
  },
}

export default function FragrancesPage() {
  const products = getAllProducts()

  return (
    <>
      <section className="pt-28 pb-14 md:pt-36 md:pb-16 bg-charcoal">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">The Collection</p>
            <h1 className="heading-display mb-6">Fragrances</h1>
            <div className="divider-gold mb-6" />
            <p className="body-lg text-muted max-w-xl">
              Each composition is crafted with intention—from deep woody ouds to
              bright citrus notes. Timeless scents for those who value character.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-[#161514]">
        <Container>
          <ProductGrid products={products} />
        </Container>
      </section>

      <section className="section-padding-sm bg-charcoal border-t border-ivory/[0.06]">
        <Container size="narrow">
          <div className="text-center space-y-5">
            <h2 className="heading-md">Need guidance?</h2>
            <p className="body-base text-muted max-w-md mx-auto">
              Reach out on WhatsApp for personal recommendations based on your
              preferences.
            </p>
            <a
              href={`https://wa.me/${siteConfig.links.whatsapp}?text=${encodeURIComponent('Hello SIDR & MEHR, I would like help choosing a fragrance.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-medium tracking-[0.2em] uppercase bg-gold text-charcoal hover:bg-gold-light transition-all duration-500"
            >
              Get Recommendations
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
