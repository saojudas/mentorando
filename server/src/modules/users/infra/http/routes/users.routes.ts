import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UsersController from '../controllers/UsersController';
import UsersAvatarsController from '../controllers/UsersAvatarsController';

const usersRouter = Router();
const upload = multer(uploadConfig);

const usersController = new UsersController();
const usersAvatarsController = new UsersAvatarsController();

usersRouter.post('/', usersController.create);

usersRouter.use(ensureAuthenticated);

usersRouter.get('/', usersController.index);
usersRouter.patch(
  '/avatar',
  upload.single('avatar'),
  usersAvatarsController.update,
);
usersRouter.get('/:id', usersController.show);

export default usersRouter;
