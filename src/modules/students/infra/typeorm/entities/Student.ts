import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import User from '../../../../users/infra/typeorm/entities/User';
import Teacher from '../../../../teachers/infra/typeorm/entities/Teacher';

@Entity('students')
class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  university: string;

  @Column()
  registration: string;

  @Column()
  is_advisor: boolean;

  @Column()
  user_id: string;

  @OneToOne(() => User, user => user.student)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  teacher_id: string;

  @ManyToOne(() => Teacher)
  @JoinColumn({ name: 'teacher_id' })
  teacher: Teacher;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Student;
