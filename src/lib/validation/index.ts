import * as z from "zod"


export const SignupValidation = z.object({
  name: z.string().min(2, { message: 'Too short' }),
  username: z.string().min(2, { message: 'Too short' }),
  email: z.string().email(),
  password: z.string().min(8, { message: 'Password must be atleast 8 characters' }),
})

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: 'Password must be atleast 8 characters' }),
})

export const Postvalidation = z.object({
  caption: z.string().min(5, { message: 'Too short' }).max(2200, { message: 'Too long' }),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
})
