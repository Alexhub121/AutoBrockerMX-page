/**
 * Inyecta datos estructurados JSON-Ld en la página.
 * Google los usa para mostrar precio, disponabilidad y migas de pan
 * directamente en los resultados de búsqueda.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
