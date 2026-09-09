import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    minimumFractionDigits: 0,
  }).format(price)
}

export function formatWhatsAppNumber(number: string): string {
  const cleaned = number.replace(/\D/g, '')
  return cleaned.startsWith('92') ? cleaned : `92${cleaned}`
}
