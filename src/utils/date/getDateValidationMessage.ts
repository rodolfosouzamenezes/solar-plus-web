import { isValidDateString } from './isValidDateString'

interface GetDateValidationMessageProps {
  dateString: string
  dateName?: string
}

export const getDateValidationMessage = ({
  dateString,
  dateName = 'data',
}: GetDateValidationMessageProps): string | undefined => {
  const isValidDate = isValidDateString(dateString)

  switch (isValidDate) {
    case 'invalidDate':
      return `Informe uma ${dateName} válida`

    case 'exceededLimitYearsAgo':
      return `Informe uma ${dateName} com menos de um ano atrás`

    case 'exceededLimitYearsLater':
      return `Informe uma ${dateName} com menos de um ano depois`
  }
}
