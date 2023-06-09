import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'
import { useProjectsStore } from '@/context/useProjectsStore'

export default function useDeleteProject() {
  const supabaseClient = useSupabaseClient()
  const { projects, filteredProjects, setFilteredProjects } = useProjectsStore()
  const router = useRouter()

  async function handleDeleteProject(id: number) {
    const projectToDelete = projects.find((project) => project.id === id)
    const title = projectToDelete?.title

    if (!projectToDelete) {
      return toast.error('No se pudo eliminar el proyecto.')
    }

    const { error } = await supabaseClient.from('projects').delete().eq('id', id)

    if (error) return toast.error(error.message)

    const projectInFilteredProjects = filteredProjects.find((project) => project.id === id)

    if (projectInFilteredProjects) {
      const filteredProjectsCopy = [...filteredProjects]
      const index = filteredProjectsCopy.findIndex((project) => project.id === id)
      filteredProjectsCopy.splice(index, 1)
      setFilteredProjects(filteredProjectsCopy)
    }

    toast(`El proyecto ${title} fue eliminado.`)

    router.push('/projects')
  }

  return {
    handleDeleteProject
  }
}
