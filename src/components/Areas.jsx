import SectionHeading from './ui/SectionHeading'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import cafeCompu from '../assets/cafe-compu.jpg'

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

            <div ref={ref} className="flex flex-wrap gap-3">
              {AREAS.map((area, i) => (
                <span
                  key={area}
                  className={`rounded-full border border-fenixNavy-100 bg-fenixNavy-50 px-4 py-2 text-sm font-medium text-fenixNavy-800 transition-transform duration-300 hover:-translate-y-0.5 hover:border-ember-300 hover:bg-ember-50 hover:text-ember-700 ${
                    visible ? 'animate-pop' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-inset ring-fenixNavy-900/10">
              <img
                src={cafeCompu}
                alt="Estudio Fénix — trabajo cercano y flexible"
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
