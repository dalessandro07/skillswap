import useNewProject from '@/hooks/projects/useNewProject'
import { memo, useEffect, useState } from 'react'

import FirstForm from './new_project/FirstForm'
import SecondForm from './new_project/SecondForm'
import Timeline from './new_project/Timeline'
import { ProjectType } from '@/types'
import useGetUser from '@/hooks/session/useGetUser'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'

function NewProject({
  type = 'new',
  defaultValues
}: {
  type?: 'new' | 'edit'
  defaultValues?: Partial<ProjectType> | undefined
}) {
  const { user } = useGetUser()
  const router = useRouter()
  const { errors, handleAddProject, handleSubmit, isLoading, register, getDataFromWebsite } =
    useNewProject(type === 'edit' ? defaultValues : undefined, type)

  const [viewSecondForm, setViewSecondForm] = useState(type === 'edit' ? true : false)

  const submitFn = viewSecondForm
    ? handleSubmit(handleAddProject)
    : handleSubmit((data) => {
        getDataFromWebsite(data)
        setViewSecondForm(true)
      })

  useEffect(() => {
    if (!user) {
      toast.error('Inicia sesión para poder crear un proyecto.')
      router.push('/login')
    }

    if (type === 'edit' && defaultValues?.creator_id !== user?.id) {
      toast.error('No tienes permisos para editar este proyecto')
      router.push('/projects')
    }
  }, [type, user, defaultValues?.creator_id, router])

  return (
    <form className="flex flex-col grow justify-evenly gap-5 py-10" onSubmit={submitFn} action="">
      <h1 className="text-lg font-bold flex gap-2 items-baseline">
        {type === 'new' ? 'Nuevo proyecto' : 'Editar proyecto'}
        <span className="text-gray-500 text-sm">
          {viewSecondForm ? 'Paso 2 de 2' : 'Paso 1 de 2'}
        </span>
      </h1>

      <Timeline viewSecondForm={viewSecondForm} setViewSecondForm={setViewSecondForm} />

      {!viewSecondForm ? (
        <FirstForm errors={errors} register={register} isLoading={isLoading} />
      ) : (
        <SecondForm errors={errors} register={register} isLoading={isLoading} type={type} />
      )}
    </form>
  )
}

export default memo(NewProject)
