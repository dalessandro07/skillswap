import { useProjectsStore, useFetchProjects } from '@/context/useProjectsStore'
import ProjectContainer from './ProjectContainer'
import type { ProjectType } from '@/types'

export default function ProjectsList() {
  const { projects } = useProjectsStore()
  const { loading } = useFetchProjects()

  return (
    <section className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 py-5">
      {loading.status && projects.length === 0 && (
        <p className="text-xl font-bold py-6 animate-pulse">Cargando proyectos...</p>
      )}

      {projects.map((project: ProjectType) => (
        <ProjectContainer key={project.id} data={project} loading={loading} />
      ))}
    </section>
  )
}
