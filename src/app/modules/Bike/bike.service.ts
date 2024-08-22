import { IBike } from './bike.interface';
import { Bike } from './bike.model';

const createBike = async (bikeData: IBike): Promise<IBike> => {
  console.log(bikeData);

  const bike = new Bike(bikeData);
  await bike.save();
  return bike;
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
  console.log(id);
  console.log(updateData);
  return Bike.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteBike = async (id: string): Promise<IBike | null> => {
  console.log(id);
  return Bike.findByIdAndDelete(id);
};

export const BikeServices = {
  createBike,
  getBikes,
  getBikeById,
  updateBike,
  deleteBike,
};
