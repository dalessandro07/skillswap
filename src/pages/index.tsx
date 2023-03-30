import Head from 'next/head'
import Link from 'next/link'

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

      <section className="flex flex-col gap-4">
        <h1 className="text-6xl font-bold">Comparte lo que sabes y aprende lo que necesitas</h1>
        <p>
          SkillSwap es una innovadora aplicación web que conecta a estudiantes en un ambiente de
          aprendizaje colaborativo. Con SkillSwap, podrás compartir tus habilidades y conocimientos
          con otros mientras aprendes de las habilidades que comparten ellos. Únete a nuestra
          comunidad hoy y descubre todo lo que puedes aprender y enseñar.
        </p>
        <Link href="/projects">Ver proyectos</Link>
      </section>
    </>
  )
}

