import { Router } from 'express';
import { userRoutes } from '../modules/User/user.route';
import { bakeRoutes } from '../modules/Bike/bike.route';
import { authRoutes } from '../modules/Auth/auth.route';
import { rentalRoutes } from '../modules/Rental/rental.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/bikes',
    route: bakeRoutes,
  },
  {
    path: '/rentals',
    route: rentalRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
