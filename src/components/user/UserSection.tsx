import type { User } from '@supabase/supabase-js'
import UserLikedProjects from './UserLikedProjects'
import { useEffect } from 'react'
import { useProjectsStore } from '@/context/useProjectsStore'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import UserInfoSection from './UserInfoSection'
import SignOut from '../auth/SignOut'

export default function UserSection({ user }: { user: User }) {
  const { projects, likedProjects, setLikedProjects } = useProjectsStore()

  useEffect(() => {
    const likedProjects = projects.filter((project) => {
      return project.likes.some((like) => like.creator_id === user.id)
    })

    setLikedProjects(likedProjects)
  }, [projects, setLikedProjects, user.id])

  const [parent] = useAutoAnimate()

  return (
    <section className="flex flex-col md:flex-row grow justify-between gap-10 py-10">
      <UserInfoSection user={user} />

      <article className="flex grow" ref={parent}>
        {likedProjects.length > 0 && <UserLikedProjects />}
      </article>

      <section className="flex md:hidden">
        <SignOut />
      </section>
    </section>
  )
}
