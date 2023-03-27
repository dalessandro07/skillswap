import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'

export default function useRegister() {
  const [loading, setLoading] = useState(false)

  const supabaseClient = useSupabaseClient()

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const { fullName, email, password } = Object.fromEntries(formData.entries())

    if (!fullName || !email || !password) {
      return
    }

    try {
      setLoading(true)

      const { data, error } = await supabaseClient.auth.signUp({
        email: email as string,
        password: password as string,
        options: {
          data: {
            fullName
          }
        }
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
    handleRegister,
    loading
  }
}
