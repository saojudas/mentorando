import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IVideosRepository from '@modules/videos/repositories/IVideosRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ITagsRepository from '@modules/videos/repositories/ITagsRepository';

import Video from '@modules/videos/infra/typeorm/entities/Video';

interface IRequest {
  title: string;
  video_link: string;
  description: string;
  area_id: string;
  user_id: string;
  tags_ids: string[];
}

@injectable()
class CreateVideoService {
  constructor(
    @inject('VideosRepository')
    private videosRepository: IVideosRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute({
    title,
    video_link,
    description,
    area_id,
    user_id,
    tags_ids,
  }: IRequest): Promise<Video> {
    if (!area_id) {
      throw new AppError('You must send area id!');
    }

    const checkUserExists = await this.usersRepository.findById(user_id);

    if (!checkUserExists) {
      throw new AppError('User not found!', 404);
    }

    const checkVideoByTitleAndUserIdExists = await this.videosRepository.findByTitleAndUserId(
      title,
      user_id,
    );

    if (checkVideoByTitleAndUserIdExists) {
      throw new AppError(
        'An video with this title and user id already exists!',
      );
    }

    const tags = await this.tagsRepository.findByIds(tags_ids);

    const video = await this.videosRepository.create({
      title,
      video_link,
      description,
      area_id,
      user_id,
      tags,
    });

    return video;
  }
}

export default CreateVideoService;
