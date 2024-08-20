"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingServices = void 0;
const booking_model_1 = require("./booking.model");
const createBooking = (bookingData) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = new booking_model_1.Booking(bookingData);
    yield booking.save();
    return booking;
});
const getBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    return booking_model_1.Booking.find().populate('userId').populate('bikeId');
});
const getBookingById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return booking_model_1.Booking.findById(id).populate('userId').populate('bikeId');
});
const updateBooking = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return booking_model_1.Booking.findByIdAndUpdate(id, updateData, { new: true });
});
const deleteBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return booking_model_1.Booking.findByIdAndDelete(id);
});
exports.BookingServices = {
    createBooking,
    getBookings,
    getBookingById,
    updateBooking,
    deleteBooking,
};
