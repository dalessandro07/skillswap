export default function ProjectPlaceholder() {
  return (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-1">
          <p className="bg-gray-500 w-24 h-4 rounded-sm animate-pulse"></p>
          <p className="bg-gray-500 w-12 h-4 rounded-sm animate-pulse"></p>
          <p className="bg-gray-500 w-12 h-4 rounded-sm animate-pulse"></p>
        </div>

        <div className="bg-gray-500 w-full h-52 rounded-sm animate-pulse"></div>
      </section>

      <section className="flex flex-col gap-2">
        <div className="bg-gray-500 w-1/3 h-3 rounded-sm animate-pulse"></div>
        <div className="bg-gray-500 w-2/3 h-3 rounded-sm animate-pulse"></div>
        <div className="flex gap-5">
          <div className="bg-gray-500 w-6 h-2 rounded-sm animate-pulse"></div>
          <div className="bg-gray-500 w-6 h-2 rounded-sm animate-pulse"></div>
        </div>
      </section>
    </div>
  )
}
