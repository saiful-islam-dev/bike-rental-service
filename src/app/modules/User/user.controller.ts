import { UserServices } from './user.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const getUsersController = catchAsync(async (req, res) => {
  const result = await UserServices.getUsers({ email: req.user.email });
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User profile retrieved successfully',
    data: result,
  });
});

const updateUserController = catchAsync(async (req, res) => {
  console.log(req.user);
  const result = await UserServices.updateUser(req.user._id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'User profile retrieved successfully',
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

// const getUserByIdController = async (req: Request, res: Response) => {
//   const user = await UserServices.getUserById(req.params.id);
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).json({ message: 'User not found' });
//   }
// };

export const UserController = {
  getUsersController,
  updateUserController,
};
