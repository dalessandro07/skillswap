import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'

export default function useSignOut() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const supabaseClient = useSupabaseClient()

  async function handleSignOut() {
    try {
      setLoading(true)

      const { error } = await supabaseClient.auth.signOut()

      setLoading(false)

      if (error) {
        return toast.error(error.message)
      } else {
        toast.success('¡Hasta pronto!')
        router.push('/')
      }
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return {
    handleSignOut,
    loading
  }
}
