import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ProductGrid } from '@/components/products/ProductGrid'
import { getAllProducts } from '@/data/products'
import { siteConfig } from '@/config/site'
import { createWhatsAppLink } from '@/lib/whatsapp'

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
  const recommendationHref = createWhatsAppLink(
    'Hello SIDR & MEHR, I would like help choosing a fragrance.'
  )

  return (
    <>
      <section className="pt-28 pb-14 md:pt-36 md:pb-16 bg-charcoal">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="max-w-2xl lg:col-span-8">
            <p className="eyebrow mb-5">The Collection</p>
            <h1 className="heading-display mb-6">Fragrances</h1>
            <div className="divider-gold mb-6" />
            <p className="body-lg text-muted max-w-xl">
              Each composition is crafted with intention—from deep woody ouds to
              bright citrus notes. Timeless scents for those who value character.
            </p>
            </div>
            <div className="grid grid-cols-2 gap-6 border-t border-ivory/[0.12] pt-5 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <p className="font-serif text-3xl text-gold">05</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted">Compositions</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold">50ml</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted">Per bottle</p>
              </div>
            </div>
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
              href={recommendationHref}
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
