"use client"

import { useMemo, useState } from "react"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CarCard } from "@/components/car-card"
import type { Car } from "@/lib/types"

type SortOption = "recent" | "price-asc" | "price-desc" | "year-desc"

const ALL = "all"

export function CatalogView({ cars, brands }: { cars: Car[]; brands: string[] }) {
  const [query, setQuery] = useState("")
  const [brand, setBrand] = useState<string>(ALL)
  const [bodyType, setBodyType] = useState<string>(ALL)
  const [maxPrice, setMaxPrice] = useState<string>(ALL)
  const [sort, setSort] = useState<SortOption>("recent")

  const bodyTypes = useMemo(() => Array.from(new Set(cars.map((c) => c.bodyType))).sort(), [cars])

  const priceRanges = [
    { label: "Hasta $250,000", value: "250000" },
    { label: "Hasta $350,000", value: "350000" },
    { label: "Hasta $450,000", value: "450000" },
    { label: "Hasta $600,000", value: "600000" },
  ]

  // Mapas valor -> etiqueta para que el Select (base-ui) muestre el texto correcto
  const brandItems = useMemo<Record<string, string>>(
    () => ({ [ALL]: "Todas las marcas", ...Object.fromEntries(brands.map((b) => [b, b])) }),
    [brands],
  )
  const bodyTypeItems = useMemo<Record<string, string>>(
    () => ({ [ALL]: "Todos los tipos", ...Object.fromEntries(bodyTypes.map((b) => [b, b])) }),
    [bodyTypes],
  )
  const priceItems = useMemo<Record<string, string>>(
    () => ({ [ALL]: "Sin límite", ...Object.fromEntries(priceRanges.map((r) => [r.value, r.label])) }),
    [],
  )
  const sortItems: Record<SortOption, string> = {
    recent: "Más recientes",
    "price-asc": "Precio: menor a mayor",
    "price-desc": "Precio: mayor a menor",
    "year-desc": "Año más nuevo",
  }

  const filtered = useMemo(() => {
    let result = cars.filter((car) => {
      const matchesQuery =
        query.trim() === "" ||
        `${car.brand} ${car.model} ${car.year}`.toLowerCase().includes(query.toLowerCase())
      const matchesBrand = brand === ALL || car.brand === brand
      const matchesBody = bodyType === ALL || car.bodyType === bodyType
      const matchesPrice = maxPrice === ALL || car.price <= Number(maxPrice)
      return matchesQuery && matchesBrand && matchesBody && matchesPrice
    })

    result = [...result].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "year-desc":
          return b.year - a.year
        default:
          return 0
      }
    })

    return result
  }, [cars, query, brand, bodyType, maxPrice, sort])

  const hasActiveFilters = query !== "" || brand !== ALL || bodyType !== ALL || maxPrice !== ALL

  const clearFilters = () => {
    setQuery("")
    setBrand(ALL)
    setBodyType(ALL)
    setMaxPrice(ALL)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      {/* Filtros */}
      <aside className="lg:sticky lg:top-20 lg:self-start">
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <SlidersHorizontal className="h-4 w-4" />
            Filtros
          </div>

          <div className="mt-5 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="search">Buscar</Label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Marca o modelo"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Marca</Label>
              <Select items={brandItems} value={brand} onValueChange={setBrand}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Todas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL}>Todas las marcas</SelectItem>
                  {brands.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Tipo</Label>
              <Select items={bodyTypeItems} value={bodyType} onValueChange={setBodyType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Todos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL}>Todos los tipos</SelectItem>
                  {bodyTypes.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Precio máximo</Label>
              <Select items={priceItems} value={maxPrice} onValueChange={setMaxPrice}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sin límite" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL}>Sin límite</SelectItem>
                  {priceRanges.map((r) => (
                    <SelectItem key={r.value} value={r.value}>
                      {r.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearFilters} className="w-full">
                <X className="h-4 w-4" />
                Limpiar filtros
              </Button>
            )}
          </div>
        </div>
      </aside>

      {/* Resultados */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "vehículo" : "vehículos"} disponibles
          </p>
          <div className="flex items-center gap-2">
            <Label htmlFor="sort" className="text-sm text-muted-foreground">
              Ordenar:
            </Label>
            <Select items={sortItems} value={sort} onValueChange={(v) => setSort(v as SortOption)}>
              <SelectTrigger id="sort" className="w-[190px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Más recientes</SelectItem>
                <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
                <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
                <SelectItem value="year-desc">Año más nuevo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-lg border border-dashed border-border p-12 text-center">
            <p className="text-sm font-medium text-foreground">No encontramos vehículos con esos filtros</p>
            <p className="mt-1 text-sm text-muted-foreground">Prueba ajustando o limpiando los filtros.</p>
            <Button variant="outline" size="sm" onClick={clearFilters} className="mt-4">
              Limpiar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
