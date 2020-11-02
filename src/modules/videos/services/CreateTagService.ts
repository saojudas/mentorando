import { injectable, inject } from 'tsyringe';

import ITagsRepository from '@modules/videos/repositories/ITagsRepository';
import Tag from '@modules/videos/infra/typeorm/entities/Tag';
import AppError from '@shared/errors/AppError';

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
    if (!area_id) {
      throw new AppError('You must send an area id!');
    }

    const checkAreaExists = await this.tagsRepository.findById(area_id);

    if (checkAreaExists) {
      throw new AppError('Area not found!', 404);
    }

    const checkTagNameExists = await this.tagsRepository.findByName(name);

    if (checkTagNameExists) {
      throw new AppError('This tag already exists!');
    }

    const tag = await this.tagsRepository.create({ name, area_id });

    return tag;
  }
}

export default CreateTagService;
