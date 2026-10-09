import { LogoEmblem } from "@/components/logo"

/**
 * Se ejecuta en <head> ANTES del primer pintado: decide si este visitante ve
 * el intro (primera vez en la sesión y sin "reducir movimiento"). Así no hay
 * parpadeo ni el intro se repite al navegar o recargar.
 */
export const introScript = `(function(){try{var d=document.documentElement;if(sessionStorage.getItem("ab-intro")||matchMedia("(prefers-reduced-motion: reduce)").matches){d.dataset.intro="seen";return}sessionStorage.setItem("ab-intro","1");d.dataset.intro="play"}catch(e){}})();`

/** Cortina de "encendido del showroom". Todo el movimiento vive en globals.css. */
export function Intro() {
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-panel intro-top" />
      <div className="intro-panel intro-bottom" />
      <div className="intro-content">
        <div className="intro-mark flex items-center gap-4">
          <LogoEmblem className="h-14 w-14 text-xl ring-1 ring-primary/50" />
          <span className="font-brand text-5xl font-extrabold uppercase leading-none tracking-tight sm:text-6xl">
            <span className="text-chrome">Auto</span>
            <span className="text-chrome-red">Broker</span>
            <span className="text-chrome"> MX</span>
          </span>
        </div>
        <div className="intro-line" />
      </div>
    </div>
  )
}
