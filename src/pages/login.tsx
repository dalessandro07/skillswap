import { ReCaptchaProvider } from 'next-recaptcha-v3'
import Head from 'next/head'
import Login from '../components/auth/Login'

export default function LoginPage() {
  return (
    <ReCaptchaProvider>
      <Head>
        <title>SkillSwap | Inicia sesión</title>
        <meta
          name="description"
          content="Comparte tu conocimiento y haz crecer tu talento en SkillSwap."
        />
      </Head>

      <Login />
    </ReCaptchaProvider>
  )
}
