import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'
import { useProjectsStore } from '@/context/useProjectsStore'

export default function useDeleteProject() {
  const supabaseClient = useSupabaseClient()
  const projects = useProjectsStore((state) => state.projects)
  const router = useRouter()

  async function handleDeleteProject(id: number) {
    const projectToDelete = projects.find((project) => project.id === id)
    const title = projectToDelete?.title

    if (!projectToDelete) {
      return toast.error('No se pudo eliminar el proyecto.')
    }

    const { error } = await supabaseClient.from('projects').delete().eq('id', id)

    if (error) return toast.error(error.message)

    toast(`El proyecto ${title} fue eliminado.`)

    router.push('/projects')
  }

  return {
    handleDeleteProject
  }
}
