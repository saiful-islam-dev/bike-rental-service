import { IBooking } from './rental.interface';
import { Rental } from './rental.model';

const createBooking = async (
  userId: string,
  rentalData: Omit<IBooking, 'userId'>,
): Promise<IBooking> => {
  const data = {
    userId,
    bikeId: rentalData.bikeId,
    startTime: rentalData.startTime,
    endTime: rentalData.endTime || new Date(),
    totalPrice: rentalData.totalPrice || 0,
  };

  const result = await Rental.create(data);
  return result;
};

const getBookings = async (): Promise<IBooking[]> => {
  return Rental.find().populate('userId').populate('bikeId');
};

const getBookingById = async (id: string): Promise<IBooking | null> => {
  return Rental.findById(id).populate('userId').populate('bikeId');
};

const updateBooking = async (
  id: string,
  updateData: Partial<IBooking>,
): Promise<IBooking | null> => {
  return Rental.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteBooking = async (id: string): Promise<IBooking | null> => {
  return Rental.findByIdAndDelete(id);
};

export const BookingServices = {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
};
