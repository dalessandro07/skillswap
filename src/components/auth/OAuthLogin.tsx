import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Image from 'next/image'
import { toast } from 'react-hot-toast'

export default function OAuthLogin() {
  const supabaseClient = useSupabaseClient()

  async function signInWithGoogle() {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google'
    })

    if (error) {
      return toast.error(error.message)
    }

    return toast.success('Iniciaste sesión con Google.')
  }

  return (
    <section className="flex flex-col gap-2 my-5">
      <button
        onClick={signInWithGoogle}
        className="flex items-center gap-2 px-3 py-2 rounded-sm border border-orange-400 w-max hover:from-orange-400 hover:to-orange-500 hover:text-custom-black bg-gradient-to-l transition-all duration-200">
        <Image width={20} height={20} src="/images/google.svg" alt="Google" />
        <span className="text-sm font-bold">Continuar con Google</span>
      </button>
    </section>
  )
}
