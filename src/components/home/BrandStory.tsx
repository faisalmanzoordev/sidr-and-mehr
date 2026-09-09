'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function BrandStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding bg-ivory text-charcoal">
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-7"
        >
          <p className="eyebrow !text-gold-dark">Our Story</p>

          <h2 className="heading-xl !text-charcoal text-balance">
            From a small stall
            <br />
            to a refined vision
          </h2>

          <div className="divider-gold-center" />

          <p className="body-base !text-charcoal/75 max-w-xl mx-auto text-pretty">
            SIDR &amp; MEHR began with a simple love for fragrance and a small
            retail stall. Today, that same passion is shaping a modern fragrance
            brand rooted in tradition and crafted with intention.
          </p>

          <div className="pt-2">
            <Link href="/about">
              <Button
                variant="ghost"
                className="!text-charcoal/80 hover:!text-gold-dark border-b border-charcoal/20 hover:border-gold-dark rounded-none px-0 py-2"
              >
                Read Our Story
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
