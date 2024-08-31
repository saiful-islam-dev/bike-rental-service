import { model, Schema } from 'mongoose';
import { TRental } from './rental.interface';

const rentalSchema = new Schema<TRental>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    bikeId: { type: Schema.Types.ObjectId, ref: 'Bike', required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: false },
    totalPrice: { type: Number, required: false },
  },
  { timestamps: true },
);

export const Rental = model<TRental>('Booking', rentalSchema);
