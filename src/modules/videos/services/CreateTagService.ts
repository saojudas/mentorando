import { injectable, inject } from 'tsyringe';

import ITagsRepository from '@modules/videos/repositories/ITagsRepository';
import Tag from '@modules/videos/infra/typeorm/entities/Tag';
import Exceptions from '@shared/errors/Exceptions';

interface IRequest {
  name: string;
  area_id: string;
}

@injectable()
class CreateTagService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute({ name, area_id }: IRequest): Promise<Tag> {
    const checkTagExists = await this.tagsRepository.findByName(name);

    if (!area_id) {
      throw new Exceptions('You must send an area id!');
    }

    if (checkTagExists) {
      throw new Exceptions('This tag already exists!');
    }

    const tag = await this.tagsRepository.create({ name, area_id });

    return tag;
  }
}

export default CreateTagService;
