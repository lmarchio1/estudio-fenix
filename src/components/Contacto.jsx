import SectionHeading from './ui/SectionHeading'

// TODO: reemplazar por los datos reales de contacto del estudio.
const WHATSAPP_NUMBER = '5491100000000'
const EMAIL = 'contacto@estudiofenix.com.ar'
const TELEFONO = '(011) 0000-0000'
const DIRECCION = 'Dirección a confirmar, Buenos Aires'

export default function Contacto() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-fenixNavy-950 py-20 sm:py-28">
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
            className="flex flex-col items-center gap-2 rounded-2xl bg-white/5 px-4 py-6 text-center ring-1 ring-inset ring-white/10 backdrop-blur transition-colors hover:bg-white/10"
          >
            <span className="text-sm font-semibold text-ember-300">WhatsApp</span>
            <span className="text-sm text-slate-200">Escribinos ahora</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex flex-col items-center gap-2 rounded-2xl bg-white/5 px-4 py-6 text-center ring-1 ring-inset ring-white/10 backdrop-blur transition-colors hover:bg-white/10"
          >
            <span className="text-sm font-semibold text-ember-300">Email</span>
            <span className="text-sm text-slate-200">{EMAIL}</span>
          </a>
          <div className="flex flex-col items-center gap-2 rounded-2xl bg-white/5 px-4 py-6 text-center ring-1 ring-inset ring-white/10 backdrop-blur">
            <span className="text-sm font-semibold text-ember-300">Teléfono</span>
            <span className="text-sm text-slate-200">{TELEFONO}</span>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">{DIRECCION}</p>
      </div>
    </section>
  )
}
