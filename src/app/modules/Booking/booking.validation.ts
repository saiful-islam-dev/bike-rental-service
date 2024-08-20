import { z } from 'zod';

export const createBookingSchema = z.object({
  userId: z.string().min(1),
  bikeId: z.string().min(1),
  startTime: z.date(),
  endTime: z.date(),
  totalPrice: z.number().min(0),
});

export const updateBookingSchema = createBookingSchema.partial();
