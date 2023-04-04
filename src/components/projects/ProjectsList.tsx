import { useProjectsStore } from '@/context/useProjectsStore'
import ProjectContainer from './ProjectContainer'
import type { ProjectType } from '@/types'
import { useEffect, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function ProjectsList() {
  const { projects, filteredProjects, loading } = useProjectsStore()
  const [selectedProjects, setSelectedProjects] = useState<ProjectType[]>([])
  const [parent] = useAutoAnimate()

  useEffect(() => {
    if (filteredProjects.length > 0) {
      setSelectedProjects(filteredProjects)
    } else {
      setSelectedProjects(projects)
    }
  }, [filteredProjects, projects])

  return (
    <article>
      {loading.status && projects.length === 0 && (
        <p className="text-xl font-bold py-6 animate-pulse">Cargando proyectos...</p>
      )}

      {!loading.status && projects.length === 0 && (
        <p className="py-6">No hay proyectos disponibles</p>
      )}

      <ul
        ref={parent}
        className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {selectedProjects.map((project: ProjectType) => (
          <ProjectContainer key={project.id} project={project} loading={loading} />
        ))}
      </ul>
    </article>
  )
}
