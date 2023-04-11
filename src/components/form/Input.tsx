import type { InputPropsType } from '@/types'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { memo } from 'react'

function Input({ fields, children, register, errors }: InputPropsType) {
  const hasError = errors[fields.name]
  const [parent] = useAutoAnimate()

  return (
    <div className="flex flex-col gap-2 w-full">
      {children && <label htmlFor={fields.name}>{children}</label>}

      <div className="flex flex-col py-2">
        <input
          className={`
          border-b p-2 focus:outline-none
          ${hasError ? 'border-red-500' : 'border-gray-300'}
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

        <div ref={parent}>
          {hasError && (
            <span className="text-red-500 text-sm">{errors[fields.name]?.message as string}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default memo(Input)
