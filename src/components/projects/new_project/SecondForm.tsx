import HeroButton from '@/components/buttons/HeroButton'
import Input from '@/components/form/Input'
import Select from '@/components/form/Select'
import type { ProjectType, InputFieldsType } from '@/types'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Image from 'next/image'
import { memo } from 'react'
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
    label: 'Imagen de portada'
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
  type = 'new',
  imageValue
}: {
  register: UseFormRegister<ProjectType>
  errors: FieldErrors<FieldValues>
  isLoading: boolean
  type?: 'new' | 'edit'
  imageValue?: string
}) {
  const isEdit = type === 'edit'
  const message = isEdit ? 'Guardar cambios' : 'Crear proyecto'

  const validateImageValue = (value: string) => {
    const regex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))|(data:image\/.*;base64.*)$/
    return regex.test(value)
  }

  const isValidImage = validateImageValue(imageValue || '')
  const [parent] = useAutoAnimate()

  return (
    <section className="flex flex-col gap-4 w-full">
      {PROJECT_FIELDS.map(({ name, type, placeholder, label }) => (
        <>
          <Input
            key={name}
            register={register}
            errors={errors}
            fields={{
              name,
              type,
              placeholder
            }}>
            <div ref={parent}>
              {label}

              {imageValue && isValidImage && name === 'image' && (
                <Image
                  className="object-contain mt-2 border border-gray-500 rounded-md"
                  src={imageValue}
                  alt="Imagen de portada"
                  width={200}
                  height={200}
                />
              )}
            </div>
          </Input>
        </>
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
    </section>
  )
}
