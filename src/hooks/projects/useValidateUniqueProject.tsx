import { ProjectType } from '@/types'
import { useProjectsStore } from '@/context/useProjectsStore'

export default function useValidateUniqueProject() {
  const projects = useProjectsStore((state) => state.projects)

  async function validateUniqueProject(projectData: Partial<ProjectType>) {
    const checkExistence = (property: keyof ProjectType) =>
      projects.some((project) => project[property] === projectData[property])

    if (checkExistence('url')) {
      return 'Ya existe un proyecto con esa url.'
    }

    if (checkExistence('image')) {
      return 'Ya existe un proyecto con esa imagen.'
    }

    if (checkExistence('description')) {
      return 'Ya existe un proyecto con esa descripción.'
    }

    return undefined
  }

  return { validateUniqueProject }
}
