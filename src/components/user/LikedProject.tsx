import useRouteTitle from '@/hooks/projects/useRouteTitle'
import type { ProjectType } from '@/types'
import Link from 'next/link'

export default function LikedProject({ project }: { project: ProjectType }) {
  const { routeTitle } = useRouteTitle({
    title: project.title,
    id: project.id
  })

  return (
    <li key={project.id}>
      <Link
        className="hover:underline hover:text-orange-500 transition-colors duration-200"
        href={`/projects/project/${routeTitle}`}>
        {project.title}
      </Link>
    </li>
  )
}
