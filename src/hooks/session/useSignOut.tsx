import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'

export default function useSignOut() {
  const [loading, setLoading] = useState(false)

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
