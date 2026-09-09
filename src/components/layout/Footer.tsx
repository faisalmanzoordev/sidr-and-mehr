import Link from 'next/link'
import { siteConfig, navItems } from '@/config/site'
import { socialConfig } from '@/config/social'
import { Container } from '@/components/ui/Container'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal border-t border-ivory/[0.06]">
      <Container>
        <div className="pt-16 md:pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-5 space-y-5">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif text-gold tracking-wide">
                  {siteConfig.name}
                </h3>
                <p className="mt-2 text-[11px] tracking-[0.25em] uppercase text-gold/70">
                  {siteConfig.tagline}
                </p>
              </div>
              <p className="text-sm text-muted leading-relaxed max-w-sm">
                {siteConfig.brandLine}
              </p>
              <p className="text-sm text-ivory/50 leading-relaxed max-w-sm">
                {siteConfig.philosophy}
              </p>
            </div>

            {/* Navigate */}
            <div className="md:col-span-3">
              <h4 className="text-[11px] tracking-[0.2em] uppercase text-ivory/60 mb-5">
                Navigate
              </h4>
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted hover:text-gold transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div className="md:col-span-4">
              <h4 className="text-[11px] tracking-[0.2em] uppercase text-ivory/60 mb-5">
                Connect
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/${socialConfig.links.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-gold transition-colors duration-300"
                >
                  WhatsApp
                </a>
                <a
                  href={socialConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-gold transition-colors duration-300"
                >
                  Instagram
                </a>
                <a
                  href={socialConfig.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-gold transition-colors duration-300"
                >
                  Facebook
                </a>
                <a
                  href={socialConfig.links.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-gold transition-colors duration-300"
                >
                  TikTok
                </a>
                <a
                  href={socialConfig.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-gold transition-colors duration-300"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory/[0.06] py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted/70">
            {socialConfig.displayNames.instagram}
          </p>
        </div>
      </Container>
    </footer>
  )
}
