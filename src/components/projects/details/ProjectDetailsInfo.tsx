import type { ProjectType } from '@/types'
import { useState } from 'react'
import NewComment from '../comments/NewComment'

import ProjectComments from '../comments/ProjectComments'
import ProjectReactions from '../ProjectReactions'

export default function ProjectDetailsInfo({ project }: { project: ProjectType }) {
  const [showComments, setShowComments] = useState(true)

  function toggleViewComments() {
    setShowComments((prev) => !prev)
  }

  return (
    <article className="flex flex-col justify-center items-center gap-5 p-8 w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-sm text-gray-500">{project.category}</p>
      </div>

      <p className="text-sm opacity-80 capitalize">{project.description}</p>

      <ProjectReactions
        comments={project.comments}
        likes={project.likes.length}
        projectId={project.id}
        projectTitle={project.title}
        toggleViewComments={toggleViewComments}
      />

      <NewComment project={project} />

      {showComments && <ProjectComments project={project} />}
    </article>
  )
}
