import { container } from 'tsyringe';

import './providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUsersAvatarsRepository from '@modules/users/repositories/IUsersAvatarsRepository';
import UsersAvatarsRepository from '@modules/users/infra/typeorm/repositories/UsersAvatarsRepository';

import ITeachersRepository from '@modules/teachers/repositories/ITeachersRepository';
import TeachersRepository from '@modules/teachers/infra/typeorm/repositories/TeachersRepository';

import IStudentsRepository from '@modules/students/repositories/IStudentsRepository';
import StudentsRepository from '@modules/students/infra/typeorm/repositories/StudentsRepository';

import IAreasRepository from '@modules/teachers/repositories/IAreasRepository';
import AreasRepository from '@modules/teachers/infra/typeorm/repositories/AreasRepository';

import ICandidatesRepository from '@modules/students/repositories/ICandidatesRepository';
import CandidatesRepository from '@modules/students/infra/typeorm/repositories/CandidatesRepository';

import ITagsRepository from '@modules/videos/repositories/ITagsRepository';
import TagsRepository from '@modules/videos/infra/typeorm/repositories/TagsRepository';

import IVideosRepository from '@modules/videos/repositories/IVideosRepository';
import VideosRepository from '@modules/videos/infra/typeorm/repositories/VideosRepository';

import IThumbnailsRepository from '@modules/videos/repositories/IThumbnailsRepository';
import ThumbnailsRepository from '@modules/videos/infra/typeorm/repositories/ThumbnailsRepository';

import IMeetsRepository from '@modules/meet/repositories/IMeetsRepository';
import MeetsRepository from '@modules/meet/infra/typeorm/repositories/MeetsRepository';

import IReportsRepository from '@modules/advisors/repositories/IReportsRepository';
import ReportsRepository from '@modules/advisors/infra/typeorm/repositories/ReportsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUsersAvatarsRepository>(
  'UsersAvatarsRepository',
  UsersAvatarsRepository,
);

container.registerSingleton<ITeachersRepository>(
  'TeachersRepository',
  TeachersRepository,
);

container.registerSingleton<IStudentsRepository>(
  'StudentsRepository',
  StudentsRepository,
);

container.registerSingleton<IAreasRepository>(
  'AreasRepository',
  AreasRepository,
);

container.registerSingleton<IMeetsRepository>(
  'MeetsRepository',
  MeetsRepository,
);

container.registerSingleton<IVideosRepository>(
  'VideosRepository',
  VideosRepository,
);

container.registerSingleton<IThumbnailsRepository>(
  'ThumbnailsRepository',
  ThumbnailsRepository,
);

container.registerSingleton<ICandidatesRepository>(
  'CandidatesRepository',
  CandidatesRepository,
);

container.registerSingleton<ITagsRepository>('TagsRepository', TagsRepository);

container.registerSingleton<IReportsRepository>(
  'ReportsRepository',
  ReportsRepository,
);
