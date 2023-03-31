import { useProjectsStore } from '@/context/useProjectsStore'
import useLikes from '@/hooks/projects/useLikes'
import useGetUser from '@/hooks/session/useGetUser'
import { useEffect } from 'react'

export default function LikeButton({ likes, projectId }: { likes: number; projectId: number }) {
  const { user } = useGetUser()
  const { handleLike } = useLikes(projectId)
  const { projects, setLikedProjects } = useProjectsStore()

  useEffect(() => {
    const likedProjects = projects.filter((project) => {
      return project.likes.some((like) => like.creator_id === user?.id)
    })

    setLikedProjects(likedProjects)
  }, [projects, setLikedProjects, user])

  const isLiked = projects.some((project) => {
    return project.id === projectId && project.likes.some((like) => like.creator_id === user?.id)
  })

  return (
    <div className="flex group items-center gap-1 opacity-80">
      <button
        title={isLiked ? 'Cancelar Me gusta' : 'Me gusta'}
        onClick={handleLike}
        className="hover:bg-red-500 p-1 rounded-full hover:bg-opacity-25 transition-all duration-150">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`${
            isLiked ? 'fill-current active:fill-none' : 'stroke-current active:fill-current'
          } w-5 h-5 text-gray-400 transition-all duration-150 group-hover:text-red-500`}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <p className="group-hover:text-red-500 text-gray-400 transition-all duration-150">{likes}</p>
    </div>
  )
}
