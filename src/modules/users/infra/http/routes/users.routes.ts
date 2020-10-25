import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UsersController from '../controllers/UsersController';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/', usersController.create);

usersRouter.use(ensureAuthenticated);

usersRouter.get('/', usersController.index);

export default usersRouter;
