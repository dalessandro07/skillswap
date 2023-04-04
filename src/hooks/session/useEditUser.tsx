import { EditUserType } from '@/types'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import useGetUser from './useGetUser'

export default function useEditUser() {
  const { user } = useGetUser()
  const supabaseClient = useSupabaseClient()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      fullName: user?.user_metadata?.fullName || user?.user_metadata?.full_name || '',
      avatar_url: user?.user_metadata?.avatar_url || ''
    }
  })

  async function handleEdit(userData: EditUserType) {
    const { fullName, avatar_url } = userData

    if (!fullName) {
      return
    }

    try {
      const { data, error } = await supabaseClient.auth.updateUser({
        data: {
          fullName,
          avatar_url: user?.user_metadata?.avatar_url || avatar_url || ''
        }
      })

      if (error) {
        return toast.error(error.message)
      }

      if (data) {
        supabaseClient.auth.refreshSession()
        toast.success(`¡Usuario actualizado con éxito!`, {
          duration: 3500
        })
      }
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return {
    handleEdit,
    isSubmitting,
    register,
    handleSubmit,
    errors
  }
}
