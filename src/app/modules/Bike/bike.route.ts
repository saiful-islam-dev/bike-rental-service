import { Router } from 'express';
import { BikeController } from './bike.controller';

const router = Router();

router.post('/', BikeController.createBikeController);
router.get('/', BikeController.getBikesController);
router.get('/:id', BikeController.getBikeByIdController);
router.put('/:id', BikeController.updateBikeController);
router.delete('/:id', BikeController.deleteBikeController);

export default router;
