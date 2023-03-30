import { ProjectType } from '@/types'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectDetailsHero({ project }: { project: ProjectType }) {
  const creationDate = new Date(project.createdAt).toLocaleDateString('es-ES')

  return (
    <article className="flex flex-col gap-2 w-full py-6">
      <div className="flex gap-2">
        <p className="hidden lg:flex gap-2">
          Un proyecto de <strong>{project.creator.fullName}</strong> ·
        </p>
        <p>@{project.creator.username} ·</p>
        <p>{creationDate}</p>
      </div>

      <section className="relative">
        <Image
          className="w-full min-h-[55vh] object-cover rounded-sm"
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
