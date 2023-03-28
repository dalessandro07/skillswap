import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <div className="flex flex-col min-h-screen justify-between p-5">
      <Header />
      <main style={inter.style} className="flex flex-col grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
