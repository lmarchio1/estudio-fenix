import SectionHeading from './ui/SectionHeading'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import estudioOficina from '../assets/estudio-oficina.jpg'

const SOCIOS = [
  {
    initials: 'R',
    nombre: 'Ramírez',
    rol: 'Contador Público · Socio',
    bio: 'Especializado en asesoramiento impositivo y monotributo. Falta completar nombre y bio real.',
  },
  {
    initials: 'M',
    nombre: 'Marchioni',
    rol: 'Contador Público · Socio',
    bio: 'Especializado en gestión laboral y societaria. Falta completar nombre y bio real.',
  },
]

function SocioCard({ socio, delay }) {
  const [ref, visible] = useRevealOnScroll(0.2)
  return (
    <div
      ref={ref}
      className={`rounded-2xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 backdrop-blur transition-all duration-300 hover:bg-white/10 ${
        visible ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ember-400/15 font-serif text-lg font-bold text-ember-300 ring-1 ring-inset ring-ember-300/30">
          {socio.initials}
        </div>
        <div>
          <p className="font-serif text-lg font-bold text-white">{socio.nombre}</p>
          <p className="text-sm text-ember-300">{socio.rol}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">{socio.bio}</p>
    </div>
  )
}

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-fenixNavy-900 py-20 sm:py-28">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 12% 88%, rgba(221,154,51,0.12) 0%, rgba(11,28,43,0) 45%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10">
              <img
                src={estudioOficina}
                alt="Estudio Fénix — espacio de trabajo"
                className="aspect-[4/3] w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(6,18,28,0) 55%, rgba(6,18,28,0.65) 100%)',
                }}
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <SectionHeading
              variant="dark"
              eyebrow="Quiénes somos"
              title="Un estudio que renace junto a cada cliente"
              description="Como el ave que le da nombre al estudio, creemos en volver a empezar: ordenar los números, ponerse al día con el fisco y crecer con reglas claras. Dos socios, un mismo compromiso con cada cliente."
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {SOCIOS.map((socio, i) => (
                <SocioCard key={socio.nombre + i} socio={socio} delay={i * 120} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
