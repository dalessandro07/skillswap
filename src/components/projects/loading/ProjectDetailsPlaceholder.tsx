import CommentsPlaceholder from './CommentsPlaceholder'

export default function ProjectDetailsPlaceholder({
  commentsLength = 0
}: {
  commentsLength?: number
}) {
  const newArrayOfComments = Array.from({ length: commentsLength as number }, (_, i) => i)

  return (
    <div className="flex flex-col gap-6 w-2/3 mx-auto py-12">
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <p className="bg-gray-500 w-24 h-4 rounded-sm animate-pulse"></p>
          <p className="bg-gray-500 w-1 h-1 rounded-sm animate-pulse"></p>
          <p className="bg-gray-500 w-12 h-4 rounded-sm animate-pulse"></p>
        </div>

        <div className="bg-gray-500 w-full h-[50vh] rounded-sm animate-pulse"></div>
      </section>

      <section className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center w-2/3 gap-2">
          <div className="bg-gray-500 w-full h-6 rounded-sm animate-pulse"></div>
          <div className="bg-gray-500 w-16 h-3 rounded-sm animate-pulse"></div>
        </div>

        <div className="flex gap-5">
          <div className="bg-gray-500 w-6 h-4 rounded-sm animate-pulse"></div>
          <div className="bg-gray-500 w-6 h-4 rounded-sm animate-pulse"></div>
        </div>

        <div className="flex flex-col items-center w-full gap-2">
          <div className="bg-gray-500 w-full h-8 rounded-sm animate-pulse"></div>
        </div>
      </section>

      {newArrayOfComments.map((_, i) => (
        <CommentsPlaceholder key={i} />
      ))}
    </div>
  )
}
