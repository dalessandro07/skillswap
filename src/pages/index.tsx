import Head from 'next/head'
import ProjectsList from '@/components/projects/ProjectsList'

export default function Home() {
  return (
    <>
      <Head>
        <title>SkillSwap</title>
        <meta
          name="description"
          content="Comparte tu conocimiento y haz crecer tu talento en SkillSwap."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProjectsList />
    </>
  )
}

