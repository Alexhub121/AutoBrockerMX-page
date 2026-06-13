import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { CatalogView } from "@/components/catalog/catalog-view"
import { getAllCars, getBrands } from "@/lib/cars"

export const metadata: Metadata = {
  title: "Catálogo de autos",
  description: "Explora los vehículos disponibles en AutoBroker MX. Filtra por marca, tipo y precio.",
}

export default function CatalogoPage() {
  const cars = getAllCars()
  const brands = getBrands()

  return (
    <>
      <PageHeader
        title="Catálogo de autos"
        description="Explora nuestra cartera de vehículos. Cuando encuentres el que te interesa, contáctanos por WhatsApp."
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <CatalogView cars={cars} brands={brands} />
      </section>
    </>
  )
}
