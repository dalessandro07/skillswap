import Image from 'next/image'
import Link from 'next/link'
import type { ProjectType } from '@/types'

export default function Project({ data }: { data: ProjectType }) {
  const routeTitle = data.title.replace(/ /g, '-').toLocaleLowerCase()

  return (
    <section className="flex flex-col gap-4">
      <article className="flex flex-col grow gap-2">
        <div className="flex items-center gap-1">
          <p className="font-bold min-w-0 whitespace-nowrap overflow-hidden text-ellipsis">
            {data.creator.fullName}
          </p>
          <p className="text-xs opacity-80 min-w-0 whitespace-nowrap overflow-hidden text-ellipsis">
            @{data.creator.username}
          </p>
          <p className="opacity-80">·</p>
          <p className="text-xs opacity-80 min-w-0 whitespace-nowrap overflow-hidden text-ellipsis">
            {new Date(data.createdAt).toLocaleDateString('es-ES')}
          </p>
        </div>

        <Link className="h-full" href={`/projects/project/${routeTitle}`}>
          <Image
            className="w-full h-full object-cover rounded-sm"
            priority
            quality={75}
            src={data.image}
            alt={data.title}
            width={200}
            height={200}
          />
          <span className="sr-only">Ver proyecto</span>
        </Link>
      </article>

      <article className="flex flex-col gap-2">
        <article className="flex flex-col">
          <Link href={`/projects/project/${routeTitle}`}>
            <h1 className="font-bold min-w-0 whitespace-nowrap overflow-hidden text-ellipsis">
              {data.title}
            </h1>
          </Link>
          <p className="opacity-80 text-sm min-w-0 whitespace-nowrap overflow-hidden text-ellipsis">
            {data.category}
          </p>
        </article>

        <article className="flex items-center gap-4">
          <p className="opacity-80 text-xs">
            💬 {data.comments.length > 0 ? data.comments.length : 0}
          </p>
          <p className="opacity-80 text-xs">❤️ {data.likes}</p>
        </article>
      </article>
    </section>
  )
}
