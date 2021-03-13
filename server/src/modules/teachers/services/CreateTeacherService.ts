import { injectable, inject } from 'tsyringe';

import ITeachersRepository from '@modules/teachers/repositories/ITeachersRepository';
import Teacher from '@modules/teachers/infra/typeorm/entities/Teacher';

interface IRequest {
  name: string;
  university: string;
  user_id: string;
}

@injectable()
class CreateTeacherService {
  constructor(
    @inject('TeachersRepository')
    private teachersRepository: ITeachersRepository,
  ) {}

  public async execute({
    name,
    university,
    user_id,
  }: IRequest): Promise<Teacher> {
    const teacher = await this.teachersRepository.create({
      name,
      university,
      user_id,
    });

    return teacher;
  }
}

export default CreateTeacherService;
