import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { Inter } from 'next/font/google'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="color-scheme" content="dark light" />
      </Head>

      <div className="flex flex-col min-h-screen justify-between px-8 py-5">
        <Header />
        <main style={inter.style} className="flex flex-col grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
