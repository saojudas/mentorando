import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Teacher from '../../../../teachers/infra/typeorm/entities/Teacher';
import Student from '../../../../students/infra/typeorm/entities/Student';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password_hash: string;

  @OneToOne(() => Teacher, teacher => teacher.user)
  teacher: Teacher;

  @OneToOne(() => Student, student => student.user)
  student: Student;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
