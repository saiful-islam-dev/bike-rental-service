import { Router } from 'express';
import { BookingController } from './booking.controller';

const router = Router();

router.post('/', BookingController.createBookingController);
router.get('/', BookingController.getBookingsController);
router.get('/:id', BookingController.getBookingByIdController);
router.put('/:id', BookingController.updateBookingController);
router.delete('/:id', BookingController.deleteBookingController);

export const bikeRoutes = router;
