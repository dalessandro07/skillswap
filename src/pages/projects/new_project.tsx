import NewProject from '@/components/projects/NewProject'
import Head from 'next/head'

export default function NewProjectPage() {
  return (
    <>
      <Head>
        <title>SkillSwap | Nuevo proyecto</title>
        <meta
          name="description"
          content="Comparte tu conocimiento y haz crecer tu talento en SkillSwap."
        />
      </Head>

      <NewProject />
    </>
  )
}
