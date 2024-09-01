import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidations } from './auth.validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(userValidations.signUpValidationSchema),
  AuthController.createUserController,
);
router.post(
  '/login',
  validateRequest(userValidations.loginValidationSchema),
  AuthController.loginUserController,
);

export const authRoutes = router;
