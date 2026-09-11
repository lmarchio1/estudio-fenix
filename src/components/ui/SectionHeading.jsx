import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'

const STYLES = {
  light: {
    eyebrow: 'text-gold-dark',
    title: 'text-fenixNavy-900',
    line: 'bg-ember-400/50',
    description: 'text-slate-600',
  },
  dark: {
    eyebrow: 'text-gold drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]',
    title: 'text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]',
    line: 'bg-ember-300/40',
    description: 'text-slate-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]',
  },
}

export default function SectionHeading({ eyebrow, title, description, align = 'left', variant = 'light', spacing = 'mb-10', children }) {
  const [ref, visible] = useRevealOnScroll(0.3)
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const styles = STYLES[variant]

  return (
    <div
      ref={ref}
      className={`max-w-2xl ${alignment} ${spacing} transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'
      }`}
    >
      {eyebrow && (
        <span className={`text-sm font-semibold uppercase tracking-wider ${styles.eyebrow}`}>{eyebrow}</span>
      )}
      <h2 className={`mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl ${styles.title}`}>{title}</h2>

      <div className={`mt-4 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className={`h-px transition-all delay-300 duration-700 ease-out ${visible ? 'w-10' : 'w-0'} ${styles.line}`} />
        <span className="h-1.5 w-1.5 rotate-45 bg-ember-400" />
        <span className={`h-px transition-all delay-300 duration-700 ease-out ${visible ? 'w-10' : 'w-0'} ${styles.line}`} />
      </div>

      {description && <p className={`mt-3 text-base ${styles.description}`}>{description}</p>}
      {children}
    </div>
  )
}
