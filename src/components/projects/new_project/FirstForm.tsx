import HeroButton from '@/components/buttons/HeroButton'
import Input from '@/components/form/Input'
import type { ProjectType } from '@/types'
import type { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

export default function FirstForm({
  register,
  errors,
  isLoading
}: {
  register: UseFormRegister<ProjectType>
  errors: FieldErrors<FieldValues>
  isLoading: boolean
}) {
  return (
    <>
      <Input
        register={register}
        errors={errors}
        fields={{
          name: 'url',
          type: 'text',
          placeholder: 'https://skillswap.vercel.app'
        }}>
        <p className="flex gap-1 items-baseline">
          Ingresa la URL del proyecto
          <span className="text-gray-500 text-sm">(para obtener los metadatos)</span>
        </p>
      </Input>

      <HeroButton
        asFormButton={{
          value: true,
          isLoading
        }}>
        {isLoading ? 'Obteniendo...' : 'Obtener datos'}
      </HeroButton>
    </>
  )
}
