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

router.get('/', BookingController.getBookingsController);

router.get('/:id', BookingController.getBookingByIdController);

router.put('/:id', BookingController.updateBookingController);

router.delete('/:id', BookingController.deleteBookingController);

export const rentalRoutes = router;
