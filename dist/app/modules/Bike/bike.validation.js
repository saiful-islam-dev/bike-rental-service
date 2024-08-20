"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBikeSchema = exports.createBikeSchema = void 0;
const zod_1 = require("zod");
exports.createBikeSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    type: zod_1.z.string().min(1),
    availability: zod_1.z.boolean().optional(),
    pricePerHour: zod_1.z.number().min(0),
});
exports.updateBikeSchema = exports.createBikeSchema.partial();
