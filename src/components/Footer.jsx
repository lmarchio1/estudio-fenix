import Logo from './ui/Logo'

const YEAR = new Date().getFullYear()

const LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Áreas', href: '#areas' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-fenixNavy-950 text-slate-300">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 8% 0%, rgba(221,154,51,0.1) 0%, rgba(6,18,28,0) 45%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <Logo
              variant="light"
              iconClassName="h-14 w-auto sm:h-16"
              nameClassName="text-2xl sm:text-3xl"
              taglineClassName="text-xs"
              gap="gap-4"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Estudio</h3>
            <ul className="mt-4 space-y-3">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs text-slate-500">© {YEAR} Estudio Fénix — Ramírez & Marchioni. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
