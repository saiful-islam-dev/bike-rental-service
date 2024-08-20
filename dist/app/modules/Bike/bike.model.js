"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
const mongoose_1 = require("mongoose");
const bikeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    availability: { type: Boolean, default: true },
    pricePerHour: { type: Number, required: true },
}, { timestamps: true });
exports.Bike = (0, mongoose_1.model)('Bike', bikeSchema);
