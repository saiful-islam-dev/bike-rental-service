import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';

const createUserController = catchAsync(async (req, res) => {
  console.log(req.body);

  const result = await AuthServices.createUser(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

const loginUserController = catchAsync(async (req, res) => {
  console.log(req.body);

  const result = await AuthServices.createUser(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

export const AuthController = {
  createUserController,
  loginUserController,
};
