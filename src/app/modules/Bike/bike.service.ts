import { IBike } from './bike.interface';
import { Bike } from './bike.model';

const createBike = async (bikeData: IBike): Promise<IBike> => {
  const result = await Bike.create(bikeData);
  return result;
};

const getBikes = async (): Promise<IBike[]> => {
  return Bike.find();
};

const getBikeById = async (id: string): Promise<IBike | null> => {
  return Bike.findById(id);
};

const updateBike = async (
  id: string,
  updateData: Partial<IBike>,
): Promise<IBike | null> => {
  const result = Bike.findByIdAndUpdate(id, updateData, { new: true });
  return result;
};

const deleteBike = async (id: string): Promise<IBike | null> => {
  const result = await Bike.findByIdAndDelete(id);
  return result;
};

export const BikeServices = {
  createBike,
  getBikes,
  getBikeById,
  updateBike,
  deleteBike,
};
