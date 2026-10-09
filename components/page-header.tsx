import type { ReactNode } from "react"

/**
 * Cabecera de páginas internas. Se mete bajo la barra fija (-mt-16) para que el
 * reflector cenital ilumine desde el borde superior de la ventana.
 */
export function PageHeader({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children?: ReactNode
}) {
  return (
    <div className="bg-floor spotlight relative -mt-16 border-b border-border/70 pt-16">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-12 sm:px-6 md:pt-20 md:pb-16 lg:px-8">
        <h1 className="font-display animate-rise max-w-4xl text-5xl text-foreground sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {description && (
          <p
            className="animate-rise mt-6 max-w-xl leading-relaxed text-muted-foreground md:text-lg"
            style={{ "--delay": "90ms" } as React.CSSProperties}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  )
}
