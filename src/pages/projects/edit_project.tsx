import NewProject from '@/components/projects/NewProject'
import { useProjectsStore } from '@/context/useProjectsStore'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function NewProjectPage() {
  const router = useRouter()

  const { id } = router.query
  const { projects } = useProjectsStore()

  const project = projects.find((project) => project.id === Number(id))

  return (
    <>
      <Head>
        <title>SkillSwap | Editar proyecto</title>
        <meta
          name="description"
          content="Comparte tu conocimiento y haz crecer tu talento en SkillSwap."
        />
      </Head>

      <NewProject type="edit" defaultValues={project} />
    </>
  )
}
