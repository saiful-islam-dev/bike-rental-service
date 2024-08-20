import { Request, Response } from 'express';
import { UserServices } from './user.service';
import { updateUserSchema } from './user.validation';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createUserController = catchAsync(async (req, res) => {
  console.log(req.body);

  const result = await UserServices.createUser(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

const getUsersController = async (req: Request, res: Response) => {
  const users = await UserServices.getUsers();
  res.json(users);
};

const getUserByIdController = async (req: Request, res: Response) => {
  const user = await UserServices.getUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

const updateUserController = async (req: Request, res: Response) => {
  try {
    const validatedData = updateUserSchema.parse(req.body);
    const user = await UserServices.updateUser(req.params.id, validatedData);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  const user = await UserServices.deleteUser(req.params.id);
  if (user) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const UserController = {
  createUserController,
  getUsersController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
};
