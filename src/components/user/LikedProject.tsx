import useRouteTitle from '@/hooks/projects/useRouteTitle'
import type { ProjectType } from '@/types'
import Link from 'next/link'

export default function LikedProject({ project }: { project: ProjectType }) {
  const { routeTitle } = useRouteTitle({
    title: project?.title || '',
    id: project?.id || 0
  })

  if (!project) return null

  return (
    <section className="flex items-baseline gap-2" key={project.id}>
      <Link
        className="hover:underline hover:text-orange-500 transition-colors duration-200"
        href={`/projects/project/${routeTitle}`}>
        {project.title}
      </Link>
      <span className="text-gray-400 text-sm">@{project.creator.username}</span>
    </section>
  )
}
