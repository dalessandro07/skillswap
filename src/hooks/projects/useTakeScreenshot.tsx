import { ProjectType } from '@/types'
import { UseFormSetValue } from 'react-hook-form'
import toast from 'react-hot-toast'

const BROWSERLESS_API_KEY = process.env.NEXT_PUBLIC_BROWSERLESS_API_KEY

export default function useTakeScreenshot(setValue: UseFormSetValue<ProjectType>) {
  async function takeScreenshotFromWebsite(projectData: Partial<ProjectType>) {
    const { url } = projectData

    const takeScreenshot = async () => {
      if (!url) return toast.error('Debes introducir una URL')

      const urlToFetch = setUpQuery()

      const response = await fetch(urlToFetch, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url,
          options: {
            fullPage: false,
            type: 'jpeg',
            quality: 50
          },
          gotoOptions: {
            waitUntil: 'networkidle2'
          }
        })
      })

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.arrayBuffer()
      const base64Image = Buffer.from(data).toString('base64')
      const dataBase64 = `data:image/jpeg;base64,${base64Image}`

      setValue('image', dataBase64)
    }

    function setUpQuery() {
      return `https://chrome.browserless.io/screenshot?token=${BROWSERLESS_API_KEY}`
    }

    toast.promise(
      takeScreenshot(),
      {
        loading: 'Capturando screenshot...',
        success: '¡Screenshot capturado con éxito!',
        error: (error) =>
          `Error al capturar el screenshot: \n ${error} \n \n Inténtalo de nuevo más tarde o ingresa la URL de la imagen manualmente.`
      },
      {
        error: {
          duration: 8500
        }
      }
    )
  }

  return {
    takeScreenshotFromWebsite
  }
}
