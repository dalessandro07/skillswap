import { useProjectsStore } from '@/context/useProjectsStore'
import useGetUser from '@/hooks/session/useGetUser'
import Image from 'next/image'
import Link from 'next/link'
import DangerProjectButtons from '../buttons/DangerProjectButtons'

export default function ProjectDetail({ routeTitle }: { routeTitle: string }) {
  const projects = useProjectsStore((state) => state.projects)
  const { user, loading } = useGetUser()

  const project = projects.find(
    ({ title }) => title.replace(/ /g, '-').toLocaleLowerCase() === routeTitle
  )

  if (!project) {
    return <p>¡Proyecto no encontrado!</p>
  }

  const { creator } = project

  const isCreator = user?.user_metadata?.username === creator.username

  return (
    <section className="flex flex-col items-center w-4/5 mx-auto p-12">
      <article className="w-full py-6">
        <p>
          Un proyecto de <strong>{project.creator.fullName}</strong> · @{project.creator.username} ·{' '}
          {new Date(project.createdAt).toLocaleDateString('es-ES')}
        </p>

        <section className="relative">
          <Image
            className="w-full h-full object-cover rounded-sm"
            priority
            quality={75}
            src={project.image}
            alt={project.title}
            width={200}
            height={200}
          />

          <Link
            target="_blank"
            className="absolute group top-0 right-0 p-5 bg-custom-black"
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

      <article className="flex flex-col justify-center items-center gap-5 p-8 w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="text-sm opacity-80">{project.category}</p>
        </div>

        <p className="flex justify-center w-1/2">{project.description}</p>

        <p className="text-sm opacity-80">
          💬 {project.comments.length > 0 ? project.comments.length : 0} · ❤️ {project.likes}
        </p>
      </article>

      {isCreator && <DangerProjectButtons title={project.title} id={project.id} />}
    </section>
  )
}
