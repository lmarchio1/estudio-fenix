import Logo from './ui/Logo'
import { LinkedInIcon, WhatsAppIcon } from './ui/BrandIcons'
import { EMAIL, LINKEDIN_URL, WHATSAPP_URL } from '../data/contacto'

const REDES = [
  { label: 'WhatsApp', href: WHATSAPP_URL, Icon: WhatsAppIcon },
  { label: 'LinkedIn', href: LINKEDIN_URL, Icon: LinkedInIcon },
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
          background: 'radial-gradient(circle at 8% 0%, rgba(238,192,79,0.1) 0%, rgba(6,18,28,0) 45%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          <div className="col-span-2">
            <Logo
              variant="light"
              iconClassName="h-14 w-auto sm:h-16"
              nameClassName="text-2xl sm:text-3xl"
              taglineClassName="text-xs"
              gap="gap-4"
            />
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
              {REDES.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group inline-flex items-center gap-2.5 ${LINK_CLASS}`}
                  >
                    <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${EMAIL}`} title={EMAIL} className={`group inline-flex items-center gap-2.5 ${LINK_CLASS}`}>
                  <span className="icon-gold flex h-6 w-6 items-center justify-center rounded-full bg-ember-400/15 transition-transform duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-3.5 w-3.5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0119.5 19.5h-15a2.25 2.25 0 01-2.25-2.25V6.75z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75l8.25 6.5 8.25-6.5" />
                    </svg>
                  </span>
                  Email
                </a>
              </li>
            </ul>
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
