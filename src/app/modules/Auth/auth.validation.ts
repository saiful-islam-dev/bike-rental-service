import { z } from 'zod';

const signUpValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(100, { message: 'Password is too long (maximum 100 characters)' })
    .refine((password) => /[A-Z]/.test(password), {
      message: 'Password must contain at least one uppercase letter',
    })
    .refine((password) => /[a-z]/.test(password), {
      message: 'Password must contain at least one lowercase letter',
    })
    .refine((password) => /\d/.test(password), {
      message: 'Password must contain at least one digit',
    })
    .refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), {
      message: 'Password must contain at least one special character',
    }),
  phone: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits long' })
    .max(15, { message: 'Phone number is too long' }),
  address: z.string().min(1, { message: 'Address is required' }),
  role: z.enum(['user', 'admin']).optional(),
});

const loginValidationSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
});

export const userValidations = {
  signUpValidationSchema,
  loginValidationSchema,
};
