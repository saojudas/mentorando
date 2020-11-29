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
  students: Student[];
  subject_matter: string;
  report_date: Date;
  start_hour: string;
  end_hour: string;
  advisor_id: string;
  created_at: Date;
  updated_at: Date;
}
