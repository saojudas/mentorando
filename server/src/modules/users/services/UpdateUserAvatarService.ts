import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import IUsersAvatarsRepository from '../repositories/IUsersAvatarsRepository';
import IUsersRepository from '../repositories/IUsersRepository';

import UserAvatar from '../infra/typeorm/entities/UserAvatar';

interface IRequest {
  name: string;
  size: number;
  key: string;
  url: string;
  user_id: string;
  filename: string;
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UsersAvatarsRepository')
    private usersAvatarsRepository: IUsersAvatarsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    name,
    size,
    key,
    user_id,
    filename,
  }: IRequest): Promise<UserAvatar> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    let userAvatar;

    if (!user.avatar) {
      const updatedFilename = await this.storageProvider.saveFile(filename);

      userAvatar = await this.usersAvatarsRepository.create({
        name,
        size,
        key,
        url: `http://localhost:3333/files/${updatedFilename}`,
        user_id,
      });
    } else {
      await this.storageProvider.deleteFile(user.avatar.key);

      const updatedFilename = await this.storageProvider.saveFile(filename);

      userAvatar = await this.usersAvatarsRepository.save({
        ...user.avatar,
        name,
        size,
        key: updatedFilename,
        url: `http://localhost:3333/files/${updatedFilename}`,
      });
    }

    return userAvatar;
  }
}

export default UpdateUserAvatarService;
