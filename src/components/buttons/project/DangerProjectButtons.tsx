import { useState } from 'react'
import DeleteProjectButton from './DeleteProjectButton'
import useDeleteProject from '@/hooks/projects/useDeleteProject'
import EditProjectButton from './EditProjectButton'
import DeleteCommentButton from './DeleteCommentButton'
import useDeleteComment from '@/hooks/comments/useDeleteComment'

export default function DangerProjectButtons({
  title = '',
  id,
  commentId = '',
  destination = 'project'
}: {
  title?: string
  id: number
  commentId?: string
  destination: 'project' | 'comment'
}) {
  const { handleDeleteProject } = useDeleteProject()
  const { handleDeleteComment } = useDeleteComment()
  const [viewConfirmation, setViewConfirmation] = useState(false)
  const [titleConfirmation, setTitleConfirmation] = useState('')

  function handleConfirmDelete() {
    if (viewConfirmation) {
      handleDeleteProject(id)
    } else {
      setViewConfirmation(true)
    }
  }

  function handleChangeTitleConfirmation(e: React.ChangeEvent<HTMLInputElement>) {
    setTitleConfirmation(e.target.value)
  }

  return (
    <section className="flex flex-col gap-3">
      {viewConfirmation && destination === 'project' && (
        <input
          value={titleConfirmation}
          onChange={handleChangeTitleConfirmation}
          className="py-1 px-2 text-red-700 bg-rose-100 rounded-sm"
          type="text"
          placeholder="Ingresa el título del proyecto para confirmar."
        />
      )}

      <div className="flex gap-4 items-center">
        {destination === 'project' && <EditProjectButton projectId={id} />}

        {destination === 'project' ? (
          <DeleteProjectButton
            title={title}
            handleClick={handleConfirmDelete}
            viewConfirmation={viewConfirmation}
            titleConfirmation={titleConfirmation}
          />
        ) : (
          <DeleteCommentButton handleClick={() => handleDeleteComment(id, commentId)} />
        )}
      </div>
    </section>
  )
}
