'use server'

import { cookies } from 'next/headers'

type CookieType = 'branchId' | 'token' | 'user'

export const getCookie = async (name: CookieType): Promise<string | null> => {
  const cookie = cookies().get(name)?.value

  return cookie || null
}

export const setCookie = async (
  name: CookieType,
  value: string,
  maxAge?: number,
): Promise<void> => {
  const defaultMaxAge = 60 * 60 * 24 * 10 // 10 dias em segundos

  cookies().set({
    name,
    value,
    maxAge: maxAge || defaultMaxAge,
    path: '/',
  })
}

export const deleteCookie = async (name: CookieType): Promise<void> => {
  cookies().delete(name)
}
