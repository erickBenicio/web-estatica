import { Router } from 'express';
import { SkinController } from '../controllers/skins-controller.js';

export const skinsRouter = Router();

skinsRouter.get('/', SkinController.getAll);

skinsRouter.get('/:id', SkinController.getSkinById);

//skinsRouter.post('/', SkinController.createSkin);

//skinsRouter.put('/:id', SkinController.updateSkin);

//skinsRouter.delete('/:id', SkinController.deleteSkin);