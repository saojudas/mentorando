import { injectable, inject } from 'tsyringe';

import ITagsRepository from '@modules/videos/repositories/ITagsRepository';

import Tag from '../infra/typeorm/entities/Tag';

@injectable()
class ListTagsService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute(): Promise<Tag[]> {
    const tags = await this.tagsRepository.find();

    return tags;
  }
}

export default ListTagsService;
