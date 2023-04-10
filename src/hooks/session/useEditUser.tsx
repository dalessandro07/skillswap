import { EditUserType } from '@/types'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import useGetUser from './useGetUser'
import { editUserSchema } from '@/utils/zodSchemas'
import { zodResolver } from '@hookform/resolvers/zod'

export default function useEditUser() {
  const { user } = useGetUser()
  const supabaseClient = useSupabaseClient()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<EditUserType>({
    mode: 'onChange',
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      fullName: user?.user_metadata?.fullName || user?.user_metadata?.full_name || '',
      avatar_url: user?.user_metadata?.avatar_url || '',
      portfolio: user?.user_metadata?.portfolio || ''
    }
  })

  async function handleEdit(userData: EditUserType) {
    const { fullName, avatar_url, portfolio } = userData

    if (!fullName) {
      return
    }

    if (!user) {
      return toast.error('¡No se pudo actualizar el usuario!')
    }

    try {
      const { data, error } = await supabaseClient.auth.updateUser({
        data: {
          fullName,
          avatar_url: avatar_url || user.user_metadata?.avatar_url || '',
          portfolio: portfolio || user.user_metadata?.portfolio || ''
        }
      })

      const { data: data2, error: error2 } = await supabaseClient
        .from('projects')
        .update({
          creator: {
            username: user.user_metadata.username,
            fullName: fullName,
            avatar_url: avatar_url || user.user_metadata?.avatar_url || '',
            portfolio: portfolio || user.user_metadata?.portfolio || ''
          }
        })
        .eq('creator_id', user?.id)

      if (error) {
        return toast.error(error.message)
      }

      if (error2) {
        return toast.error(error2.message)
      }

      if (data || data2) {
        supabaseClient.auth.refreshSession()
        toast.success('¡Usuario actualizado con éxito!', {
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
