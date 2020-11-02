import Tag from '../infra/typeorm/entities/Tag';

import ICreateTagDTO from '../dtos/ICreateTagDTO';

export default interface ITagsRepository {
  create(data: ICreateTagDTO): Promise<Tag>;
  save(tag: Tag): Promise<Tag>;
  find(): Promise<Tag[]>;
  findById(id: string): Promise<Tag | undefined>;
  findByIds(ids: string[]): Promise<Tag[]>;
  findByName(name: string): Promise<Tag | undefined>;
}
