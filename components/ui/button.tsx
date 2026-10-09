import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap outline-none select-none transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-[var(--ease-out)] focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_oklch(0.585_0.215_27/0.7)] hover:bg-[oklch(0.62_0.215_27)]",
        light: "bg-foreground text-background hover:bg-[oklch(0.88_0.003_264)]",
        whatsapp: "bg-[#25D366] text-[#052E19] hover:bg-[#2fe474]",
        outline:
          "border-border bg-transparent text-foreground hover:border-[oklch(0.42_0.006_264)] hover:bg-secondary aria-expanded:bg-muted",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "rounded-none px-0 text-foreground underline decoration-border underline-offset-[0.3em] hover:decoration-primary",
      },
      size: {
        default: "h-10 gap-2 px-4 has-data-[icon=inline-end]:pr-1.5",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 text-[0.8rem] [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 gap-2.5 px-6 text-[0.95rem] has-data-[icon=inline-end]:pr-1.5",
        icon: "size-10",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  nativeButton,
  render,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  // When rendering a custom element (e.g. <a> or <Link>) via `render`,
  // base-ui must not assume a native <button>, otherwise it warns and
  // drops button semantics.
  const resolvedNativeButton = nativeButton ?? render === undefined;

  return (
    <ButtonPrimitive
      data-slot="button"
      nativeButton={resolvedNativeButton}
      render={render}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

/**
 * Flecha anidada "botón dentro del botón": vive en su propio círculo y se
 * desplaza en diagonal al pasar el cursor (solo en dispositivos con hover).
 */
function ButtonArrow({ className }: { className?: string }) {
  return (
    <span
      data-icon="inline-end"
      aria-hidden="true"
      className={cn(
        "flex size-9 items-center justify-center rounded-full bg-black/15 transition-transform duration-300 ease-[var(--ease-out)] [@media(hover:hover)]:group-hover/button:translate-x-0.5 [@media(hover:hover)]:group-hover/button:-translate-y-px",
        className,
      )}
    >
      <svg viewBox="0 0 16 16" fill="none" className="size-3.5">
        <path d="M4.5 11.5l7-7M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export { ButtonArrow }
