import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/config/site'
import { socialConfig } from '@/config/social'
import { createWhatsAppLink, createGeneralInquiryMessage } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${siteConfig.name}. Order via WhatsApp or connect on social media.`,
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: `Get in touch with ${siteConfig.name}. Order via WhatsApp or connect on social media.`,
  },
}

export default function ContactPage() {
  const whatsappHref = createWhatsAppLink(createGeneralInquiryMessage())

  return (
    <>
      <section className="pt-28 pb-14 md:pt-36 md:pb-16 bg-charcoal">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <p className="eyebrow">Contact</p>
            <h1 className="heading-display">Let&apos;s Talk</h1>
            <div className="divider-gold-center" />
            <p className="body-lg text-muted max-w-md mx-auto">
              For orders, questions, or simply to discover your next fragrance.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-[#161514]">
        <Container size="narrow">
          {/* Primary: WhatsApp */}
          <div className="text-center mb-14">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center gap-4 group"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </span>
              <span className="text-sm tracking-[0.2em] uppercase text-gold">
                Order on WhatsApp
              </span>
              <span className="text-sm text-muted">Primary channel for orders &amp; inquiries</span>
            </a>
          </div>

          {/* Social */}
          <div className="border-t border-ivory/[0.06] pt-12">
            <p className="text-center text-[11px] tracking-[0.2em] uppercase text-muted mb-8">
              Follow
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {[
                { name: 'Instagram', href: socialConfig.links.instagram },
                { name: 'Facebook', href: socialConfig.links.facebook },
                { name: 'TikTok', href: socialConfig.links.tiktok },
                { name: 'YouTube', href: socialConfig.links.youtube },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
