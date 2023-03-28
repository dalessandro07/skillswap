import { UserDataType } from '@/types'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

export default function useRegister() {
  const supabaseClient = useSupabaseClient()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading }
  } = useForm<UserDataType>({
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      username: '',
      email: '',
      password: ''
    }
  })

  async function handleRegister(userData: UserDataType) {
    const { username, fullName, email, password } = userData

    if (!username || !fullName || !email || !password) {
      return
    }

    try {
      const { data, error } = await supabaseClient.auth.signUp({
        email: email as string,
        password: password as string,
        options: {
          data: {
            fullName,
            username
          }
        }
      })

      if (error) {
        return toast.error(error.message)
      }

      if (data.user?.aud === 'authenticated') {
        toast.error('¡Ya existe una cuenta con estos datos, inicia sesión!')
        router.push('/login')
        return
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
