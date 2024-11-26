import axios, { AxiosRequestConfig } from 'axios'

import { env } from '@/utils/env'
import { getCookie } from '@/utils/cookie'

export const api = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
})

export const getAuthConfig = async (): Promise<AxiosRequestConfig> => {
  const [token, branch] = await Promise.all([
    getCookie('token'),
    getCookie('branchId'),
  ])

  return {
    headers: {
      Authorization: `Bearer ${token}`,
      branch,
    },
  }
}
