import { z } from 'zod'

export const currencySchema = z.string().transform((value) =>
  value
    .replace(/[^0-9,.-]+/g, '')
    .replace(/\./g, '')
    .replace(',', '.'),
)
