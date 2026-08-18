import phoenixIcon from '../../assets/phoenix-icon.png'

// Recortado del isologo real del Estudio Fénix (src/assets/fenix-logo-original.png).
export default function PhoenixIcon({ className = 'h-10 w-10' }) {
  return <img src={phoenixIcon} alt="" className={`object-contain ${className}`} />
}
