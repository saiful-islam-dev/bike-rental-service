import { IBike } from './bike.interface';
import { model, Schema } from 'mongoose';

const bikeSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    availability: { type: Boolean, default: true },
    pricePerHour: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Bike = model<IBike>('Bike', bikeSchema);
