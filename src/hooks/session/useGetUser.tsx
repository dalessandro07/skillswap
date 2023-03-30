import { useSession } from '@supabase/auth-helpers-react'

export default function useGetUser() {
  const session = useSession()

  return {
    user: session?.user
  }
}
