import type { MetadataRoute } from "next"
import { getAllCars } from "@/lib/cars"
import { absoluteUrl } from "@/lib/seo"

/**
 * Sitemap dinámico: lista todas las páginas del sitio y las fichas de cada
 * vehículo. Next lo publica automáticamente en /sitemap.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const pages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/catalogo"), lastModified, changeFrequency: "daily", priority: 0.9 },
    { url: absoluteUrl("/vende"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/nosotros"), lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: absoluteUrl("/contacto"), lastModified, changeFrequency: "monthly", priority: 0.7 },
  ]

  const cars: MetadataRoute.Sitemap = getAllCars().map((car) => ({
    url: absoluteUrl(`/catalogo/${car.id}`),
    lastModified,
    changeFrequency: "daily",
    // Los autos vendidos bajan de prioridad pero siguen indexables
    priority: car.sold ? 0.4 : 0.8,
  }))

  return [...pages, ...cars]
}
