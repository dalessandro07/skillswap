import { useProjectsStore } from '@/context/useProjectsStore'
import useShareProject from '@/hooks/projects/useShareProject'
import useGetUser from '@/hooks/session/useGetUser'
import { ProjectType } from '@/types'
import { memo } from 'react'

function ShareProjectButton({ projectId }: { projectId: number }) {
  const { user } = useGetUser()
  const { projects } = useProjectsStore()
  const projectToShare = projects.find((project) => project.id === projectId)

  const { handleShareProject } = useShareProject(projectToShare as ProjectType)

  if (!projectToShare) return null

  return (
    <div className="flex group items-center gap-1 opacity-80 w-max">
      <button
        title={`Compartir ${projectToShare?.title}`}
        onClick={handleShareProject}
        className="hover:bg-green-500 p-1 rounded-full hover:bg-opacity-25 transition-all duration-150">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-400 transition-all duration-150 group-hover:text-green-500">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
          />
        </svg>
        <span className="sr-only">Compartir</span>
      </button>
    </div>
  )
}

export default memo(ShareProjectButton)
