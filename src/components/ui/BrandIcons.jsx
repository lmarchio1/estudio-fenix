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

export function EmailIcon({ className = 'h-10 w-10' }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-full bg-white text-fenixNavy-900 ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[54%] w-[54%]" aria-hidden="true">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
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
