import type { FieldErrors, UseFormRegister } from 'react-hook-form'

/* Form register new user */
export interface UserData {
  email: string
  password: string
  username: string
  fullName: string
}

/* Projects */

export interface ProjectType {
  id: string
  creator: string
  createdAt: string
  updatedAt: string
  title: string
  description: string
  image: string
  category: string
}

/* React Hook Form */

export interface InputPropsType {
  fields: {
    name: keyof UserData
    type: string
    placeholder: string
  }
  children: string | JSX.Element
  register: UseFormRegister<UserData> | UseFormRegister<Partial<UserData>>
  errors: FieldErrors<{
    fullName: string
    username: string
    email: string
    password: string
  }>
}

export interface InputFieldsType {
  name: keyof UserData
  type: string
  placeholder: string
  label: string
}
