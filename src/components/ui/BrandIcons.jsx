import { LINKEDIN_IN_PATH, WHATSAPP_PATH } from '../../data/contacto'

// Logos oficiales a color. El tamaño lo define className (ej. "h-10 w-10").

export function WhatsAppIcon({ className = 'h-10 w-10' }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[58%] w-[58%]" aria-hidden="true">
        <path d={WHATSAPP_PATH} />
      </svg>
    </span>
  )
}

export function LinkedInIcon({ className = 'h-10 w-10' }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-[22%] bg-[#0A66C2] text-white ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[62%] w-[62%]" aria-hidden="true">
        <path d={LINKEDIN_IN_PATH} />
      </svg>
    </span>
  )
}
