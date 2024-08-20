import { z } from 'zod';

export const createBikeSchema = z.object({
  name: z.string().min(1),
  type: z.string().min(1),
  availability: z.boolean().optional(),
  pricePerHour: z.number().min(0),
});

export const updateBikeSchema = createBikeSchema.partial();
