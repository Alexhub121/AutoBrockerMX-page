import type { Car } from "@/lib/types";

/**
 * CATÁLOGO DE AUTOS
 * =============================================================================
 * Aquí controlas TODO el catálogo. No necesitas tocar ningún otro archivo.
 *
 * ----- CÓMO PUBLICAR UN AUTO NUEVO -----
 * 1. Copia uno de los objetos { ... } de abajo (desde la "{" hasta la "}").
 * 2. Pégalo dentro del arreglo (entre los corchetes [ ]), separado por una coma.
 * 3. Cambia sus datos (id, marca, modelo, precio, etc.).
 * 4. Guarda. El catálogo se actualiza solo.
 *
 * ----- CÓMO AGREGAR VARIAS FOTOS A UN AUTO -----
 * Cada auto tiene un campo `images` que es una LISTA de fotos:
 *
 *     images: [
 *       "/cars/mi-auto-frente.webp",   <- esta es la PORTADA (se ve primero)
 *       "/cars/mi-auto-atras.webp",
 *       "/cars/mi-auto-interior.webp",
 *     ],
 *
 * Puedes poner cuantas fotos quieras: solo agrega más líneas con su ruta.
 * Todas las fotos deben estar guardadas en la carpeta /public/cars/.
 * En el catálogo se podrán ver con flechas, y en el detalle con miniaturas.
 *
 * ----- OTROS AJUSTES -----
 * - Para MARCAR como vendido:      agrega  sold: true
 * - Para DESTACAR en el inicio:    agrega  featured: true
 * =============================================================================
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
    // Varias fotos: la primera es la portada. Agrega o quita rutas aquí.
    images: [
      "/cars/nissan-versa.webp",
      "/cars/nissan-versa-2.webp",
      "/cars/nissan-versa-3.webp",
    ],
    description:
      "Nissan Versa Advance en excelente estado, un solo dueño y mantenimientos al día en agencia. Ideal para ciudad por su bajo consumo de combustible y amplio espacio interior.",
    features: [
      "Pantalla táctil",
      "Cámara de reversa",
      "Aire acondicionado",
      "Bluetooth",
      "Rines de aluminio",
    ],
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
    images: [
      "/cars/vw-jetta.webp",
      "/cars/vw-jetta-2.webp",
      "/cars/vw-jetta-3.webp",
    ],
    description:
      "Volkswagen Jetta Comfortline con acabados de lujo, motor turbo eficiente y manejo suave. Documentación en regla y listo para traspaso inmediato.",
    features: [
      "Quemacocos",
      "Asientos de piel",
      "Control de crucero",
      "Sensores de estacionamiento",
      "Faros LED",
    ],
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
    images: [
      "/cars/toyota-corolla.webp",
      "/cars/toyota-corolla-2.webp",
      "/cars/toyota-corolla-3.webp",
    ],
    description:
      "Toyota Corolla LE prácticamente nuevo, con la confiabilidad y bajo mantenimiento que caracteriza a la marca. Garantía de agencia vigente.",
    features: [
      "Apple CarPlay",
      "Android Auto",
      "Cámara de reversa",
      "Asistente de frenado",
      "Climatizador automático",
    ],
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
    // Este auto solo tiene una foto por ahora. Agrega más rutas para mostrar más.
    images: ["/cars/mazda-cx5.webp"],
    description:
      "Mazda CX-5 Grand Touring, una SUV elegante y deportiva con interiores premium. Excelente para familia y carretera, en condiciones impecables.",
    features: [
      "Piel Nappa",
      "Quemacocos panorámico",
      "Sonido Bose",
      "Cámara 360°",
      "Apertura sin llave",
    ],
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
    images: ["/cars/honda-civic.webp"],
    description:
      "Honda Civic Turbo con diseño deportivo y gran rendimiento. Motor turbo de bajo consumo, perfecto estado mecánico y estético.",
    features: [
      "Motor turbo",
      "Pantalla táctil",
      "Control de crucero",
      "Rines deportivos",
      "Modo eco",
    ],
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
    images: ["/cars/kia-rio.webp"],
    description:
      "Kia Rio Hatchback EX, compacto, ágil y muy económico. Ideal como primer auto o para uso diario en la ciudad. Llantas nuevas.",
    features: [
      "Pantalla táctil",
      "Cámara de reversa",
      "Bluetooth",
      "Volante con controles",
      "Bajo consumo",
    ],
  },
  {
    id: "X-Trail-2026",
    brand: "Nissan",
    model: "X-Trail 2.0",
    year: 2026,
    price: 215000,
    mileage: 122473,
    transmission: "Automática",
    fuel: "Gasolina",
    bodyType: "SUV",
    color: "Gris",
    location: "Aguascalientes",
    images: [
      "/cars/Xtrail-Picture/Fotos/Xtrail_FrontRaight.webp",
      "/cars/Xtrail-Picture/Fotos/Xtrail_SitBack.webp",
      "/cars/Xtrail-Picture/Fotos/Xtrail_SItBack2.webp",
      "/cars/Xtrail-Picture/Fotos/Xtrail_SItFront.webp",
    ],
    description:
      "Nissan X-Trail 2.0, vehículo versátil y potente. Ideal para aventuras y uso diario en la ciudad. Llantas nuevas.",
    features: [
      "Pantalla táctil",
      "Cámara de reversa",
      "Bluetooth",
      "Volante con controles",
      "Bajo consumo",
    ],
  },
];

/**
 * Devuelve TODOS los autos del catálogo, incluidos los vendidos.
 * Los vendidos se muestran con la etiqueta "Vendido" en la tarjeta y en el
 * detalle, donde además se deshabilita el botón de contacto.
 */
export function getAllCars(): Car[] {
  return cars;
}

/** Busca un auto por su id (slug). Devuelve undefined si no existe. */
export function getCarById(id: string): Car | undefined {
  return cars.find((car) => car.id === id);
}

/** Devuelve los autos marcados como destacados para la página de inicio */
export function getFeaturedCars(): Car[] {
  const featured = cars.filter((car) => car.featured && !car.sold);
  return featured.length > 0 ? featured : cars.slice(0, 3);
}

/** Lista de marcas únicas para los filtros */
export function getBrands(): string[] {
  return Array.from(new Set(cars.map((car) => car.brand))).sort();
}
