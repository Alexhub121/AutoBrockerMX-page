"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function CarGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0)
  const safeImages = images.length > 0 ? images : ["/placeholder.svg"]

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted">
        <Image
          src={safeImages[active] || "/placeholder.svg"}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
      </div>

      {safeImages.length > 1 && (
        <div className="mt-3 flex gap-3">
          {safeImages.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver imagen ${i + 1}`}
              className={cn(
                "relative aspect-[4/3] w-24 shrink-0 overflow-hidden rounded-md border bg-muted transition-colors",
                active === i ? "border-primary ring-1 ring-primary" : "border-border hover:border-muted-foreground",
              )}
            >
              <Image src={img || "/placeholder.svg"} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
