import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { ReCaptchaProvider } from 'next-recaptcha-v3'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import RootLayout from './layout'
import { useFetchProjects } from '@/context/useFetchProjects'
import { useProjectsStore } from '@/context/useProjectsStore'

export default function App({
  Component,
  pageProps
}: AppProps<{
  initialSession: Session
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  const { loading } = useFetchProjects(supabaseClient)
  const setLoading = useProjectsStore((state) => state.setLoading)

  useEffect(() => {
    setLoading(loading)
  }, [loading, setLoading])

  const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  return (
    <ReCaptchaProvider reCaptchaKey={reCaptchaKey}>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
        <Toaster />
      </SessionContextProvider>
    </ReCaptchaProvider>
  )
}

