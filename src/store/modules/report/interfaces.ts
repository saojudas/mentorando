export interface Student {
  id: string;
  name: string;
  university: string;
  registration: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface Report {
  id: string;
  advisor: Student;
  students: Student[];
  students_ids: string[];
  subject_matter: string;
  report_date: Date;
  start_hour: Date;
  end_hour: Date;
  advisor_id: string;
  created_at: Date;
  updated_at: Date;
}
