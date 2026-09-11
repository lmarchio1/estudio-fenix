// Fotos en WebP con dos tamaños: el navegador elige la de 800px en celulares y la
// grande en pantallas anchas. Se usan con <img {...FOTO} sizes="..." />.
import oficina800 from '../assets/estudio-oficina-800.webp'
import oficina from '../assets/estudio-oficina.webp'
import manos800 from '../assets/confianza-manos-800.webp'
import manos from '../assets/confianza-manos.webp'
import compuCafe800 from '../assets/compu-cafe-800.webp'
import compuCafe from '../assets/compu-cafe.webp'
import contador800 from '../assets/contador-general-800.webp'
import contador from '../assets/contador-general.webp'

const foto = (chica, grande, anchoGrande) => ({
  src: grande,
  srcSet: `${chica} 800w, ${grande} ${anchoGrande}w`,
})

export const FOTO_OFICINA = foto(oficina800, oficina, 1600)
export const FOTO_MANOS = foto(manos800, manos, 1600)
export const FOTO_COMPU_CAFE = foto(compuCafe800, compuCafe, 900)
export const FOTO_CONTADOR = foto(contador800, contador, 1100)
