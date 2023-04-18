import DangerProjectButtons from '@/components/buttons/project/DangerProjectButtons'
import LikeButton from '@/components/buttons/project/LikeButton'
import type { ProjectType } from '@/types'

export default function ProjectComments({ project }: { project: ProjectType }) {
  if (!project) return null

  return (
    <article id="comments" className="flex flex-col gap-4 w-full">
      {project.comments.map((comment) => (
        <section key={comment.id} className="flex flex-col gap-2 border-y border-gray-600 py-3">
          <article className="flex justify-between">
            <section className="flex flex-col">
              <article className="flex items-center gap-2">
                <p className="text-sm font-bold">{comment.author}</p>
                <p className="text-xs text-gray-500">
                  {new Date(comment.createdAt).toLocaleDateString('es-ES')}
                </p>
              </article>

              <p className="flex flex-wrap py-2 md:py-0 gap-1.5 text-sm text-gray-500">
                En respuesta a
                <span className="font-bold text-orange-500 opacity-75">
                  @{project.creator.username}
                </span>
                sobre
                <span className="font-bold text-orange-500 opacity-75">{project.title}</span>
              </p>
            </section>

            <article className="flex flex-col">
              <DangerProjectButtons id={project.id} commentId={comment.id} destination="comment" />
            </article>
          </article>

          <p className="text-sm">{comment.content}</p>

          <LikeButton
            likes={comment.likes?.length}
            projectId={project.id}
            commentId={comment.id}
            destination="comment"
          />
        </section>
      ))}
    </article>
  )
}
