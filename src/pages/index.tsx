import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>SkillSwap</title>
        <meta
          name="description"
          content="Comparte tu conocimiento y haz crecer tu talento en SkillSwap."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={inter.style}>
        <h1>SkillSwap</h1>

        <form method="POST" action="api/signup">
          <div>
            <label htmlFor="fullName">Nombre</label>
            <input name="fullName" type="text" required placeholder="Alessandro Rios" />
          </div>

          <div>
            <label htmlFor="email">Correo institucional</label>
            <input name="email" type="email" required placeholder="I202220654@cibertec.edu.pe" />
          </div>

          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              name="password"
              type="password"
              required
              minLength={6}
              placeholder="Más de 6 caracteres"
            />
          </div>

          <button type="submit">Registrarme</button>
        </form>
      </main>
    </>
  )
}

