import { create } from 'zustand'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import mock from '@/mocks/projects.json'
import type { ProjectsStoreType, ProjectType } from '@/types'
import { toast } from 'react-hot-toast'
import { useEffect, useState } from 'react'

export const useProjectsStore = create<ProjectsStoreType>((set) => {
  return {
    projects: [] as ProjectType[],
    setProjects: (projects: ProjectType[]) => set({ projects })
  }
})

export const useFetchProjects = () => {
  const supabaseClient = useSupabaseClient()
  const { projects: zustandProjects, setProjects } = useProjectsStore()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true)
      const { data: projects, error } = await supabaseClient.from('projects').select('*')
      setLoading(false)

      if (error) return toast.error(error.message)
      if (projects.length === 0) return toast('No hay proyectos disponibles')

      setProjects(projects as ProjectType[])
    }

    if (zustandProjects.length === 0) fetchProjects()
  }, [zustandProjects.length, setProjects, supabaseClient])

  return {
    loading
  }
}
