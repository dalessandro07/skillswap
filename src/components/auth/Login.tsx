import Link from 'next/link'
import useLogin from '@/hooks/session/useLogin'
import Input from '../form/Input'
import type { InputFieldsType } from '@/types'

const LOGIN_FIELDS: InputFieldsType[] = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'i202312345@cibertec.edu.pe',
    label: 'Correo institucional'
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Más de 6 caracteres',
    label: 'Contraseña'
  }
]

export default function Login() {
  const { handleSubmit, handleLogin, isLoading, register, errors } = useLogin()

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <h1>Inicia sesión en SkillSwap</h1>

      {LOGIN_FIELDS.map(({ name, type, placeholder, label }) => (
        <Input
          register={register}
          errors={errors}
          key={name}
          fields={{
            name,
            type,
            placeholder
          }}>
          {label}
        </Input>
      ))}

      <button disabled={isLoading} type="submit">
        {isLoading ? 'Ingresando...' : 'Iniciar sesión'}
      </button>
      <Link style={{ color: '#f90' }} href="/register">
        Registrarme
      </Link>
    </form>
  )
}
