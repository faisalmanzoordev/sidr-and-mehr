import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { RelatedProducts } from '@/components/products/RelatedProducts'
import {
    getProductBySlug,
    getRelatedProducts,
    getAllProducts,
} from '@/data/products'
import { formatPrice } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { createWhatsAppLink } from '@/lib/whatsapp'

export async function generateStaticParams() {
    const products = getAllProducts()
    return products.map((product) => ({
        slug: product.slug,
    }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const product = getProductBySlug(slug)

    if (!product) {
        return { title: 'Product Not Found' }
    }

    return {
        title: product.name,
        description: product.description,
        openGraph: {
            title: `${product.name} | ${siteConfig.name}`,
            description: product.description,
            type: 'website',
            images: [product.image],
        },
    }
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const product = getProductBySlug(slug)

    if (!product) {
        notFound()
    }

    const relatedProducts = getRelatedProducts(product.id)
    const whatsappHref = createWhatsAppLink(
        `Hello SIDR & MEHR,\n\nI am interested in:\n${product.name}\nSize: ${product.size}\n\nPlease share availability and order details.`
    )

    return (
        <>
            <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-charcoal">
                <Container>
                    <nav aria-label="Breadcrumb" className="mb-10 md:mb-14">
                        <ol className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-muted">
                            <li>
                                <Link href="/fragrances" className="transition-colors hover:text-gold">
                                    Collection
                                </Link>
                            </li>
                            <li aria-hidden="true" className="text-gold/50">/</li>
                            <li className="text-ivory/60">{product.name}</li>
                        </ol>
                    </nav>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <div className="space-y-5">
                            <div className="product-visual border border-ivory/[0.06] shadow-2xl shadow-black/20">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                                <p className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.25em] text-ivory/70">
                                    SIDR &amp; MEHR / {String(product.order).padStart(2, '0')}
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] tracking-[0.3em] text-gold font-medium">
                                    NO. {String(product.order).padStart(2, '0')}
                                </span>
                                {product.featured && (
                                    <span className="text-[10px] tracking-[0.2em] uppercase text-gold/70 border border-gold/25 px-3 py-1">
                                        Signature
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="space-y-8 lg:pt-4">
                            <div className="space-y-4">
                                {product.fragranceFamily && (
                                    <p className="eyebrow">{product.fragranceFamily}</p>
                                )}
                                <h1 className="heading-hero text-ivory">{product.name}</h1>
                                <div className="divider-gold" />
                                <p className="max-w-md text-base italic leading-relaxed text-ivory/55">
                                    {product.shortDescription}
                                </p>
                            </div>

                            <div>
                                <p className="text-3xl font-serif text-gold">
                                    {formatPrice(product.price)}
                                </p>
                                <p className="text-[11px] tracking-[0.2em] uppercase text-muted mt-1">
                                    {product.size}
                                </p>
                            </div>

                            <p className="body-lg text-ivory/70 leading-relaxed max-w-md">
                                {product.description}
                            </p>

                            {product.topNotes && product.heartNotes && product.baseNotes && (
                                <div className="space-y-5 pt-6 border-t border-ivory/[0.08]">
                                    <h3 className="text-[11px] tracking-[0.2em] uppercase text-ivory/80">
                                        Fragrance Notes
                                    </h3>
                                    <div className="grid gap-4">
                                        <div>
                                            <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-1.5">
                                                Top
                                            </p>
                                            <p className="text-sm text-muted">
                                                {product.topNotes.join(' · ')}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-1.5">
                                                Heart
                                            </p>
                                            <p className="text-sm text-muted">
                                                {product.heartNotes.join(' · ')}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-1.5">
                                                Base
                                            </p>
                                            <p className="text-sm text-muted">
                                                {product.baseNotes.join(' · ')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                <a
                                    href={whatsappHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1"
                                >
                                    <Button variant="primary" size="lg" className="w-full">
                                        Order on WhatsApp
                                    </Button>
                                </a>
                                <Link href="/fragrances" className="flex-1">
                                    <Button variant="secondary" size="lg" className="w-full">
                                        View Collection
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <RelatedProducts products={relatedProducts} />
        </>
    )
}
