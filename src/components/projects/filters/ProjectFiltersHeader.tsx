import { memo } from 'react'

function ProjectFiltersHeader({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  function toggleOpen() {
    setIsOpen((isOpen) => !isOpen)
  }

  return (
    <div
      className={`flex gap-10 ${
        isOpen
          ? 'justify-between items-end'
          : 'justify-between md:justify-center md:flex-col-reverse items-center grow'
      }`}>
      <h3
        className={`text-2xl font-bold ${
          isOpen ? '' : 'md:transform md:-rotate-90'
        } transition-all duration-100`}>
        Filtros
      </h3>

      <section>
        {isOpen ? (
          <button onClick={toggleOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
            <span className="sr-only">Cerrar filtros</span>
          </button>
        ) : (
          <button onClick={toggleOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className="sr-only">Abrir filtros</span>
          </button>
        )}
      </section>
    </div>
  )
}

export default memo(ProjectFiltersHeader)
