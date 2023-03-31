import { useProjectsStore } from '@/context/useProjectsStore'
import LikedProject from './LikedProject'

export default function UserLikedProjects() {
  const likedProjects = useProjectsStore((state) => state.likedProjects)

  return (
    <article className="flex flex-col items-center gap-4">
      <h2 className="text-2xl">Proyectos que te gustan</h2>

      <ul className="flex flex-col gap-4">
        {likedProjects.map((project) => (
          <LikedProject key={project.id} project={project} />
        ))}
      </ul>
    </article>
  )
}
