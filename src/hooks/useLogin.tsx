import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'

export default function useLogin() {
  const [loading, setLoading] = useState(false)

  const supabaseClient = useSupabaseClient()

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const { email, password } = Object.fromEntries(formData.entries())

    if (!email || !password) {
      return
    }

    try {
      setLoading(true)

      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email as string,
        password: password as string
      })

      setLoading(false)

      if (error) {
        return toast.error(error.message)
      }
    } catch (error: any) {
      console.log(error)
    }
  }

  return {
    handleLogin,
    loading
  }
}