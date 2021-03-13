import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IReportsRepository from '@modules/advisors/repositories/IReportsRepository';
import IStudentsRepository from '@modules/students/repositories/IStudentsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import Report from '@modules/advisors/infra/typeorm/entities/Report';

interface IRequest {
  students_ids: string[];
  subject_matter: string;
  report_date: Date;
  start_hour: string;
  end_hour: string;
  user_id: string;
}

@injectable()
class CreateReportService {
  constructor(
    @inject('ReportsRepository')
    private reportsRepository: IReportsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  public async execute({
    students_ids,
    subject_matter,
    report_date,
    start_hour,
    end_hour,
    user_id,
  }: IRequest): Promise<Report> {
    // terei que criar uma regra para verificar se tem um encontro na data e hora marcada

    if (!students_ids || students_ids.length === 0) {
      throw new AppError('You need to send at least one student id!');
    }

    const students = await this.studentsRepository.findByIds(students_ids);

    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found!', 404);
    }

    if (!user.student) {
      throw new AppError('Only students can be create report!', 401);
    }

    if (!user.student.is_advisor) {
      throw new AppError('Only advisors can be create report!', 403);
    }

    const userAdvisor = await this.studentsRepository.findByUserId(user_id);

    if (!userAdvisor) {
      throw new AppError('Advisor not found!', 404);
    }

    try {
      const report = await this.reportsRepository.create({
        students,
        subject_matter,
        report_date,
        start_hour,
        end_hour,
        advisor_id: userAdvisor.id,
      });

      return report;
    } catch (err) {
      throw new AppError(err.message);
    }
  }
}

export default CreateReportService;
