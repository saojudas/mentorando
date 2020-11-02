import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/session.routes';
import areasRouter from '@modules/teachers/infra/http/routes/areas.routes';
import candidatesRouter from '@modules/students/infra/http/routes/candidates.routes';
import tagsRouter from '@modules/videos/infra/http/routes/tags.routes';
import videosRouter from '@modules/videos/infra/http/routes/videos.routes';
import meetsRouter from '@modules/meet/infra/http/routes/meets.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/areas', areasRouter);
routes.use('/candidates', candidatesRouter);
routes.use('/tags', tagsRouter);
routes.use('/videos', videosRouter);
routes.use('/meets', meetsRouter);

export default routes;
