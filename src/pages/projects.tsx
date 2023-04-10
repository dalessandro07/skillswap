import Head from 'next/head'
import ProjectListContainer from '@/components/projects/ProjectListContainer'
import Link from 'next/link'

export default function ProjectsPage() {
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
        <h1 className="text-center text-4xl font-bold">Proyectos</h1>

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
