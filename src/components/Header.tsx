import useGetUser from '@/hooks/session/useGetUser'
import Link from 'next/link'

export default function Header() {
  const { user, loading } = useGetUser()

  return (
    <header className="flex items-center justify-between w-full py-5">
      <Link className="font-bold font-mono" href="/">
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
            {user?.user_metadata.username}
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
