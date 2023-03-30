import type { Field, FieldErrors, UseFormRegister } from 'react-hook-form'

/* Form register new user */
export interface UserDataType {
  fullName: string
  username: string
  email: string
  password: string
}

/* Projects */

export interface CommentType {
  id: string
  author: string
  createdAt: string
  updatedAt: string
  content: string
  likes: number
}

export interface ProjectType {
  id: number
  createdAt: string
  updatedAt: string
  title: string
  description: string
  image: string
  category: string
  creator: {
    username: string
    fullName: string
  }
  url: string
  likes: number
  comments: CommentType[]
}

/* Zustand - Projects Store */

export interface ProjectsStoreType {
  projects: ProjectType[]
  setProjects: (projects: ProjectType[]) => void
}

/* React Hook Form - Forms */

export type FieldValuesType = UserDataType & ProjectType

export interface InputPropsType {
  fields: {
    name: keyof FieldValuesType
    type: string
    placeholder: string
  }
  children: string | JSX.Element
  register: UseFormRegister
  errors: FieldErrors
}

export interface InputFieldsType {
  name: keyof FieldValuesType
  type: string
  placeholder: string
  label: string
}
