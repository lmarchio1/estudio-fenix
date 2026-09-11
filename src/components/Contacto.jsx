import { useState } from 'react'
import SectionHeading from './ui/SectionHeading'
import confianzaManos from '../assets/confianza-manos.jpg'
import { EMAIL, TELEFONO, TELEFONO_URL, WHATSAPP_URL } from '../data/contacto'

// Endpoint tipo Formspree (JSON). Se configura como secret en GitHub Actions.
// Sin endpoint, el formulario abre el mail del visitante con la consulta redactada.
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT

const TEMAS = ['Monotributo', 'Impuestos', 'Certificación contable', 'Balances', 'Sociedades', 'Otra consulta']
const INITIAL_FORM = { nombre: '', email: '', telefono: '', tema: TEMAS[0], mensaje: '' }

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
    label: 'WhatsApp',
    value: 'Escribinos',
    href: WHATSAPP_URL,
    external: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.44 1.32 4.94L2 22l5.29-1.39a9.9 9.9 0 004.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.14.82.84-3.06-.2-.32a8.2 8.2 0 01-1.27-4.38c0-4.55 3.7-8.25 8.27-8.25 4.55 0 8.25 3.7 8.25 8.25 0 4.56-3.7 8.27-8.25 8.27zm4.52-6.19c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.36-.77-1.86-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.06 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z" />
      </svg>
    ),
  },
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
  {
    label: 'Teléfono',
    value: TELEFONO,
    href: TELEFONO_URL,
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a1.5 1.5 0 001.5-1.5v-2.291a1.125 1.125 0 00-.852-1.09l-4.036-1.01a1.125 1.125 0 00-1.173.417l-.97 1.293a11.25 11.25 0 01-6.038-6.037l1.294-.971a1.125 1.125 0 00.416-1.173L8.85 3.352a1.125 1.125 0 00-1.091-.852H5.47a1.5 1.5 0 00-1.5 1.5v2.25z" />
      </svg>
    ),
  },
  {
    label: 'Modalidad',
    value: 'Atención 100% online, con reuniones por videollamada',
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
]

const FIELD =
  'w-full rounded-lg border-0 bg-white/5 px-3.5 py-2.5 text-sm text-white ring-1 ring-inset ring-white/15 placeholder:text-slate-500 transition focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ember-300'
const LABEL = 'mb-1.5 block text-xs font-medium text-slate-300'

function Canal({ canal }) {
  const Tag = canal.href ? 'a' : 'div'
  const linkProps = canal.href
    ? { href: canal.href, ...(canal.external ? { target: '_blank', rel: 'noreferrer' } : {}) }
    : {}

  return (
    <Tag
      {...linkProps}
      className={`group flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-inset ring-white/10 backdrop-blur transition-all duration-300 ${
        canal.href ? 'hover:-translate-y-0.5 hover:bg-white/10 hover:ring-ember-300/40' : ''
      }`}
    >
      <span className="icon-gold flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ember-400/15 transition-transform duration-300 group-hover:scale-110">
        {canal.icon}
      </span>
      <span className="min-w-0">
        <span className="text-gold block text-xs font-semibold uppercase tracking-wider">{canal.label}</span>
        <span className="mt-0.5 block break-words text-sm text-slate-200">{canal.value}</span>
      </span>
    </Tag>
  )
}

export default function Contacto() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const asunto = `Consulta web: ${form.tema}`

    if (!CONTACT_ENDPOINT) {
      const cuerpo = `Nombre: ${form.nombre}\nEmail: ${form.email}\nTeléfono: ${form.telefono || '-'}\nTema: ${form.tema}\n\n${form.mensaje}`
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: asunto }),
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
      <div className="absolute inset-x-0 top-0 h-80 w-full sm:inset-0 sm:h-full">
        <img src={confianzaManos} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
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
            'radial-gradient(circle at 85% 15%, rgba(221,154,51,0.15) 0%, rgba(6,18,28,0) 45%)',
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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:order-2 lg:col-span-2 lg:grid-cols-1 lg:content-start">
            {CANALES.map((canal) => (
              <Canal key={canal.label} canal={canal} />
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 backdrop-blur sm:grid-cols-2 sm:p-8 lg:order-1 lg:col-span-3"
          >
            <div>
              <label htmlFor="nombre" className={LABEL}>Nombre y apellido</label>
              <input id="nombre" name="nombre" type="text" autoComplete="name" required value={form.nombre} onChange={handleChange} className={FIELD} />
            </div>
            <div>
              <label htmlFor="email" className={LABEL}>Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={handleChange} className={FIELD} />
            </div>
            <div>
              <label htmlFor="telefono" className={LABEL}>Teléfono (opcional)</label>
              <input id="telefono" name="telefono" type="tel" autoComplete="tel" value={form.telefono} onChange={handleChange} className={FIELD} />
            </div>
            <div>
              <label htmlFor="tema" className={LABEL}>Tema de la consulta</label>
              <select id="tema" name="tema" value={form.tema} onChange={handleChange} className={`${FIELD} bg-fenixNavy-900 focus:bg-fenixNavy-900`}>
                {TEMAS.map((tema) => (
                  <option key={tema} value={tema}>{tema}</option>
                ))}
              </select>
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
                className="shrink-0 rounded-full bg-ember-400 px-6 py-2.5 text-sm font-semibold text-fenixNavy-950 shadow-sm shadow-ember-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember-300 disabled:translate-y-0 disabled:opacity-60"
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
