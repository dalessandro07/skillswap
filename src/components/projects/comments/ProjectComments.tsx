import type { ProjectType } from '@/types'

export default function ProjectComments({ project }: { project: ProjectType }) {
  return (
    <article id="comments" className="flex flex-col gap-4 w-full">
      {project.comments.map((comment) => (
        <section key={comment.id} className="flex flex-col gap-2">
          <article className="flex justify-between items-center gap-1">
            <p className="text-sm font-bold">{comment.author}</p>
            <p className="text-xs text-gray-500">
              {new Date(comment.createdAt).toLocaleDateString('es-ES')}
            </p>
          </article>

          <p className="text-sm">{comment.content}</p>
          <p className="text-xs">Likes: {comment.likes}</p>
        </section>
      ))}
    </article>
  )
}
