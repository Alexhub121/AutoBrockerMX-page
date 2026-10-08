import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/seo"

/**
 * robots.txt: permite rastrear todo el sitio público y apunta a Google
 * al sitemap. Publicado automáticamente en /robots.txt.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  }
}
