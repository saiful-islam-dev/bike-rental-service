import { Router } from 'express';

const router = Router();


const moduleRoutes = [
  {
    path: '/api/auth',
    route: authRoutes
  },
  {
    path: '/api/bikes',
    route: bikeRoutes
  },
  {
    path: '/api/rentals',
    route: rentalRoutes
  },
  {
    path: '/api/users',
    route: userRoutes
  },
];



moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
