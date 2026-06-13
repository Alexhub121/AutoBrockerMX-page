/**
 * Datos de la empresa y configuración global del sitio.
 * Cambia aquí el número de WhatsApp, redes sociales y datos de contacto.
 */

export const COMPANY = {
  name: "AutoBroker MX",
  tagline: "Intermediación automotriz profesional",
  description:
    "Conectamos a propietarios de vehículos con compradores en todo México. Vende tu auto de forma rápida, segura y sin complicaciones.",
  email: "contacto@autobrokermx.com",
  city: "Aguascalientes, México",
  coverage: "Servicio en toda la República Mexicana",
} as const

/** Número de WhatsApp en formato internacional sin signos ni espacios (524494529700) */
export const WHATSAPP_NUMBER = "524494529700"

/** Número en formato legible para mostrar en pantalla */
export const WHATSAPP_DISPLAY = "+52 449 452 9700"

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/autobrokermx",
  tiktok: "https://tiktok.com/@autobrokermx",
  facebook: "https://facebook.com/autobrokermx",
} as const

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Vende tu auto", href: "/vende" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const
