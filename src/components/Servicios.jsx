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
      'Alta, categorización inicial y recategorizaciones semestrales. Control mensual de facturación y pagos, bajas y pase al régimen general.',
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m-5.25-.75h.008v.008H9.75V7.5zm5.25 5.25h.008v.008h-.008v-.008zM4.5 6.75v10.5A2.25 2.25 0 006.75 19.5h10.5a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0017.25 4.5H6.75A2.25 2.25 0 004.5 6.75z" />
      </svg>
    ),
  },
  {
    title: 'Impuestos',
    description:
      'Liquidación y presentación de declaraciones juradas de IVA, Ganancias, Bienes Personales e Ingresos Brutos, incluido Convenio Multilateral.',
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
      'Certificación de ingresos, origen de fondos para la compra de inmuebles o rodados, manifestación de bienes y otras certificaciones ante bancos y organismos.',
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    ),
  },
  {
    title: 'Balances y estados contables',
    description:
      'Confección de estados contables anuales, con informe del contador y legalización ante el Consejo Profesional de Ciencias Económicas.',
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125C16.5 3.504 17.004 3 17.625 3h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Sociedades',
    description:
      'Constitución de SAS y SRL, inscripción ante IGJ o DPPJ, rúbrica de libros y cumplimiento de las obligaciones societarias anuales.',
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: 'Requerimientos y planes de pago',
    description:
      'Contestación de requerimientos e intimaciones de ARCA y organismos provinciales, y adhesión a planes de facilidades de pago.',
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-white pb-16 pt-20 sm:pb-20 sm:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Asesoramiento contable, impositivo y societario"
          description="Para personas humanas y jurídicas: monotributistas, responsables inscriptos, profesionales independientes y sociedades."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
