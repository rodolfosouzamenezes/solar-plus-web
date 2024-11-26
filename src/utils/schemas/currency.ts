import { z } from 'zod'

export const currencySchema = z
  .string()
  .min(1, 'Obrigatório')
  .transform((value) =>
    value
      .replace(/[^0-9,.-]+/g, '')
      .replace(/\./g, '')
      .replace(',', '.'),
  )
