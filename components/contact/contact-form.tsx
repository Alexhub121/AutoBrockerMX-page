"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { whatsappLink } from "@/lib/utils"

export function ContactForm() {
  const [name, setName] = useState("")
  const [car, setCar] = useState("")
  const [message, setMessage] = useState("")

  const buildMessage = () => {
    const lines = ["Hola AutoBroker MX,"]
    if (name) lines.push(`Mi nombre es ${name}.`)
    if (car) lines.push(`Me interesa / quiero vender: ${car}.`)
    if (message) lines.push(message)
    if (lines.length === 1) lines.push("Quiero más información.")
    return lines.join(" ")
  }

  // Se usa un enlace <a> en vez de window.open(): los bloqueadores de ventanas
  // emergentes a veces impiden abrir WhatsApp desde un submit programático.
  const href = whatsappLink(buildMessage())

  const handleSubmit = (e: React.FormEvent) => {
    // Enter dentro de los campos no debe recargar la página.
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-6">
      <h2 className="text-lg font-semibold text-foreground">Envíanos un mensaje</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Completa el formulario y continúa la conversación por WhatsApp.
      </p>

      <div className="mt-5 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            required
            minLength={2}
            autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="car">Auto de interés (opcional)</Label>
          <Input
            id="car"
            value={car}
            onChange={(e) => setCar(e.target.value)}
            placeholder="Ej: Nissan Versa 2021 o mi auto a vender"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="¿En qué podemos ayudarte?"
            rows={4}
          />
        </div>
        <Button
          size="lg"
          className="w-full bg-[#25D366] text-[#052E19] hover:bg-[#1faa54]"
          render={<a href={href} target="_blank" rel="noopener noreferrer" />}
        >
          <MessageCircle className="h-4 w-4" />
          Enviar por WhatsApp
        </Button>
      </div>
    </form>
  )
}
