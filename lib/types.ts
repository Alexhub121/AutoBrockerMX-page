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
  /** Imagen principal (ruta dentro de /public) */
  image: string
  /** Galería de imágenes adicionales (opcional) */
  gallery?: string[]
  /** Descripción larga del vehículo */
  description: string
  /** Lista de características / equipamiento */
  features: string[]
  /** Si true, aparece destacado en la página de inicio */
  featured?: boolean
  /** Si true, ya fue vendido (se muestra como "Vendido") */
  sold?: boolean
}
