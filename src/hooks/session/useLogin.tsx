import { UserDataType } from '@/types'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'

export default function useLogin() {
  const supabaseClient = useSupabaseClient()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isLoading }
  } = useForm<Partial<UserDataType>>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  async function handleLogin(userData: Partial<UserDataType>) {
    const { email, password } = userData

    if (!email || !password) {
      return
    }

    try {
      const {
        data: { user },
        error
      } = await supabaseClient.auth.signInWithPassword({
        email: email as string,
        password: password as string
      })

      if (error) {
        return toast.error(error.message)
      }

      const username = user?.user_metadata.username || user?.user_metadata.email.split('@')[0] || ''

      if (user) {
        toast.success(`¡Bienvenido ${username}!`)
      }

      router.push('/')
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return {
    handleLogin,
    isLoading,
    register,
    handleSubmit,
    errors
  }
}
