import Head from 'next/head'
import Login from '../components/auth/Login'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>SkillSwap | Inicia sesión</title>
        <meta
          name="description"
          content="Comparte tu conocimiento y haz crecer tu talento en SkillSwap."
        />
      </Head>

      <Login />
    </>
  )
}
