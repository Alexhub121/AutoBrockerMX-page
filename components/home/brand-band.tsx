import { getBrands } from "@/lib/cars"

const verbs = ["Publicamos", "Promocionamos", "Filtramos", "Cerramos"]

/** Repite la lista para que la banda nunca muestre un hueco al desplazarse. */
function repeat<T>(items: T[], times: number): T[] {
  return Array.from({ length: times }, () => items).flat()
}

/**
 * Dos bandas de texto gigante que se deslizan en sentidos opuestos según el
 * scroll: arriba las marcas del catálogo (contorno), abajo lo que hacemos.
 * Es decorativa: el lector de pantalla recibe una sola frase.
 */
export function BrandBand() {
  const brands = getBrands()

  return (
    <section className="bg-floor overflow-hidden border-b border-border/70 py-14 md:py-20" aria-label="Marcas que manejamos">
      <p className="sr-only">Manejamos autos de {brands.join(", ")}. Publicamos, promocionamos, filtramos y cerramos.</p>
      <div aria-hidden="true" className="space-y-2 md:space-y-4">
        <div className="band-track flex w-max gap-10 whitespace-nowrap md:gap-16">
          {repeat(brands, 4).map((brand, i) => (
            <span
              key={brand + i}
              className="font-display text-7xl text-transparent [-webkit-text-stroke:1px_oklch(0.42_0.006_264)] md:text-[9rem]"
            >
              {brand}
            </span>
          ))}
        </div>
        <div className="band-track-reverse flex w-max items-center gap-10 whitespace-nowrap md:gap-16">
          {repeat(verbs, 5).map((verb, i) => (
            <span key={verb + i} className="flex items-center gap-10 md:gap-16">
              <span className="font-display text-7xl text-foreground md:text-[9rem]">{verb}</span>
              <span className="h-3 w-3 rounded-full bg-primary md:h-4 md:w-4" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
