import Student from '@modules/students/infra/typeorm/entities/Student';

export default interface ICreateReportDTO {
  students: Student[];
  subject_matter: string;
  report_date: Date;
  start_hour: string;
  end_hour: string;
  advisor_id: string;
  // teacher_id: string;
}
