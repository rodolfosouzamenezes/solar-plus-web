import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import { env } from '@/utils/env'
import { getCookie } from '@/utils/cookie'

export const apiServer = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
})

const setBearerToken = (instance: AxiosInstance): void => {
  instance.interceptors.request.use(
    async (config: AxiosRequestConfig): Promise<any> => {
      const isAuthenticated = config.url && config.url.startsWith('auth')

      const token = await getCookie('token')
      const branchId = await getCookie('branchId')

      if (isAuthenticated && token && branchId) {
        config.headers = config.headers || {}
        config.headers.Authorization = `Bearer ${token}`
        config.headers.branch = branchId
      }

      return config
    },
    (error) => Promise.reject(error),
  )
}

setBearerToken(apiServer)
