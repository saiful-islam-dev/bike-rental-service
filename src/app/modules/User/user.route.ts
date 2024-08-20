import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/', UserController.createUserController);
router.get('/', UserController.getUsersController);
router.get('/:id', UserController.getUserByIdController);
router.put('/:id', UserController.updateUserController);
router.delete('/:id', UserController.deleteUserController);

export const userRoutes = router;
