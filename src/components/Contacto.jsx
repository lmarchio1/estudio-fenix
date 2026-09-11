import { useState } from 'react'
import SectionHeading from './ui/SectionHeading'
import RevealImage from './ui/RevealImage'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import confianzaManos from '../assets/confianza-manos.jpg'
import { WhatsAppIcon } from './ui/BrandIcons'
import { EMAIL, WHATSAPP_URL } from '../data/contacto'

// Endpoint tipo Formspree (JSON). Se configura como secret en GitHub Actions.
// Sin endpoint, el formulario abre el mail del visitante con la consulta redactada.
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT

const ASUNTO = 'Consulta desde la web'
const INITIAL_FORM = { nombre: '', email: '', telefono: '', mensaje: '' }

const ICON_PROPS = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  className: 'h-5 w-5',
}

const CANALES = [
  {
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0119.5 19.5h-15a2.25 2.25 0 01-2.25-2.25V6.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75l8.25 6.5 8.25-6.5" />
      </svg>
    ),
  },
]

const FIELD =
  'w-full rounded-lg border-0 bg-white/5 px-3.5 py-2.5 text-sm text-white ring-1 ring-inset ring-white/15 placeholder:text-slate-500 transition focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ember-300'
const LABEL = 'mb-1.5 block text-xs font-medium text-slate-300'

function Canal({ canal }) {
  return (
    <a
      href={canal.href}
      className="group flex items-center gap-3 rounded-2xl bg-white/5 p-3.5 ring-1 ring-inset ring-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:ring-ember-300/40"
    >
      <span className="icon-gold flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ember-400/15 transition-transform duration-300 group-hover:scale-110">
        {canal.icon}
      </span>
      <span className="min-w-0">
        <span className="text-gold block text-xs font-semibold uppercase tracking-wider">{canal.label}</span>
        <span className="mt-0.5 block break-words text-sm text-slate-200">{canal.value}</span>
      </span>
    </a>
  )
}

function WhatsAppDestacado() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl bg-[#25D366]/10 p-5 ring-1 ring-inset ring-[#25D366]/40 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25D366]/15 hover:ring-[#25D366]/70"
    >
      <WhatsAppIcon className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" />
      <span className="min-w-0 flex-1">
        <span className="block text-base font-semibold text-white">Escribinos por WhatsApp</span>
      </span>
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 shrink-0 text-[#25D366] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
      </svg>
    </a>
  )
}

export default function Contacto() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [gridRef, gridVisible] = useRevealOnScroll(0.1)
  const reveal = gridVisible ? 'animate-fade-up' : 'opacity-0'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!CONTACT_ENDPOINT) {
      const cuerpo = `Nombre: ${form.nombre}\nEmail: ${form.email}\nCelular: ${form.telefono || '-'}\n\n${form.mensaje}`
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(ASUNTO)}&body=${encodeURIComponent(cuerpo)}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: ASUNTO }),
      })
      if (!res.ok) throw new Error('No se pudo enviar el formulario')
      setStatus('sent')
      setForm(INITIAL_FORM)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden bg-fenixNavy-950 py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-80 w-full overflow-hidden sm:inset-0 sm:h-full">
        <RevealImage src={confianzaManos} className="h-full w-full object-cover" />
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(6,18,28,0.2) 0%, rgba(6,18,28,0.45) 55%, rgba(6,18,28,1) 100%)',
          }}
        />
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            background:
              'linear-gradient(180deg, rgba(6,18,28,0.45) 0%, rgba(6,18,28,0.7) 45%, rgba(6,18,28,0.92) 100%)',
          }}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 85% 15%, rgba(238,192,79,0.15) 0%, rgba(6,18,28,0) 45%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          variant="dark"
          align="center"
          eyebrow="Contacto"
          title="Solicitá una consulta"
          description="Completá el formulario o escribinos por el medio que prefieras, y coordinamos una reunión por videollamada."
        />

        <div ref={gridRef} className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="flex flex-col gap-3 lg:order-2 lg:col-span-2">
            <div className={reveal} style={{ animationDelay: '150ms' }}>
              <WhatsAppDestacado />
            </div>
            <div className="grid gap-3">
              {CANALES.map((canal, i) => (
                <div key={canal.label} className={reveal} style={{ animationDelay: `${240 + i * 90}ms` }}>
                  <Canal canal={canal} />
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`grid grid-cols-1 gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 backdrop-blur sm:grid-cols-2 sm:p-8 lg:order-1 lg:col-span-3 ${reveal}`}
          >
            <div className="sm:col-span-2">
              <label htmlFor="nombre" className={LABEL}>Nombre y apellido</label>
              <input id="nombre" name="nombre" type="text" autoComplete="name" required value={form.nombre} onChange={handleChange} className={FIELD} />
            </div>
            <div>
              <label htmlFor="email" className={LABEL}>Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={handleChange} className={FIELD} />
            </div>
            <div>
              <label htmlFor="telefono" className={LABEL}>Celular (opcional)</label>
              <input id="telefono" name="telefono" type="tel" autoComplete="tel" value={form.telefono} onChange={handleChange} className={FIELD} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="mensaje" className={LABEL}>Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows={4} required value={form.mensaje} onChange={handleChange} className={FIELD} />
            </div>

            <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-400">Tus datos se usan únicamente para responder tu consulta.</p>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="shrink-0 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-fenixNavy-950 shadow-sm shadow-ember-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 disabled:translate-y-0 disabled:opacity-60"
              >
                {status === 'sending' ? 'Enviando…' : 'Enviar consulta'}
              </button>
            </div>

            {status === 'sent' && (
              <p role="status" className="text-sm text-emerald-400 sm:col-span-2">
                Recibimos tu consulta. Te vamos a responder a la brevedad.
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="text-sm text-rose-400 sm:col-span-2">
                No pudimos enviar el formulario. Probá de nuevo o escribinos por WhatsApp.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
