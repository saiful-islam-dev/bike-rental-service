import { Request, Response } from 'express';
import { UserServices } from './user.service';
import { updateUserSchema } from './user.validation';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

export const createUserController = catchAsync(async (req, res) => {
  console.log(req.body);

  const result = await UserServices.createUser(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

export const getUsersController = async (req: Request, res: Response) => {
  const users = await getUsers();
  res.json(users);
};

export const getUserByIdController = async (req: Request, res: Response) => {
  const user = await getUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const validatedData = updateUserSchema.parse(req.body);
    const user = await updateUser(req.params.id, validatedData);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  const user = await deleteUser(req.params.id);
  if (user) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};


export const UserController  = {
  createUserController,
  getUsersController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
};
