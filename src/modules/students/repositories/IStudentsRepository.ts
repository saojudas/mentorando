import Student from '../infra/typeorm/entities/Student';

import ICreateStudentDTO from '../dtos/ICreateStudentDTO';

export default interface IStudentsRepository {
  create(data: ICreateStudentDTO): Promise<Student>;
  save(student: Student): Promise<Student>;
  findByIds(ids: string[]): Promise<Student[]>;
  findByUserId(user_id: string): Promise<Student | undefined>;
  findByName(name: string): Promise<Student | undefined>;
  findByRegistration(registration: string): Promise<Student | undefined>;
  delete(id: string): Promise<void>;
}
