import ProjectPlaceholderLoading from './ProjectPlaceholderLoading'
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

  return conditionToShowProject ? <ProjectPlaceholderLoading /> : <Project data={data} />
}
