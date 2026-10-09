import type { Metadata } from "next"
import { Suspense } from "react"
import { PageHeader } from "@/components/page-header"
import { CatalogView } from "@/components/catalog/catalog-view"
import { getAllCars, getBrands } from "@/lib/cars"
import { catalogJsonLd } from "@/lib/seo"
import { JsonLd } from "@/components/json-ld"

/**
 * El catálogo se renderiza en el servidor (por request) para que el HTML
 * inicial SÍ lleve las tarjetas e imágenes de los autos (mejor SEO y LCP).
 * Es obligatorio porque CatalogView lee los filtros de la URL (useSearchParams),
 * que en una página estática vaciaría el HTML y lo pintaría solo el cliente.
 */
export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Catálogo de autos",
  description: "Explora los vehículos disponibles en AutoBroker MX. Filtra por marca, tipo y precio.",
  alternates: {
    canonical: "/catalogo",
  },
  openGraph: {
    title: "Catálogo de autos | AutoBroker MX",
    description: "Explora los vehículos disponibles en AutoBroker MX. Filtra por marca, tipo y precio.",
    url: "/catalogo",
  },
}

export default function CatalogoPage() {
  const cars = getAllCars()
  const brands = getBrands()

  return (
    <>
      {/* Lista de vehículos estructurada para motores de búsqueda */}
      <JsonLd data={catalogJsonLd(cars)} />

      <PageHeader
        title="Catálogo de autos"
        description="Explora nuestra cartera de vehículos. Cuando encuentres el que te interesa, contáctanos por WhatsApp."
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        {/* Suspense es obligatorio porque CatalogView usa useSearchParams */}
        <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-card" aria-hidden="true" />}>
          <CatalogView cars={cars} brands={brands} />
        </Suspense>
      </section>
    </>
  )
}
