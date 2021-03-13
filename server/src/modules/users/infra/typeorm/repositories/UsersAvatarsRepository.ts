import { getRepository, Repository } from 'typeorm';

import ICreateUserAvatarDTO from '@modules/users/dtos/ICreateUserAvatarDTO';
import IUsersAvatarsRepository from '@modules/users/repositories/IUsersAvatarsRepository';

import UserAvatar from '../entities/UserAvatar';

class UsersAvatarsRepository implements IUsersAvatarsRepository {
  private ormRepository: Repository<UserAvatar>;

  constructor() {
    this.ormRepository = getRepository(UserAvatar);
  }

  public async create(data: ICreateUserAvatarDTO): Promise<UserAvatar> {
    const userAvatar = this.ormRepository.create(data);

    await this.ormRepository.save(userAvatar);

    return userAvatar;
  }

  public async findById(id: string): Promise<UserAvatar | undefined> {
    const userAvatar = await this.ormRepository.findOne(id);

    return userAvatar;
  }

  public async findByKey(key: string): Promise<UserAvatar | undefined> {
    const userAvatar = await this.ormRepository.findOne({ where: { key } });

    return userAvatar;
  }

  public async findByUserId(user_id: string): Promise<UserAvatar | undefined> {
    const userAvatar = await this.ormRepository.findOne({ where: { user_id } });

    return userAvatar;
  }

  public async save(userAvatar: UserAvatar): Promise<UserAvatar> {
    const newUserAvatar = await this.ormRepository.save(userAvatar);

    return newUserAvatar;
  }
}

export default UsersAvatarsRepository;
