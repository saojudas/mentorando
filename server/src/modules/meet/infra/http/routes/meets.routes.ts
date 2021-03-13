import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import MeetsController from '../controllers/MeetsController';

const meetRouter = Router();

const meetsController = new MeetsController();

meetRouter.use(ensureAuthenticated);

meetRouter.get('/', meetsController.index);
meetRouter.post('/', meetsController.create);
meetRouter.delete('/:id', meetsController.delete);

export default meetRouter;
