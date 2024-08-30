import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { BookingServices } from './rental.service';

const createBookingController = catchAsync(async (req, res) => {
  const result = await BookingServices.createBooking(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

const getBookingsController = catchAsync(async (req, res) => {
  const result = await BookingServices.getBookings();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

const getBookingByIdController = catchAsync(async (req, res) => {
  const result = await BookingServices.getBookingById(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

const updateBookingController = catchAsync(async (req, res) => {
  const result = await BookingServices.updateBooking(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

const deleteBookingController = catchAsync(async (req, res) => {
  const result = await BookingServices.deleteBooking(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

export const BookingController = {
  createBookingController,
  getBookingsController,
  getBookingByIdController,
  updateBookingController,
  deleteBookingController,
};
