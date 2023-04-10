import { UserDataType } from '@/types'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/utils/zodSchemas'

export default function useRegister() {
  const supabaseClient = useSupabaseClient()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isLoading }
  } = useForm<UserDataType>({
    mode: 'onChange',
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      username: '',
      portfolio: '',
      email: '',
      password: ''
    }
  })

  async function handleRegister(userData: UserDataType) {
    const { username, fullName, email, password, portfolio } = userData

    if (!username || !fullName || !email || !password || !portfolio) {
      return
    }

    try {
      const { data, error } = await supabaseClient.auth.signUp({
        email: email as string,
        password: password as string,
        options: {
          data: {
            fullName,
            username,
            portfolio
          }
        }
      })

      if (error) {
        return toast.error(error.message)
      }

      if (data.user) {
        toast.success(`¡Confirma tu cuenta, te enviamos un correo a ${data.user.email}!`, {
          duration: 3500
        })
      }

      router.push('/login')
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return {
    handleRegister,
    isLoading,
    register,
    handleSubmit,
    errors
  }
}
