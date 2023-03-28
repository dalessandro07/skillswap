import Project from './Project'
import { useProjectsStore, useFetchProjects } from '@/context/useProjectsStore'
import type { ProjectType } from '@/types'

export default function ProjectsList() {
  const { projects } = useProjectsStore()
  const { loading } = useFetchProjects()

  return (
    <section className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 py-5">
      {loading && <p>Cargando...</p>}
      {projects.map((project: ProjectType) => (
        <Project key={project.id} data={project} />
      ))}
    </section>
  )
}
