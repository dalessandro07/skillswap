import * as z from 'zod'

/* User schemas */

export const registerSchema = z.object({
  fullName: z
    .string()
    .min(3, {
      message: 'El nombre debe tener al menos 3 caracteres.'
    })
    .max(50, {
      message: 'El nombre debe tener menos de 50 caracteres.'
    }),
  username: z
    .string()
    .regex(/^[a-z0-9]+$/, {
      message:
        'El nombre de usuario solo puede contener letras minúsculas y números.'
    })
    .min(3, {
      message: 'El nombre de usuario debe tener al menos 3 caracteres.'
    })
    .max(50, {
      message: 'El nombre de usuario debe tener menos de 50 caracteres.'
    }),
  portfolio: z.string().url({
    message: 'Debes ingresar una URL válida (incluyendo https://).'
  }),
  password: z
    .string()
    .min(6, {
      message: 'La contraseña debe tener al menos 6 caracteres.'
    })
    .max(80, {
      message: 'La contraseña debe tener menos de 80 caracteres.'
    }),
  email: z.string().email({
    message: 'Debes ingresar un correo electrónico válido.'
  })
})

export const editUserSchema = z.object({
  fullName: z
    .string()
    .min(3, {
      message: 'El nombre debe tener al menos 3 caracteres.'
    })
    .max(50, {
      message: 'El nombre debe tener menos de 50 caracteres.'
    }),
  portfolio: z.string().url({
    message: 'Debes ingresar una URL válida (incluyendo https://).'
  }),
  avatar_url: z.string().url({
    message: 'Debes ingresar una URL válida (incluyendo https://).'
  })
})

/* Project Schemas */

export const newProjectFirstSchema = z.object({
  url: z.string().url({
    message: 'Debes ingresar una URL válida (incluyendo https://).'
  })
})

export const newProjectSecondSchema = z.object({
  creator: z.object({
    username: z.string().default(''),
    fullName: z.string().default(''),
    avatar_url: z.string().default(''),
    portfolio: z.string().default('')
  }),
  updatedAt: z
    .string()
    .default(() => `${new Date().toISOString().split('.')[0]}`),
  title: z
    .string()
    .min(3, {
      message: 'El título debe tener al menos 3 caracteres.'
    })
    .max(50, {
      message: 'El título debe tener menos de 50 caracteres.'
    }),
  description: z
    .string()
    .min(3, {
      message: 'La descripción debe tener al menos 3 caracteres.'
    })
    .max(500, {
      message: 'La descripción debe tener menos de 500 caracteres.'
    }),
  image: z.string().url({
    message: 'Debes ingresar una URL válida (incluyendo https://).'
  }),

  category: z.enum([
    'frontend',
    'backend',
    'fullstack',
    'mobile',
    'devops',
    'ux/ui',
    'game',
    'other'
  ]),
  url: z.string().url({
    message: 'Debes ingresar una URL válida (incluyendo https://).'
  }),
  likes: z.array(z.string()).default(() => []),
  comments: z.array(z.string()).default(() => [])
})

/* Comment Schemas */

export const newCommentSchema = z.object({
  id: z.string().default(''),
  author: z.string().default(''),
  content: z
    .string()
    .min(4, {
      message: 'El comentario debe tener al menos 4 caracteres.'
    })
    .max(500, {
      message: 'El comentario debe tener menos de 500 caracteres.'
    }),
  createdAt: z
    .string()
    .default(() => `${new Date().toISOString().split('.')[0]}`),
  updatedAt: z
    .string()
    .default(() => `${new Date().toISOString().split('.')[0]}`),
  likes: z.array(z.string()).default(() => [])
})
