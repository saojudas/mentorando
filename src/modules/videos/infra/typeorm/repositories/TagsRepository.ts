import { getRepository, Repository } from 'typeorm';

import ICreateTagDTO from '@modules/videos/dtos/ICreateTagDTO';
import ITagsRepository from '@modules/videos/repositories/ITagsRepository';

import Tag from '../entities/Tag';

class TagsRepository implements ITagsRepository {
  private ormRepository: Repository<Tag>;

  constructor() {
    this.ormRepository = getRepository(Tag);
  }

  public async create(data: ICreateTagDTO): Promise<Tag> {
    const tag = this.ormRepository.create(data);

    await this.ormRepository.save(tag);

    return tag;
  }

  public async save(tag: Tag): Promise<Tag> {
    await this.ormRepository.save(tag);

    return tag;
  }

  public async find(): Promise<Tag[]> {
    const tags = await this.ormRepository.find();

    return tags;
  }

  public async findById(id: string): Promise<Tag | undefined> {
    const tag = await this.ormRepository.findOne(id);

    return tag;
  }

  public async findByIds(ids: string[]): Promise<Tag[]> {
    const tags = await this.ormRepository.findByIds(ids);

    return tags;
  }

  public async findByName(name: string): Promise<Tag | undefined> {
    const tag = await this.ormRepository.findOne({ where: { name } });

    return tag;
  }
}

export default TagsRepository;
