import { useCallback, useEffect, useState } from 'react'
import { useProjectsStore } from '@/context/useProjectsStore'
import { ProjectType } from '@/types'
import { SupabaseClient } from '@supabase/supabase-js'
import toast from 'react-hot-toast'

export const useFetchProjects = (supabaseClient: SupabaseClient) => {
  const { projects: zustandProjects, setProjects } = useProjectsStore()

  const [loading, setLoading] = useState({
    id: 0,
    status: false
  })

  const fetchProjects = useCallback(
    async ({ id = 0 }: { id?: number }) => {
      console.log('fetching projects')

      setLoading({ id, status: true })
      const { data: projects, error } = await supabaseClient
        .from('projects')
        .select('*')
        .order('id', { ascending: false })
      setLoading({ id, status: false })

      if (error) return toast.error(error.message)

      setProjects(projects as ProjectType[])
    },
    [supabaseClient, setProjects]
  )

  useEffect(() => {
    if (zustandProjects.length === 0) fetchProjects({})
  }, [fetchProjects, zustandProjects.length])

  useEffect(() => {
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

          fetchProjects({ id })
        }
      )
      .subscribe()

    return () => {
      supabaseClient.removeChannel(channel)
    }
  }, [supabaseClient, fetchProjects])

  return {
    loading
  }
}
