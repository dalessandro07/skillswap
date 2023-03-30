import HeroButton from '@/components/buttons/HeroButton'
import Input from '@/components/form/Input'
import type { ProjectType, InputFieldsType } from '@/types'
import type { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

const PROJECT_FIELDS: InputFieldsType[] = [
  {
    name: 'title',
    type: 'text',
    placeholder: 'SkillSwap',
    label: 'Título'
  },
  {
    name: 'description',
    type: 'text',
    placeholder: 'SkillSwap es ...',
    label: 'Descripción'
  },
  {
    name: 'image',
    type: 'text',
    placeholder: 'https://i.imgur.com/...',
    label: 'Imagen (imgur)'
  },
  {
    name: 'category',
    type: 'text',
    placeholder: 'Desarrollo web',
    label: 'Categoría'
  },
  {
    name: 'url',
    type: 'text',
    placeholder: 'https://skillswap.vercel.app',
    label: 'Demo o Repositorio'
  }
]

export default function SecondForm({
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
      {PROJECT_FIELDS.map(({ name, type, placeholder, label }) => (
        <Input
          key={name}
          register={register}
          errors={errors}
          fields={{
            name,
            type,
            placeholder
          }}>
          {label}
        </Input>
      ))}

      <HeroButton
        asFormButton={{
          value: true,
          isLoading
        }}>
        {isLoading ? 'Creando...' : 'Crear proyecto'}
      </HeroButton>
    </>
  )
}
