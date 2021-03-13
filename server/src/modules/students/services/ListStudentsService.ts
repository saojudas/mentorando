import { injectable, inject } from 'tsyringe';

import IStudentsRepository from '@modules/students/repositories/IStudentsRepository';

import Student from '../infra/typeorm/entities/Student';

@injectable()
class ListStudentsService {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  public async execute(): Promise<Student[]> {
    const students = await this.studentsRepository.find();

    return students;
  }
}

export default ListStudentsService;
