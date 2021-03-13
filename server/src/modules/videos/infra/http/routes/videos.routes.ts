import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import VideosController from '../controllers/VideosController';
import ThumbnailsController from '../controllers/ThumbnailsController';

const videosRouter = Router();
const upload = multer(uploadConfig);

videosRouter.use(ensureAuthenticated);

const videosController = new VideosController();
const thumbnailsController = new ThumbnailsController();

videosRouter.get('/', videosController.index);
videosRouter.get('/:video_id', videosController.show);
videosRouter.post('/', videosController.create);
videosRouter.post(
  '/thumbnail/:video_id',
  upload.single('thumbnail'),
  thumbnailsController.create,
);

export default videosRouter;
