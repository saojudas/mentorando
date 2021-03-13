import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

export default class UsersAvatarsController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const {
      originalname: name,
      size,
      key,
      location: url = '',
      filename,
    } = request.file;

    const updateUserAvatarService = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatarService.execute({
      name,
      size,
      key,
      url,
      user_id,
      filename,
    });

    return response.json(user);
  }
}
