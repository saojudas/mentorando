import ICreateUserAvatarDTO from '../dtos/ICreateUserAvatarDTO';

import UserAvatar from '../infra/typeorm/entities/UserAvatar';

export default interface IUsersAvatarsRepository {
  create(userAvatar: ICreateUserAvatarDTO): Promise<UserAvatar>;
  findById(id: string): Promise<UserAvatar | undefined>;
  findByKey(key: string): Promise<UserAvatar | undefined>;
  findByUserId(user_id: string): Promise<UserAvatar | undefined>;
  save(userAvatar: UserAvatar): Promise<UserAvatar>;
}
