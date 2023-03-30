import Link from 'next/link'
import useRegister from '@/hooks/session/useRegister'
import Input from '../form/Input'
import type { InputFieldsType } from '@/types'

const REGISTER_FIELDS: InputFieldsType[] = [
  {
    name: 'fullName',
    type: 'text',
    placeholder: 'Alessandro Rios',
    label: 'Nombres completos'
  },
  {
    name: 'username',
    type: 'text',
    placeholder: 'dalessandro07',
    label: 'Nombre de usuario'
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'I202312345@cibertec.edu.pe',
    label: 'Correo institucional'
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
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleRegister)}>
      <h1>Crea tu cuenta</h1>

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

      <div className="flex items-baseline gap-4">
        <button
          className="px-3.5 py-2 bg-orange-600 hover:bg-orange-700 transition-all duration-200 w-max rounded-sm"
          disabled={isLoading}
          type="submit">
          {isLoading ? 'Registrando...' : 'Registrarme'}
        </button>

        <Link className="border-b border-orange-600" href="/login">
          Iniciar sesión
        </Link>
      </div>
    </form>
  )
}
