import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'

export default function useRegister() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

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

      const {
        data: { user },
        error
      } = await supabaseClient.auth.signUp({
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

      if (user) {
        toast.success(`¡Confirma tu cuenta, te enviamos un correo a ${user.email}!`)
      }

      router.push('/login')
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return {
    handleRegister,
    loading
  }
}
