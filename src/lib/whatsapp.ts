import { formatWhatsAppNumber } from './utils'
import type { Product } from '@/types/product'

export function getWhatsAppNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923237814688'
}

export function createWhatsAppLink(message: string): string {
  const number = formatWhatsAppNumber(getWhatsAppNumber())
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${encodedMessage}`
}

export function createProductInquiryMessage(product: Product): string {
  return `Hello SIDR & MEHR,

I am interested in:
${product.name}
Size: ${product.size}

Please share availability and order details.`
}

export function createGeneralInquiryMessage(): string {
  return `Hello SIDR & MEHR,

I would like to know more about your fragrances.`
}

export function openWhatsApp(message: string): void {
  const link = createWhatsAppLink(message)
  window.open(link, '_blank', 'noopener,noreferrer')
}
