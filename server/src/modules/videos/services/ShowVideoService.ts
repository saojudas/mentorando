import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IVideosRepository from '@modules/videos/repositories/IVideosRepository';

import Video from '../infra/typeorm/entities/Video';

interface IRequest {
  video_id: string;
}

@injectable()
class ShowVideoService {
  constructor(
    @inject('VideosRepository')
    private videosRepository: IVideosRepository,
  ) {}

  public async execute({ video_id }: IRequest): Promise<Video> {
    const video = await this.videosRepository.findById(video_id);

    if (!video) {
      throw new AppError('Video not found!', 404);
    }

    return video;
  }
}

export default ShowVideoService;
