import { create } from 'zustand'
import type { ProjectsStoreType, ProjectType } from '@/types'

export const useProjectsStore = create<ProjectsStoreType>((set) => {
  return {
    projects: [] as ProjectType[],
    setProjects: (projects: ProjectType[]) => set({ projects }),
    likedProjects: [] as ProjectType[],
    setLikedProjects: (likedProjects: ProjectType[]) => set({ likedProjects }),
    loading: {
      status: false,
      id: 0
    },
    setLoading: (loading: { status: boolean; id: number }) => set({ loading }),
    filteredProjects: [] as ProjectType[],
    setFilteredProjects: (filteredProjects: ProjectType[]) => set({ filteredProjects })
  }
})
