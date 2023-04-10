import { Player } from '@lottiefiles/react-lottie-player'

const steps = [
  {
    title: 'Ingresa la url de tu proyecto',
    description:
      'Se capturará automáticamente el título de la página y la descripción. Además, se capturará un screenshot y se mostrará una imagen de la página.'
  },
  {
    title: 'Edita la información',
    description: 'Puedes editar el título, la descripción, la URL, la categoría, y la imagen.'
  },
  {
    title: 'Compártelo y gana visibilidad',
    description: 'Prepárate para recibir likes, comentarios y feedback de otros desarrolladores.'
  }
]

export default function HeroSteps() {
  return (
    <section className="flex flex-col lg:flex-row items-center py-32 sm:w-4/5 mx-auto">
      <article className="flex flex-col gap-16 grow">
        <section className="flex flex-col gap-2">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">Ingresa la URL.</h3>
          <h3 className="text-3xl sm:text-4xl md:text-5xl text-orange-500 font-bold">
            Publica y comparte.
          </h3>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">Gana visibilidad.</h3>
        </section>

        <section className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <div className="flex flex-col gap-2">
                <h4 className="text-lg sm:text-xl">{step.title}.</h4>
                <p className="text-gray-400 max-w-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </section>
      </article>

      <article className="flex">
        <Player
          autoplay
          loop
          src="/lottie/rocket.json"
          style={{
            height: '350px',
            width: '100%'
          }}></Player>
      </article>
    </section>
  )
}
