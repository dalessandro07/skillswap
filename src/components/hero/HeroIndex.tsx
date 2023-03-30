import Link from 'next/link'
import HeroButton from '../buttons/HeroButton'

export default function HeroIndex() {
  return (
    <section className="flex flex-col gap-4 grow justify-center sm:w-2/3 my-12">
      <h1 className="text-5xl sm:text-6xl font-bold">
        Comparte lo que sabes y aprende lo que necesitas
      </h1>

      <p className="text-gray-300">
        Con SkillSwap, podrás compartir tus habilidades y conocimientos con otros mientras aprendes
        y recibes feedback.
        <Link className="font-bold px-1 hover:underline" href="/register">
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
