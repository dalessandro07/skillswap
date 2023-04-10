import { CommentType } from '@/types'
import CommentButton from '../buttons/project/CommentButton'
import LikeButton from '../buttons/project/LikeButton'
import ShareProjectButton from '../buttons/project/ShareProjectButton'

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
      <CommentButton
        comments={comments}
        projectId={projectId}
        projectTitle={projectTitle}
        asLink={asLink}
        toggleViewComments={toggleViewComments}
      />

      <LikeButton likes={likes} projectId={projectId} />

      <ShareProjectButton projectId={projectId} />
    </article>
  )
}
