import { container } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

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

import IMeetsRepository from '@modules/meet/repositories/IMeetsRepository';
import MeetsRepository from '@modules/meet/infra/typeorm/repositories/MeetsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
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

container.registerSingleton<ICandidatesRepository>(
  'CandidatesRepository',
  CandidatesRepository,
);

container.registerSingleton<ITagsRepository>('TagsRepository', TagsRepository);
