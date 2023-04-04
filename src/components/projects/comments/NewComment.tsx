import useComment from '@/hooks/comments/useComment'
import Input from '@/components/form/Input'
import { ProjectType } from '@/types'

export default function NewComment({ project }: { project: ProjectType }) {
  const { errors, register, handleComment, handleSubmit, isLoading } = useComment(project.id)

  return (
    <form className="w-full" onSubmit={handleSubmit(handleComment)} action="">
      <div className="flex items-center gap-2 w-full">
        <Input
          register={register}
          errors={errors}
          fields={{
            name: 'content',
            type: 'text',
            placeholder: `${project.title} me pareció...`
          }}
        />

        <button
          type="submit"
          className="hover:scale-125 transition-all duration-200 hover:text-orange-500 p-1 hover:animate-pulse"
          aria-label="Comentar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>

          <span className="sr-only">Comentar</span>
        </button>
      </div>
    </form>
  )
}
