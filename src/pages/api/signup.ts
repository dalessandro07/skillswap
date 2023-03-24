import { UserData } from '@/types'
import { signUp } from '@/utils/supabase'
import { User } from '@supabase/supabase-js'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResData = {
  message: string
}

type ResError = {
  error: string
}

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<ResData | User | ResError>
) {
  const { fullName, email, password } = req.body

  if (!fullName || !email || !password) {
    res.status(400).json({ error: 'Missing parameters' })
    return
  }

  try {
    signUp({ fullName, email, password } as UserData)
      .then((user: unknown) => {
        if (user) {
          res.status(200).json(user as User)
        }
      })
      .catch(error => {
        console.log(error, '/api/signup')
        res.status(500).json({ error: error.message })
      })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}
