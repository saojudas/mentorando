import Video from '../infra/typeorm/entities/Video';

import ICreateVideoDTO from '../dtos/ICreateVideoDTO';

export default interface IVideosRepository {
  create(data: ICreateVideoDTO): Promise<Video>;
  save(video: Video): Promise<Video>;
  find(): Promise<Video[]>;
  findByTitle(title: string): Promise<Video | undefined>;
  findByTitleAndUserId(
    title: string,
    user_id: string,
  ): Promise<Video | undefined>;
}
