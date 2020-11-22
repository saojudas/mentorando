export interface Teacher {
  id: string;
  name: string;
  university: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface Student {
  id: string;
  name: string;
  university: string;
  registration: string;
  is_advisor: boolean;
  user_id: string;
  teacher_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface User {
  id?: string;
  username: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  teacher: Teacher;
  student: Student;
  is_student?: Array<string>;
}
