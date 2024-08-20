"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    phone: zod_1.z.string().min(10).max(15),
    address: zod_1.z.string().min(1),
    role: zod_1.z.enum(['admin', 'user']).optional(),
});
exports.updateUserSchema = exports.createUserSchema.partial();
