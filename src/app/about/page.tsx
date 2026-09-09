import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Our Story',
  description: `Learn about ${siteConfig.name}, our philosophy, and our journey in creating timeless, distinct fragrances.`,
  openGraph: {
    title: `Our Story | ${siteConfig.name}`,
    description: `Learn about ${siteConfig.name} and our journey in creating timeless fragrances.`,
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-charcoal">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <p className="eyebrow">Our Story</p>
            <h1 className="heading-display">
              Timeless. Distinct.
              <br />
              <span className="text-gold">Unmistakable.</span>
            </h1>
            <div className="divider-gold-center" />
          </div>
        </Container>
      </section>

      {/* Origin */}
      <section className="section-padding bg-ivory text-charcoal">
        <Container size="narrow">
          <div className="space-y-8 max-w-2xl mx-auto">
            <div className="text-center">
              <h2 className="heading-xl !text-charcoal mb-4">The Beginning</h2>
              <div className="divider-gold-center mb-8" />
            </div>
            <div className="space-y-5 body-base !text-charcoal/75 text-pretty">
              <p>
                SIDR &amp; MEHR began from a small, personal journey—a modest
                retail stall devoted to the world of fragrance. What started as a
                simple endeavor, rooted in a love for scent and tradition, has
                grown into a clear ambition to build something refined.
              </p>
              <p>
                Our brand is young, but our vision is clear: to create fragrances
                that honor timeless traditions while embracing modern
                sophistication. We believe in simplicity, craftsmanship, and
                staying connected to our roots.
              </p>
              <p className="font-serif italic text-lg !text-gold-dark pt-2">
                We are not claiming decades of heritage. We are building something
                new—with honesty, passion, and respect for the art of perfume.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Sidr */}
      <section className="section-padding bg-charcoal">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="eyebrow">The Name</p>
              <h2 className="heading-xl">
                Rooted in Nature,
                <br />
                Refined for Today
              </h2>
              <div className="divider-gold" />
              <div className="space-y-5 body-base text-ivory/70 max-w-lg">
                <p>
                  The name <span className="text-gold">SIDR</span> is inspired by
                  the Sidr tree—also known as the jujube tree—a symbol of
                  resilience, purity, and quiet natural beauty. For generations its
                  leaves have been treasured for their simplicity and connection
                  to the land.
                </p>
                <p>
                  This connection forms the quiet heart of our philosophy. We
                  craft fragrances that feel both familiar and distinct—scents
                  that honor tradition while meeting the tastes of today.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-square border border-gold/15 flex flex-col items-center justify-center text-center p-10 bg-[#1A1918]">
                <div className="w-16 h-16 border border-gold/30 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-gold/80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.2}
                      d="M12 3c.5 2.5 1.5 4.5 3 6.5 1 1.3 2 2.5 2.5 4-.5 1.5-1.5 2.5-3 3.5-1.5 1-3 1.5-4.5 1.5s-3-.5-4.5-1.5c-1.5-1-2.5-2-3-3.5.5-1.5 1.5-2.7 2.5-4C9.5 7.5 10.5 5.5 11 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-gold mb-2">The Sidr Tree</h3>
                <p className="text-xs text-muted leading-relaxed max-w-[200px]">
                  Resilience · Purity · Timeless presence
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="section-padding bg-ivory text-charcoal">
        <Container>
          <div className="text-center mb-14">
            <h2 className="heading-xl !text-charcoal mb-4">Our Approach</h2>
            <p className="body-base !text-charcoal/60 max-w-md mx-auto">
              Every fragrance is a carefully composed blend of tradition and
              intention.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                n: '01',
                t: 'Quality',
                d: 'Premium ingredients and meticulous attention to every composition.',
              },
              {
                n: '02',
                t: 'Authenticity',
                d: 'An honest story. No false heritage—only genuine passion for scent.',
              },
              {
                n: '03',
                t: 'Timelessness',
                d: 'Scents designed to endure—fragrances that will not feel dated.',
              },
            ].map((item) => (
              <div key={item.n} className="space-y-4 text-center md:text-left">
                <span className="text-[11px] tracking-[0.3em] text-gold-dark font-medium">
                  {item.n}
                </span>
                <h3 className="text-xl font-serif !text-charcoal">{item.t}</h3>
                <div className="w-8 h-px bg-gold/50 mx-auto md:mx-0" />
                <p className="text-sm !text-charcoal/65 leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing */}
      <section className="section-padding bg-charcoal">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <h2 className="heading-lg">This is just the beginning.</h2>
            <p className="body-base text-muted max-w-md mx-auto">
              We are building a brand that values craft, tradition, and modern
              elegance. Join us on this journey.
            </p>
            <a
              href={`https://wa.me/${siteConfig.links.whatsapp}?text=${encodeURIComponent('Hello SIDR & MEHR, I would like to know more about your brand.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-medium tracking-[0.2em] uppercase bg-gold text-charcoal hover:bg-gold-light transition-all duration-500"
            >
              Connect With Us
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
