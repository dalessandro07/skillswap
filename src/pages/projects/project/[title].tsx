import ProjectDetails from '@/components/projects/details/ProjectDetails'
import ProjectDetailsPlaceholder from '@/components/projects/loading/ProjectDetailsPlaceholder'
import { useProjectsStore } from '@/context/useProjectsStore'
import { useRouter } from 'next/router'

export default function ProjectDetailsPage() {
  const router = useRouter()

  const { title } = router.query
  const { projects, loading } = useProjectsStore()

  const project = projects.find(
    ({ title: projectTitle, id }) =>
      projectTitle.replace(/ /g, '-').toLocaleLowerCase().concat(`-${id}`) === title
  )

  const commentsLength = project?.comments?.length

  if (!project) {
    return <p>¡Proyecto no encontrado!</p>
  }

  const conditionToShowProject = loading.id === project.id && loading.status

  return conditionToShowProject ? (
    <ProjectDetailsPlaceholder commentsLength={commentsLength} />
  ) : (
    <ProjectDetails project={project} />
  )
}
