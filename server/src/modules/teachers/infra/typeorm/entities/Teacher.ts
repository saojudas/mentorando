import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import User from '../../../../users/infra/typeorm/entities/User';
import Student from '../../../../students/infra/typeorm/entities/Student';

@Entity('teachers')
class Teacher {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  university: string;

  @Column()
  user_id: string;

  @OneToOne(() => User, user => user.teacher)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Student, students => students.teacher)
  students: Student[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Teacher;
