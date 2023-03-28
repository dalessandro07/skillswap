import Head from 'next/head'
import Register from '../components/auth/Register'

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>SkillSwap | Regístrate</title>
        <meta
          name="description"
          content="Comparte tu conocimiento y haz crecer tu talento en SkillSwap."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Register />
    </>
  )
}
