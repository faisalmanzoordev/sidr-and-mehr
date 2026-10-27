'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { ProductCardProps } from '@/types/product'
import { formatPrice } from '@/lib/utils'
import { createProductInquiryMessage, openWhatsApp } from '@/lib/whatsapp'

export function ProductCard({
  product,
  priority = false,
  className = '',
}: ProductCardProps) {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    openWhatsApp(createProductInquiryMessage(product))
  }

  return (
    <article className={`group ${className}`}>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] font-medium tracking-[0.3em] text-gold/80">
          NO. {String(product.order).padStart(2, '0')}
        </span>
        {product.featured && (
          <span className="text-[9px] uppercase tracking-[0.2em] text-gold/60">
            Signature
          </span>
        )}
      </div>

      <Link href={`/fragrances/${product.slug}`} className="group block">
        <div className="product-visual mb-5 border border-ivory/[0.06] group-hover:border-gold/20 transition-colors duration-500">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-gold/[0.04] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-serif font-light text-ivory transition-colors duration-300 group-hover:text-gold md:text-[1.35rem]">
            {product.name}
          </h3>
          {product.fragranceFamily && (
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
              {product.fragranceFamily}
            </p>
          )}
          <p className="line-clamp-2 pt-0.5 text-sm leading-relaxed text-ivory/55">
            {product.shortDescription}
          </p>
        </div>
      </Link>

      <div className="mt-4 flex items-end justify-between border-t border-ivory/[0.08] pt-3">
        <div>
          <p className="font-serif text-lg text-gold">{formatPrice(product.price)}</p>
          <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted">{product.size}</p>
        </div>
        <button
          onClick={handleWhatsAppClick}
          className="border-b border-gold/20 pb-0.5 text-[10px] uppercase tracking-[0.18em] text-gold/80 transition-all duration-300 hover:border-gold hover:text-gold"
        >
          Order via WhatsApp
        </button>
      </div>
    </article>
  )
}
