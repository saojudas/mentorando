import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import ApproveAdvisorsController from '../controllers/ApproveAdvisorsController';

const approveAdvisorsRouter = Router();

const approveAdvisorsController = new ApproveAdvisorsController();

approveAdvisorsRouter.use(ensureAuthenticated);

approveAdvisorsRouter.put('/', approveAdvisorsController.update);

export default approveAdvisorsRouter;
