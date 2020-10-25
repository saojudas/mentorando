import Teacher from '../infra/typeorm/entities/Teacher';

import ICreateTeacherDTO from '../dtos/ICreateTeacherDTO';

export default interface ITeachersRepository {
  create(data: ICreateTeacherDTO): Promise<Teacher>;
  save(user: Teacher): Promise<Teacher>;
  findByName(name: string): Promise<Teacher | undefined>;
}
