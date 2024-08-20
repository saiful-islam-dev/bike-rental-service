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
exports.BikeServices = void 0;
const bike_model_1 = require("./bike.model");
const createBike = (bikeData) => __awaiter(void 0, void 0, void 0, function* () {
    const bike = new bike_model_1.Bike(bikeData);
    yield bike.save();
    return bike;
});
const getBikes = () => __awaiter(void 0, void 0, void 0, function* () {
    return bike_model_1.Bike.find();
});
const getBikeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return bike_model_1.Bike.findById(id);
});
const updateBike = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return bike_model_1.Bike.findByIdAndUpdate(id, updateData, { new: true });
});
const deleteBike = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return bike_model_1.Bike.findByIdAndDelete(id);
});
exports.BikeServices = {
    createBike,
    getBikes,
    getBikeById,
    updateBike,
    deleteBike,
};
