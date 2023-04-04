import { EditUserType } from '@/types'
import Input from '../form/Input'
import useEditUser from '@/hooks/session/useEditUser'

export default function ModalEditUser({
  label,
  name,
  toggleShow
}: {
  label: string
  name: 'fullName' | 'avatar_url'
  toggleShow: () => void
}) {
  const { register, handleSubmit, errors, isSubmitting, handleEdit } = useEditUser()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-96 h-96 rounded-md bg-gradient-to-br from-custom-black to-slate-800">
        <div className="absolute top-0 right-0 p-5">
          <button
            onClick={toggleShow}
            className="hover:scale-110 transition-all duration-200 hover:text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="sr-only">Cerrar</span>
          </button>
        </div>

        <form
          onSubmit={handleSubmit((data: EditUserType) => {
            handleEdit(data)
            toggleShow()
          })}
          className="flex flex-col items-center justify-center h-full px-5 gap-6">
          <h2 className="text-2xl font-bold">Editar {label}</h2>

          <section className="w-full">
            <Input
              register={register}
              errors={errors}
              fields={{
                name,
                type: 'text',
                placeholder: `Escribe tu ${label}`
              }}
            />
          </section>

          <button
            type="submit"
            className="w-3/4 p-2 mt-4 text-white bg-green-600 rounded-md hover:bg-green-800 focus:outline-none transition-all duration-200"
            disabled={isSubmitting}>
            {isSubmitting ? 'Guardando...' : 'Guardar'}
          </button>
        </form>
      </div>
    </div>
  )
}
