export default function CommentsPlaceholder() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between">
        <div className="bg-gray-500 w-2/5 h-3 rounded-sm animate-pulse"></div>
        <div className="bg-gray-500 w-1/5 h-3 rounded-sm animate-pulse"></div>
      </div>

      <div className="bg-gray-500 w-2/3 h-3 rounded-sm animate-pulse"></div>
      <div className="flex gap-5">
        <div className="bg-gray-500 w-6 h-2 rounded-sm animate-pulse"></div>
      </div>
    </section>
  )
}
