import useSignOut from '@/hooks/session/useSignOut'

export default function SignOut() {
  const { handleSignOut, loading } = useSignOut()

  return (
    <button
      className="text-gray-200 hover:bg-gray-600/70 hover:border-gray-600/70 px-3 py-1.5 rounded-sm w-max border border-gray-300/80transition-all duration-200 flex gap-1 items-center text-sm"
      disabled={loading}
      onClick={handleSignOut}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
        />
      </svg>

      {loading ? 'Cerrando sesión...' : 'Cerrar sesión'}
    </button>
  )
}
