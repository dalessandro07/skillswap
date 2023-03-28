import Link from 'next/link'
import useLogin from '@/hooks/session/useLogin'

export default function Login() {
  const { handleLogin, loading } = useLogin()

  return (
    <form onSubmit={handleLogin}>
      <h1>Inicia sesión en SkillSwap</h1>

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
        {loading ? 'Ingresando...' : 'Iniciar sesión'}
      </button>
      <Link style={{ color: '#f90' }} href="/register">
        Registrarme
      </Link>
    </form>
  )
}
