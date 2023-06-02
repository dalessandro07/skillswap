import Head from 'next/head'
import ProjectListContainer from '@/components/projects/ProjectListContainer'
import Link from 'next/link'
import { useProjectsStore } from '@/context/useProjectsStore'

export default function ProjectsPage() {
  const { projects } = useProjectsStore()

  const pQuantity = projects.length

  return (
    <>
      <Head>
        <title>SkillSwap | Proyectos</title>
        <meta
          name="description"
          content="Comparte tu conocimiento y haz crecer tu talento en SkillSwap."
        />
      </Head>

      <section className="flex flex-col justify-center grow gap-8 py-10">
        <header className="flex flex-col gap-1 items-center">
          <h1 className="text-center text-5xl font-bold">Proyectos</h1>

          <p className="text-center text-gray-500">
            {pQuantity === 0 ? (
              'No hay proyectos'
            ) : (
              <>
                {pQuantity} proyecto{pQuantity > 1 ? 's' : ''}
              </>
            )}
          </p>
        </header>

        <Link
          className="flex justify-center sm:hidden bg-orange-500 py-2 rounded-sm hover:bg-transparent hover:text-orange-500 transition-colors duration-200 hover:border-orange-600 border-b border-transparent"
          href="/projects/new_project">
          Nuevo proyecto
        </Link>

        <ProjectListContainer />
      </section>
    </>
  )
}
