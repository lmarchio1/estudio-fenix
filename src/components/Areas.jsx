import SectionHeading from './ui/SectionHeading'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import libroLapiz from '../assets/libro-lapiz.jpg'

const AREAS = [
  'Monotributistas',
  'Profesionales independientes',
  'Comercios y PyMEs',
  'Emprendedores',
  'Sociedades y SAS',
  'Locación de inmuebles',
  'Comercio electrónico',
  'Asociaciones civiles',
]

export default function Areas() {
  const [ref, visible] = useRevealOnScroll(0.2)

  return (
    <section id="areas" className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-28 lg:py-[127px]">
      {/* foto a pantalla completa del lado derecho, solo desktop */}
      <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
        <img
          src={libroLapiz}
          alt="Estudio Fénix — asesoramiento con criterio y experiencia"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(6,18,28,0) 60%, rgba(6,18,28,0.35) 100%)',
            boxShadow: 'inset 32px 0 40px -28px rgba(0,0,0,0.45)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:max-w-lg">
          <SectionHeading
            eyebrow="A quién ayudamos"
            title="Áreas en las que trabajamos"
            description="Adaptamos el asesoramiento a la realidad de cada actividad."
          />

          <div ref={ref} className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {AREAS.map((area, i) => (
              <div
                key={area}
                className={`flex items-center gap-3 ${visible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember-400" />
                <span className="text-sm font-medium text-fenixNavy-800">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* foto en cuadrado, solo mobile/tablet */}
        <div className="relative mx-auto mt-12 aspect-square max-w-sm overflow-hidden rounded-2xl ring-1 ring-inset ring-fenixNavy-900/10 lg:hidden">
          <img
            src={libroLapiz}
            alt="Estudio Fénix — asesoramiento con criterio y experiencia"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(6,18,28,0) 60%, rgba(6,18,28,0.35) 100%)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
