import { getRepository, Repository } from 'typeorm';

import ICreateTeacherDTO from '@modules/teachers/dtos/ICreateTeacherDTO';
import ITeachersRepository from '@modules/teachers/repositories/ITeachersRepository';

import Teacher from '../entities/Teacher';

class TeachersRepository implements ITeachersRepository {
  private ormRepository: Repository<Teacher>;

  constructor() {
    this.ormRepository = getRepository(Teacher);
  }

  public async create(data: ICreateTeacherDTO): Promise<Teacher> {
    const teacher = this.ormRepository.create(data);

    await this.ormRepository.save(teacher);

    return teacher;
  }

  public async save(teacher: Teacher): Promise<Teacher> {
    await this.ormRepository.save(teacher);

    return teacher;
  }

  public async findById(id: string): Promise<Teacher | undefined> {
    const teacher = await this.ormRepository.findOne(id);

    return teacher;
  }

  public async findByName(name: string): Promise<Teacher | undefined> {
    const teacher = await this.ormRepository.findOne({ where: { name } });

    return teacher;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default TeachersRepository;
