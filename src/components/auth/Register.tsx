import Link from 'next/link'
import useRegister from '@/hooks/session/useRegister'

export default function Register() {
  const { handleRegister, loading } = useRegister()

  return (
    <form onSubmit={handleRegister}>
      <h1>Crea tu cuenta</h1>

      <div>
        <label htmlFor="fullName">Nombre</label>
        <input name="fullName" type="text" required placeholder="Alessandro Rios" />
      </div>

      <div>
        <label htmlFor="email">Correo institucional</label>
        <input name="email" type="email" required placeholder="i202312345@cibertec.edu.pe" />
      </div>

      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          name="password"
          type="password"
          required
          minLength={6}
          placeholder="Más de 6 caracteres"
        />
      </div>

      <button disabled={loading} type="submit">
        {loading ? 'Registrando...' : 'Registrarme'}
      </button>
      <Link style={{ color: '#f90' }} href="/login">
        Iniciar sesión
      </Link>
    </form>
  )
}
