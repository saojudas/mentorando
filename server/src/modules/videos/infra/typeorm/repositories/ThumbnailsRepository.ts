import { getRepository, Repository } from 'typeorm';

import ICreateThumbnailDTO from '@modules/videos/dtos/ICreateThumbnailDTO';
import IThumbnailsRepository from '@modules/videos/repositories/IThumbnailsRepository';

import Thumbnail from '../entities/Thumbnail';

class ThumbnailsRepository implements IThumbnailsRepository {
  private ormRepository: Repository<Thumbnail>;

  constructor() {
    this.ormRepository = getRepository(Thumbnail);
  }

  public async create(data: ICreateThumbnailDTO): Promise<Thumbnail> {
    const thumbnail = this.ormRepository.create(data);

    await this.ormRepository.save(thumbnail);

    return thumbnail;
  }

  public async findById(id: string): Promise<Thumbnail | undefined> {
    const thumbnail = await this.ormRepository.findOne(id);

    return thumbnail;
  }

  public async findByKey(key: string): Promise<Thumbnail | undefined> {
    const thumbnail = await this.ormRepository.findOne({ where: { key } });

    return thumbnail;
  }

  public async findByUserId(user_id: string): Promise<Thumbnail | undefined> {
    const thumbnail = await this.ormRepository.findOne({ where: { user_id } });

    return thumbnail;
  }

  public async save(thumbnail: Thumbnail): Promise<Thumbnail> {
    const newThumbnail = await this.ormRepository.save(thumbnail);

    return newThumbnail;
  }
}

export default ThumbnailsRepository;
