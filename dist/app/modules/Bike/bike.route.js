"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bike_controller_1 = require("./bike.controller");
const router = (0, express_1.Router)();
router.post('/', bike_controller_1.BikeController.createBikeController);
router.get('/', bike_controller_1.BikeController.getBikesController);
router.get('/:id', bike_controller_1.BikeController.getBikeByIdController);
router.put('/:id', bike_controller_1.BikeController.updateBikeController);
router.delete('/:id', bike_controller_1.BikeController.deleteBikeController);
exports.default = router;
