import { WhatsAppIcon } from './ui/BrandIcons'
import { WHATSAPP_URL } from '../data/contacto'

export default function WhatsAppFlotante() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-6 sm:right-6"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-fenixNavy-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:block">
        Escribinos por WhatsApp
      </span>
      <WhatsAppIcon className="h-14 w-14 shadow-lg shadow-black/30 ring-4 ring-white/10 transition-transform duration-300 group-hover:scale-110" />
    </a>
  )
}
