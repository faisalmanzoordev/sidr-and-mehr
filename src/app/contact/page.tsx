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
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-5">A direct line to the house</p>
              <h2 className="heading-xl max-w-xl text-balance">
                Let&apos;s find the scent that feels like you.
              </h2>
              <p className="body-lg mt-6 max-w-lg text-muted">
                Tell us what you usually wear, who you are choosing for, or what
                kind of presence you want to leave behind. We will guide you to
                the right composition.
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 flex max-w-xl items-center justify-between border border-ivory/[0.12] bg-charcoal/40 p-5 transition-colors duration-500 hover:border-gold/50 md:p-6"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-sm uppercase tracking-[0.18em] text-gold">Order or enquire</span>
                    <span className="mt-1 block text-sm text-muted">WhatsApp is our quickest response</span>
                  </span>
                </span>
                <span className="text-xl text-gold transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="border-t border-ivory/[0.1] pt-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="eyebrow mb-6">Follow the journey</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Instagram', href: socialConfig.links.instagram, handle: socialConfig.displayNames.instagram },
                  { name: 'Facebook', href: socialConfig.links.facebook, handle: socialConfig.displayNames.facebook },
                  { name: 'TikTok', href: socialConfig.links.tiktok, handle: socialConfig.displayNames.tiktok },
                  { name: 'YouTube', href: socialConfig.links.youtube, handle: socialConfig.displayNames.youtube },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-ivory/[0.1] p-4 transition-colors duration-300 hover:border-gold/50"
                  >
                    <span className="block text-sm text-ivory/80">{social.name}</span>
                    <span className="mt-2 block text-[10px] uppercase tracking-[0.12em] text-muted">{social.handle}</span>
                  </a>
                ))}
              </div>
              <p className="mt-8 max-w-xs text-sm leading-relaxed text-ivory/45">
                New releases, brand notes, and the world behind each composition.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
