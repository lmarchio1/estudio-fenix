import Logo from './ui/Logo'
import {
  EMAIL,
  LINKEDIN_PATH,
  LINKEDIN_URL,
  TELEFONO,
  TELEFONO_URL,
  WHATSAPP_PATH,
  WHATSAPP_URL,
} from '../data/contacto'

const REDES = [
  { label: 'WhatsApp', href: WHATSAPP_URL, path: WHATSAPP_PATH, hover: 'hover:bg-[#25D366]' },
  { label: 'LinkedIn', href: LINKEDIN_URL, path: LINKEDIN_PATH, hover: 'hover:bg-[#0A66C2]' },
]

const YEAR = new Date().getFullYear()

const LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },
]

const LINK_CLASS = 'text-sm text-slate-400 transition-colors hover:text-white'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-fenixNavy-950 text-slate-300">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 8% 0%, rgba(200,162,90,0.1) 0%, rgba(6,18,28,0) 45%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Logo
              variant="light"
              iconClassName="h-14 w-auto sm:h-16"
              nameClassName="text-2xl sm:text-3xl"
              taglineClassName="text-xs"
              gap="gap-4"
            />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-400">
              Estudio contable e impositivo. Monotributo, impuestos, certificaciones contables
              y balances para profesionales, comercios y sociedades.
            </p>
          </div>

          <div>
            <h3 className="text-gold text-xs font-semibold uppercase tracking-wider">Estudio</h3>
            <ul className="mt-4 space-y-3">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={LINK_CLASS}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gold text-xs font-semibold uppercase tracking-wider">Contacto</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${EMAIL}`} className={`${LINK_CLASS} break-all`}>
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={TELEFONO_URL} className={LINK_CLASS}>
                  {TELEFONO}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {REDES.map((red) => (
                <a
                  key={red.label}
                  href={red.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={red.label}
                  title={red.label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 ring-1 ring-inset ring-white/15 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:ring-transparent ${red.hover}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
                    <path d={red.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs text-slate-500">
            © {YEAR} Estudio Fénix — Ramírez & Marchioni. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
