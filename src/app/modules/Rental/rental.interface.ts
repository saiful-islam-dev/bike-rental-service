import { Types } from 'mongoose';

export interface TRental {
  userId: Types.ObjectId;
  bikeId: Types.ObjectId;
  startTime: Date;
  endTime: Date;
  totalPrice: number;
}
