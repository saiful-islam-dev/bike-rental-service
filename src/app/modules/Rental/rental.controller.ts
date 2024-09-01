import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { RentalServices } from './rental.service';

const createRentalController = catchAsync(async (req, res) => {
  const result = await RentalServices.createRental(req.user._id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rental created successfully',
    data: result,
  });
});

const getRentalController = catchAsync(async (req, res) => {
  const userId = req.user._id;
  const result = await RentalServices.getRentals(userId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Bike returned successfully',
    data: result,
  });
});

const updateRentalController = catchAsync(async (req, res) => {
  const result = await RentalServices.updateRental(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Bike returned successfully',
    data: result,
  });
});

export const BookingController = {
  createRentalController,
  getRentalController,
  updateRentalController,
};
