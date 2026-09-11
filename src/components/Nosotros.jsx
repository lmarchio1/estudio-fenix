import SectionHeading from './ui/SectionHeading'
import RevealImage from './ui/RevealImage'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import compuCafe from '../assets/compu-cafe.jpg'

const SOCIOS = [
  {
    initials: 'N',
    nombre: 'Nacho Ramírez',
    rol: 'Contador Público · Socio',
    bio: 'Especialista en impuestos nacionales y provinciales y en planificación fiscal.',
  },
  {
    initials: 'L',
    nombre: 'Leandro Marchioni',
    rol: 'Contador Público · Socio',
    bio: 'Especialista en estados contables y sociedades comerciales.',
  },
]

function SocioCard({ socio, delay }) {
  const [ref, visible] = useRevealOnScroll(0.2)
  return (
    <div
      ref={ref}
      className={`group rounded-2xl bg-white/5 p-6 xl:p-5 ring-1 ring-inset ring-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-ember-300/30 hover:shadow-lg hover:shadow-ember-900/10 ${
        visible ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4 xl:gap-3">
        <div className="flex h-14 w-14 shrink-0 items-center xl:h-12 xl:w-12 justify-center rounded-full bg-ember-400/15 ring-1 ring-inset ring-ember-300/30 transition-transform duration-300 group-hover:scale-110">
          <span className="text-gold font-serif text-lg font-bold">{socio.initials}</span>
        </div>
        <div>
          <p className="font-serif text-lg font-bold text-white">{socio.nombre}</p>
          <p className="text-gold text-sm">{socio.rol}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">{socio.bio}</p>
    </div>
  )
}

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative scroll-mt-24 overflow-hidden bg-fenixNavy-950 pb-20 sm:pb-28 xl:py-16">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 12% 88%, rgba(238,192,79,0.12) 0%, rgba(11,28,43,0) 45%)',
        }}
      />

      {/* foto a pantalla completa del lado izquierdo, solo desktop */}
      <div className="absolute inset-y-0 left-0 hidden w-1/2 overflow-hidden xl:block">
        <RevealImage src={compuCafe} alt="Estudio Fénix — espacio de trabajo" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(6,18,28,0) 55%, rgba(6,18,28,0.65) 100%)',
            boxShadow: 'inset -32px 0 40px -28px rgba(0,0,0,0.45)',
          }}
        />
      </div>

      {/* mobile/tablet: franja de foto a todo el ancho que se funde en el fondo */}
      <div className="relative h-60 overflow-hidden sm:h-80 xl:hidden">
        <RevealImage src={compuCafe} alt="Estudio Fénix — espacio de trabajo" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(6,18,28,0.15) 0%, rgba(6,18,28,0.35) 55%, rgba(6,18,28,1) 100%)',
          }}
        />
      </div>

      <div className="relative mx-auto -mt-10 max-w-7xl px-4 sm:-mt-14 sm:px-6 lg:px-8 xl:mt-0">
        {/* misma altura mínima que Clientes para que ambas secciones midan igual en desktop */}
        <div className="xl:ml-auto xl:flex xl:min-h-[var(--split-min-h)] xl:max-w-[35rem] xl:flex-col xl:justify-center">
          <SectionHeading
            variant="dark"
            eyebrow="Quiénes somos"
            title="Nuestro estudio"
            description="Nos conocimos cursando un posgrado y, con la misma idea de emprender, decidimos fundar Estudio Fénix."
          >
            <p className="mt-3 text-base text-slate-300">
              Nuestro objetivo es brindar un servicio de excelencia, basado en el conocimiento
              técnico, la actualización permanente en materia tributaria y el compromiso con cada
              cliente, para facilitar la toma de decisiones y el cumplimiento de sus obligaciones.
            </p>
          </SectionHeading>

          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Socios
            <span className="h-px flex-1 bg-white/10" />
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {SOCIOS.map((socio, i) => (
              <SocioCard key={socio.nombre + i} socio={socio} delay={i * 120} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
