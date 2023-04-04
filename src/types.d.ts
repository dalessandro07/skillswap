import type { Field, FieldErrors, UseFormRegister } from 'react-hook-form'

/* Form register new user */
export interface UserDataType {
  fullName: string
  username: string
  email: string
  password: string
}

/* Projects */

export interface LikeType {
  id: string
  creator_id: string
  createdAt: string
}

export interface CommentType {
  id: string
  author: string
  createdAt: string
  updatedAt: string
  content: string
  likes: LikeType[]
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
    avatar_url: string
  }
  url: string
  likes: LikeType[]
  comments: CommentType[]
  creator_id: string
}

/* Filters */

export interface FiltersType {
  category: string
  likes: string
  date: string
}

/* Zustand - Projects Store */

export interface ProjectsStoreType {
  projects: ProjectType[]
  setProjects: (projects: ProjectType[]) => void
  likedProjects: ProjectType[]
  setLikedProjects: (projects: ProjectType[]) => void
  loading: {
    status: boolean
    id: number
  }
  setLoading: ({ status, id }: { status: boolean; id: number }) => void
  filteredProjects: ProjectType[]
  setFilteredProjects: (projects: ProjectType[]) => void
}

/* React Hook Form - Forms */

export interface EditUserType {
  fullName: string
  avatar_url: string
}

export type FieldValuesType = UserDataType &
  ProjectType &
  CommentType &
  FiltersType &
  EditUserType

export interface InputPropsType {
  fields: {
    name: keyof FieldValuesType
    type: string
    placeholder: string
  }
  children?: string | JSX.Element
  register: UseFormRegister
  errors: FieldErrors
}

export interface SelectPropsType {
  fields: {
    name: keyof FieldValuesType
    options: React.DetailedHTMLProps<
      React.OptionHTMLAttributes<HTMLOptionElement>,
      HTMLOptionElement
    >[]
  }
  children?: string | JSX.Element
  register: UseFormRegister
  errors: FieldErrors
}

export interface InputFieldsType {
  name: keyof FieldValuesType
  type: string
  placeholder: string
  label: string
}
