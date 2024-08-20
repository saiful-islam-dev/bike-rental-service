"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookingSchema = exports.createBookingSchema = void 0;
const zod_1 = require("zod");
exports.createBookingSchema = zod_1.z.object({
    userId: zod_1.z.string().min(1),
    bikeId: zod_1.z.string().min(1),
    startTime: zod_1.z.date(),
    endTime: zod_1.z.date(),
    totalPrice: zod_1.z.number().min(0),
});
exports.updateBookingSchema = exports.createBookingSchema.partial();
