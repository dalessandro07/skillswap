import { useUser } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'

export default function useGetUser() {
  const [loading, setLoading] = useState(true)
  const user = useUser()

  useEffect(() => {
    if (user) setLoading(false)
    setTimeout(() => setLoading(false), 1000)
  }, [user])

  return {
    user,
    loading
  }
}
