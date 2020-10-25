import { getRepository, Repository } from 'typeorm';

import ICreateStudentDTO from '@modules/students/dtos/ICreateStudentDTO';
import IStudentsRepository from '@modules/students/repositories/IStudentsRepository';

import Student from '@modules/students/infra/typeorm/entities/Student';

class StudentsRepository implements IStudentsRepository {
  private ormRepository: Repository<Student>;

  constructor() {
    this.ormRepository = getRepository(Student);
  }

  public async create(data: ICreateStudentDTO): Promise<Student> {
    const student = this.ormRepository.create(data);

    await this.ormRepository.save(student);

    return student;
  }

  public async save(student: Student): Promise<Student> {
    await this.ormRepository.save(student);

    return student;
  }

  public async findByName(name: string): Promise<Student | undefined> {
    const student = await this.ormRepository.findOne({ where: { name } });

    return student;
  }

  public async findByRegistration(
    registration: string,
  ): Promise<Student | undefined> {
    const student = await this.ormRepository.findOne({
      where: { registration },
    });

    return student;
  }
}

export default StudentsRepository;
