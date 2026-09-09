'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Container } from '@/components/ui/Container'

export function BeyondFragrance() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding-sm bg-ivory text-charcoal">
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-6"
        >
          <p className="eyebrow !text-gold-dark">Looking Ahead</p>
          <h2 className="heading-lg !text-charcoal">Beyond Fragrance</h2>
          <div className="divider-gold-center" />
          <p className="body-base !text-charcoal/70 max-w-lg mx-auto text-pretty">
            SIDR &amp; MEHR begins with fragrance. In time, the brand will extend
            into accessories and lifestyle—guided by the same standard of
            character and lasting quality.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-3">
            <span className="text-[10px] tracking-[0.2em] uppercase text-charcoal/40 border border-charcoal/12 px-4 py-2">
              Accessories — Coming Soon
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-charcoal/40 border border-charcoal/12 px-4 py-2">
              Lifestyle — Coming Soon
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
