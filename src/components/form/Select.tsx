import type { SelectPropsType } from '@/types'

export default function Select({ fields, children, register, errors }: SelectPropsType) {
  const hasError = errors[fields.name]

  return (
    <div className="flex flex-col gap-2 w-full">
      {children && <label htmlFor={fields.name}>{children}</label>}

      <div className="flex flex-col py-2">
        <select
          className={`
          border-b p-2 focus:outline-none
          ${hasError ? 'border-red-500' : 'border-gray-300'}
        `}
          {...register(fields.name, {
            required: {
              value: true,
              message: 'Este campo es requerido'
            }
          })}>
          {fields.options.map((option, i) => (
            <option key={i} disabled={option.disabled} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {hasError && (
          <span className="text-red-500 text-sm">{errors[fields.name]?.message as string}</span>
        )}
      </div>
    </div>
  )
}
