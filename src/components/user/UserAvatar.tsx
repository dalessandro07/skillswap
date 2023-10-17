import { User } from '@supabase/supabase-js'
import Image from 'next/image'
import { memo } from 'react'

interface UserOrCreatorType {
  username: string
  fullName: string
  avatar_url: string
  portfolio?: string
}

function UserAvatar({
  size = 'md',
  user
}: {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  user: User | UserOrCreatorType
}) {
  if (!user) return null

  let selectedUser: UserOrCreatorType

  if ('user_metadata' in user) {
    selectedUser = {
      username: user.user_metadata.username || user.email?.split('@')[0],
      fullName: user.user_metadata.full_name || user.user_metadata.fullName,
      avatar_url: user.user_metadata.avatar_url,
      portfolio: user.user_metadata.portfolio
    }
  } else {
    selectedUser = {
      username: user.username,
      fullName: user.fullName,
      avatar_url: user.avatar_url,
      portfolio: user.portfolio
    }
  }

  const avatarLetter = selectedUser?.fullName?.[0] ?? selectedUser?.username?.[0] ?? 'U'

  const avatarImageSize = size === 'xs' ? 25 : size === 'sm' ? 35 : size === 'md' ? 60 : 80
  const avatarLetterSize =
    size === 'xs'
      ? 'w-6 h-6 text-xs'
      : size === 'sm'
      ? 'w-10 h-10 text-xl'
      : size === 'md'
      ? 'w-14 h-14 text-2xl'
      : 'w-16 h-16 text-4xl'

  return (
    <section className="w-max">
      {selectedUser.avatar_url ? (
        <article className={`${avatarLetterSize}`}>
          <Image
            className="text-white object-cover rounded-full w-full h-full object-left-top"
            src={selectedUser.avatar_url}
            alt="User avatar"
            width={avatarImageSize}
            height={avatarImageSize}
          />
        </article>
      ) : (
        <div
          className={`${avatarLetterSize} rounded-full flex items-center justify-center font-bold text-white bg-gradient-to-tr from-orange-500 to-orange-700 uppercase overflow-hidden`}>
          {avatarLetter}
        </div>
      )}
      <span className="sr-only">Ver perfil de {selectedUser.username}</span>
    </section>
  )
}

export default memo(UserAvatar)
