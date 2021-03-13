import { injectable, inject } from 'tsyringe';

import IVideosRepository from '@modules/videos/repositories/IVideosRepository';

import Video from '../infra/typeorm/entities/Video';

@injectable()
class ListVideosService {
  constructor(
    @inject('VideosRepository')
    private videosRepository: IVideosRepository,
  ) {}

  public async execute(): Promise<Video[]> {
    const videos = await this.videosRepository.find();

    return videos;
  }
}

export default ListVideosService;
