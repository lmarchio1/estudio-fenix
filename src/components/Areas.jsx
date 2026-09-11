import SectionHeading from './ui/SectionHeading'
import RevealImage from './ui/RevealImage'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import libroLapiz from '../assets/libro-lapiz.jpg'

const CLIENTES = [
  'Monotributistas',
  'Responsables inscriptos',
  'Profesionales independientes',
  'Comercios y PyMEs',
  'Sociedades (SAS, SRL y SA)',
  'Emprendedores',
  'Alquileres e inmuebles',
  'Comercio electrónico',
]

export default function Areas() {
  const [ref, visible] = useRevealOnScroll(0.2)

  return (
    <section id="clientes" className="relative scroll-mt-24 overflow-hidden bg-white pb-20 sm:pb-28 xl:py-16">
      {/* desktop: foto a pantalla completa del lado derecho */}
      <div className="absolute inset-y-0 right-0 hidden w-[42%] overflow-hidden xl:block">
        <RevealImage src={libroLapiz} alt="Estudio Fénix — asesoramiento profesional" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(6,18,28,0) 60%, rgba(6,18,28,0.35) 100%)',
            boxShadow: 'inset 32px 0 40px -28px rgba(0,0,0,0.45)',
          }}
        />
      </div>

      {/* mobile/tablet: la foto se oscurece hacia abajo con la madera de la propia
          imagen y cierra con un filete dorado */}
      <div className="relative h-60 overflow-hidden sm:h-80 xl:hidden">
        <RevealImage src={libroLapiz} alt="Estudio Fénix — asesoramiento profesional" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(36,22,15,0) 30%, rgba(36,22,15,0.55) 75%, rgba(36,22,15,0.9) 100%)',
          }}
        />
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-ember-600 via-ember-300 to-ember-600" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8 xl:pt-0">
        {/* misma altura mínima que Nosotros para que ambas secciones midan igual en desktop */}
        <div className="xl:flex xl:min-h-[var(--split-min-h)] xl:max-w-xl xl:flex-col xl:justify-center">
          <SectionHeading
            eyebrow="Clientes"
            title="A quiénes asesoramos"
            description="Trabajamos con personas humanas y jurídicas de distintas actividades, adaptando el asesoramiento a cada caso."
          />

          <ul ref={ref} className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {CLIENTES.map((cliente, i) => (
              <li
                key={cliente}
                className={`group flex items-center gap-3 border-b border-slate-200 py-3.5 xl:py-5 ${visible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="icon-gold-dark flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember-50 ring-1 ring-inset ring-ember-200 transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-[15px] font-medium xl:text-base text-fenixNavy-800">{cliente}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
