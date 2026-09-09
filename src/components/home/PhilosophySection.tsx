'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Container } from '@/components/ui/Container'

const principles = [
  {
    number: '01',
    title: 'Rooted',
    description: 'Inspired by tradition and nature.',
  },
  {
    number: '02',
    title: 'Distinct',
    description: 'Every fragrance carries its own character.',
  },
  {
    number: '03',
    title: 'Timeless',
    description: 'Designed to remain memorable beyond seasons and trends.',
  },
]

export function PhilosophySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="section-padding bg-charcoal relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 100% 0%, rgba(184,137,69,0.07) 0%, transparent 60%)',
        }}
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-18"
        >
          <p className="eyebrow mb-5">Philosophy</p>
          <h2 className="heading-xl text-balance">
            Three principles.
            <br />
            <span className="text-gold">One clear standard.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-10 lg:gap-16">
          {principles.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{
                duration: 0.7,
                delay: 0.12 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="space-y-4"
            >
              <span className="text-xs tracking-[0.3em] text-gold font-medium">
                {item.number}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-ivory">
                {item.title}
              </h3>
              <div className="w-8 h-px bg-gold/40" />
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Concise Sidr note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 md:mt-20 pt-10 border-t border-ivory/[0.06] text-center max-w-xl mx-auto"
        >
          <p className="eyebrow mb-3">Rooted in nature</p>
          <p className="body-base text-ivory/55 text-pretty">
            The name SIDR is inspired by the Sidr tree—resilient, pure, and
            timeless. A quiet connection to nature that shapes the brand.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
