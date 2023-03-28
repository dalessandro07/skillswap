import useGetUser from '@/hooks/session/useGetUser'
import Link from 'next/link'

export default function Header() {
  const { user, loading } = useGetUser()

  return (
    <header className="flex items-center justify-between w-full py-5">
      <Link href="/">SkillSwap</Link>

      <section>
        {user ? (
          <Link href="/user">{user?.user_metadata.username}</Link>
        ) : (
          <Link href="/login">Iniciar sesión</Link>
        )}
      </section>
    </header>
  )
}
