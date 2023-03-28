import type { User } from '@supabase/supabase-js'
import SignOut from '../auth/SignOut'

export default function UserPage({ user, loading }: { user: User; loading: boolean }) {
  return (
    <section>
      <span>Bienvenido</span>
      <h1>{user.user_metadata.fullName}</h1>
      <p>{user.email}</p>
      <SignOut />
    </section>
  )
}
