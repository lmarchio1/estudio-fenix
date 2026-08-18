import SectionHeading from './ui/SectionHeading'
import confianzaManos from '../assets/confianza-manos.jpg'

// TODO: reemplazar por los datos reales de contacto del estudio.
const WHATSAPP_NUMBER = '5491100000000'
const EMAIL = 'contacto@estudiofenix.com.ar'
const TELEFONO = '(011) 0000-0000'
const DIRECCION = 'Dirección a confirmar, Buenos Aires'

export default function Contacto() {
  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden bg-fenixNavy-950 py-20 sm:py-28">
      <img
        src={confianzaManos}
        alt=""
        className="absolute inset-x-0 top-0 h-80 w-full object-cover sm:inset-0 sm:h-full"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(6,18,28,0.2) 0%, rgba(6,18,28,0.4) 45%, rgba(6,18,28,0.75) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 85% 15%, rgba(221,154,51,0.15) 0%, rgba(6,18,28,0) 45%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          variant="dark"
          align="center"
          eyebrow="Hablemos"
          title="Empecemos a ordenar tus números"
          description="Escribinos y te respondemos a la brevedad para coordinar una consulta inicial sin cargo."
        />

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-3 rounded-2xl bg-white/5 p-6 text-center ring-1 ring-inset ring-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-ember-300/40 hover:shadow-lg hover:shadow-ember-900/20"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ember-400/15 text-ember-300 transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.44 1.32 4.94L2 22l5.29-1.39a9.9 9.9 0 004.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.14.82.84-3.06-.2-.32a8.2 8.2 0 01-1.27-4.38c0-4.55 3.7-8.25 8.27-8.25 4.55 0 8.25 3.7 8.25 8.25 0 4.56-3.7 8.27-8.25 8.27zm4.52-6.19c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.36-.77-1.86-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.06 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-ember-300">WhatsApp</span>
            <span className="text-sm text-slate-200">Escribinos ahora</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="group flex flex-col items-center gap-3 rounded-2xl bg-white/5 p-6 text-center ring-1 ring-inset ring-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-ember-300/40 hover:shadow-lg hover:shadow-ember-900/20"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ember-400/15 text-ember-300 transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0119.5 19.5h-15a2.25 2.25 0 01-2.25-2.25V6.75z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75l8.25 6.5 8.25-6.5" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-ember-300">Email</span>
            <span className="text-sm text-slate-200">{EMAIL}</span>
          </a>
          <div className="group flex flex-col items-center gap-3 rounded-2xl bg-white/5 p-6 text-center ring-1 ring-inset ring-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-ember-300/40 hover:shadow-lg hover:shadow-ember-900/20">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ember-400/15 text-ember-300 transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a1.5 1.5 0 001.5-1.5v-2.291a1.125 1.125 0 00-.852-1.09l-4.036-1.01a1.125 1.125 0 00-1.173.417l-.97 1.293a11.25 11.25 0 01-6.038-6.037l1.294-.971a1.125 1.125 0 00.416-1.173L8.85 3.352a1.125 1.125 0 00-1.091-.852H5.47a1.5 1.5 0 00-1.5 1.5v2.25z" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-ember-300">Teléfono</span>
            <span className="text-sm text-slate-200">{TELEFONO}</span>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">{DIRECCION}</p>
      </div>
    </section>
  )
}
