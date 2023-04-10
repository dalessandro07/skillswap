import { ProjectType } from '@/types'
import useRouteTitle from './useRouteTitle'

export default function useShareProject(project: ProjectType) {
  const { routeTitle } = useRouteTitle({
    title: project.title,
    id: project.id
  })

  function handleShareProject() {
    const link = `${window.location.origin}/projects/project/${routeTitle}`
    const title = `Compartir proyecto ${project.title}`
    const text = `${project.title} - ${project.description}`

    if (navigator.share) {
      navigator.share({
        title,
        text,
        url: link
      })
    }
  }

  return { handleShareProject }
}
