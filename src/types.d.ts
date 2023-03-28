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
