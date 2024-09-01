import { Router } from 'express';
import { BookingController } from './rental.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import validateRequest from '../../middlewares/validateRequest';
import { createRentalValidationSchema } from './rental.validation';

const router = Router();

router.post(
  '/',
  validateRequest(createRentalValidationSchema),
  auth(USER_ROLE.admin, USER_ROLE.user),
  BookingController.createRentalController,
);

router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),
  BookingController.getRentalController,
);

router.put('/:id/return', BookingController.updateRentalController);

export const rentalRoutes = router;
