import Candidate from '../infra/typeorm/entities/Candidate';

import ICreateCandidateDTO from '../dtos/ICreateCandidateDTO';

export default interface IStudentsRepository {
  create(data: ICreateCandidateDTO): Promise<Candidate>;
  save(student: Candidate): Promise<Candidate>;
  find(): Promise<Candidate[]>;
  findById(id: string): Promise<Candidate | undefined>;
  findByStudentId(student_id: string): Promise<Candidate | undefined>;
  delete(id: string): Promise<void>;
}
