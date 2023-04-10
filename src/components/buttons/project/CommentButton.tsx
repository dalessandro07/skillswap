import useRouteTitle from '@/hooks/projects/useRouteTitle'
import { CommentType } from '@/types'
import Link from 'next/link'
import { memo } from 'react'

function CommentButton({
  comments,
  projectId,
  projectTitle,
  asLink,
  toggleViewComments
}: {
  comments: CommentType[]
  projectId: number
  projectTitle: string
  asLink: boolean
  toggleViewComments: () => void
}) {
  const commentsCount = comments.length

  const { routeTitle } = useRouteTitle({
    title: projectTitle,
    id: projectId
  })

  return (
    <div className="flex group items-center gap-1 opacity-80">
      {asLink ? (
        <Link
          href={`/projects/project/${routeTitle}/#comments`}
          className="hover:bg-blue-500 p-1 rounded-full hover:bg-opacity-25 transition-all duration-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-500 group-hover:text-blue-500 transition-all duration-150">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
            />
          </svg>
        </Link>
      ) : (
        <button
          onClick={toggleViewComments}
          className="hover:bg-blue-500 p-1 rounded-full hover:bg-opacity-25 transition-all duration-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-500 group-hover:text-blue-500 transition-all duration-150">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
            />
          </svg>
        </button>
      )}

      <p className="group-hover:text-blue-500 text-gray-400 transition-all duration-150">
        {commentsCount > 0 ? commentsCount : 0}
      </p>
    </div>
  )
}

export default memo(CommentButton)
