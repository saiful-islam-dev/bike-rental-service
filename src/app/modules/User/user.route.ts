import express from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';

const router = express.Router();

router.get(
  '/me',
  auth(USER_ROLE.admin, USER_ROLE.user),
  UserController.getUsersController,
);

router.put(
  '/me',
  auth(USER_ROLE.admin, USER_ROLE.user),
  UserController.updateUserController,
);

export const userRoutes = router;
