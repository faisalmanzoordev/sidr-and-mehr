'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { navItems, siteConfig } from '@/config/site'
import { createGeneralInquiryMessage, openWhatsApp } from '@/lib/whatsapp'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleWhatsAppClick = () => {
    openWhatsApp(createGeneralInquiryMessage())
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden relative z-[60] flex flex-col justify-center items-center w-10 h-10"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            'block w-5 h-px bg-ivory transition-all duration-300 origin-center',
            isOpen && 'rotate-45 translate-y-[5px]'
          )}
        />
        <span
          className={cn(
            'block w-5 h-px bg-ivory transition-all duration-300 my-[4px]',
            isOpen && 'opacity-0 scale-x-0'
          )}
        />
        <span
          className={cn(
            'block w-5 h-px bg-ivory transition-all duration-300 origin-center',
            isOpen && '-rotate-45 -translate-y-[5px]'
          )}
        />
      </button>

      {/* Full-screen drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-opacity duration-500',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-charcoal" />
        <div className="relative h-full flex flex-col items-center justify-center px-8">
          <div className="text-center mb-14">
            <p className="text-2xl font-serif text-gold tracking-wide mb-2">
              {siteConfig.name}
            </p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <nav className="flex flex-col items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-2xl font-serif tracking-wide transition-colors duration-300',
                  pathname === item.href
                    ? 'text-gold'
                    : 'text-ivory/90 hover:text-gold'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={handleWhatsAppClick}
            className="mt-14 text-[11px] tracking-[0.2em] uppercase text-gold border border-gold/50 px-8 py-3.5 hover:bg-gold hover:text-charcoal transition-all duration-500"
          >
            Order on WhatsApp
          </button>
        </div>
      </div>
    </>
  )
}
