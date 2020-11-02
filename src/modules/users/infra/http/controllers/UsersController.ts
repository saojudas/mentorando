import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import ShowUserService from '@modules/users/services/ShowUserService';
import ListUsersService from '@modules/users/services/ListUsersService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUsersService = container.resolve(ListUsersService);

    const users = await listUsersService.execute();

    return response.json(users);
  }

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

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showUserService = container.resolve(ShowUserService);

    const user = await showUserService.execute({ user_id: id });

    return response.json(user);
  }
}
