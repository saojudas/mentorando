import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IStudentsRepository from '@modules/students/repositories/IStudentsRepository';
import ICandidatesRepository from '@modules/students/repositories/ICandidatesRepository';
import ITeachersRepository from '@modules/teachers/repositories/ITeachersRepository';

interface IRequest {
  student_id: string;
  teacher_id: string;
}

@injectable()
class ApproveAdvisorService {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,

    @inject('TeachersRepository')
    private teachersRepository: ITeachersRepository,

    @inject('CandidatesRepository')
    private candidatesRepository: ICandidatesRepository,
  ) {}

  public async execute({ student_id, teacher_id }: IRequest): Promise<void> {
    const checkStudentExists = await this.studentsRepository.findById(
      student_id,
    );

    if (!checkStudentExists) {
      throw new AppError('Student not found!', 404);
    }

    const checkTeacherExists = await this.teachersRepository.findById(
      teacher_id,
    );

    if (!checkTeacherExists) {
      throw new AppError('Teacher not found!', 404);
    }

    const candidate = await this.candidatesRepository.findByStudentId(
      checkStudentExists.id,
    );

    if (!candidate) {
      throw new AppError('Candidate not found!', 404);
    }

    if (candidate.aprovement) {
      throw new AppError('Candidate already approved!', 403);
    }

    candidate.aprovement = true;

    await this.candidatesRepository.save(candidate);
  }
}

export default ApproveAdvisorService;
