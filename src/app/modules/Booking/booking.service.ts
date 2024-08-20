import { IBooking } from './booking.interface';
import { Booking } from './booking.model';

const createBooking = async (bookingData: IBooking): Promise<IBooking> => {
  const booking = new Booking(bookingData);
  await booking.save();
  return booking;
};

const getBookings = async (): Promise<IBooking[]> => {
  return Booking.find().populate('userId').populate('bikeId');
};

const getBookingById = async (id: string): Promise<IBooking | null> => {
  return Booking.findById(id).populate('userId').populate('bikeId');
};

const updateBooking = async (
  id: string,
  updateData: Partial<IBooking>,
): Promise<IBooking | null> => {
  return Booking.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteBooking = async (id: string): Promise<IBooking | null> => {
  return Booking.findByIdAndDelete(id);
};

export const BookingServices = {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
};
