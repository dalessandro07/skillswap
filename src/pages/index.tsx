import HeroIndex from '@/components/hero/HeroIndex'
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
    </>
  )
}

