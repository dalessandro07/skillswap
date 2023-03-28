import useGetUser from '@/hooks/session/useGetUser'
import Link from 'next/link'

export default function Header() {
  const { user, loading } = useGetUser()

  return (
    <header className="flex items-center justify-between w-full p-5">
      <Link href="/">SkillSwap</Link>

      <section>
        {user ? <h2>{user?.user_metadata.fullName}</h2> : <Link href="/login">Iniciar sesión</Link>}
      </section>
    </header>
  )
}
