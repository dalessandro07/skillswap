import UserError from '@/components/user/UserError'
import useGetUser from '@/hooks/session/useGetUser'
import UserPage from '../components/user/UserPage'

export default function User() {
  const { user, loading } = useGetUser()

  return (
    <section>
      {!user && !loading && <UserError />}
      {loading && <p>Cargando...</p>}
      {user && <UserPage user={user} />}
    </section>
  )
}
