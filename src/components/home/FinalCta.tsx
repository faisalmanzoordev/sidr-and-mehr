'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function FinalCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="section-padding bg-charcoal border-t border-ivory/[0.06]">
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.75 }}
          className="text-center space-y-7"
        >
          <h2 className="heading-lg text-balance">
            Discover your signature scent.
          </h2>
          <p className="body-base text-muted max-w-md mx-auto">
            Explore the collection and find a fragrance that feels unmistakably
            yours.
          </p>
          <div className="pt-2">
            <Link href="/fragrances">
              <Button variant="primary" size="lg">
                Explore Fragrances
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
