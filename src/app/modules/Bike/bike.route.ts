import { Router } from 'express';
import { BikeController } from './bike.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = Router();

router.post('/', auth(USER_ROLE.admin), BikeController.createBikeController);

router.get('/', BikeController.getBikesController);

router.put('/:id', auth(USER_ROLE.admin), BikeController.updateBikeController);

router.delete(
  '/:id',
  auth(USER_ROLE.admin),
  BikeController.deleteBikeController,
);

export const bakeRoutes = router;
