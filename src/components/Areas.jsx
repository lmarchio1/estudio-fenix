import SectionHeading from './ui/SectionHeading'
import RevealImage from './ui/RevealImage'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import contadorGeneral from '../assets/contador-general.jpg'

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
    <section id="clientes" className="relative scroll-mt-24 overflow-hidden bg-white pb-20 sm:pb-28 xl:py-10">
      {/* desktop: foto a pantalla completa del lado derecho. Es una imagen muy clara,
          así que lleva un velo azul que le da profundidad y la separa del fondo blanco,
          más un filete dorado vertical en el borde */}
      <div className="group/foto absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden xl:block">
        <RevealImage
          src={contadorGeneral}
          alt="Contadores revisando informes y balances"
          className="h-full w-full object-cover object-center group-hover/foto:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(6,18,28,0.55) 0%, rgba(6,18,28,0.18) 35%, rgba(6,18,28,0) 60%), linear-gradient(180deg, rgba(6,18,28,0.1) 0%, rgba(6,18,28,0) 40%, rgba(6,18,28,0.5) 100%)',
          }}
        />
        <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-ember-600 via-ember-300 to-ember-600" />
      </div>

      {/* mobile/tablet: igual que en Nosotros, franja de foto a todo el ancho que se
          funde en el fondo de la sección (acá blanco) y el título se apoya encima */}
      <div className="relative h-60 overflow-hidden sm:h-80 xl:hidden">
        <RevealImage
          src={contadorGeneral}
          alt="Contadores revisando informes y balances"
          className="h-full w-full object-cover object-[55%_center]"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 55%, rgba(255,255,255,1) 100%)',
          }}
        />
      </div>

      {/* el contenedor deja pasar el mouse para que la foto de atrás reciba el hover */}
      <div className="relative mx-auto -mt-10 max-w-7xl px-4 sm:-mt-14 sm:px-6 lg:px-8 xl:pointer-events-none xl:mt-0">
        {/* misma altura mínima que Nosotros para que ambas secciones midan igual en desktop */}
        <div className="xl:pointer-events-auto xl:flex xl:min-h-[var(--split-min-h)] xl:max-w-[35rem] xl:flex-col xl:justify-center">
          <SectionHeading
            eyebrow="Clientes"
            spacing="mb-10 xl:mb-8"
            title="A quiénes asesoramos"
            description="Trabajamos con personas humanas y jurídicas de distintas actividades, adaptando el asesoramiento a cada caso."
          />

          <ul ref={ref} className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
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
                <span className="text-[15px] font-medium text-fenixNavy-800">{cliente}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
