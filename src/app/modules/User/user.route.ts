import express from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';
import validateRequest from '../../middlewares/validateRequest';
import { signUpValidationSchema } from './user.validation';

const router = express.Router();

router.get(
  '/me',
  auth(USER_ROLE.admin, USER_ROLE.user),
  UserController.getUsersController,
);

router.put(
  '/me',
  validateRequest(signUpValidationSchema),
  auth(USER_ROLE.admin, USER_ROLE.user),
  UserController.updateUserController,
);

export const userRoutes = router;
