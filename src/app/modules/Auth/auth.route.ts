import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post('/signup', AuthController.createUserController);
router.post('/login', AuthController.loginUserController);

export const authRoutes = router;
