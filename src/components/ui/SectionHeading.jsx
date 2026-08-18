export default function SectionHeading({ eyebrow, title, description, align = 'left', variant = 'light' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const isDark = variant === 'dark'

  return (
    <div className={`max-w-2xl ${alignment} mb-10`}>
      {eyebrow && (
        <span
          className={`text-sm font-semibold uppercase tracking-wider ${
            isDark ? 'text-ember-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]' : 'text-ember-600'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl ${
          isDark ? 'text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]' : 'text-fenixNavy-900'
        }`}
      >
        {title}
      </h2>

      <div className={`mt-4 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className={`h-px w-10 ${isDark ? 'bg-ember-300/40' : 'bg-ember-400/50'}`} />
        <span className="h-1.5 w-1.5 rotate-45 bg-ember-400" />
        <span className={`h-px w-10 ${isDark ? 'bg-ember-300/40' : 'bg-ember-400/50'}`} />
      </div>

      {description && (
        <p
          className={`mt-3 text-base ${
            isDark ? 'text-slate-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
