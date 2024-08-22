import { IUser } from '../User/user.interface';
import { User } from '../User/user.model';

const createUser = async (userData: IUser): Promise<IUser> => {
  console.log(userData);

  new User(userData);
  // await user.save();
  // return user;
  return userData;
};
const loginUser = async (userData: IUser): Promise<IUser> => {
  console.log(userData);

  //   const user = new User(userData);
  // await user.save();
  // return user;
  return userData;
};

export const AuthServices = {
  createUser,
  loginUser,
};
