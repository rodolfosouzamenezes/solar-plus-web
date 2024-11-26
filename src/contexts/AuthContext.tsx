'use client'

import { IUser } from '@/@types/auth'
import { deleteCookie, getCookie } from '@/utils/cookie'
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'

export interface SignInFormData {
  login: string
  password: string
}

export interface AuthContextDataProps {
  user: IUser
  setUser: Dispatch<SetStateAction<IUser>>
  logout: () => Promise<void>
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser)

  const logout = async () => {
    await deleteCookie('user')
    setUser({} as IUser)
  }

  const fetchCurrentUser = async () => {
    const currentUser = await getCookie('user')

    // if (!currentUser) return logout()

    // const normalizedCurrentUser = JSON.parse(currentUser) as IUser

    // setUser(normalizedCurrentUser)
    setUser({
      email: 'teste@mail.com',
      id: 1,
      login: 'teste',
      name: 'Teste',
    })
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextDataProps {
  const context = useContext(AuthContext)

  return context
}
