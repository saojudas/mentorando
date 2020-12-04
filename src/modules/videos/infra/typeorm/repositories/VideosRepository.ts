import { getRepository, Repository } from 'typeorm';

import ICreateVideoDTO from '@modules/videos/dtos/ICreateVideoDTO';
import IVideosRepository from '@modules/videos/repositories/IVideosRepository';

import Video from '../entities/Video';

class VideosRepository implements IVideosRepository {
  private ormRepository: Repository<Video>;

  constructor() {
    this.ormRepository = getRepository(Video);
  }

  public async create(data: ICreateVideoDTO): Promise<Video> {
    const video = await this.ormRepository.create(data);

    await this.ormRepository.save(video);

    return video;
  }

  public async save(video: Video): Promise<Video> {
    await this.ormRepository.save(video);

    return video;
  }

  public async find(): Promise<Video[]> {
    const videos = await this.ormRepository.find({ relations: ['thumbnail'] });

    return videos;
  }

  public async findByUserId(user_id: string): Promise<Video[]> {
    const videos = await this.ormRepository.find({
      where: { user_id },
      relations: ['thumbnail'],
    });

    return videos;
  }

  public async findById(id: string): Promise<Video | undefined> {
    const video = await this.ormRepository.findOne(id, {
      relations: ['thumbnail'],
    });

    return video;
  }

  public async findByTitle(title: string): Promise<Video | undefined> {
    const video = await this.ormRepository.findOne({
      where: { title },
      relations: ['thumbnail'],
    });

    return video;
  }

  public async findByTitleAndUserId(
    title: string,
    user_id: string,
  ): Promise<Video | undefined> {
    const video = await this.ormRepository.findOne({
      where: { title, user_id },
      relations: ['thumbnail'],
    });

    return video;
  }
}

export default VideosRepository;
