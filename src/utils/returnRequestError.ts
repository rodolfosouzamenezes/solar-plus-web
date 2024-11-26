import { IInputError, IResponseData } from '@/@types/response'
import { toast } from 'react-toastify'

interface IReturnRequestErrorConfig {
  defaultMessage?: string
  errorCode?: Record<number, string>
  errorMessage?: Record<string, string>
}

export const returnRequestError = (
  error: any,
  config?: IReturnRequestErrorConfig,
) => {
  const response = error as IResponseData<IInputError[]>

  const showToastError = (message: string) => toast.error(message)

  const hasErrorCode = config?.errorCode?.[response.code]
  const hasErrorMessage = config?.errorMessage?.[response.message]

  if (hasErrorCode) {
    return showToastError(hasErrorCode)
  }

  if (hasErrorMessage) {
    return showToastError(hasErrorMessage)
  }

  if (response?.data && !!response?.data.length) {
    return showToastError(response.data[0].message)
  }

  if (response?.message && response?.message.length < 60) {
    return showToastError(response.message)
  }

  return showToastError(
    config?.defaultMessage ?? 'Não foi possível realizar a ação',
  )
}
