import useSignOut from '@/hooks/session/useSignOut'

export default function SignOut() {
  const { handleSignOut, loading } = useSignOut()

  return (
    <button disabled={loading} onClick={handleSignOut}>
      {loading ? 'Cerrando sesión...' : 'Cerrar sesión'}
    </button>
  )
}
