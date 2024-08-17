import { NextFunction, Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import config from '../config';
import AppError from '../error/AppError';
import httpStatus from 'http-status';
import { TUserRoll } from '../modules/User/user.interface';
import catchAsync from '../utils/catchAsync';

const auth = (...requiredRoles: TUserRoll[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    // checking if the token is missing
    if (!token) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'Unauthorized Access',
        'You do not have the necessary permissions to access this resource.',
      );
    }

    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;

    const { role } = decoded;

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized Access');
    }

    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
