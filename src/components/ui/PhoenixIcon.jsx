// Fénix estilizado (placeholder) inspirado en el isologo del estudio.
// Reemplazar por el logo real en public/logo.png cuando esté disponible.
export default function PhoenixIcon({ className = 'h-10 w-10', color = 'currentColor' }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g fill={color}>
        {/* ala izquierda */}
        <path
          d="M96 88
             C74 74, 46 68, 14 74
             C40 80, 58 90, 68 102
             C44 100, 22 106, 4 120
             C30 118, 50 124, 64 134
             C44 138, 26 148, 12 162
             C38 154, 58 152, 74 156
             C82 150, 90 132, 96 112 Z"
        />
        {/* ala derecha (espejo) */}
        <path
          d="M104 88
             C126 74, 154 68, 186 74
             C160 80, 142 90, 132 102
             C156 100, 178 106, 196 120
             C170 118, 150 124, 136 134
             C156 138, 174 148, 188 162
             C162 154, 142 152, 126 156
             C118 150, 110 132, 104 112 Z"
        />
        {/* cuerpo / llama central */}
        <path
          d="M100 40
             C110 54, 116 66, 112 80
             C120 76, 126 66, 126 54
             C134 68, 132 84, 118 96
             C126 96, 134 92, 140 84
             C140 108, 122 126, 100 132
             C78 126, 60 108, 60 84
             C66 92, 74 96, 82 96
             C68 84, 66 68, 74 54
             C74 66, 80 76, 88 80
             C84 66, 90 54, 100 40 Z"
        />
        {/* cabeza */}
        <circle cx="100" cy="46" r="7" />
        {/* pico */}
        <path d="M100 40 L108 34 L100 30 Z" />
      </g>
    </svg>
  )
}
