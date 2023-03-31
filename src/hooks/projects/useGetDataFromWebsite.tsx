import { ProjectType } from '@/types'
import toast from 'react-hot-toast'
import type { UseFormSetValue } from 'react-hook-form'

export default function useGetDataFromWebsite(setValue: UseFormSetValue<ProjectType>) {
  async function getDataFromWebsite(projectData: Partial<ProjectType>) {
    const { url } = projectData

    const getData = async () => {
      const res = await fetch('/api/get_project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
      })

      const data = await res.json()

      if (res.status !== 200) {
        throw new Error(data.message)
      }

      return data
    }

    toast.promise(
      getData(),
      {
        loading: 'Obteniendo datos...',
        success: (data) => {
          setValue('title', data.title, { shouldValidate: true })
          setValue('description', data.description, { shouldValidate: true })

          return `¡Datos del proyecto obtenidos con éxito!`
        },
        error: (error) => `Error al obtener los datos del proyecto: \n ${error}`
      },
      {
        success: {
          duration: 5000
        }
      }
    )
  }

  return {
    getDataFromWebsite
  }
}
