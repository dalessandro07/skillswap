import useNewProject from '@/hooks/projects/useNewProject'
import { useState } from 'react'

import FirstForm from './new_project/FirstForm'
import SecondForm from './new_project/SecondForm'
import Timeline from './new_project/Timeline'

export default function NewProject() {
  const { errors, handleAddProject, handleSubmit, isLoading, register, getDataFromWebsite } =
    useNewProject()

  const [viewSecondForm, setViewSecondForm] = useState(false)

  const submitFn = viewSecondForm
    ? handleSubmit(handleAddProject)
    : handleSubmit((data) => {
        getDataFromWebsite(data)
        setViewSecondForm(true)
      })

  return (
    <form className="flex flex-col grow justify-evenly gap-5 py-10" onSubmit={submitFn} action="">
      <h1 className="text-lg font-bold flex gap-2 items-baseline">
        Nuevo proyecto
        <span className="text-gray-500 text-sm">
          {viewSecondForm ? 'Paso 2 de 2' : 'Paso 1 de 2'}
        </span>
      </h1>

      <Timeline viewSecondForm={viewSecondForm} setViewSecondForm={setViewSecondForm} />

      {!viewSecondForm ? (
        <FirstForm errors={errors} register={register} isLoading={isLoading} />
      ) : (
        <SecondForm errors={errors} register={register} isLoading={isLoading} />
      )}
    </form>
  )
}
