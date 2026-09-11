import { useEffect, useState } from 'react'
import { WhatsAppIcon } from './ui/BrandIcons'
import { WHATSAPP_URL } from '../data/contacto'

// Se oculta al llegar a Contacto y al footer: ahí ya está el botón grande de
// WhatsApp y el flotante solo taparía contenido.
const SECCIONES_SIN_BOTON = ['#contacto', 'footer']

export default function WhatsAppFlotante() {
  const [oculto, setOculto] = useState(false)

  useEffect(() => {
    const elementos = SECCIONES_SIN_BOTON.map((s) => document.querySelector(s)).filter(Boolean)
    const visibles = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visibles.add(e.target) : visibles.delete(e.target)))
        setOculto(visibles.size > 0)
      },
      { rootMargin: '0px 0px -25% 0px' },
    )
    elementos.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribinos por WhatsApp"
      aria-hidden={oculto}
      tabIndex={oculto ? -1 : undefined}
      className={`group fixed bottom-5 right-5 z-40 flex items-center gap-3 transition-all duration-300 sm:bottom-6 sm:right-6 ${
        oculto ? 'pointer-events-none translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-fenixNavy-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:block">
        Escribinos por WhatsApp
      </span>
      <WhatsAppIcon className="h-14 w-14 shadow-lg shadow-black/30 ring-4 ring-white/10 transition-transform duration-300 group-hover:scale-110" />
    </a>
  )
}
