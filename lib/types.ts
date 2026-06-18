export type Transmission = "Automática" | "Manual"
export type FuelType = "Gasolina" | "Diésel" | "Híbrido" | "Eléctrico"
export type BodyType = "Sedán" | "SUV" | "Hatchback" | "Pickup"

export interface Car {
  /** Identificador único usado en la URL (slug). Ej: "nissan-versa-2021" */
  id: string
  brand: string
  model: string
  year: number
  /** Precio en pesos mexicanos (MXN) */
  price: number
  /** Kilómetros recorridos */
  mileage: number
  transmission: Transmission
  fuel: FuelType
  bodyType: BodyType
  color: string
  location: string
  /**
   * GALERÍA DE FOTOS DEL AUTO.
   * Es una lista de rutas de imágenes (dentro de la carpeta /public).
   * - La PRIMERA imagen de la lista es la foto principal (portada) que se ve
   *   primero en el catálogo y en el detalle.
   * - Puedes agregar TODAS las fotos que quieras: solo añade más rutas separadas
   *   por comas. Ej: ["/cars/auto-1.png", "/cars/auto-2.png", "/cars/auto-3.png"]
   */
  images: string[]
  /** Descripción larga del vehículo */
  description: string
  /** Lista de características / equipamiento */
  features: string[]
  /** Si true, aparece destacado en la página de inicio */
  featured?: boolean
  /** Si true, ya fue vendido (se muestra como "Vendido") */
  sold?: boolean
}
