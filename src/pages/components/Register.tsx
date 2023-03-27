import Link from 'next/link'

export default function Register() {
  return (
    <form method="POST" action="api/signup">
      <h1>Crea tu cuenta</h1>

      <div>
        <label htmlFor="fullName">Nombre</label>
        <input name="fullName" type="text" required placeholder="Alessandro Rios" />
      </div>

      <div>
        <label htmlFor="email">Correo institucional</label>
        <input name="email" type="email" required placeholder="I202220654@cibertec.edu.pe" />
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

      <button type="submit">Registrarme</button>
      <Link style={{ color: '#f90' }} href="/login">
        Iniciar sesión
      </Link>
    </form>
  )
}
