import useSignOut from '@/hooks/session/useSignOut'

export default function SignOut() {
  const { handleSignOut, loading } = useSignOut()

  return (
    <button
      className="border-b border-red-600 px-3.5 py-2 rounded-sm"
      disabled={loading}
      onClick={handleSignOut}>
      {loading ? 'Cerrando sesión...' : 'Cerrar sesión'}
    </button>
  )
}
