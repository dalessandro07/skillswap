import Image from 'next/image'
import { memo } from 'react'

function Footer() {
  return (
    <footer className="p-5 flex w-full justify-between">
      <section className="flex items-center gap-4">
        <Image src="/skillswap.png" alt="Logo de Skillswap" width={40} height={40} />

        <article className="flex flex-col">
          <p className="flex gap-1 text-sm">
            Desarrollado por
            <a
              className="hover:text-blue-600 transition-colors duration-150 hover:border-blue-600 border-b border-transparent"
              target="_blank"
              href="https://alessandrorios.com">
              Alessandro Rios
            </a>
          </p>
          <p className="flex gap-1 text-xs text-gray-500">
            Sitio protegido por reCAPTCHA, aplican
            <a
              target="_blank"
              className="hover:underline"
              href="https://policies.google.com/privacy">
              Políticas de Privacidad
            </a>
            y
            <a target="_blank" className="hover:underline" href="https://policies.google.com/terms">
              Condiciones de Servicio
            </a>
            de Google.
          </p>
        </article>
      </section>

      <section className="flex gap-5 items-center">
        <a href="https://www.linkedin.com/in/alessandro-rios/" target="_blank">
          <svg
            fill="currentColor"
            viewBox="0 0 30 30"
            className="hover:text-orange-500 hover:rotate-[360deg] transition-all duration-500 w-8 h-8">
            <path d="M9 25H4V10h5v15zM6.501 8a2.5 2.5 0 1 1 0-5.001A2.5 2.5 0 0 1 6.5 8zM27 25h-4.807v-7.3c0-1.741-.033-3.98-2.499-3.98-2.503 0-2.888 1.896-2.888 3.854V25H12V9.989h4.614v2.051h.065c.642-1.18 2.211-2.424 4.551-2.424 4.87 0 5.77 3.109 5.77 7.151V25z"></path>
          </svg>
        </a>
        <a href="https://github.com/dalessandro07/skillswap" target="_blank">
          <svg
            fill="currentColor"
            viewBox="0 0 30 30"
            className="hover:text-orange-500 hover:rotate-[360deg] transition-all duration-500 w-8 h-8">
            <path d="M15 3C8.373 3 3 8.373 3 15c0 5.623 3.872 10.328 9.092 11.63a1.751 1.751 0 0 1-.092-.583v-2.051h-1.508c-.821 0-1.551-.353-1.905-1.009-.393-.729-.461-1.844-1.435-2.526-.289-.227-.069-.486.264-.451.615.174 1.125.596 1.605 1.222.478.627.703.769 1.596.769.433 0 1.081-.025 1.691-.121.328-.833.895-1.6 1.588-1.962-3.996-.411-5.903-2.399-5.903-5.098 0-1.162.495-2.286 1.336-3.233-.276-.94-.623-2.857.106-3.587 1.798 0 2.885 1.166 3.146 1.481A8.993 8.993 0 0 1 15.495 9c1.036 0 2.024.174 2.922.483C18.675 9.17 19.763 8 21.565 8c.732.731.381 2.656.102 3.594.836.945 1.328 2.066 1.328 3.226 0 2.697-1.904 4.684-5.894 5.097C18.199 20.49 19 22.1 19 23.313v2.734c0 .104-.023.179-.035.268C23.641 24.676 27 20.236 27 15c0-6.627-5.373-12-12-12z"></path>
          </svg>
        </a>
      </section>
    </footer>
  )
}

export default memo(Footer)
