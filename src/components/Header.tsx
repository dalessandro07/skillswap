import useGetUser from '@/hooks/session/useGetUser'
import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'
import UserAvatar from './user/UserAvatar'

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
          <>
            <Link
              className="text-sm hover:text-orange-500 transition-colors duration-200 hover:border-orange-600 border-b border-transparent"
              href="/projects/new_project">
              Nuevo proyecto
            </Link>

            <Link className="hover:scale-110 transition-all duration-200" href="/user">
              <UserAvatar user={user} size="sm" />
            </Link>
          </>
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
