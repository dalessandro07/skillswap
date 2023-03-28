import { ProjectType } from '@/types'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'
import useGetUser from '../session/useGetUser'

export default function useNewProject() {
  const supabaseClient = useSupabaseClient()
  const { user } = useGetUser()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading }
  } = useForm<ProjectType>({
    mode: 'onChange',
    defaultValues: {
      creator: {
        username: user?.user_metadata.username || '',
        fullName: user?.user_metadata.fullName || ''
      },
      updatedAt: `${new Date().toISOString().split('.')[0]}`,
      title: '',
      description: '',
      image: '',
      category: '',
      url: '',
      likes: 0,
      comments: []
    }
  })

  async function handleAddProject(projectData: Partial<ProjectType>) {
    const { title, description, image, category } = projectData

    if (!title || !description || !image || !category) {
      return toast.error('Todos los campos son requeridos')
    }

    const { error } = await supabaseClient.from('projects').insert(projectData)

    if (error) return toast.error(error.message)

    toast.success(`¡Proyecto ${title} creado con éxito!`)

    router.push('/projects')
  }

  return {
    handleAddProject,
    isLoading,
    register,
    handleSubmit,
    errors
  }
}
