export interface IBooking {
  userId: string;
  bikeId: string;
  startTime: Date;
  endTime: Date;
  totalPrice: number;
}
