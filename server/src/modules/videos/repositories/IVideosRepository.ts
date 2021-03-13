import Video from '../infra/typeorm/entities/Video';

import ICreateVideoDTO from '../dtos/ICreateVideoDTO';

export default interface IVideosRepository {
  create(data: ICreateVideoDTO): Promise<Video>;
  save(video: Video): Promise<Video>;
  find(): Promise<Video[]>;
  findByUserId(user_id: string): Promise<Video[]>;
  findById(id: string): Promise<Video | undefined>;
  findByTitle(title: string): Promise<Video | undefined>;
  findByTitleAndUserId(
    title: string,
    user_id: string,
  ): Promise<Video | undefined>;
}
