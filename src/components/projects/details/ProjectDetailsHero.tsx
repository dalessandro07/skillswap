import { ProjectType } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import UserAvatar from '@/components/user/UserAvatar'
import { memo } from 'react'

function ProjectDetailsHero({ project }: { project: ProjectType }) {
  const creationDate = new Date(project.createdAt).toLocaleDateString('es-ES')

  return (
    <article className="flex flex-col gap-2 w-full py-6">
      <section className="flex items-center gap-2 px-2">
        <UserAvatar size="sm" user={project.creator} />
        <p className="hidden font-bold lg:flex gap-2">{project.creator.fullName} ·</p>
        <p className="text-gray-300">@{project.creator.username} ·</p>
        <p className="text-gray-300">{creationDate}</p>
      </section>

      <section className="relative">
        <Image
          className="w-full min-h-[55vh] max-h-screen object-cover rounded-sm object-left-top"
          priority
          quality={75}
          src={project.image}
          alt={project.title}
          width={200}
          height={200}
        />

        <Link
          target="_blank"
          className="absolute group top-0 right-0 p-5 bg-custom-black hover:opacity-70 transition-opacity duration-200"
          href={project.url}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 group-hover:scale-125 transition-transform duration-200">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>

          <span className="sr-only">Ver proyecto</span>
        </Link>
      </section>
    </article>
  )
}

export default memo(ProjectDetailsHero)
