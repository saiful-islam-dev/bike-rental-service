import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (userData: IUser): Promise<IUser> => {
  console.log(userData);

  // const user = new User(userData);
  // await user.save();
  // return user;
  return userData;
};

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
  return User.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  return User.findByIdAndDelete(id);
};

export const UserServices = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
