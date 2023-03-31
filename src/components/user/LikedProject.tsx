import useRouteTitle from '@/hooks/projects/useRouteTitle'
import type { ProjectType } from '@/types'

export default function LikedProject({ project }: { project: ProjectType }) {
  const { routeTitle } = useRouteTitle({
    title: project.title,
    id: project.id
  })

  return (
    <li key={project.id}>
      <a href={`/projects/project/${routeTitle}`}>{project.title}</a>
    </li>
  )
}
