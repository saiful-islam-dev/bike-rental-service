import { z } from 'zod';

export const createRentalValidationSchema = z.object({
  bikeId: z
    .string()
    .min(1, { message: 'Bike ID is required' })
    .regex(/^[a-fA-F0-9]{24}$/, { message: 'Invalid Bike ID format' }),
  startTime: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format for start time',
  }),
});
