import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      username,
      name,
      email,
      university,
      registration,
      password,
      confirm_password,
      is_student,
    } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      username,
      name,
      email,
      university,
      registration,
      password,
      confirm_password,
      is_student,
    });

    return response.json(user);
  }
}
