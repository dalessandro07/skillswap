import UserError from '@/components/user/UserError'
import useGetUser from '@/hooks/session/useGetUser'
import UserSection from '../components/user/UserSection'

export default function UserPage() {
  const { user, loading } = useGetUser()

  return (
    <section>
      {!user && !loading && <UserError />}
      {loading && <p>Cargando...</p>}
      {user && <UserSection user={user} />}
    </section>
  )
}
