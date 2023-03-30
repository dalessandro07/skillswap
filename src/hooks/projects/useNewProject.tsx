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
    formState: { errors, isLoading },
    setValue
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

  async function getDataFromWebsite(projectData: Partial<ProjectType>) {
    const { url } = projectData

    const getData = async () => {
      const res = await fetch('/api/get_project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
      })

      const data = await res.json()

      if (res.status !== 200) {
        throw new Error(data.message)
      }

      return data
    }

    toast.promise(
      getData(),
      {
        loading: 'Obteniendo datos...',
        success: (data) => {
          setValue('title', data.title)
          setValue('description', data.description)

          return `¡Datos del proyecto obtenidos con éxito!`
        },
        error: (error) => `Error al obtener los datos del proyecto: \n ${error}`
      },
      {
        success: {
          duration: 5000
        }
      }
    )
  }

  async function handleAddProject(projectData: Partial<ProjectType>) {
    const { title, description, image, category } = projectData

    if (!title || !description || !image || !category) {
      return toast.error('Todos los campos son requeridos')
    }

    const { error } = await supabaseClient.from('projects').insert({
      ...projectData,
      creator_id: user?.id
    })

    if (error) return toast.error(error.message)

    toast.success(`¡Proyecto ${title} creado con éxito!`)

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
