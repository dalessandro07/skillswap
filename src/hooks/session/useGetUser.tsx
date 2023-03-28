import { useSession } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'

export default function useGetUser() {
  const [loading, setLoading] = useState(true)

  const session = useSession()

  useEffect(() => {
    if (session) setLoading(false)
    setTimeout(() => setLoading(false), 1000)
  }, [session])

  return {
    user: session?.user,
    loading
  }
}
