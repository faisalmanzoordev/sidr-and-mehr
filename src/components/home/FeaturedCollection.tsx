'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/products/ProductCard'
import { getFeaturedProducts } from '@/data/products'

export function FeaturedCollection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const featuredProducts = getFeaturedProducts()

  return (
    <section ref={ref} className="section-padding bg-[#161514]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="eyebrow mb-4">The collection / 01—05</p>
            <h2 className="heading-xl">Featured Fragrances</h2>
          </div>
          <p className="body-base text-muted max-w-sm md:text-right">
            Carefully composed scents for those who value character over trend.
          </p>
        </motion.div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-16">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={index === 0 ? 'lg:col-span-2' : 'lg:col-span-1'}
            >
              <ProductCard product={product} priority={index < 2} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 md:mt-16 text-center"
        >
          <Link href="/fragrances">
            <Button variant="secondary" size="lg">
              View All Fragrances
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
