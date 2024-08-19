import { Router } from 'express';
import { userRoutes } from '../modules/User/user.route';

const router = Router();

const moduleRoutes = [
  // {
  //   path: '/api/auth',
  //   route: authRoutes
  // },
  // {
  //   path: '/api/bikes',
  //   route: bikeRoutes
  // },
  // {
  //   path: '/api/rentals',
  //   route: rentalRoutes
  // },
  {
    path: '/users',
    route: userRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
