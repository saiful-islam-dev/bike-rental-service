import { IUser } from './user.interface';
import { User } from './user.model';

const getUsers = async (): Promise<IUser[]> => {
  return User.find();
};

const getUserById = async (id: string): Promise<IUser | null> => {
  return User.findById(id);
};

const updateUser = async (
  id: string,
  updateData: Partial<IUser>,
): Promise<IUser | null> => {
  console.log(id, updateData);
  return User.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  return User.findByIdAndDelete(id);
};

export const UserServices = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
