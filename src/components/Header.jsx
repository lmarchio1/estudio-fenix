import { useEffect, useState } from 'react'
import Logo from './ui/Logo'

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#areas', label: 'Áreas' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-colors ${
        isScrolled ? 'bg-fenixNavy-950/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="group flex items-center">
          <Logo variant="light" iconClassName="h-9 w-9 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
        </a>

        <nav className="hidden items-center gap-1 rounded-full bg-white/5 p-1 ring-1 ring-inset ring-white/10 backdrop-blur lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeHref === link.href
                  ? 'bg-ember-400 text-fenixNavy-950 shadow-sm shadow-ember-900/30'
                  : 'text-slate-200 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden rounded-full bg-ember-400 px-5 py-2.5 text-sm font-semibold text-fenixNavy-950 shadow-sm shadow-ember-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-ember-300 hover:shadow-md hover:shadow-ember-900/40 lg:inline-block"
        >
          Consultanos
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-white/10 bg-fenixNavy-950/95 px-4 py-4 backdrop-blur lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-ember-400 px-4 py-2 text-center text-sm font-semibold text-fenixNavy-950"
            >
              Consultanos
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
