import { create } from 'zustand'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
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

  const [loading, setLoading] = useState({
    id: 0,
    status: false
  })

  useEffect(() => {
    async function fetchProjects({ id = 0 }: { id?: number }) {
      setLoading({ id, status: true })
      const { data: projects, error } = await supabaseClient.from('projects').select('*')
      setLoading({ id, status: false })

      if (error) return toast.error(error.message)
      if (projects.length === 0) return toast('No hay proyectos disponibles')

      setProjects(projects as ProjectType[])
    }

    if (zustandProjects.length === 0) fetchProjects({})

    const channel = supabaseClient
      .channel('projects-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'projects'
        },
        (payload) => {
          const { new: newProject } = payload
          const { id } = newProject as ProjectType

          console.log(payload)

          fetchProjects({ id })
        }
      )
      .subscribe()

    return () => {
      supabaseClient.removeChannel(channel)
    }
  }, [zustandProjects, setProjects, supabaseClient])

  return {
    loading
  }
}
