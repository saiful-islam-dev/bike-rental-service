"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post('/', user_controller_1.UserController.createUserController);
router.get('/', user_controller_1.UserController.getUsersController);
router.get('/:id', user_controller_1.UserController.getUserByIdController);
router.put('/:id', user_controller_1.UserController.updateUserController);
router.delete('/:id', user_controller_1.UserController.deleteUserController);
exports.userRoutes = router;
