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
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleLogin)}>
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

      <div className="flex items-baseline gap-4">
        <button
          className="px-3.5 py-2 bg-orange-600 hover:bg-orange-700 transition-all duration-200 w-max rounded-sm"
          disabled={isLoading}
          type="submit">
          {isLoading ? 'Ingresando...' : 'Iniciar sesión'}
        </button>

        <Link className="border-b border-orange-600" href="/register">
          Registrarme
        </Link>
      </div>
    </form>
  )
}
