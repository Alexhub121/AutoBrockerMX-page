/**
 * Indicador de carga que se muestra mientras Next.js navega entre páginas.
 * Sin esto, en conexiones lentas el usuario no sabe si algo pasó.
 */
export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6" role="status" aria-live="polite">
      <span className="sr-only">Cargando contenido…</span>
      <div className="animate-pulse space-y-6" aria-hidden="true">
        <div className="h-9 w-64 max-w-full rounded-md bg-muted" />
        <div className="h-4 w-96 max-w-full rounded-md bg-muted" />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="aspect-[4/3] rounded-lg bg-muted" />
          ))}
        </div>
      </div>
    </div>
  )
}
