import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'

export default function Card({ icon, title, description, delay = 0 }) {
  const [ref, visible] = useRevealOnScroll(0.2)

  return (
    <div
      ref={ref}
      className={`group rounded-2xl border border-slate-300/70 bg-slate-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-ember-200 hover:bg-white hover:shadow-xl hover:shadow-ember-900/10 ${
        visible ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="icon-gold inline-flex h-11 w-11 items-center justify-center rounded-xl bg-fenixNavy-900 transition-transform duration-300 group-hover:scale-110 group-hover:animate-pop">
        {icon}
      </div>
      <h3 className="mt-4 font-serif text-base font-bold text-fenixNavy-900">{title}</h3>
      <span className="mt-1.5 block h-0.5 w-6 rounded-full bg-ember-400 transition-all duration-300 group-hover:w-12" />
      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  )
}
