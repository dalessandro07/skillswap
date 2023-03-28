import projects from '@/mocks/projects.json'
import Project from './Project'
import type { ProjectType } from '@/types'

export default function ProjectsList() {
  console.log(projects as ProjectType[])

  return (
    <section className="p-5">
      <h1 className="text-2xl font-bold">Proyectos</h1>

      <div className="flex flex-wrap gap-5 py-5">
        {projects.map((project: ProjectType) => (
          <Project key={project.id} data={project} />
        ))}
      </div>
    </section>
  )
}
