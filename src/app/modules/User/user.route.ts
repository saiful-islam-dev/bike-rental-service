import express from 'express';
import { createUserController, deleteUserController, getUserByIdController, getUsersController, updateUserController } from './user.controller';

const router = express.Router();

router.post('/', createUserController);
router.get('/', getUsersController);
router.get('/:id', getUserByIdController);
router.put('/:id', updateUserController);
router.delete('/:id', deleteUserController);

export const userRoutes = router;
