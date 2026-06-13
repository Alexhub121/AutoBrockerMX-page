import type { Car } from "@/lib/types"

/**
 * CATÁLOGO DE AUTOS
 * -----------------------------------------------------------------------------
 * Para PUBLICAR un auto nuevo: copia uno de los objetos de abajo, pégalo dentro
 * del arreglo, cambia los datos y la imagen, y guarda. El catálogo se actualiza
 * solo. La imagen debe estar en la carpeta /public/cars/.
 *
 * Para OCULTAR/MARCAR como vendido: agrega `sold: true` al auto.
 * Para DESTACAR en la página de inicio: agrega `featured: true`.
 */
export const cars: Car[] = [
  {
    id: "nissan-versa-2021",
    brand: "Nissan",
    model: "Versa Advance",
    year: 2021,
    price: 268000,
    mileage: 48000,
    transmission: "Automática",
    fuel: "Gasolina",
    bodyType: "Sedán",
    color: "Plata",
    location: "Aguascalientes",
    image: "/cars/nissan-versa.png",
    description:
      "Nissan Versa Advance en excelente estado, un solo dueño y mantenimientos al día en agencia. Ideal para ciudad por su bajo consumo de combustible y amplio espacio interior.",
    features: ["Pantalla táctil", "Cámara de reversa", "Aire acondicionado", "Bluetooth", "Rines de aluminio"],
    featured: true,
  },
  {
    id: "volkswagen-jetta-2020",
    brand: "Volkswagen",
    model: "Jetta Comfortline",
    year: 2020,
    price: 315000,
    mileage: 62000,
    transmission: "Automática",
    fuel: "Gasolina",
    bodyType: "Sedán",
    color: "Gris",
    location: "Aguascalientes",
    image: "/cars/vw-jetta.png",
    description:
      "Volkswagen Jetta Comfortline con acabados de lujo, motor turbo eficiente y manejo suave. Documentación en regla y listo para traspaso inmediato.",
    features: ["Quemacocos", "Asientos de piel", "Control de crucero", "Sensores de estacionamiento", "Faros LED"],
    featured: true,
  },
  {
    id: "toyota-corolla-2022",
    brand: "Toyota",
    model: "Corolla LE",
    year: 2022,
    price: 389000,
    mileage: 31000,
    transmission: "Automática",
    fuel: "Gasolina",
    bodyType: "Sedán",
    color: "Blanco",
    location: "Aguascalientes",
    image: "/cars/toyota-corolla.png",
    description:
      "Toyota Corolla LE prácticamente nuevo, con la confiabilidad y bajo mantenimiento que caracteriza a la marca. Garantía de agencia vigente.",
    features: ["Apple CarPlay", "Android Auto", "Cámara de reversa", "Asistente de frenado", "Climatizador automático"],
    featured: true,
  },
  {
    id: "mazda-cx5-2021",
    brand: "Mazda",
    model: "CX-5 Grand Touring",
    year: 2021,
    price: 445000,
    mileage: 39000,
    transmission: "Automática",
    fuel: "Gasolina",
    bodyType: "SUV",
    color: "Rojo",
    location: "Aguascalientes",
    image: "/cars/mazda-cx5.png",
    description:
      "Mazda CX-5 Grand Touring, una SUV elegante y deportiva con interiores premium. Excelente para familia y carretera, en condiciones impecables.",
    features: ["Piel Nappa", "Quemacocos panorámico", "Sonido Bose", "Cámara 360°", "Apertura sin llave"],
  },
  {
    id: "honda-civic-2019",
    brand: "Honda",
    model: "Civic Turbo",
    year: 2019,
    price: 329000,
    mileage: 71000,
    transmission: "Automática",
    fuel: "Gasolina",
    bodyType: "Sedán",
    color: "Negro",
    location: "Aguascalientes",
    image: "/cars/honda-civic.png",
    description:
      "Honda Civic Turbo con diseño deportivo y gran rendimiento. Motor turbo de bajo consumo, perfecto estado mecánico y estético.",
    features: ["Motor turbo", "Pantalla táctil", "Control de crucero", "Rines deportivos", "Modo eco"],
  },
  {
    id: "kia-rio-2020",
    brand: "Kia",
    model: "Rio Hatchback EX",
    year: 2020,
    price: 234000,
    mileage: 55000,
    transmission: "Manual",
    fuel: "Gasolina",
    bodyType: "Hatchback",
    color: "Azul",
    location: "Aguascalientes",
    image: "/cars/kia-rio.png",
    description:
      "Kia Rio Hatchback EX, compacto, ágil y muy económico. Ideal como primer auto o para uso diario en la ciudad. Llantas nuevas.",
    features: ["Pantalla táctil", "Cámara de reversa", "Bluetooth", "Volante con controles", "Bajo consumo"],
  },
]

/** Devuelve todos los autos disponibles (no vendidos) */
export function getAllCars(): Car[] {
  return cars
}

/** Busca un auto por su id (slug). Devuelve undefined si no existe. */
export function getCarById(id: string): Car | undefined {
  return cars.find((car) => car.id === id)
}

/** Devuelve los autos marcados como destacados para la página de inicio */
export function getFeaturedCars(): Car[] {
  const featured = cars.filter((car) => car.featured && !car.sold)
  return featured.length > 0 ? featured : cars.slice(0, 3)
}

/** Lista de marcas únicas para los filtros */
export function getBrands(): string[] {
  return Array.from(new Set(cars.map((car) => car.brand))).sort()
}
