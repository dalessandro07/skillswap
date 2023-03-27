/* Zustand store */
interface UserState {
  user: User | null
  setUser: (user: User) => void
  isLoading: boolean
  isError: boolean
}

/* Form register new user */
export interface UserData {
  email: string
  password: string
  fullName: string
}
