import Head from 'next/head'
import ProjectListContainer from '@/components/projects/ProjectListContainer'

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

        <ProjectListContainer />
      </section>
    </>
  )
}
