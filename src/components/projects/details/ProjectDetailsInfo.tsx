import type { ProjectType } from '@/types'
import { useState } from 'react'
import NewComment from '../comments/NewComment'

import ProjectComments from '../comments/ProjectComments'
import ProjectReactions from '../ProjectReactions'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function ProjectDetailsInfo({ project }: { project: ProjectType }) {
  const [showComments, setShowComments] = useState(true)

  function toggleViewComments() {
    setShowComments((prev) => !prev)
  }

  const [parent] = useAutoAnimate()

  if (!project) return null

  return (
    <article className="flex flex-col justify-center items-center gap-5 p-4 md:p-8 w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center">{project.title}</h1>
        <p className="text-sm text-gray-500 capitalize">{project.category}</p>
      </div>

      <p className="text-sm text-gray-300 text-center md:text-left">{project.description}</p>

      <p className="flex w-full gap-1 text-sm text-gray-400 text-center md:text-left">
        Visita el portfolio de
        <a
          className="text-orange-500 hover:underline"
          target="_blank"
          href={project.creator.portfolio}>
          {project.creator.fullName}
        </a>
      </p>

      <ProjectReactions
        comments={project.comments}
        likes={project.likes.length}
        projectId={project.id}
        projectTitle={project.title}
        toggleViewComments={toggleViewComments}
      />

      <NewComment project={project} />

      <div ref={parent} className="w-full">
        {showComments && <ProjectComments project={project} />}
      </div>
    </article>
  )
}
