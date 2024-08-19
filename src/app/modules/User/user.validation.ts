import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string().min(10).max(15),
  address: z.string().min(1),
  role: z.enum(['admin', 'user']).optional(),
});

export const updateUserSchema = createUserSchema.partial();
