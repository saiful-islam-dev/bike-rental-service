import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { IUser } from './user.interface';
import { User } from './user.model';

const getUsers = async (data: { email: string }): Promise<IUser[]> => {
  const users = await User.find({ email: data.email });
  
  if (users.length === 0) {
    console.log('No users found');
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Unauthorized Access',
      'You do not have the necessary permissions to access this resource.',
    );
  }

  return users;
};
const getUserById = async (id: string): Promise<IUser | null> => {
  return User.findById(id);
};

const updateUser = async (
  id: string,
  updateData: Partial<IUser>,
): Promise<IUser | null> => {
  console.log(`Updating user with ID: ${id}`, updateData);

  // Find the user by ID and update with the new data
  const updatedUser = await User.findByIdAndUpdate(id, updateData, { 
    new: true, // Return the updated document
    runValidators: true, // Ensure the update adheres to the schema validation
  });

  if (!updatedUser) {
    console.error(`User with ID: ${id} not found`);
    return null; // Return null if the user isn't found
  }

  console.log(`User with ID: ${id} successfully updated`);
  return updatedUser;
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
