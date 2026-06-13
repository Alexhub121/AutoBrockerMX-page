export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  )
}
