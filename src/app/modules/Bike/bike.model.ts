import { IBike } from './bike.interface';
import { model, Schema } from 'mongoose';

const bikeSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    pricePerHour: { type: Number, required: true },
    isAvailable: { type: Boolean, default: true },
    cc: { type: Number, required: true },
    year: { type: Number, required: true },
    model: { type: String, required: true },
    brand: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Bike = model<IBike>('Bike', bikeSchema);
