import { ProjectType } from '@/types'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'
import useGetUser from '../session/useGetUser'
import useValidateUniqueProject from './useValidateUniqueProject'
import useGetDataFromWebsite from './useGetDataFromWebsite'
import { zodResolver } from '@hookform/resolvers/zod'
import { newProjectFirstSchema, newProjectSecondSchema } from '@/utils/zodSchemas'

export default function useNewProject(
  defaultValues: Partial<ProjectType> = {
    creator: {
      username: '',
      fullName: '',
      avatar_url: '',
      portfolio: ''
    },
    updatedAt: `${new Date().toISOString().split('.')[0]}`,
    title: '',
    description: '',
    image: '',
    category: 'frontend',
    url: '',
    likes: [],
    comments: []
  },
  type: 'new' | 'edit' = 'new',
  viewSecondForm?: boolean
) {
  const supabaseClient = useSupabaseClient()
  const router = useRouter()
  const { user } = useGetUser()

  const username = user?.user_metadata.username || user?.user_metadata.email.split('@')[0] || ''
  const fullName = user?.user_metadata.fullName || user?.user_metadata.full_name || ''
  const avatar_url = user?.user_metadata.avatar_url || ''

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    setValue
  } = useForm<ProjectType>({
    mode: 'onChange',
    defaultValues: {
      ...defaultValues,
      creator: {
        username,
        fullName,
        avatar_url
      }
    },
    resolver: zodResolver(viewSecondForm ? newProjectSecondSchema : newProjectFirstSchema)
  })

  const { validateUniqueProject } = useValidateUniqueProject()
  const { getDataFromWebsite } = useGetDataFromWebsite(setValue)

  async function handleAddProject(projectData: Partial<ProjectType>) {
    const { title, description, image, category, url } = projectData

    if (!title || !description || !image || !category) {
      return toast.error('Todos los campos son requeridos')
    }

    if (type === 'new') {
      const errorMessage = await validateUniqueProject(projectData)

      if (errorMessage) {
        return toast.error(errorMessage)
      }

      const { error } = await supabaseClient.from('projects').insert({
        ...projectData,
        creator_id: user?.id
      })

      if (error) return toast.error(error.message)

      toast.success(`¡Proyecto ${title} creado con éxito!`)
    } else {
      const { error } = await supabaseClient
        .from('projects')
        .update({
          ...projectData,
          creator_id: user?.id
        })
        .eq('id', projectData.id)

      if (error) return toast.error(error.message)

      toast.success(`¡Proyecto ${title} editado con éxito!`)
    }

    router.push('/projects')
  }

  return {
    handleAddProject,
    isLoading,
    getDataFromWebsite,
    register,
    handleSubmit,
    errors
  }
}
