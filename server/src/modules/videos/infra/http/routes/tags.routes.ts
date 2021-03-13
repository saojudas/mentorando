import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import TagsController from '../controllers/TagsController';

const tagRouter = Router();

const tagsController = new TagsController();

tagRouter.use(ensureAuthenticated);

tagRouter.get('/', tagsController.index);
tagRouter.post('/', tagsController.create);

export default tagRouter;
