import useNewProject from '@/hooks/projects/useNewProject'
import { InputFieldsType } from '@/types'
import Input from '../form/Input'

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

export default function NewProject() {
  const { errors, handleAddProject, handleSubmit, isLoading, register } = useNewProject()

  return (
    <form onSubmit={handleSubmit(handleAddProject)} action="">
      <h1>Nuevo proyecto</h1>

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

      <button disabled={isLoading} type="submit">
        {isLoading ? 'Creando...' : 'Crear proyecto'}
      </button>
    </form>
  )
}
