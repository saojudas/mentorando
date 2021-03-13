import { UserAvatar } from '../user/interfaces';
import { Video } from '../video/interfaces';

export interface Teacher {
  id: string;
  name: string;
  university: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface Candidate {
  id: string;
  aprovement: boolean;
  student_id: string;
  student: Student;
  teacher_id: string;
  teacher: Teacher;
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
  user: User;
  teacher_id: string;
  candidate: Candidate;
  created_at: Date;
  updated_at: Date;
}

export interface Area {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export interface User {
  id?: string;
  username: string;
  name: string;
  email: string;
  description?: string;
  avatar: UserAvatar | undefined;
  created_at: Date;
  updated_at: Date;
  teacher: Teacher;
  area_id: string;
  area: Area;
  student: Student;
  is_student?: Array<string>;
  videos: Video[];
}
