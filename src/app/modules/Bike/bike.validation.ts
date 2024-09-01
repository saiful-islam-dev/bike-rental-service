import { z } from 'zod';

const createBikeValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  pricePerHour: z
    .number()
    .positive({ message: 'Price per hour must be a positive number' }),
  cc: z.number().positive({ message: 'CC must be a positive number' }),
  year: z
    .number()
    .min(1900, { message: 'Year must be a valid year' }) // Ensuring a reasonable year range
    .max(new Date().getFullYear(), { message: `Year can't be in the future` }),
  model: z.string().min(1, { message: 'Model is required' }),
  brand: z.string().min(1, { message: 'Brand is required' }),
});

const updateBikeValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).optional(),
  description: z
    .string()
    .min(1, { message: 'Description is required' })
    .optional(),
  pricePerHour: z
    .number()
    .positive({ message: 'Price per hour must be a positive number' })
    .optional(),
  cc: z
    .number()
    .positive({ message: 'CC must be a positive number' })
    .optional(),
  year: z
    .number()
    .min(1900, { message: 'Year must be a valid year' })
    .max(new Date().getFullYear(), { message: `Year can't be in the future` })
    .optional(),
  model: z.string().min(1, { message: 'Model is required' }).optional(),
  brand: z.string().min(1, { message: 'Brand is required' }).optional(),
});

export const bikeSchemaValidation = {
  createBikeValidationSchema,
  updateBikeValidationSchema,
};
