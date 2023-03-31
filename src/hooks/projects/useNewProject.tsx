import { ProjectType } from '@/types'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'
import useGetUser from '../session/useGetUser'
import useValidateUniqueProject from './useValidateUniqueProject'
import useGetDataFromWebsite from './useGetDataFromWebsite'

export default function useNewProject(
  defaultValues: Partial<ProjectType> = {
    creator: {
      username: '',
      fullName: ''
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
  type: 'new' | 'edit' = 'new'
) {
  const supabaseClient = useSupabaseClient()
  const router = useRouter()
  const { user } = useGetUser()

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
        username: user?.user_metadata.username || '',
        fullName: user?.user_metadata.fullName || ''
      }
    }
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
