import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fija la raíz del proyecto. Sin esto, Next detecta el package-lock.json de la
  // carpeta contenedora como raíz del workspace e intenta usar pnpm (no instalado).
  turbopack: {
    root: __dirname,
  },
  typescript: {
    // Verificado con `npx tsc --noEmit`: sin errores. Si vuelve a haber, que el
    // build falle en lugar de publicar código con tipos rotos.
    ignoreBuildErrors: false,
  },
  images: {
    // Optimización activa: Next convierte a AVIF/WebP y genera variantes
    // (srcset) según el tamaño del dispositivo. Con `unoptimized: true` se
    // servía el archivo original de 1024px aunque la tarjeta mida 378px.
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 758, 1024, 1280, 1600],
  },
}

export default nextConfig
