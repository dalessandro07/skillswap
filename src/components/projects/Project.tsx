import Image from 'next/image'
import Link from 'next/link'
import type { ProjectType } from '@/types'
import ProjectReactions from './ProjectReactions'
import useRouteTitle from '@/hooks/projects/useRouteTitle'
import UserAvatar from '../user/UserAvatar'
import { memo } from 'react'

function Project({ project }: { project: ProjectType }) {
  const { routeTitle } = useRouteTitle({
    title: project?.title || '',
    id: project?.id || 0
  })

  if (!project) return null

  return (
    <section className="flex flex-col gap-4">
      <article className="flex flex-col grow gap-2">
        <div className="flex items-center gap-1 pl-0.5">
          <a href={project.creator.portfolio} target="_blank">
            <UserAvatar user={project.creator} size="xs" />
          </a>

          <a
            href={project.creator.portfolio}
            target="_blank"
            className="text-xs opacity-80 min-w-0 whitespace-nowrap overflow-hidden text-ellipsis">
            @{project.creator.username}
          </a>
          <p className="opacity-80">·</p>
          <p className="text-xs opacity-80 min-w-0 whitespace-nowrap overflow-hidden text-ellipsis">
            {new Date(project.createdAt).toLocaleDateString('es-ES')}
          </p>
        </div>

        <Link className="h-full" href={`/projects/project/${routeTitle}`}>
          <Image
            className="w-full h-full object-cover rounded-sm"
            priority
            quality={75}
            src={project.image}
            alt={project.title}
            width={200}
            height={200}
          />
          <span className="sr-only">Ver proyecto</span>
        </Link>
      </article>

      <article className="flex flex-col gap-2">
        <article className="flex flex-col">
          <Link href={`/projects/project/${routeTitle}`}>
            <h1 className="font-bold min-w-0 whitespace-nowrap overflow-hidden text-ellipsis">
              {project.title}
            </h1>
          </Link>
          <p className="opacity-80 text-sm min-w-0 whitespace-nowrap overflow-hidden text-ellipsis capitalize">
            {project.category}
          </p>
        </article>

        <ProjectReactions
          projectTitle={project.title}
          comments={project.comments}
          likes={project.likes.length}
          projectId={project.id}
          asLink
        />
      </article>
    </section>
  )
}

export default memo(Project)
