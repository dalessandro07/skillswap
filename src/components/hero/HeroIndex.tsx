import Link from 'next/link'

export default function HeroIndex() {
  return (
    <section className="flex flex-col gap-4 grow justify-center w-2/3">
      <h1 className="text-6xl font-bold">Comparte lo que sabes y aprende lo que necesitas</h1>
      <p className="text-gray-300">
        Con SkillSwap, podrás compartir tus habilidades y conocimientos con otros mientras aprendes
        y recibes feedback.
        <Link className="font-bold px-1 hover:underline" href="/register">
          Únete a nuestra comunidad hoy
        </Link>
        y descubre todo lo que puedes aprender y enseñar.
      </p>

      <Link
        className="px-3.5 py-2 bg-orange-600 hover:bg-orange-700 transition-all duration-200 w-max rounded-sm"
        href="/projects">
        Ver proyectos
      </Link>
    </section>
  )
}
