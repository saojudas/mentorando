import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/session.routes';
import areasRouter from '@modules/teachers/infra/http/routes/areas.routes';
import tagsRouter from '@modules/videos/infra/http/routes/tags.routes';

const routes = Router();
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/areas', areasRouter);
routes.use('/tags', tagsRouter);

export default routes;
