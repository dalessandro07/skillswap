import { memo, useState } from 'react'
import ProjectsList from './ProjectsList'
import ProjectFilters from './filters/ProjectFilters'
import ProjectFiltersHeader from './filters/ProjectFiltersHeader'
import { useProjectsStore } from '@/context/useProjectsStore'
import { useAutoAnimate } from '@formkit/auto-animate/react'

function ProjectsListContainer() {
  const { projects, loading } = useProjectsStore()
  const [isOpen, setIsOpen] = useState(false)

  const [parent] = useAutoAnimate()

  return (
    <section className="flex flex-col md:flex-row md:gap-5 lg:gap-10 py-10 min-h-[50vh]">
      <div className="flex" ref={parent}>
        {!loading.status && projects.length > 0 && (
          <aside className="flex flex-col w-full md:w-auto py-5 mb-10 md:mb-0 md:py-10 gap-5 border-b md:border-r md:border-t pr-5 lg:pr-10 border-gray-600 text-gray-300 justify-center">
            <ProjectFiltersHeader isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen && <ProjectFilters />}
          </aside>
        )}
      </div>

      <div className="grow">
        <ProjectsList />
      </div>
    </section>
  )
}

export default memo(ProjectsListContainer)
