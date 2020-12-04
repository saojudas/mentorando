import Teacher from '../infra/typeorm/entities/Teacher';

import ICreateTeacherDTO from '../dtos/ICreateTeacherDTO';

export default interface ITeachersRepository {
  create(data: ICreateTeacherDTO): Promise<Teacher>;
  save(user: Teacher): Promise<Teacher>;
  findById(id: string): Promise<Teacher | undefined>;
  findByName(name: string): Promise<Teacher | undefined>;
  delete(id: string): Promise<void>;
}
