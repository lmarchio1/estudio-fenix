import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'

export default function Card({ icon, title, description, delay = 0 }) {
  const [ref, visible] = useRevealOnScroll(0.2)

  return (
    <div
      ref={ref}
      className={`group rounded-2xl border border-fenixNavy-100 bg-fenixNavy-50/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-ember-200 hover:bg-white hover:shadow-xl hover:shadow-ember-900/10 ${
        visible ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fenixNavy-900 text-ember-300 transition-transform duration-300 group-hover:scale-110 group-hover:animate-pop">
        {icon}
      </div>
      <h3 className="mt-5 font-serif text-lg font-bold text-fenixNavy-900">{title}</h3>
      <span className="mt-1.5 block h-0.5 w-6 rounded-full bg-ember-400 transition-all duration-300 group-hover:w-12" />
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  )
}
