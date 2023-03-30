import { useProjectsStore } from '@/context/useProjectsStore'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'
import type { ProjectType } from '@/types'
import { useState } from 'react'

export default function useLikes(id: number) {
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const { projects, likedProjects, setLikedProjects } = useProjectsStore()

  const projectIsLiked = likedProjects.some((project) => project.id === id)
  const [isLiked, setIsLiked] = useState<boolean>(projectIsLiked)

  async function toggleLike({
    id,
    likeOrUnlike,
    projectToLike
  }: {
    id: number
    likeOrUnlike: 'like' | 'unlike'
    projectToLike: ProjectType
  }) {
    const { error } = await supabaseClient
      .from('projects')
      .update({
        likes: likeOrUnlike === 'like' ? projectToLike?.likes + 1 : projectToLike?.likes - 1
      })
      .eq('id', id)

    if (error) {
      return toast.error(error.message)
    }
  }

  async function handleLike() {
    const projectToLike = projects.find((project) => project.id === id)

    if (!projectToLike) return

    if (!user) {
      return toast.error('Inicia sesión para reaccionar.')
    }

    if (projectIsLiked) {
      setLikedProjects(likedProjects.filter((project) => project.id !== id))
      setIsLiked(false)
      return toggleLike({ id, likeOrUnlike: 'unlike', projectToLike })
    }

    toggleLike({ id, likeOrUnlike: 'like', projectToLike })
    setLikedProjects([...likedProjects, projectToLike])
    setIsLiked(true)
  }

  return {
    handleLike,
    isLiked
  }
}
