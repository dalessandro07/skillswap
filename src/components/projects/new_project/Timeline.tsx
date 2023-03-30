export default function Timeline({
  viewSecondForm,
  setViewSecondForm
}: {
  viewSecondForm: boolean
  setViewSecondForm: (value: boolean) => void
}) {
  return (
    <div className="w-full flex justify-between items-center py-5">
      <button
        type="button"
        className={`${
          viewSecondForm ? 'visible' : 'invisible'
        } flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700`}
        onClick={() => setViewSecondForm(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>

        <span>Regresar</span>
      </button>

      <p className="text-gray-500 text-sm">
        {viewSecondForm ? 'Ingresa los datos del proyecto' : 'Ingresa la URL del proyecto'}
      </p>

      <button
        type="button"
        className={`${
          viewSecondForm ? 'invisible' : 'visible'
        } flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700`}
        onClick={() => setViewSecondForm(true)}>
        <span>Saltar</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
