import Link from 'next/link'
import HeroButton from '../buttons/HeroButton'

export default function HeroIndex() {
  return (
    <section className="flex flex-col sm:items-center gap-6 grow justify-center mx-auto sm:w-3/4 my-12 min-h-[55vh]">
      <h1 className="text-5xl xs:text-6xl sm:text-8xl sm:text-center font-bold bg-gradient-to-tr bg-clip-text from-orange-500 to-indigo-500 text-transparent py-2">
        Comparte lo que sabes y gana visibilidad
      </h1>

      <p className="text-gray-400 text-lg sm:text-center">
        Con SkillSwap, podrás compartir tus habilidades y conocimientos con otros mientras aprendes
        y recibes feedback.
        <Link
          className="font-bold px-1 hover:underline hover:text-orange-500 hover:opacity-75 transition-all duration-200"
          href="/register">
          Únete a nuestra comunidad hoy
        </Link>
        y descubre todo lo que puedes aprender y enseñar.
      </p>

      <HeroButton
        asLink={{
          href: '/projects',
          value: true
        }}>
        Ver proyectos
      </HeroButton>
    </section>
  )
}
