import { useProjectsStore } from '@/context/useProjectsStore'
import { FiltersType, ProjectType } from '@/types'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

export default function useProjectFilters() {
  const { projects, setFilteredProjects } = useProjectsStore()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      category: 'all',
      likes: 'popular',
      date: 'newest'
    }
  })

  useEffect(() => setFilteredProjects([]), [setFilteredProjects])

  function showToastMessage({ category, likes, date }: FiltersType) {
    const categoryLabel =
      category === 'all' ? 'Todos' : category.charAt(0).toUpperCase() + category.slice(1)
    const likesLabel = likes === 'like' ? 'Más gustados' : 'Menos gustados'
    const dateLabel = date === 'newest' ? 'Más recientes' : 'Más antiguos'

    return toast.success(
      <span>
        Mostrando proyectos de la categoría <strong>&quot;{categoryLabel}&quot;</strong>, ordenados
        por <strong>&quot;{likesLabel}&quot;</strong> y <strong>&quot;{dateLabel}&quot;</strong>
      </span>,
      {
        duration: 5000
      }
    )
  }

  function filterByCategory(filter: string) {
    let newFilteredProjects = [...projects]

    if (filter !== 'all') {
      newFilteredProjects = projects.filter((project) => project.category === filter)
    }

    const category = filter === 'all' ? 'Todos' : filter.charAt(0).toUpperCase() + filter.slice(1)

    if (newFilteredProjects.length === 0) {
      toast.error(
        <span>
          No hay proyectos de la categoría <strong>&quot;{category}&quot;</strong>
        </span>
      )
    }

    return newFilteredProjects
  }

  function sortByLikesAndDate(
    categoryFilteredProjects: ProjectType[],
    order: {
      likes: string
      date: string
    }
  ) {
    let newFilteredProjects: ProjectType[] = []

    newFilteredProjects = categoryFilteredProjects.sort((a, b) => {
      const descendentLikes = b.likes.length - a.likes.length
      const ascendentLikes = a.likes.length - b.likes.length

      const descendentDate = new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      const ascendentDate = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()

      if (order.likes === 'popular' && order.date === 'newest') {
        return descendentLikes || descendentDate
      } else if (order.likes === 'popular' && order.date === 'oldest') {
        return descendentLikes || ascendentDate
      } else if (order.likes === 'unpopular' && order.date === 'newest') {
        return ascendentLikes || descendentDate
      } else if (order.likes === 'unpopular' && order.date === 'oldest') {
        return ascendentLikes || ascendentDate
      }

      return 0
    })

    return newFilteredProjects
  }

  function onSubmit(value: FiltersType) {
    const { category, likes, date } = value

    if (!category && !likes && !date) {
      return toast.error('Debes seleccionar al menos un filtro.')
    }

    const categoryFilteredProjects = filterByCategory(category)
    const finalFilteredProjects = sortByLikesAndDate(categoryFilteredProjects, { likes, date })

    setFilteredProjects(finalFilteredProjects)

    showToastMessage(value)
  }

  function resetFilters() {
    setFilteredProjects([])
    toast.success('Filtros restablecidos.')
  }

  return {
    register,
    errors,
    isSubmitting,
    handleSubmit,
    onSubmit,
    resetFilters
  }
}
