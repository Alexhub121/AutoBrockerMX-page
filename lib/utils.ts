import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { WHATSAPP_NUMBER } from '@/lib/constants'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Formatea un número como precio en pesos mexicanos. Ej: 268000 -> "$268,000" */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(price)
}

/** Formatea kilometraje. Ej: 48000 -> "48,000 km" */
export function formatMileage(mileage: number): string {
  return `${new Intl.NumberFormat('es-MX').format(mileage)} km`
}

/**
 * Genera un enlace de WhatsApp (wa.me) con un mensaje pre-llenado.
 * @param message Texto que aparecerá escrito en el chat al abrirlo.
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
