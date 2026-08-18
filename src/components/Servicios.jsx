import SectionHeading from './ui/SectionHeading'
import Card from './ui/Card'

const ICON_PROPS = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: 1.7,
  stroke: 'currentColor',
  className: 'h-6 w-6',
}

const SERVICES = [
  {
    title: 'Monotributo',
    description:
      'Inscripción, categorización y recategorizaciones. Te avisamos antes de cada vencimiento para que nunca quedes mal categorizado.',
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m-5.25-.75h.008v.008H9.75V7.5zm5.25 5.25h.008v.008h-.008v-.008zM4.5 6.75v10.5A2.25 2.25 0 006.75 19.5h10.5a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0017.25 4.5H6.75A2.25 2.25 0 004.5 6.75z" />
      </svg>
    ),
  },
  {
    title: 'Asesoramiento impositivo',
    description:
      'Planificación y liquidación de IVA, Ganancias e Ingresos Brutos, nacional y provincial, para que las decisiones fiscales acompañen al negocio.',
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3-15H6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 006 21h9a2.25 2.25 0 002.25-2.25V8.25L14.25 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 3v4.5a1.5 1.5 0 001.5 1.5H20.25" />
      </svg>
    ),
  },
  {
    title: 'Certificaciones contables',
    description:
      'Certificación de ingresos, saldos, capacidad económica y estados contables ante bancos, organismos y terceros.',
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Liquidación de sueldos',
    description:
      'Liquidación de haberes, cargas sociales y gestión laboral integral para que tu equipo cobre en tiempo y forma.',
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Constitución de sociedades',
    description:
      'Constitución, inscripción y gestión societaria: SAS, SRL y sociedades anónimas, de la idea a la puesta en marcha.',
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: 'Consultoría y planeamiento',
    description:
      'Acompañamiento estratégico en la toma de decisiones económicas, financieras y de gestión para PyMEs y emprendedores.',
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Servicios contables, impositivos y laborales"
          description="Con foco en monotributistas, profesionales independientes y PyMEs que necesitan un estudio cercano y al día con la normativa."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Card
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
