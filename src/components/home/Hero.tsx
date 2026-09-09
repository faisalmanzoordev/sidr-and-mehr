'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'
import { createGeneralInquiryMessage, openWhatsApp } from '@/lib/whatsapp'

export function Hero() {
  const handleWhatsAppClick = () => {
    openWhatsApp(createGeneralInquiryMessage())
  }

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center bg-charcoal overflow-hidden grain">
      {/* Atmospheric gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(184,137,69,0.08) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(184,137,69,0.04) 0%, transparent 50%)',
        }}
      />

      {/* Fine vertical line accent */}
      <div className="absolute left-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent hidden lg:block" />

      <div className="container-custom relative z-10 pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-4xl">
          {/* Brand line */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow mb-8 md:mb-10"
          >
            {siteConfig.brandLine}
          </motion.p>

          {/* Brand name — large editorial */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display text-ivory mb-6 md:mb-8"
          >
            SIDR
            <span className="text-gold font-light"> &amp; </span>
            MEHR
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-sm md:text-base tracking-[0.28em] uppercase text-gold/90 font-medium mb-8"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="divider-gold mb-8 origin-left"
          />

          {/* Statement */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="body-lg text-ivory/65 max-w-xl mb-10 md:mb-12 font-serif italic"
          >
            {siteConfig.philosophy}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/fragrances">
              <Button variant="primary" size="lg">
                Explore Fragrances
              </Button>
            </Link>
            <Button variant="secondary" size="lg" onClick={handleWhatsAppClick}>
              Order on WhatsApp
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-muted">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
      </motion.div>
    </section>
  )
}
