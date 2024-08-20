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
exports.UserServices = void 0;
const user_model_1 = require("./user.model");
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(userData);
    // const user = new User(userData);
    // await user.save();
    // return user;
    return userData;
});
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return user_model_1.User.find();
});
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return user_model_1.User.findById(id);
});
const updateUser = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return user_model_1.User.findByIdAndUpdate(id, updateData, { new: true });
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return user_model_1.User.findByIdAndDelete(id);
});
exports.UserServices = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
};
