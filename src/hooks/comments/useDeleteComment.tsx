import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'
import { useProjectsStore } from '@/context/useProjectsStore'

export default function useDeleteComment() {
  const supabaseClient = useSupabaseClient()
  const projects = useProjectsStore((state) => state.projects)

  async function handleDeleteComment(projectId: number, commentId: string) {
    const projectToDeleteComment = projects.find((project) => project.id === projectId)

    if (!projectToDeleteComment) return

    const comments = [...projectToDeleteComment.comments]

    const commentIndex = comments.findIndex((comment) => comment.id === commentId)

    if (commentIndex !== -1) {
      comments.splice(commentIndex, 1)
    }

    const { error } = await supabaseClient
      .from('projects')
      .update({
        comments: [...comments]
      })
      .eq('id', projectId)

    if (error) {
      return toast.error('No se pudo eliminar el comentario.')
    }

    toast.success('Comentario eliminado.')
  }

  return {
    handleDeleteComment
  }
}
