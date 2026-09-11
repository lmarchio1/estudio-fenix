const ICON_PROPS = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: 1.7,
  stroke: 'currentColor',
  className: 'h-5 w-5',
}

const PILARES = [
  {
    title: 'Atención 100% online',
    description: 'Documentación, trámites y reuniones de forma virtual.',
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: 'Trato directo con los socios',
    description: 'Cada cliente es atendido por un contador socio.',
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Cumplimiento en término',
    description: 'Presentaciones ante ARCA y rentas provinciales en fecha.',
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: 'Ética y confidencialidad',
    description: 'Reserva absoluta sobre la información de cada cliente.',
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
]

export default function Pilares() {
  return (
    <div className="relative z-10 -mt-16 px-4 sm:px-6 lg:px-8">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-200 shadow-xl shadow-fenixNavy-950/10 ring-1 ring-slate-200 lg:grid-cols-4">
        {PILARES.map((pilar, i) => (
          <li
            key={pilar.title}
            className="group relative animate-fade-up bg-white p-5 transition-colors duration-300 hover:bg-ember-50/60 sm:p-6"
            style={{ animationDelay: `${600 + i * 100}ms` }}
          >
            <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-ember-400 transition-transform duration-300 group-hover:scale-x-100" />
            <span className="icon-gold-dark inline-flex h-10 w-10 items-center justify-center rounded-full bg-ember-50 ring-1 ring-inset ring-ember-200 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110">
              {pilar.icon}
            </span>
            <p className="mt-3 text-sm font-semibold leading-snug text-fenixNavy-900">{pilar.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">{pilar.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
