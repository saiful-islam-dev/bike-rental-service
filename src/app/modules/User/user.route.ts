import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/me', UserController.getUsersController);
router.put('/me', UserController.updateUserController);

export const userRoutes = router;
