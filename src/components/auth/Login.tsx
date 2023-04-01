import Link from 'next/link'
import useLogin from '@/hooks/session/useLogin'
import Input from '../form/Input'
import type { InputFieldsType } from '@/types'
import HeroButton from '../buttons/HeroButton'

const LOGIN_FIELDS: InputFieldsType[] = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Ej. dev.alessandro@outlook.com',
    label: 'Correo electrónico'
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
    <form className="flex flex-col gap-5 py-10" onSubmit={handleSubmit(handleLogin)}>
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
        <HeroButton
          asFormButton={{
            value: true,
            isLoading
          }}>
          {isLoading ? 'Ingresando...' : 'Iniciar sesión'}
        </HeroButton>

        <Link className="border-b border-orange-600" href="/register">
          Registrarme
        </Link>
      </div>
    </form>
  )
}
