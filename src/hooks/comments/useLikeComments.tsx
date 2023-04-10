import { useProjectsStore } from '@/context/useProjectsStore'
import useGetUser from '../session/useGetUser'
import toast from 'react-hot-toast'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export default function useLikeComments({ projectId }: { projectId: number }) {
  const supabaseClient = useSupabaseClient()

  const { user } = useGetUser()
  const projects = useProjectsStore((state) => state.projects)

  const projectToLike = projects.find((project) => project.id === projectId)

  // Like Comment

  async function toggleLikeComment({
    projectId,
    commentId,
    likeOrUnlike
  }: {
    projectId: number
    commentId: string
    likeOrUnlike: 'like' | 'unlike'
  }) {
    if (!projectToLike) return
    if (!user) return toast.error('Inicia sesión para reaccionar.')

    const projectComments = [...projectToLike.comments]
    const commentToLike = projectComments.find((comment) => comment.id === commentId)

    if (!commentToLike) return

    const updatedLikes = [...commentToLike.likes]

    if (likeOrUnlike === 'like') {
      updatedLikes.push({
        id: `${commentId}-${user.id}`,
        createdAt: new Date().toISOString(),
        creator_id: user.id
      })
    } else {
      const likeIndex = updatedLikes.findIndex((like) => like.id === `${commentId}-${user?.id}`)

      if (likeIndex !== -1) {
        updatedLikes.splice(likeIndex, 1)
      }
    }

    const commentIndex = projectComments.findIndex((comment) => comment.id === commentId)

    if (commentIndex !== -1) {
      projectComments[commentIndex] = {
        ...projectComments[commentIndex],
        likes: [...updatedLikes]
      }
    }

    const { error } = await supabaseClient
      .from('projects')
      .update({
        comments: [...projectComments]
      })
      .eq('id', projectId)

    if (error) {
      return toast.error(error.message)
    }
  }

  async function handleLikeComment(commentId: string) {
    if (!projectToLike) return toast.error('No se encontró el proyecto.')
    if (!user) return toast.error('Inicia sesión para reaccionar.')

    const commentToLike = projectToLike.comments.find((comment) => comment.id === commentId)

    if (!commentToLike) return

    const commentIsLiked = commentToLike.likes?.some((like) => like.creator_id === user.id)

    if (commentIsLiked) {
      return toggleLikeComment({ projectId, commentId, likeOrUnlike: 'unlike' })
    }

    toggleLikeComment({ projectId, commentId, likeOrUnlike: 'like' })
  }

  return {
    handleLikeComment
  }
}
