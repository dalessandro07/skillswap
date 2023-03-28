import Image from 'next/image'
import type { ProjectType } from '@/types'

export default function Project({ data }: { data: ProjectType }) {
  return (
    <section className="flex gap-5">
      <Image src={data.image} alt={data.title} width={200} height={200} />

      <article className="flex flex-col gap-2">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </article>
    </section>
  )
}
