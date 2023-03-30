import ProjectPlaceholder from './loading/ProjectPlaceholder'
import type { ProjectType } from '@/types'
import Project from './Project'

export default function ProjectContainer({
  data,
  loading
}: {
  data: ProjectType
  loading: {
    id: number
    status: boolean
  }
}) {
  const conditionToShowProject = loading.id === data.id && loading.status

  return conditionToShowProject ? <ProjectPlaceholder /> : <Project data={data} />
}
