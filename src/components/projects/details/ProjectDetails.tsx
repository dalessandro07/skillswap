import useGetUser from '@/hooks/session/useGetUser'
import DangerProjectButtons from '../../buttons/project/DangerProjectButtons'
import ProjectDetailsInfo from './ProjectDetailsInfo'
import ProjectDetailsHero from './ProjectDetailsHero'
import { ProjectType } from '@/types'
import { memo } from 'react'

function ProjectDetails({ project }: { project: ProjectType }) {
  const { user } = useGetUser()

  const isCreator = user?.id === project.creator_id

  return (
    <section className="flex flex-col items-center w-2/3 mx-auto py-12">
      <ProjectDetailsHero project={project} />

      <ProjectDetailsInfo project={project} />

      {isCreator && <DangerProjectButtons title={project.title} id={project.id} />}
    </section>
  )
}

export default memo(ProjectDetails)
