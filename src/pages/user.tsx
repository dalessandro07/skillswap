import UserError from '@/components/user/UserError'
import useGetUser from '@/hooks/session/useGetUser'
import Head from 'next/head'
import UserSection from '../components/user/UserSection'

export default function UserPage() {
  const { user, loading } = useGetUser()

  return (
    <>
      <Head>
        <title>SkillSwap | Tu perfil</title>
        <meta
          name="description"
          content="Comparte tu conocimiento y haz crecer tu talento en SkillSwap."
        />
      </Head>

      <section>
        {!user && !loading && <UserError />}
        {loading && <p>Cargando...</p>}
        {user && <UserSection user={user} />}
      </section>
    </>
  )
}
