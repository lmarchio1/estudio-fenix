import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'

export default function Card({ icon, title, description, delay = 0 }) {
  const [ref, visible] = useRevealOnScroll(0.2)

  return (
    <div
      ref={ref}
      className={`group rounded-2xl border border-fenixNavy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ember-200 hover:shadow-lg ${
        visible ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fenixNavy-900 text-ember-300 transition-transform duration-300 group-hover:scale-110 group-hover:animate-pop">
        {icon}
      </div>
      <h3 className="mt-5 font-serif text-lg font-bold text-fenixNavy-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  )
}
