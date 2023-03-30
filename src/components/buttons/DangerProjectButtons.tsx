import useDeleteProject from '@/hooks/projects/useDeleteProject'
import { useState } from 'react'

export default function DangerProjectButtons({ title, id }: { title: string; id: number }) {
  const { handleDeleteProject } = useDeleteProject()
  const [viewConfirmation, setViewConfirmation] = useState(false)
  const [titleConfirmation, setTitleConfirmation] = useState('')

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

      <button
        disabled={viewConfirmation && titleConfirmation !== title}
        onClick={() => {
          if (viewConfirmation) {
            handleDeleteProject(id)
          } else {
            setViewConfirmation(true)
          }
        }}
        className={`${
          viewConfirmation && titleConfirmation !== title
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-red-600 hover:bg-red-700'
        } text-sm py-1 px-2 rounded-sm  transition-all duration-150`}>
        Eliminar proyecto
      </button>
    </section>
  )
}
