import { User } from '@supabase/supabase-js'
import Image from 'next/image'
import { memo } from 'react'

interface UserOrCreatorType {
  username: string
  fullName: string
  avatar_url: string
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
      fullName: user.user_metadata.full_name,
      avatar_url: user.user_metadata.avatar_url
    }
  } else {
    selectedUser = {
      username: user.username,
      fullName: user.fullName,
      avatar_url: user.avatar_url
    }
  }

  const avatarLetter = selectedUser.fullName[0]

  const avatarImageSize = size === 'xs' ? 25 : size === 'sm' ? 35 : size === 'md' ? 60 : 80
  const avatarLetterSize =
    size === 'xs'
      ? 'w-6 h-6 text-xs'
      : size === 'sm'
      ? 'w-10 h-10 text-lg'
      : size === 'md'
      ? 'w-14 h-14 text-2xl'
      : 'w-16 h-16 text-4xl'

  return (
    <section className="w-max">
      {selectedUser.avatar_url ? (
        <Image
          className="text-white rounded-full"
          src={selectedUser.avatar_url}
          alt="User avatar"
          width={avatarImageSize}
          height={avatarImageSize}
        />
      ) : (
        <div
          className={`${avatarLetterSize} rounded-full flex items-center justify-center font-bold text-white bg-gradient-to-tr from-orange-500 to-orange-700 uppercase`}>
          {avatarLetter}
        </div>
      )}
    </section>
  )
}

export default memo(UserAvatar)