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
        } flex items-center gap-1 text-sm text-gray-400 hover:text-gray-500`}
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

      <button
        type="button"
        className={`${
          viewSecondForm ? 'invisible' : 'visible'
        } flex items-center gap-1 text-sm text-gray-400 hover:text-gray-500`}
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
