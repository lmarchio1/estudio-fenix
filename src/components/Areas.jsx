import SectionHeading from './ui/SectionHeading'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import libroLapiz from '../assets/libro-lapiz.avif'

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
    <section id="areas" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-3">
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

          <div className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl ring-1 ring-inset ring-fenixNavy-900/10">
              <img
                src={libroLapiz}
                alt="Estudio Fénix — asesoramiento con criterio y experiencia"
                className="aspect-square w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(6,18,28,0) 60%, rgba(6,18,28,0.35) 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
