import { useProjectsStore } from '@/context/useProjectsStore'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import useGetUser from '../session/useGetUser'

export default function useLikes(projectId: number) {
  const supabaseClient = useSupabaseClient()
  const { user } = useGetUser()
  const { projects, likedProjects, setLikedProjects } = useProjectsStore()

  const projectToLike = projects.find((project) => project.id === projectId)

  const [isLiked, setIsLiked] = useState<boolean>(
    likedProjects.some((project) => project.id === projectId)
  )

  async function toggleLike({
    projectId,
    likeOrUnlike
  }: {
    projectId: number
    likeOrUnlike: 'like' | 'unlike'
  }) {
    if (!projectToLike) return
    if (!user) return toast.error('Inicia sesión para reaccionar.')

    const updatedLikes = [...projectToLike.likes]

    if (likeOrUnlike === 'like') {
      updatedLikes.push({
        id: `${projectId}-${user.id}`,
        createdAt: new Date().toISOString(),
        creator_id: user.id
      })
    } else {
      const likeIndex = updatedLikes.findIndex((like) => like.id === `${projectId}-${user?.id}`)

      if (likeIndex !== -1) {
        updatedLikes.splice(likeIndex, 1)
      }
    }

    const { error } = await supabaseClient
      .from('projects')
      .update({
        likes: [...updatedLikes]
      })
      .eq('id', projectId)

    if (error) {
      return toast.error(error.message)
    }
  }

  async function handleLike() {
    if (!projectToLike) return toast.error('No se encontró el proyecto.')
    if (!user) return toast.error('Inicia sesión para reaccionar.')

    const projectIsLiked = projectToLike.likes.some((like) => like.creator_id === user.id)

    if (projectIsLiked) {
      setLikedProjects(likedProjects.filter((project) => project.id !== projectId))
      setIsLiked(false)
      return toggleLike({ projectId, likeOrUnlike: 'unlike' })
    }

    toggleLike({ projectId, likeOrUnlike: 'like' })
    setLikedProjects([...likedProjects, projectToLike])
    setIsLiked(true)
  }

  return {
    handleLike,
    isLiked
  }
}
