'use client'

import { z } from 'zod'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5mb
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]

export const imageSchema = (
  typeof window === 'undefined' ? z.any() : z.instanceof(FileList)
)
  .refine((files) => files.item(0)?.name, 'A imagem é obrigatória')
  .transform((fileList) => {
    return fileList.item(0)!
  })
  .refine((file) => file.size <= MAX_FILE_SIZE, `Tamanho máximo é de 5MB`)
  .refine(
    (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
    'Formato de imagem inválido',
  )
