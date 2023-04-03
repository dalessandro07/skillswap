import Link from 'next/link'
import useRegister from '@/hooks/session/useRegister'
import Input from '../form/Input'
import type { InputFieldsType } from '@/types'
import HeroButton from '../buttons/HeroButton'
import OAuthLogin from './OAuthLogin'

const REGISTER_FIELDS: InputFieldsType[] = [
  {
    name: 'fullName',
    type: 'text',
    placeholder: 'Ej. Alessandro Rios',
    label: 'Nombres completos'
  },
  {
    name: 'username',
    type: 'text',
    placeholder: 'Ej. dalessandro07',
    label: 'Nombre de usuario'
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Ej. dev.alessandro@outlook.com',
    label: 'Correo electrónico (se enviará una confirmación)'
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Más de 6 caracteres',
    label: 'Contraseña'
  }
]

export default function Register() {
  const { handleSubmit, handleRegister, isLoading, register, errors } = useRegister()

  return (
    <section className="flex flex-col gap-5 py-10">
      <h1 className="text-2xl font-bold">Regístrate</h1>

      <p className="text-gray-500">
        Ya tienes una cuenta?{' '}
        <Link className="border-b border-orange-600" href="/login">
          Iniciar sesión
        </Link>
      </p>

      <OAuthLogin />

      <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleRegister)}>
        <div className="flex items-center gap-2">
          <div className="w-full border-b border-gray-500"></div>
          <span className="text-gray-500">ó</span>
          <div className="w-full border-b border-gray-500"></div>
        </div>

        <section className="flex flex-col gap-2 my-5">
          {REGISTER_FIELDS.map(({ name, type, placeholder, label }) => (
            <Input
              key={name}
              register={register}
              errors={errors}
              fields={{ name, type, placeholder }}>
              {label}
            </Input>
          ))}
        </section>

        <section className="flex justify-around-w-full"></section>

        <div className="flex items-baseline gap-4">
          <HeroButton
            asFormButton={{
              value: true,
              isLoading
            }}>
            {isLoading ? 'Registrando...' : 'Registrarme'}
          </HeroButton>
        </div>
      </form>
    </section>
  )
}
