import PhoenixIcon from './PhoenixIcon'

export default function Logo({
  variant = 'light',
  iconClassName = 'h-9 w-9',
  nameClassName = 'text-lg',
  taglineClassName = 'text-[9px]',
  gap = 'gap-2.5',
  stacked = false,
}) {
  const isLight = variant === 'light'
  const nameColor = isLight ? 'text-white' : 'text-fenixNavy-900'

  const taglineStyle = isLight
    ? {
        backgroundImage:
          'linear-gradient(120deg, #fdf6ea 0%, #eab654 22%, #9c621a 45%, #f3d48c 62%, #c17d1f 80%, #fdf6ea 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }
    : undefined
  const taglineColor = isLight ? '' : 'text-ember-600'

  return (
    <div className={`flex ${stacked ? 'flex-col items-center text-center' : 'items-center'} ${gap}`}>
      <PhoenixIcon className={iconClassName} />
      <div className="leading-none">
        <p className={`font-serif font-bold tracking-wide ${nameClassName} ${nameColor}`}>
          ESTUDIO FÉNIX
        </p>
        <p
          className={`mt-1 font-semibold uppercase tracking-[0.16em] ${taglineColor} ${taglineClassName}`}
          style={taglineStyle}
        >
          Ramírez &amp; Marchioni
        </p>
      </div>
    </div>
  )
}
