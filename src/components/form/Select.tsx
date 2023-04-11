import type { SelectPropsType } from '@/types'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { memo } from 'react'

function Select({ fields, children, register, errors }: SelectPropsType) {
  const hasError = errors[fields.name]

  const [parent] = useAutoAnimate()

  return (
    <div className="flex flex-col gap-2 w-full">
      {children && (
        <label
          className="min-w-0 whitespace-nowrap overflow-hidden text-ellipsis"
          htmlFor={fields.name}>
          {children}
        </label>
      )}

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

        <div ref={parent}>
          {hasError && (
            <span className="text-red-500 text-sm">{errors[fields.name]?.message as string}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default memo(Select)
