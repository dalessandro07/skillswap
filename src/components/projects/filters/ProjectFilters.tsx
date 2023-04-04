import Select from '@/components/form/Select'
import useProjectFilters from '@/hooks/projects/useProjectFilters'

export default function ProjectFilters() {
  const { register, errors, isSubmitting, resetFilters, handleSubmit, onSubmit } =
    useProjectFilters()

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap items-end md:items-start md:flex-col gap-5">
      <section className="w-full xs:w-max md:w-full">
        <Select
          register={register}
          errors={errors}
          fields={{
            name: 'category',
            options: [
              { value: '', label: 'Selecciona una categoría', disabled: true },
              { value: 'all', label: 'Todos' },
              { value: 'frontend', label: 'Frontend' },
              { value: 'backend', label: 'Backend' },
              { value: 'fullstack', label: 'Fullstack' },
              { value: 'mobile', label: 'Mobile' },
              { value: 'devops', label: 'DevOps' },
              { value: 'ux/ui', label: 'UX/UI' },
              { value: 'game', label: 'Game Development' }
            ]
          }}>
          Filtrar por categoría
        </Select>
      </section>

      <section className="w-full xs:w-max md:w-full">
        <Select
          register={register}
          errors={errors}
          fields={{
            name: 'likes',
            options: [
              { value: '', label: 'Selecciona un orden', disabled: true },
              { value: 'popular', label: 'Más gustados' },
              { value: 'unpopular', label: 'Menos gustados' }
            ]
          }}>
          Ordenar por popularidad
        </Select>
      </section>

      <section className="w-full xs:w-max md:w-full">
        <Select
          register={register}
          errors={errors}
          fields={{
            name: 'date',
            options: [
              { value: '', label: 'Selecciona un orden', disabled: true },
              { value: 'newest', label: 'Más recientes' },
              { value: 'oldest', label: 'Más antiguos' }
            ]
          }}>
          Ordenar por fecha
        </Select>
      </section>

      <section className="flex gap-4 flex-wrap w-full xs:w-max pb-2">
        <button
          disabled={isSubmitting}
          className="px-4 py-2 rounded-sm w-max bg-green-600 hover:bg-green-700 transition-colors duration-200 flex gap-1 items-center text-sm"
          type="submit">
          <span className="text-sm">Aplicar filtros</span>
        </button>

        <button
          disabled={isSubmitting}
          onClick={resetFilters}
          className="px-4 py-2 rounded-sm w-max bg-red-600 hover:bg-red-700 transition-colors duration-200 flex gap-1 items-center text-sm"
          type="button">
          <span className="text-sm">Restablecer filtros</span>
        </button>
      </section>
    </form>
  )
}
