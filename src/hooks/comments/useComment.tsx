import { CommentType } from '@/types'
import { useForm } from 'react-hook-form'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'
import useGetUser from '../session/useGetUser'
import { useProjectsStore } from '@/context/useProjectsStore'

export default function useComment(projectId: number) {
  const supabaseClient = useSupabaseClient()
  const { user } = useGetUser()

  const projects = useProjectsStore((state) => state.projects)
  const selectedProject = projects.find((project) => project.id === projectId)
  const commentsLength = selectedProject?.comments.length || 0

  const username = user?.user_metadata.username || user?.user_metadata.email.split('@')[0] || ''

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading }
  } = useForm<CommentType>({
    mode: 'onChange',
    defaultValues: {
      id: `${commentsLength + 1}-${username}`,
      author: username,
      content: '',
      createdAt: `${new Date().toISOString().split('.')[0]}`,
      updatedAt: `${new Date().toISOString().split('.')[0]}`,
      likes: []
    }
  })

  async function handleComment(commentData: CommentType) {
    const { content } = commentData

    if (!user) {
      return toast.error('Inicia sesión para comentar.')
    }

    if (!content) {
      return toast.error('Todos los campos son requeridos')
    }

    const { data, error } = await supabaseClient
      .from('projects')
      .update({
        comments: [
          ...(selectedProject?.comments as CommentType[]),
          {
            ...commentData,
            id: `${commentsLength + 1}-${user?.user_metadata.username || ''}`
          }
        ]
      })
      .eq('id', projectId)
      .select()

    if (error) return toast.error(error.message)
    if (data.length === 0) return toast.error('No se pudo crear el comentario.')

    toast.success(`¡Comentario creado con éxito!`)
  }

  return {
    handleComment,
    isLoading,
    register,
    handleSubmit,
    errors
  }
}
