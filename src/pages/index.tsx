import Head from 'next/head'
import UserPage from '../components/user/UserPage'
import { Inter } from 'next/font/google'
import useGetUser from '@/hooks/session/useGetUser'
import ProjectsList from '@/components/projects/ProjectsList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { user, loading } = useGetUser()

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

      <main style={inter.style}>
        <section>{user && <UserPage user={user} loading={loading} />}</section>

        <ProjectsList />
      </main>
    </>
  )
}

