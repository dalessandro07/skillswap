import ProjectDetails from '@/components/projects/ProjectDetails'
import { useFetchProjects } from '@/context/useProjectsStore'
import { useRouter } from 'next/router'

export default function ProjectDetailsPage() {
  const router = useRouter()

  const { title } = router.query
  const { loading } = useFetchProjects()

  return loading.status ? (
    <p className="text-center font-bold text-xl">Cargando...</p>
  ) : (
    <ProjectDetails routeTitle={title as string} />
  )
}
