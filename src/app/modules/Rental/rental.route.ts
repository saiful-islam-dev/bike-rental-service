import { Router } from 'express';
import { BookingController } from './rental.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = Router();

router.post(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),
  BookingController.createBookingController,
);

router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),
  BookingController.getBookingsController,
);

router.put('/:id/return', BookingController.updateBookingController);

export const rentalRoutes = router;
