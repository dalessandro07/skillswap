import { createClient } from '@supabase/supabase-js'
import type { UserData } from '@/types'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY

if (!SUPABASE_URL) {
  throw new Error('Supabase URL is missing.')
}

if (!SUPABASE_KEY) {
  throw new Error('Supabase key is missing.')
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export async function signUp (userData: UserData) {
  const { data, error } = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password,
    options: {
      data: {
        name: userData.fullName
      }
    }
  })

  if (error) throw error

  return data
}
