import ProjectDetails from '@/components/projects/details/ProjectDetails'
import ProjectDetailsPlaceholder from '@/components/projects/loading/ProjectDetailsPlaceholder'
import { useProjectsStore } from '@/context/useProjectsStore'
import { useRouter } from 'next/router'

export default function ProjectDetailsPage() {
  const router = useRouter()

  const { title } = router.query
  const { projects, loading } = useProjectsStore()

  const slug = (title: string, id: number) =>
    title.replace(/ /g, '-').toLocaleLowerCase().concat(`-${id}`)

  const project = projects.find(({ title: projectTitle, id }) => slug(projectTitle, id) === title)

  if (!project && !loading.status) {
    return <p>¡Proyecto no encontrado!</p>
  }

  if (!project && loading.status) {
    return <ProjectDetailsPlaceholder />
  }

  const commentsLength = project && project.comments.length

  const conditionToShowProject = project && loading.id === project.id && loading.status

  return conditionToShowProject ? (
    <ProjectDetailsPlaceholder commentsLength={commentsLength} />
  ) : (
    project && <ProjectDetails project={project} />
  )
}
