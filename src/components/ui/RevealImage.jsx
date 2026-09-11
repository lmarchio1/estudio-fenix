import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'

// Foto con un leve zoom que se asienta al entrar en pantalla.
// El contenedor debe tener overflow-hidden para que el zoom no se salga.
export default function RevealImage({ className = '', alt = '', ...props }) {
  const [ref, visible] = useRevealOnScroll(0.15)

  return (
    <img
      ref={ref}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...props}
      className={`${className} transition-transform duration-[1600ms] ease-out motion-reduce:transition-none ${
        visible ? 'scale-100' : 'scale-110 motion-reduce:scale-100'
      }`}
    />
  )
}
