import { ReCaptchaProvider } from 'next-recaptcha-v3'
import Head from 'next/head'
import Register from '../components/auth/Register'

export default function RegisterPage() {
  return (
    <ReCaptchaProvider>
      <Head>
        <Head>
          <title>SkillSwap | Regístrate</title>
          <meta
            name="description"
            content="Comparte tu conocimiento y haz crecer tu talento en SkillSwap."
          />
        </Head>
      </Head>

      <Register />
    </ReCaptchaProvider>
  )
}
