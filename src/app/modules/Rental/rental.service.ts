import { Bike } from '../Bike/bike.model';
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

const getBookings = async (userId: string): Promise<IBooking[]> => {
  const result = await Rental.find({ userId });
  return result;
};

const getBookingById = async (id: string): Promise<IBooking | null> => {
  return Rental.findById(id).populate('userId').populate('bikeId');
};

const updateBooking = async (id: string): Promise<IBooking | null> => {
  // Step 1: Fetch the rental record
  const rental = await Rental.findById(id);
  if (!rental) {
    throw new Error('Rental not found');
  }

  // Step 2: Calculate the rental duration and total cost
  const returnTime = new Date();
  const rentalDurationInHours =
    (returnTime.getTime() - rental.startTime.getTime()) / (1000 * 60 * 60);

  const bike = await Bike.findById(rental.bikeId);
  if (!bike) {
    throw new Error('Bike not found');
  }

  const totalCost = rentalDurationInHours * bike.pricePerHour;

  // Step 3: Update the rental record
  rental.endTime = returnTime;
  rental.totalPrice = totalCost;

  // Save the updated rental record
  const updatedRental = await rental.save();

  // Step 4: Update the bike's availability status
  bike.isAvailable = true;
  await bike.save();

  return updatedRental;
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
