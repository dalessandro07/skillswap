import useGetUser from '@/hooks/session/useGetUser'
import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

function Header() {
  const { user } = useGetUser()

  return (
    <header className="flex items-center justify-between w-full py-5">
      <Link className="flex gap-2 items-end font-bold font-mono" href="/">
        <Image src="/skillswap.png" width={22} height={22} alt="SkillSwap logo" />
        SkillSwap
      </Link>

      <section className="flex items-center gap-5">
        <Link
          className="text-sm hover:text-orange-500 transition-colors duration-200 hover:border-orange-600 border-b border-transparent"
          href="/projects">
          Proyectos
        </Link>

        {user ? (
          <Link
            className="text-sm hover:text-orange-500 transition-colors duration-200 hover:border-orange-600 border-b border-transparent"
            href="/user">
            {user?.user_metadata.username || user?.user_metadata.email.split('@')[0]}
          </Link>
        ) : (
          <Link
            className="text-sm hover:text-orange-500 transition-colors duration-200 hover:border-orange-600 border-b border-transparent"
            href="/login">
            Iniciar sesión
          </Link>
        )}
      </section>
    </header>
  )
}

export default memo(Header)
