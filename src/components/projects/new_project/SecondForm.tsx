import HeroButton from '@/components/buttons/HeroButton'
import Input from '@/components/form/Input'
import Select from '@/components/form/Select'
import type { ProjectType, InputFieldsType } from '@/types'
import type { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

const PROJECT_FIELDS: InputFieldsType[] = [
  {
    name: 'title',
    type: 'text',
    placeholder: 'Ej. SkillSwap',
    label: 'Título'
  },
  {
    name: 'description',
    type: 'text',
    placeholder: 'Ej. SkillSwap es ...',
    label: 'Descripción'
  },
  {
    name: 'image',
    type: 'text',
    placeholder: 'Ej. https://i.imgur.com/hMGfX6f.png',
    label: 'Imagen (i.imgur, netlify, vercel, etc.)'
  },
  {
    name: 'url',
    type: 'text',
    placeholder: 'Ej. https://skillswap.vercel.app',
    label: 'Demo o Repositorio'
  }
]

export default function SecondForm({
  register,
  errors,
  isLoading,
  type = 'new'
}: {
  register: UseFormRegister<ProjectType>
  errors: FieldErrors<FieldValues>
  isLoading: boolean
  type?: 'new' | 'edit'
}) {
  const isEdit = type === 'edit'
  const message = isEdit ? 'Guardar cambios' : 'Crear proyecto'

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

      <Select
        register={register}
        errors={errors}
        fields={{
          name: 'category',
          options: [
            { value: '', label: 'Selecciona una categoría', disabled: true },
            { value: 'frontend', label: 'Frontend' },
            { value: 'backend', label: 'Backend' },
            { value: 'fullstack', label: 'Fullstack' },
            { value: 'mobile', label: 'Mobile' },
            { value: 'devops', label: 'DevOps' },
            { value: 'ux/ui', label: 'UX/UI' },
            { value: 'game', label: 'Game Development' }
          ]
        }}>
        Categoría
      </Select>

      <HeroButton
        asFormButton={{
          value: true,
          isLoading
        }}>
        {isLoading ? 'Cargando...' : message}
      </HeroButton>
    </>
  )
}
