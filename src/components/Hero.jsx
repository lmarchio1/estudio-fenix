import estudioOficina from '../assets/estudio-oficina.jpg'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-fenixNavy-950">
      <img
        src={estudioOficina}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(100deg, rgba(6,18,28,0.96) 0%, rgba(6,18,28,0.88) 35%, rgba(11,28,43,0.62) 65%, rgba(11,28,43,0.4) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 78% 18%, rgba(221,154,51,0.16) 0%, rgba(6,18,28,0) 45%)',
        }}
      />


      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex animate-fade-up items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-ember-200 ring-1 ring-inset ring-white/20 backdrop-blur motion-reduce:animate-none">
            Contable · Impositivo · Laboral
          </span>
          <h1
            className="mt-6 animate-fade-up font-serif text-4xl font-bold tracking-tight text-white drop-shadow-sm motion-reduce:animate-none sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '120ms' }}
          >
            Tu estudio contable para renacer y crecer
          </h1>
          <p
            className="mt-6 animate-fade-up text-lg leading-relaxed text-slate-200 motion-reduce:animate-none"
            style={{ animationDelay: '240ms' }}
          >
            Estudio Fénix — Ramírez & Marchioni acompaña a monotributistas, profesionales
            independientes y PyMEs con asesoramiento impositivo, certificaciones
            contables y gestión laboral clara y a tiempo.
          </p>
          <div
            className="mt-8 flex animate-fade-up flex-wrap gap-4 motion-reduce:animate-none"
            style={{ animationDelay: '360ms' }}
          >
            <a
              href="#contacto"
              className="rounded-full bg-ember-400 px-5 py-3 text-sm font-semibold text-fenixNavy-950 shadow-sm shadow-ember-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-ember-300 hover:shadow-md hover:shadow-ember-900/40"
            >
              Consultanos ahora
            </a>
            <a
              href="#servicios"
              className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-white/20"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
