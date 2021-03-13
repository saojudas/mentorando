import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import AreasController from '../controllers/AreasController';

const areaRouter = Router();

const areasController = new AreasController();

areaRouter.use(ensureAuthenticated);

areaRouter.get('/', areasController.index);
areaRouter.post('/', areasController.create);

export default areaRouter;
