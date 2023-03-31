import { CommentType } from '@/types'
import CommentButton from '../buttons/project/CommentButton'
import LikeButton from '../buttons/project/LikeButton'

export default function ProjectReactions({
  comments,
  likes,
  projectId,
  projectTitle,
  asLink = false,
  toggleViewComments = () => {}
}: {
  comments: CommentType[]
  likes: number
  projectId: number
  projectTitle: string
  asLink?: boolean
  toggleViewComments?: () => void
}) {
  return (
    <article className="flex items-center gap-4">
      {/* Comments */}

      <CommentButton
        comments={comments}
        projectId={projectId}
        projectTitle={projectTitle}
        asLink={asLink}
        toggleViewComments={toggleViewComments}
      />

      {/* Likes */}

      <LikeButton likes={likes} projectId={projectId} />
    </article>
  )
}
