import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BikeServices } from './bike.service';

const createBikeController = catchAsync(async (req, res) => {
  const result = await BikeServices.createBike(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Bike added successfully',
    data: result,
  });
});

const getBikesController = catchAsync(async (req, res) => {
  const result = await BikeServices.getBikes();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Bikes retrieved successfully',
    data: result,
  });
});

const getBikeByIdController = catchAsync(async (req, res) => {
  const result = await BikeServices.getBikeById(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

const updateBikeController = catchAsync(async (req, res) => {
  const result = await BikeServices.updateBike(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Bike updated successfully',
    data: result,
  });
});

const deleteBikeController = catchAsync(async (req, res) => {
  const result = await BikeServices.deleteBike(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Bike deleted successfully',
    data: result,
  });
});

export const BikeController = {
  createBikeController,
  getBikesController,
  getBikeByIdController,
  updateBikeController,
  deleteBikeController,
};
