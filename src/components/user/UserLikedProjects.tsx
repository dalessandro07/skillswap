import { useProjectsStore } from '@/context/useProjectsStore'
import LikedProject from './LikedProject'

export default function UserLikedProjects() {
  const likedProjects = useProjectsStore((state) => state.likedProjects)

  return (
    <article className="flex flex-col justify-center gap-4">
      <h2 className="text-2xl font-bold">Proyectos que te gustan</h2>

      <ul className="flex flex-col gap-4">
        {likedProjects.map((project, index) => (
          <li key={project.id} className="flex gap-2 border-t border-gray-600 pt-4">
            {index + 1}.
            <LikedProject project={project} />
          </li>
        ))}
      </ul>
    </article>
  )
}
