'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { navItems, siteConfig } from '@/config/site'
import { MobileMenu } from './MobileMenu'
import { createGeneralInquiryMessage, openWhatsApp } from '@/lib/whatsapp'

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24)
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleWhatsAppClick = () => {
        openWhatsApp(createGeneralInquiryMessage())
    }

    return (
        <header
            className={cn(
                'sticky top-0 z-50 w-full transition-all duration-500 ease-out',
                isScrolled
                    ? 'bg-charcoal/90 backdrop-blur-md border-b border-ivory/[0.06] py-3'
                    : 'bg-transparent py-5'
            )}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center group"
                        aria-label={`${siteConfig.name} — Home`}
                    >
                        <div
                            className={cn(
                                'relative transition-all duration-500',
                                isScrolled ? 'w-9 h-9' : 'w-10 h-10 md:w-11 md:h-11'
                            )}
                        >
                            <Image
                                src="/brand/monogram.png"
                                alt={siteConfig.name}
                                fill
                                className="object-contain"
                                sizes="44px"
                                priority
                            />
                        </div>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-10" aria-label="Main">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'relative text-[11px] tracking-[0.2em] uppercase transition-colors duration-300',
                                    pathname === item.href
                                        ? 'text-gold'
                                        : 'text-ivory/70 hover:text-ivory'
                                )}
                            >
                                {item.label}
                                {pathname === item.href && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold/60" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:block">
                        <button
                            onClick={handleWhatsAppClick}
                            className="text-[11px] tracking-[0.2em] uppercase text-ivory/60 hover:text-gold transition-colors duration-300"
                        >
                            Order on WhatsApp
                        </button>
                    </div>

                    <MobileMenu />
                </div>
            </div>
        </header>
    )
}