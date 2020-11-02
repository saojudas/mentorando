import { injectable, inject, container } from 'tsyringe';
import { hash } from 'bcryptjs';

import Exceptions from '@shared/errors/Exceptions';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import CreateTeacherService from '@modules/teachers/services/CreateTeacherService';
import CreateStudentService from '@modules/students/services/CreateStudentService';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  username: string;
  name: string;
  email: string;
  university: string;
  registration: string;
  password: string;
  confirm_password: string;
  is_student: boolean;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    username,
    name,
    email,
    university,
    registration,
    password,
    confirm_password,
    is_student,
  }: IRequest): Promise<User> {
    if (password !== confirm_password) {
      throw new Exceptions('Password and confirm password not match!');
    }

    const checkEmailExists = await this.usersRepository.findByEmail(email);

    if (checkEmailExists) {
      throw new Exceptions('User with this email already exists!');
    }

    const checkUsernameExists = await this.usersRepository.findByUsername(
      username,
    );

    if (checkUsernameExists) {
      throw new Exceptions('User with this username already exists!');
    }

    const password_hash = await hash(password, 8);

    const user = await this.usersRepository.create({
      username,
      email,
      password_hash,
    });

    try {
      if (is_student) {
        const createStudentService = container.resolve(CreateStudentService);

        user.student = await createStudentService.execute({
          name,
          registration,
          university,
          user_id: user.id,
        });
      } else {
        const createTeacherService = container.resolve(CreateTeacherService);

        user.teacher = await createTeacherService.execute({
          name,
          university,
          user_id: user.id,
        });
      }
    } catch (err) {
      await this.usersRepository.delete(user.id);

      throw new Exceptions(err.message);
    }

    return user;
  }
}

export default CreateUserService;
