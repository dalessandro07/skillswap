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
import useTakeScreenshot from './useTakeScreenshot'

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

  const username =
    user?.user_metadata.username ||
    user?.user_metadata.email.split('@')[0] ||
    user?.email?.split('@')[0] ||
    'nuevo-usuario'
  const fullName = user?.user_metadata.fullName || user?.user_metadata.full_name || 'Nuevo usuario'
  const avatar_url = user?.user_metadata.avatar_url || ''

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isLoading },
    setValue
  } = useForm<ProjectType>({
    mode: 'all',
    resolver: zodResolver(viewSecondForm ? newProjectSecondSchema : newProjectFirstSchema),
    defaultValues: {
      ...defaultValues,
      creator: {
        username,
        fullName,
        avatar_url
      }
    }
  })

  const { validateUniqueProject } = useValidateUniqueProject()
  const { getDataFromWebsite } = useGetDataFromWebsite(setValue)
  const { takeScreenshotFromWebsite } = useTakeScreenshot(setValue)

  async function handleAddProject(projectData: Partial<ProjectType>) {
    const { title, description, image, category } = projectData

    if (!title || !description || !image || !category) {
      return toast.error('Todos los campos son requeridos')
    }

    if (type === 'new') {
      await addNewProject(projectData, title)
    } else {
      await editProject(projectData, title)
    }

    router.push('/projects')
  }

  async function addNewProject(projectData: Partial<ProjectType>, title: string) {
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
  }

  async function editProject(projectData: Partial<ProjectType>, title: string) {
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

  const imageValue = watch('image')

  return {
    handleAddProject,
    isLoading,
    getDataFromWebsite,
    takeScreenshotFromWebsite,
    register,
    handleSubmit,
    errors,
    imageValue
  }
}
