'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'
import { createGeneralInquiryMessage, openWhatsApp } from '@/lib/whatsapp'

export function Hero() {
  const handleWhatsAppClick = () => {
    openWhatsApp(createGeneralInquiryMessage())
  }

  return (
    <section className="relative isolate min-h-[min(860px,100svh)] overflow-hidden bg-charcoal grain">
      {/* The image is treated as atmosphere, rather than a second content column. */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-y-0 right-0 w-full lg:w-[63%]"
      >
        <Image
          src="/images/products/fragrance-05.png"
          alt="A fragrance bottle surrounded by natural elements"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 63vw"
          className="object-cover object-center opacity-45 lg:opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/75 to-charcoal/20 lg:via-charcoal/35 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/45" />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_75%_35%,rgba(184,137,69,0.13),transparent_65%)]" />
      <div className="absolute left-[8%] top-0 bottom-0 hidden w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent lg:block" />

      <div className="container-custom relative z-10 flex min-h-[min(860px,100svh)] items-end pt-32 pb-16 md:pb-20">
        <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
          <div className="max-w-3xl lg:col-span-7">
          {/* Brand line */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow mb-7 md:mb-9"
          >
            {siteConfig.brandLine}
          </motion.p>

          {/* Brand name — large editorial */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display text-ivory mb-5 md:mb-7"
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
            className="max-w-lg text-sm font-medium uppercase tracking-[0.28em] text-gold/90 md:text-base"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="divider-gold mb-7 mt-7 origin-left"
          />

          {/* Statement */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="body-lg mb-9 max-w-xl font-serif italic text-ivory/70 md:mb-11"
          >
            {siteConfig.philosophy}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col gap-3 sm:flex-row"
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

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hidden justify-self-end border-l border-gold/35 pl-5 lg:block lg:col-span-3 lg:mb-2"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold">The collection</p>
            <p className="mt-3 max-w-[180px] font-serif text-2xl leading-tight text-ivory">
              Character, composed with intention.
            </p>
            <Link
              href="/fragrances"
              className="link-hover mt-6 text-[10px] tracking-[0.2em] text-ivory/65"
            >
              Explore the house <span aria-hidden="true">↗</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-muted">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
      </motion.div>
    </section>
  )
}
