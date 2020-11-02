import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import VideosController from '../controllers/VideosController';

const videosRouter = Router();

videosRouter.use(ensureAuthenticated);

const videosController = new VideosController();

videosRouter.get('/', videosController.index);
videosRouter.post('/', videosController.create);

export default videosRouter;
