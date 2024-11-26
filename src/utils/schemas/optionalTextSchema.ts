import { z } from 'zod'

export const optionalTextSchema = (schema: z.ZodTypeAny = z.string()) =>
  z
    .union([z.string(), z.undefined(), z.null()])
    .refine((val) => !val || schema.safeParse(val).success)
