import SectionHeading from './ui/SectionHeading'
import RevealImage from './ui/RevealImage'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { FOTO_COMPU_CAFE } from '../data/fotos'

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
      <p className="mt-4 text-sm leading-relaxed text-slate-300 xl:mt-3">{socio.bio}</p>
    </div>
  )
}

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative scroll-mt-24 overflow-hidden bg-fenixNavy-950 pb-20 sm:pb-28 xl:py-10">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 12% 88%, rgba(238,192,79,0.12) 0%, rgba(11,28,43,0) 45%)',
        }}
      />

      {/* foto a pantalla completa del lado izquierdo, solo desktop */}
      <div className="group/foto absolute inset-y-0 left-0 hidden w-1/2 overflow-hidden xl:block">
        <RevealImage {...FOTO_COMPU_CAFE} sizes="50vw" alt="Estudio Fénix — espacio de trabajo" className="h-full w-full object-cover group-hover/foto:scale-105" />
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
        <RevealImage {...FOTO_COMPU_CAFE} sizes="100vw" alt="Estudio Fénix — espacio de trabajo" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(6,18,28,0.15) 0%, rgba(6,18,28,0.35) 55%, rgba(6,18,28,1) 100%)',
          }}
        />
      </div>

      {/* el contenedor deja pasar el mouse para que la foto de atrás reciba el hover */}
      <div className="relative mx-auto -mt-10 max-w-7xl px-4 sm:-mt-14 sm:px-6 lg:px-8 xl:pointer-events-none xl:mt-0">
        {/* misma altura mínima que Clientes para que ambas secciones midan igual en desktop */}
        <div className="xl:pointer-events-auto xl:ml-auto xl:flex xl:min-h-[var(--split-min-h)] xl:max-w-[35rem] xl:flex-col xl:justify-center">
          <SectionHeading
            variant="dark"
            eyebrow="Quiénes somos"
            spacing="mb-10 xl:mb-8"
            title="Nuestro estudio"
          >
            <p className="mt-3 text-base text-slate-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
              Estudio Fénix surge de una sólida alianza profesional consolidada en la formación
              académica y en una visión compartida.
            </p>
            <p className="mt-3 text-base text-slate-300">
              Comprendemos los desafíos de consolidar un proyecto económico. Por eso, nuestra
              propuesta trasciende el cumplimiento contable y fiscal: nos posicionamos como tu socio
              estratégico para brindar asesoramiento integral y potenciar el crecimiento de tu
              actividad.
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
