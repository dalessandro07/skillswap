import ProjectPlaceholder from './loading/ProjectPlaceholder'
import type { ProjectType } from '@/types'
import Project from './Project'

export default function ProjectContainer({
  project,
  loading
}: {
  project: ProjectType
  loading: {
    id: number
    status: boolean
  }
}) {
  const conditionToShowProject = loading.id === project.id && loading.status

  return conditionToShowProject ? <ProjectPlaceholder /> : <Project project={project} />
}
