import type { InputPropsType } from '@/types'

export default function Input({ fields, children, register, errors }: InputPropsType) {
  const hasError = errors[fields.name]

  return (
    <div className="flex flex-col gap-2 w-full">
      {children && <label htmlFor={fields.name}>{children}</label>}

      <div className="flex flex-col py-2">
        <input
          className={`
          border-b p-2 bg-transparent focus:outline-none
          ${hasError ? 'border-red-500 bg-rose-200' : 'border-gray-300'}
        `}
          {...register(fields.name, {
            required: {
              value: true,
              message: 'Este campo es requerido'
            }
          })}
          type={fields.type}
          placeholder={fields.placeholder}
        />
        {hasError && (
          <span className="text-red-500 text-sm">{errors[fields.name]?.message as string}</span>
        )}
      </div>
    </div>
  )
}
