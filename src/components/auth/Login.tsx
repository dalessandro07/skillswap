import Link from 'next/link'
import useLogin from '@/hooks/session/useLogin'
import Input from '../form/Input'
import type { InputFieldsType } from '@/types'
import HeroButton from '../buttons/HeroButton'
import OAuthLogin from './OAuthLogin'

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
    <section className="flex flex-col gap-5 py-10">
      <h1 className="text-2xl font-bold">Inicia sesión</h1>

      <p className="text-gray-500">
        No tienes una cuenta?{' '}
        <Link className="border-b border-orange-600" href="/register">
          Regístrate
        </Link>
      </p>

      <OAuthLogin />

      <div className="flex items-center gap-2">
        <div className="w-full border-b border-gray-600"></div>
        <span className="text-gray-500">ó</span>
        <div className="w-full border-b border-gray-600"></div>
      </div>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleLogin)}>
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
        </div>
      </form>
    </section>
  )
}
