import SectionHeading from './ui/SectionHeading'
import RevealImage from './ui/RevealImage'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { FOTO_COMPU_CAFE } from '../data/fotos'

const SOCIOS = [
  {
    initials: 'N',
    nombre: 'Nacho Ramírez',
    rol: 'Contador Público · Socio',
    universidad: 'Universidad Nacional de San Martín',
    // TODO: completar con la matrícula real (consejo, tomo y folio).
    matricula: '',
  },
  {
    initials: 'L',
    nombre: 'Leandro Marchioni',
    rol: 'Contador Público · Socio',
    universidad: 'Universidad Nacional de La Matanza',
    // TODO: completar con la matrícula real (consejo, tomo y folio).
    matricula: '',
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
      {/* datos reales del socio: universidad y matrícula (la matrícula se muestra
          solo cuando está cargada) */}
      <div className="mt-4 space-y-1.5 border-t border-white/10 pt-3 xl:mt-3">
        <p className="flex items-start gap-2 text-sm text-slate-300">
          <svg viewBox="0 0 24 24" fill="currentColor" className="icon-gold mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.95 49.95 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.88 50.88 0 007.5 12.173v-.224c0-.131.067-.248.172-.311a54.6 54.6 0 014.653-2.52.75.75 0 00-.65-1.352 56.12 56.12 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.8 49.8 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.65 60.65 0 0111.7 2.805z" />
            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.87 47.87 0 00-8.105 4.342.75.75 0 01-.832 0 47.87 47.87 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11a.75.75 0 001.34.67c.317-.634.503-1.25.588-1.778a1.5 1.5 0 00-.437-2.51V12.5c.86.212 1.706.47 2.535.77l.002.001a3 3 0 002.572-.21z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.437 1.347.667-.317.65-.742 1.244-1.286 1.788a.75.75 0 01-1.06-1.06z" />
          </svg>
          {socio.universidad}
        </p>
        {socio.matricula && (
          <p className="flex items-start gap-2 text-sm text-slate-400">
            <svg viewBox="0 0 24 24" fill="currentColor" className="icon-gold mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
              <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
            </svg>
            {socio.matricula}
          </p>
        )}
      </div>
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
