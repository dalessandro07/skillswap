import { useState } from 'react'
import DeleteProjectButton from './DeleteProjectButton'
import useDeleteProject from '@/hooks/projects/useDeleteProject'
import EditProjectButton from './EditProjectButton'

export default function DangerProjectButtons({ title, id }: { title: string; id: number }) {
  const { handleDeleteProject } = useDeleteProject()
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
      {viewConfirmation && (
        <input
          value={titleConfirmation}
          onChange={handleChangeTitleConfirmation}
          className="py-1 px-2 text-red-700 bg-rose-100 rounded-sm"
          type="text"
          placeholder="Ingresa el título del proyecto"
        />
      )}

      <div className="flex gap-4 items-center">
        <EditProjectButton projectId={id} />

        <DeleteProjectButton
          title={title}
          handleClick={handleConfirmDelete}
          viewConfirmation={viewConfirmation}
          titleConfirmation={titleConfirmation}
        />
      </div>
    </section>
  )
}
