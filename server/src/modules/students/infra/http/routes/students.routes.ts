import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import StudentsController from '../controllers/StudentsController';

const studentsRouter = Router();

const studentsController = new StudentsController();

studentsRouter.use(ensureAuthenticated);

studentsRouter.get('/', studentsController.index);

export default studentsRouter;
