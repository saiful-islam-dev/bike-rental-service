import { UserServices } from './user.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

// const createUserController = catchAsync(async (req, res) => {
//   console.log(req.body);

//   const result = await UserServices.createUser(req.body);

//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.CREATED,
//     message: 'Course created successfully',
//     data: result,
//   });
// });

const getUsersController = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await UserServices.getUsers();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

// const getUserByIdController = async (req: Request, res: Response) => {
//   const user = await UserServices.getUserById(req.params.id);
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).json({ message: 'User not found' });
//   }
// };

const updateUserController = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await UserServices.updateUser(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

// const deleteUserController = async (req: Request, res: Response) => {
//   const user = await UserServices.deleteUser(req.params.id);
//   if (user) {
//     res.status(204).send();
//   } else {
//     res.status(404).json({ message: 'User not found' });
//   }
// };

export const UserController = {
  getUsersController,
  updateUserController,
};
