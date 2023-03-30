import ProjectsList from '@/components/projects/ProjectsList'
import Head from 'next/head'

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

      <section className="flex flex-col justify-center grow">
        <h1 className="text-center text-4xl font-bold">Proyectos</h1>

        <ProjectsList />
      </section>
    </>
  )
}
