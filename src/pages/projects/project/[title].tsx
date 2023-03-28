import { useRouter } from 'next/router'

export default function ProjectDetails() {
  const router = useRouter()

  const { title } = router.query

  return (
    <section>
      <h1 className="text-center text-3xl">{title}</h1>
    </section>
  )
}
