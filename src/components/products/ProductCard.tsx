'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { ProductCardProps } from '@/types/product'
import { formatPrice } from '@/lib/utils'
import { createProductInquiryMessage, openWhatsApp } from '@/lib/whatsapp'

export function ProductCard({
  product,
  className = '',
}: ProductCardProps) {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    openWhatsApp(createProductInquiryMessage(product))
  }

  return (
    <article className={`group ${className}`}>
      <Link href={`/fragrances/${product.slug}`} className="block">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.3em] text-gold/80 font-medium">
            NO. {String(product.order).padStart(2, '0')}
          </span>
          {product.featured && (
            <span className="text-[9px] tracking-[0.2em] uppercase text-gold/60">
              Signature
            </span>
          )}
        </div>

        <div className="product-visual mb-5 border border-ivory/[0.06] group-hover:border-gold/20 transition-colors duration-500">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/[0.04] transition-colors duration-500" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl md:text-[1.35rem] font-serif font-light text-ivory group-hover:text-gold transition-colors duration-400">
            {product.name}
          </h3>
          {product.fragranceFamily && (
            <p className="text-[10px] tracking-[0.18em] uppercase text-muted">
              {product.fragranceFamily}
            </p>
          )}
          <p className="text-sm text-ivory/55 leading-relaxed line-clamp-2 pt-0.5">
            {product.shortDescription}
          </p>
          <div className="flex items-baseline justify-between pt-2">
            <div>
              <p className="text-lg font-serif text-gold">
                {formatPrice(product.price)}
              </p>
              <p className="text-[10px] tracking-wider text-muted uppercase mt-0.5">
                {product.size}
              </p>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="text-[10px] tracking-[0.18em] uppercase text-gold/80 hover:text-gold border-b border-gold/20 hover:border-gold pb-0.5 transition-all duration-300"
            >
              Order
            </button>
          </div>
        </div>
      </Link>
    </article>
  )
}