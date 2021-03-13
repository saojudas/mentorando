import ICreateThumbnailDTO from '../dtos/ICreateThumbnailDTO';

import Thumbnail from '../infra/typeorm/entities/Thumbnail';

export default interface IThumbnailsRepository {
  create(userAvatar: ICreateThumbnailDTO): Promise<Thumbnail>;
  findById(id: string): Promise<Thumbnail | undefined>;
  findByKey(key: string): Promise<Thumbnail | undefined>;
  findByUserId(user_id: string): Promise<Thumbnail | undefined>;
  save(userAvatar: Thumbnail): Promise<Thumbnail>;
}
