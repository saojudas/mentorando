import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ReportsController from '../controllers/ReportsController';

const reportsRouter = Router();

const reportsController = new ReportsController();

reportsRouter.use(ensureAuthenticated);

reportsRouter.get('/', reportsController.index);
reportsRouter.post('/', reportsController.create);

export default reportsRouter;
