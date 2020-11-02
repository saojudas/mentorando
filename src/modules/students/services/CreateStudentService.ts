import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IStudentsRepository from '@modules/students/repositories/IStudentsRepository';
import Student from '@modules/students/infra/typeorm/entities/Student';

interface IRequest {
  name: string;
  university: string;
  registration: string;
  user_id: string;
}

@injectable()
class CreateStudentService {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  public async execute({
    name,
    university,
    registration,
    user_id,
  }: IRequest): Promise<Student> {
    const checkRegistrationExists = await this.studentsRepository.findByRegistration(
      registration,
    );

    if (checkRegistrationExists) {
      throw new AppError('Student with this registration already exists!');
    }

    const student = await this.studentsRepository.create({
      name,
      university,
      registration,
      user_id,
    });

    return student;
  }
}

export default CreateStudentService;
