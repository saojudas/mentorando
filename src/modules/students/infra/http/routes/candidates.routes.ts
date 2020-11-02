import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import CandidatesController from '../controllers/CandidatesController';

const candidatesRouter = Router();

const candidatesController = new CandidatesController();

candidatesRouter.use(ensureAuthenticated);

candidatesRouter.get('/', candidatesController.index);
candidatesRouter.post('/', candidatesController.create);
candidatesRouter.delete('/', candidatesController.delete);

export default candidatesRouter;
