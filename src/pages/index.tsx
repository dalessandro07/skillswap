import HeroIndex from '@/components/hero/HeroIndex'
import ProjectsList from '@/components/projects/ProjectsList'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>SkillSwap | Inicio</title>
        <meta
          name="description"
          content="Comparte tu conocimiento y haz crecer tu talento en SkillSwap."
        />
      </Head>

      <HeroIndex />

      <section>
        <h2 className="text-2xl font-bold pb-2 w-max">Proyectos más gustados</h2>
        <article className="py-10">
          <ProjectsList />
        </article>
      </section>
    </>
  )
}

