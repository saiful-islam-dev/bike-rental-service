/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: 'admin' | 'user';
}

export interface UserModel extends Model<IUser> {
  isUserExistsByUsername(email: string): Promise<IUser>;

  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

// export type TUserRoll = keyof typeof USER_ROLE;
