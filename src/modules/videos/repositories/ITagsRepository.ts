import Tags from '../infra/typeorm/entities/Tag';

import ICreateTagsDTO from '../dtos/ICreateTagDTO';

export default interface ITagsRepository {
  create(data: ICreateTagsDTO): Promise<Tags>;
  save(tag: Tags): Promise<Tags>;
  find(): Promise<Tags[]>;
  findByName(name: string): Promise<Tags | undefined>;
}
