import SectionHeading from './ui/SectionHeading'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import compuCafe from '../assets/compu-cafe.jpg'

const SOCIOS = [
  {
    initials: 'N',
    nombre: 'Nacho Ramírez',
    rol: 'Contador Público · Socio',
    bio: 'Especializado en asesoramiento impositivo y monotributo. Falta completar la bio real.',
  },
  {
    initials: 'L',
    nombre: 'Leandro Marchioni',
    rol: 'Contador Público · Socio',
    bio: 'Especializado en gestión laboral y societaria. Falta completar la bio real.',
  },
]

function SocioCard({ socio, delay }) {
  const [ref, visible] = useRevealOnScroll(0.2)
  return (
    <div
      ref={ref}
      className={`group rounded-2xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-ember-300/30 hover:shadow-lg hover:shadow-ember-900/10 ${
        visible ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ember-400/15 ring-1 ring-inset ring-ember-300/30 transition-transform duration-300 group-hover:scale-110">
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
    <section id="nosotros" className="relative scroll-mt-24 overflow-hidden bg-fenixNavy-900 py-20 sm:py-28 lg:py-[67px]">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 12% 88%, rgba(221,154,51,0.12) 0%, rgba(11,28,43,0) 45%)',
        }}
      />

      {/* foto a pantalla completa del lado izquierdo, solo desktop */}
      <div
        className="absolute inset-y-0 left-0 hidden w-[42%] lg:block"
        style={{
          WebkitMaskImage: 'linear-gradient(90deg, black 93%, transparent 100%)',
          maskImage: 'linear-gradient(90deg, black 93%, transparent 100%)',
        }}
      >
        <img
          src={compuCafe}
          alt="Estudio Fénix — espacio de trabajo"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(6,18,28,0) 55%, rgba(6,18,28,0.65) 100%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* foto en cuadrado, solo mobile/tablet */}
        <div className="relative mx-auto mb-12 aspect-square max-w-sm overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10 lg:hidden">
          <img
            src={compuCafe}
            alt="Estudio Fénix — espacio de trabajo"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(6,18,28,0) 55%, rgba(6,18,28,0.65) 100%)',
            }}
          />
        </div>

        <div className="lg:ml-auto lg:max-w-2xl">
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
    </section>
  )
}
