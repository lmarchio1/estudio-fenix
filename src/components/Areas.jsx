import SectionHeading from './ui/SectionHeading'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

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
    <section id="areas" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="A quién ayudamos"
          title="Áreas en las que trabajamos"
          description="Adaptamos el asesoramiento a la realidad de cada actividad."
        />

        <div ref={ref} className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
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
    </section>
  )
}
