import { memo } from 'react'

function Footer() {
  return (
    <footer className="mt-10">
      <p>
        Desarrollado por{' '}
        <a
          className="hover:text-blue-600 transition-colors duration-150 hover:border-blue-600 border-b border-transparent"
          target="_blank"
          href="https://alessandrorios.com">
          Alessandro Rios
        </a>
      </p>
      <p className="text-xs text-gray-500">
        Sitio protegido por reCAPTCHA, aplican{' '}
        <a target="_blank" className="hover:underline" href="https://policies.google.com/privacy">
          Políticas de Privacidad
        </a>{' '}
        y{' '}
        <a target="_blank" className="hover:underline" href="https://policies.google.com/terms">
          Condiciones de Servicio
        </a>{' '}
        de Google.
      </p>
    </footer>
  )
}

export default memo(Footer)
