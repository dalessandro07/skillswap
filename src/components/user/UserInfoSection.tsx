import UserAvatar from './UserAvatar'
import SignOut from '../auth/SignOut'
import { User } from '@supabase/supabase-js'

export default function UserInfoSection({ user }: { user: User }) {
  return (
    <article className="flex flex-col justify-center pr-10 gap-10 border-r border-b border-gray-600">
      <section className="flex flex-col gap-5">
        <UserAvatar user={user} size="lg" />

        <article className="flex gap-1">
          <h1 className="flex gap-1.5 text-gray-300">
            Bienvenido,
            <span className="text-white">
              @{user.user_metadata.username || user.user_metadata.email.split('@')[0]}
            </span>
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-blue-500">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>
        </article>
      </section>

      <section className="flex flex-col">
        <p className="flex gap-1.5 text-gray-300">
          Nombre:
          <span className="text-white">
            {user.user_metadata.fullName || user.user_metadata.full_name}
          </span>
        </p>
        <p className="text-gray-300">
          Correo: <span className="text-white">{user.email}</span>
        </p>
      </section>

      <SignOut />
    </article>
  )
}
