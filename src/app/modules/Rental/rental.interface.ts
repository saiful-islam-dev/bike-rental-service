import { Types } from 'mongoose';

export interface IBooking {
  userId: Types.ObjectId;
  bikeId: Types.ObjectId;
  startTime: Date;
  endTime: Date;
  totalPrice: number;
}
