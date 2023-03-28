import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
