import httpStatus from 'http-status';
import { IUser } from '../User/user.interface';
import { User } from '../User/user.model';
import AppError from '../../error/AppError';
import jwt from 'jsonwebtoken';
import config from '../../config';

const createUser = async (userData: IUser): Promise<Partial<IUser>> => {
  const user = await User.create(userData);

  const userObject = user.toObject();

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { password, ...userWithoutPassword } = userObject;

  return userWithoutPassword;
};

const loginUser = async (
  userInput: IUser,
): Promise<{ user: Partial<IUser>; token: string }> => {
  const user = await User.isUserExistsByUsername(userInput.email);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
  }

  const isPasswordMatched = await User.isPasswordMatched(
    userInput.password,
    user.password,
  );

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, "Password don't match!");
  }

  //create token and sent to the  client

  const jwtPayload = {
    _id: user._id,
    username: user.name,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '4d',
  });

  const userDataToReturn = {
    _id: user?._id,
    username: user?.name,
    email: user?.email,
    role: user?.role,
    createdAt: user?.createdAt,
    updatedAt: user?.updatedAt,
  };

  return {
    user: userDataToReturn,
    token,
  };
};

export const AuthServices = {
  createUser,
  loginUser,
};
