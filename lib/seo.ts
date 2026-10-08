import type { Car } from "@/lib/types"
import { COMPANY, WHATSAPP_NUMBER, SOCIAL_LINKS } from "@/lib/constants"

/**
 * Configuración SEO del sitio.
 *
 * IMPORTANTE: cuando se compre el dominio propio (autobrokermx.com),
 * cambia SITE_URL por ese dominio y haz redeploy. De aquí salen las URLs
 * absolutas del sitemap, el canonical y las etiquetas OpenGraph.
 *
 * Mientras tanto se usa la URL temporal de Vercel, que sí está en línea.
 */
export const SITE_URL = "https://auto-brocker-mx-page.vercel.app"

/** URL absoluta a partir de una ruta ("/catalogo" -> "https://.../catalogo") */
export function absoluteUrl(path: string = "/"): string {
  return new URL(path, SITE_URL).toString()
}

/** Imagen genérica para compartir en redes (1200×630) */
export const OG_IMAGE = "/brand/og-cover.png"

/** Datos estructurados del negocio (aparece en resultados de Google) */
export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: COMPANY.name,
    description: COMPANY.description,
    url: SITE_URL,
    image: absoluteUrl(OG_IMAGE),
    email: COMPANY.email,
    telephone: `+${WHATSAPP_NUMBER}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Aguascalientes",
      addressRegion: "Aguascalientes",
      addressCountry: "MX",
    },
    areaServed: {
      "@type": "Country",
      name: "México",
    },
    sameAs: Object.values(SOCIAL_LINKS),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "ventas y asesoría",
      telephone: `+${WHATSAPP_NUMBER}`,
      availableLanguage: ["es-MX"],
    },
  }
}

/** Breadcrumb para la ficha de un vehículo */
export function carBreadcrumbJsonLd(car: Car) {
  const title = `${car.brand} ${car.model} ${car.year}`
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Catálogo", item: absoluteUrl("/catalogo") },
      { "@type": "ListItem", position: 3, name: title, item: absoluteUrl(`/catalogo/${car.id}`) },
    ],
  }
}

/**
 * Datos estructurados del vehículo (schema.org "Car").
 * Permiten que Google muestre precio, kilometraje y disponibilidad
 * directamente en los resultados de búsqueda.
 */
export function carJsonLd(car: Car) {
  const title = `${car.brand} ${car.model} ${car.year}`
  return {
    "@context": "https://schema.org",
    "@type": "Car",
    name: title,
    url: absoluteUrl(`/catalogo/${car.id}`),
    image: car.images.map(absoluteUrl),
    description: car.description,
    brand: { "@type": "Brand", name: car.brand },
    model: car.model,
    vehicleModelDate: car.year,
    vehicleBodyType: car.bodyType,
    color: car.color,
    fuelType: car.fuel,
    vehicleTransmission: car.transmission,
    mileageFromOdometer: {
      "@type": "QuantitativeValue",
      value: car.mileage,
      unitCode: "KMT",
    },
    offers: {
      "@type": "Offer",
      price: car.price,
      priceCurrency: "MXN",
      url: absoluteUrl(`/catalogo/${car.id}`),
      availability: car.sold
        ? "https://schema.org/SoldOut"
        : "https://schema.org/InStock",
      itemCondition: "https://schema.org/UsedCondition",
      seller: {
        "@type": "Organization",
        name: COMPANY.name,
        url: SITE_URL,
      },
    },
  }
}

/** Lista de vehículos del catálogo (para /catalogo) */
export function catalogJsonLd(cars: Car[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Catálogo de autos disponibles",
    url: absoluteUrl("/catalogo"),
    numberOfItems: cars.length,
    itemListElement: cars.map((car, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/catalogo/${car.id}`),
      name: `${car.brand} ${car.model} ${car.year}`,
    })),
  }
}
