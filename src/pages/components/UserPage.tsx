import type { User } from '@supabase/supabase-js'

export default function UserPage({ user }: { user: User }) {
  async function handleSignOut() {
    const response = await fetch('/api/signout', {
      method: 'POST'
    })

    console.log(response)
  }

  return (
    <section>
      <h1> Bienvenido {user.user_metadata.name}</h1>
      <p>{user.email}</p>
      <button onClick={handleSignOut}>Cerrar sesión</button>
    </section>
  )
}
